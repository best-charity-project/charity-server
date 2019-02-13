const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');
const drive = google.drive('v3');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json';

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
async function authorize(callback) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID, process.env.CLIENT_SECRET, "http://localhost");

  const token = fs.readFileSync(TOKEN_PATH);
  if (token) {
    oAuth2Client.setCredentials(JSON.parse(token));
    return await callback(oAuth2Client);
  } else {
    return getAccessToken(oAuth2Client, callback);
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

const uploadFile = async (file) => authorize(auth => {
  const fileMetadata = {
    'name': file.originalname
  };
  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(`./${file.path}`)
  };

  return new Promise((resolve, reject) => {
    drive.files.create({
      auth,
      resource: fileMetadata,
      media,
      fields: 'id'
    }, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve(file.data.id)
      }
    });
  })
});

const updateFile = async (file, fileId) => authorize(auth => {
  const fileMetadata = {
    'name': file.originalname
  };
  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(`./${file.path}`)
  };

  return new Promise((resolve, reject) => {
    drive.files.update({
      auth,
      fileId,
      resource: fileMetadata,
      media,
      fields: 'id'
    }, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve(file.data.id)
      }
    });
  })
});

const removeFile = async (id) => authorize(auth => {
  return new Promise((resolve, reject) => {
    drive.files.delete({
      auth: auth,
      fileId: id
    }, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  })
});

const emptyTrash = async () => authorize(auth => {
  return new Promise((resolve, reject) => {
    drive.files.emptyTrash({
      auth: auth
    }, (err, file) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  })
});

module.exports = {
  uploadFile,
  emptyTrash,
  removeFile,
  updateFile
}
