

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json("friends");
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var user = req.body;

        
        //this is where I will put the 
    })
}


