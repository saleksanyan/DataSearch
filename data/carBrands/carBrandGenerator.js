const fs = require('fs');
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


const carBrands = [
    "Toyota",
    "Volkswagen",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Honda",
    "Hyundai",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Kia",
    "Subaru",
    "Jeep",
    "Mazda",
    "Lexus",
    "Tesla",
    "Volvo",
    "Porsche",
    "Land Rover",
    "Jaguar",
    "Mitsubishi",
    "Ferrari",
    "Buick",
    "Cadillac",
    "GMC",
    "Chrysler",
    "Acura",
    "Infiniti",
    "Lincoln",
    "Ram",
    "Bentley",
    "Mini",
    "Aston Martin",
    "Smart",
    "Alfa Romeo",
    "Fiat",
    "Maserati",
    "Genesis",
    "McLaren",
    "Rolls-Royce",
    "Lamborghini",
    "Bugatti",
    "Lotus",
    "Maybach",
    "Koenigsegg",
    "Pagani",
    "Spyker",
    "Dodge",
    "Suzuki",
    "Fisker",
    "Hummer",
    "Saturn",
    "Pontiac",
    "Saab",
    "Scion"
];

function carAdder(carID){
    let b = [];
    
        users.forEach((obj) => {
            if(obj.car.includes(carID))
                b.push(obj.id);
        })
    return b;
}



let carID = 1;
function generateRandomCar() {
    return {
        carID: carID++,
        carName: carBrands[Math.floor(Math.random() * carBrands.length)],
        owners: carAdder(carID-1)
    };
}


function generateRandomCars(count) {
    const cars = [];
    for (let i = 0; i < count; i++) {
        cars.push(generateRandomCar());
    }
    return cars;
}


const cars = generateRandomCars(carBrands.length); 


fs.writeFileSync('data/carBrands/carBrands.json', JSON.stringify(cars, null, 2));

console.log('Random shops data generated and saved to data/carBrands/carBrands.json');
