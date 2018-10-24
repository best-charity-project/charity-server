const express = require('express');
const router = express.Router();
const UserModel = require('../schemas/users.schema');

const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/', function (req, res, next) {
    passport.authenticate('local', {
        session: false
    }, (err, user, info) => {
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
            return res.json({
                token
            });
        });
    })(req, res);
});

router.post('/p', function (req, res, next) {
    let a = req.body;
    let user = new UserModel(a);
    UserModel.create(user)
        .then(resp => {
            res.send(resp);
        });
});

module.exports = router;