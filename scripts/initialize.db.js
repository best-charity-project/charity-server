const mongoose = require('mongoose');
const UserModel = require('../schemas/users.schema');
const UserSubscribeModel = require ('../schemas/subscription.schema');
const NewsModel = require ('../schemas/news.schema');
const ForumUsersModel = require ('../schemas/forumUsers.schema');

mongoose.set('debug', true);
// mongoose.connect('mongodb://vadim:qwerty@ds219100.mlab.com:19100/charity-project');
mongoose.connect('mongodb://charity:charity_godel717@ds241121.mlab.com:41121/charity-database')

function createUser() {
    let user = {
        name: 'Lorem',
        email: "foo@bar.com",
        password: 'Test1234'
    };
    let newTicket = UserModel.create(user);
}
createUser();

createUserSubscribe = () =>{
     let subscribe = {
        email: 'itstricky@run.dmc',
        isSubscribeStatus: true
     };
     let newTicket = UserSubscribeModel.create(subscribe);
}
// createUserSubscribe();

function createNews() {
    let news = {
        title: 'Test-news',
        image: 'https://www.google.by/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius dapibus velit, a fermentum mauris. Sed id elit vitae magna pharetra posuere. Integer pretium ac velit et mattis. Maecenas ac bibendum ligula. Quisque nec nibh vel nisl finibus feugiat a vel nulla. Proin congue congue sem ac blandit. Aliquam mi eros, fringilla et congue vel, ullamcorper eget eros.',
        fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id pulvinar est, id sollicitudin ex. Curabitur vitae justo tortor. Aliquam erat volutpat. Donec ornare felis ut mollis ultrices. Nullam viverra nunc vestibulum turpis malesuada euismod. Etiam diam purus, semper ac ornare sit amet, sagittis eu mi. Sed purus leo, molestie eu ornare eget, porttitor et lectus. Vivamus nec sem ut ex congue porta in sed quam. Quisque in mauris eu ipsum ornare mollis quis eu odio. In non velit consequat, volutpat nisi id, commodo leo.\n' +
                'Nullam et rhoncus massa. Suspendisse pharetra ipsum leo, sit amet bibendum nibh egestas bibendum. Morbi gravida dignissim semper. Nam id ultrices ante. Aenean non vulputate orci, vitae sodales quam. Nunc vitae nibh vel sapien tempor convallis vitae in felis. Nulla facilisi. Suspendisse pretium iaculis lectus quis fringilla. Suspendisse condimentum mauris vitae neque cursus lobortis. Nunc viverra malesuada nisl, eu blandit dui ullamcorper non. Curabitur quis lorem nec dolor pretium efficitur id id libero. Suspendisse potenti. Nullam gravida, purus convallis mattis pellentesque, est augue molestie enim, scelerisque condimentum nulla lectus ac purus. Nullam in metus non ante dignissim vestibulum sit amet quis enim. Donec eget tortor et nibh efficitur dapibus. Nulla quis lectus vel erat scelerisque euismod nec ultricies purus./n' +
                'Praesent in massa at lacus semper vehicula. Curabitur bibendum viverra lorem ac imperdiet. Sed vel lectus quis neque tempor congue. Morbi sit amet rutrum leo, sed aliquet elit. Donec quis nunc ac arcu accumsan euismod sit amet vel urna. Nullam volutpat justo sed neque luctus, sed tempus ex porta. Aenean non pharetra nulla, sed malesuada dui. Pellentesque id libero erat. Nunc imperdiet elementum velit. Quisque posuere, metus sodales aliquet dictum, lacus turpis pretium orci, rutrum pulvinar leo tortor consectetur ex. Morbi ornare fermentum tincidunt.',
        source: 'Волонтеры',
        isPublic: true
    };
    let newTicket = NewsModel.create(news);
}
// createNews();