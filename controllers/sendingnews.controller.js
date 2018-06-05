const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const transporter = require('../nodemailer/transporter');
const EventsModel = require('../schemas/events.schema');
const SubscribeModel = require('../schemas/subscription.schema');
const moment = require ('moment');
const { nodemailerConf }= require('../config');

async function sendingMailToSubscribers(item) {
    let curDate = new Date().toISOString();
    let needDate = new Date(Date.now() + nodemailerConf.period).toISOString();
    let eventsList = await EventsModel.find({
        "date":{
            $gte:curDate,
            $lte: needDate
        }
    });
    
    mailOptions = {
        from: nodemailerConf.user,
        to: item.email,
        subject: 'NEWS',
        text: 'Plaintext version of the message.... Keep Yo Head Up',
        html: `
        <h1>События на следующую неделю</h1>
        <table>
             ${eventsList.map( e =>{
                    return `<tr>
                        <td>${e.name}</td>
                        <td>${moment(e.date).format('DD-MM-YYYY')}</td>
                        <td>${e.text}</td>
                    </tr>`
                }).join('')}
        </table>`
      }

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err) throw err;
    })
};

function getSubscribers () { 
     SubscribeModel.find({"isSubscribeStatus":"true"}, (err,tmp)=>{
        tmp.forEach(item =>{
            sendingMailToSubscribers(item);
        })          
    });
};
module.exports = getSubscribers;