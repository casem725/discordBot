const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(
    new DiscordStrategy({
        clientID: '971829492899270667',
        clientSecret: 'G1wlo8_UbVudWvcflbvehOLWAlk-1_W2',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    })
)