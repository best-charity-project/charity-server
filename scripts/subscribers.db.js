const mongoose = require('mongoose');
const SubscribersModel = require('../schemas/subscribers.schema');
mongoose.set('debug', true);

mongoose.connect('mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project');

function createSubscriber() {
    let subscriber = {
        email: "hfh@bar.com",
    };
    let newSubscriber = SubscribersModel.create(subscriber);
}

createSubscriber(); 

