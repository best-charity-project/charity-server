const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/', function (req, res, next) {
    passport.authenticate('local', {
        session: false
    }, (err, user, info) => {
        console.log(11111111111111,user)
        console.log(info)
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user,
            });
        }
        req.login(user, {
            session: false
        }, err => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign(JSON.stringify(user), 'your_jwt_secret');
            console.log(`TOKENNNNNN: ${token}`)
            return res.json({
                token
            });
        });
    })(req, res);
});

module.exports = router;