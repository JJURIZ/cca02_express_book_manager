const fs = require("fs"),
    fileName = "data/myCar.json";

const Car = function Car(year, make, model) {
    this.Year = year;
    this.Make = make;
    this.Model = model;
};

fs.mkdir("data", (err) => {
    if (err) {
        console.error("Couldn't create directory" + err.message)
    } else {
        console.log("Created directory")
    }
});

let cars =[];
for(let i = 2000; i < 2018; i++){
    let myCars = new Car(2010, "Toyota", "Prius");
    cars.push(myCars);
}

let carArrJson = JSON.stringify(cars);

fs.writeFile(fileName, carArrJson, (err) => {
    if(err){
        console.error(err.message);
        throw err;
    }
    console.log("The file has been saved");
});