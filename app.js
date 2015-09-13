var profile = require("./profile");
var users = ["samuelballan", "davemcfarland"];
users.push(process.argv.slice(2));

users.forEach(profile.get);

/* These two commented blocks will each do the same thing as line 4
users.forEach(function(username){
    profile.get(username);
});
*/


/*
profile.get("chalkers");
profile.get("joykesten2");
*/
