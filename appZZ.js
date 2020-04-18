const express = require('express');
const fs = require("fs");

for (let i = 0; i < 10; i++) {
    console.log(i);
    fs.appendFile("hello.txt", i + ": Hello, World\n", (err) => {
        if (err) {
            console.error("Ack! There was an error! " + err);
        } else {
            console.log(i + "Success! File Written");
        }
    })
}

console.log("Done! The whole program is finished!")
const app = express();
let books = [];
fs.appendFileSync("hello.txt", "Hello World\n", (err) => {
    if (err) {
        console.log("Ack! There was an error!" + err);
    } else {
        console.log("Succes! File Written");
    }
});

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(3000, () => {
    console.log("Listening on 3000");
});