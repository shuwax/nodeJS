const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

//new istance of GoogleStrategy,para(conf)
passport.use(
    new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken,refreshToken,profile,done) => {
        console.log('Access Token', accessToken);
        console.log('Refresh Token',refreshToken);
        console.log('Profile',profile);
    })
);
app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope:['profile','email']
    })
);
app.get('/auth/google/callback', passport.authenticate('google'));
//create route with method get,post,put,delete,patch (request,response) res.send(return value)
// app.get('/',(req,res) => {
//     res.send({tes:"test"});
// });
const PORT = process.env.PORT || 5000;
//with port to listen
app.listen(PORT);