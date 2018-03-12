const express = require('express');

const router = express.Router();
const { register, authenticate } = require('../models/users/userAPI');

const authRoutes = router => {
  router.route('/signup').post((req, res) => {
    register(req.body)
      .then(userId => {
        res.json({
          authenticated: true,
          message: 'Your account was created successfully!',
          userId,
        });
      })
      .catch(err => {
        if (err) {
          res.json({ error: err.message });
        }
      });
  });

  router.route('/login').post((req, res) => {
    authenticate(req.body.email, req.body.password)
      .then(userId => {
        res.json({
          authenticated: true,
          userId,
        });
      })
      .catch(err => {
        if (err) {
          res.status(401).json({
            authenticated: false,
            error: err.message,
          });
        }
      });
  });
  return router;
};

module.exports = authRoutes;
