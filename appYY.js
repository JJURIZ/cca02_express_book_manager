const fs = require("fs"),
    fileName = "data/test.txt";

    fs.mkdir("data", (err) => {
        if(err){
            console.error("Couldn't create directory" + err.message)
        }else{
            console.log("Created directory")
        }
    });

fs.writeFile(fileName, "Hello, World!", (err)=> {
    if(err){
        console.error(err.message);
    }else{
        console.log("Success");
    }
});

console.log("Finished!")