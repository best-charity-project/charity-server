module.exports = {
    secret: 'mysecret',
    mongoose: {
         uri: process.env.NODE_ENV === 'production' ? 'mongodb://charity:charity_godel717@ds241121.mlab.com:41121/charity-database':'mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project',
    },
    crypto: {
        hash: {
            length: 128,
            iterations: /* process.env.NODE_ENV == 'production' ? 12000 :  */1,
        },
    },
    root: process.cwd(),
    nodemailerConf:{
        "period":604800000,
        "serviceMail": "gmail",
        "user":"charitywebtest@gmail.com",
        "password":"charity12345"
    }
};