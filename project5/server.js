let express = require("express");
let app = express();
//file system
const fs = require('fs');
const admin = require("firebase-admin");

//[title, ref id]

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sourcefall19-220de.firebaseio.com"
});

let db = admin.firestore();

//app is the root
app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.get("/profile", function(req, res) {
    res.send("This is the user profile page.");
});

//an adding function

app.get("/book/:title/:author/:year", (req, res) => {
    let title = req.params.title;
    let author = req.params.author;
    let year = req.params.year;
    
    let b = {
        title: title,
        author: author,
        year: year
    };

    let addDoc = db
    .collection("books")
    .doc("" + title)
    .set(b)
    .then(ref => {
        res.status(200).send("Added document with ID: " + title);
    });
})

app.get("/book/:title", (req, res) => {
    let title = req.params.title;
    let ref = db.collection("books").doc(title);
    let author = ref.get()
        .then(doc => {
            if(!doc.exists) {
                res.status(200).send("No such book!");
            } else {
                console.log(doc.data());
                res.status(200).send("Author: " + doc.data().author + 
                    " | Year Published: " + doc.data().year);
            }
        })
        .catch(err => {
            res.status(200).send("Error getting document.", err);
        });
    
})

//3000 is the port
let server = app.listen(3000, function() {
    console.log("server running on port 3000!")
});

//supply a book name, response = author, year, some facts...