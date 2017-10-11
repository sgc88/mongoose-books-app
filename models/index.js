var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");


module.exports.Book = require("./book.js");

  
// the mongoose.connect line above  needs to happen exactly once in your code
    // move it from book.js to index.js  :)

module.exports.Gargoyle = require("./gargoyle.js");
module.exports.Goblin = require("./goblin.js");
module.exports.Gnome = require("./gnome.js");
