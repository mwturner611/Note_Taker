// require path to find html file location
var path = require("path");

// routes to html
module.exports = function(app) {
    // display notes.html when at /notes
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname,'../','/public', "notes.html"));
    });


    // Default to home page if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname,'../','/public', "index.html"));
    });
};
  