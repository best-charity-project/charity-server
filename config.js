module.exports = {
    secret: 'mysecret',
    mongoose: {
         uri: process.env.MONGO_URI || 'mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project', 
    },
    crypto: {
        hash: {
            length: 128,
            iterations: process.env.NODE_ENV == 'production' ? 12000 : 1,
        },
    },
    root: process.cwd(),
};