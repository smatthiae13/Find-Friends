var myFriends = require("../data/friends");
//console.log(myFriends);

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(myFriends);
    });

    app.post("/api/friends", function (req, res) {
       // console.log(req.body.scores);

        var user = req.body;  // pulls it from survey.html post 
        var difference;
        var userScores = user.scores;
        var bestMatch = { name: "", photo: "", friendDiff: Infinity };

        // console.log(" myfriend L " +myFriends.length);
        // console.log(" myfriend L " + JSON.stringify(myFriends));

        for (var i = 0; i < myFriends.length; i++) {
        difference = 0;
            var currentFriend = myFriends[i];
            //console.log(currentFriend);
           // console.log(user);
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = user.scores[j];
                difference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                
            }
            if (difference <= bestMatch.friendDiff) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = difference;
            }
            
        }
        myFriends.push(user);
       // console.log(bestMatch);

        res.json(bestMatch); //returned to survey
        //res.json("TESTING");
        
        


    });

}


