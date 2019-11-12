const express = require('express');
const router = express.Router();
const passport = require('passport');
const User =  require('../model/user');

router.post('register', function(req, res){
URLSearchParams.register(
    new User({username: req.body.username}),
    req.body.password,
    function(err, account) {
        if (err) {
            console.log(err);
            return res.render('register', {account: account});
        
        }
        
        passport.authenticate('local')(req, res, function(){
            res.redirect('/');
        })
    }
)
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });

});

router.get('/login', (req, res) => res.render('login', {buttonText: 'Login'}));
router.get('/register', (req,res) => res.render('login', {buttonText: 'Register'}));

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'

    })
);

module.exports = router;