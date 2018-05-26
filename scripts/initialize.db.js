 const mongoose = require('mongoose');
const UserModel = require('../schemas/users.schema');
const UserSubscribeModel = require ('../schemas/users.subscribe.schema');

mongoose.set('debug', true);
mongoose.connect('mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project');

function createUser() {
    let user = {
        name: 'Lorem',
        email: "foo@bar.com",
        password: 'Test1234'
    };
    let newTicket = UserModel.create(user);
}
// createUser();

 createUserSubscribe = () =>{
     let subscribe = {
         email: 'itstricky@run.dmc',
         isSubscribeStatus: true
     };
     let newTicket = UserSubscribeModel.create(subscribe);
}
// createUserSubscribe();
