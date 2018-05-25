module.exports = {
    secret: 'mysecret',
    mongoose: {
         uri: process.env.MONGO_URI || 'mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project', 
/*         uri: process.env.MONGO_URI || 'mongodb://dmitry:dmitry@ds016098.mlab.com:16098/my_test', */
    },
    crypto: {
        hash: {
            length: 128,
            iterations: process.env.NODE_ENV == 'production' ? 12000 : 1,
        },
    },
    root: process.cwd(),
};