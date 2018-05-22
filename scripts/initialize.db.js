const mongoose = require('mongoose');
const UserModel = require('../schemas/users.schema');
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

createUser();