
const fs = require('fs');


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// Step 1: Read JSON from File
const filePath = 'data/users/user.json';


function readJsonFile(filePath) {
    try {
        const jsonString = fs.readFileSync(filePath);
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading JSON file: ', error);
        return null;
    }
}


let users = readJsonFile(filePath);
const carFilePath =  'data/carBrands/carBrands.json';
const cars1 = readJsonFile(carFilePath);


// users.forEach((obj) => {
//     obj.car = generateRandomCars(Math.floor(Math.random() * 5)); 
// });

// function generateRandomCars(count) {
//     const cars = [];
//     for (let i = 0; i < count; i++) {
//         cars.push(generateRandomNumber(1,55));
//     }
//     return cars;
// }

function carAdder(){
    let b = [];
    for (let index = 0; index < 55; index++) {
        users.forEach((obj) => {
            if(obj.car.includes(index+1))
                b.push(obj.id);
        })
        cars1[index].owners = b;
    }
}

carAdder();

fs.writeFileSync(carFilePath, JSON.stringify(cars1, null, 2));
