module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret : 'developmentSessionSecret',
    facebook: {
        clientID: '881581765210694',
        clientSecret: 'fd3c594a242f70a098da17d4db9dd7d4',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'Application ID',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: 'Application ID',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};