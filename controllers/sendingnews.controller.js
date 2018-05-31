const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const transporter = require('../nodemailer/transporter');
const EventsModel = require('../schemas/events.schema');
const SubscribeModel = require('../schemas/subscribtion.schema');
const moment = require ('moment');

module.exports = {
     getSubAndNews(req,res) {
        getSubscribers();
        async function sendingMailToSubscribers(item) {
            const sevenDays = 604800000;
            let curDate = new Date().toISOString();
            let needDate = new Date(Date.now() + sevenDays).toISOString();
            let eventsList = await EventsModel.find({
                "date":{
                    $gte:curDate,
                    $lte: needDate
                }
            });
            res.json({
                events:eventsList
            });
            mailOptions = {
                from: 'charitywebtest@gmail.com',
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
                console.log(`Email sent:${info.response}`);
            })
        };
        async function getSubscribers () { 
            await SubscribeModel.find({"isSubscribeStatus":"true"}, (err,exports)=>{
                exports.forEach(item =>{
                    sendingMailToSubscribers(item);
                })          
            });
        };
    }
};