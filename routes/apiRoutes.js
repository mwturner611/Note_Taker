// require json where notes array is stored
// require fs
// var db = require("./../db/db.json");
var fs = require("fs")

// export express "get" making JSON file with notes array
module.exports = function(app) {
    // API GET Request
    // Returns contents of notes array

    app.get("/api/notes", function(req, res) {
        fs.readFile('db/db.json', "utf8", function(err, data) {
            if (err){
                return console.log(err)
            }
            else{
                var notes = JSON.parse(data);
                res.json(notes);
            }
            
        })
      
    });

    
    // API POST Request
    // Taking user submitted data and pushing it to db.json file array

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        var notes = [];

        fs.readFile('db/db.json', "utf8", function(err, data) {
            if(err){
                return console.log(err)
            }
            notes = JSON.parse(data);
            notes.push(newNote);

            fs.writeFile('db/db.json', JSON.stringify(notes),'UTF-8', function(err) {

                if (err) {
                  return console.log(err);
                }
                res.json(newNote);
            });
        })
        
        // db.push(newNote);
        // res.json(true);
        
    });


   // API delete route to remove the selected note from array
    // app.post("/test/:id", function(req,res) {
    //   for (var i = 0; i < db.length; i++){
    //     if(db[i].id === req.params.id){
    //       db[i].delete;
    //     }
    //     else{
    //       console.log("nothing to delete")
    //     }
    //   }
    //   res.json(db);
    // });

    
}