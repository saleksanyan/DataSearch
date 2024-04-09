const express = require("express");
const fs = require("fs");
const searchingAlgorithm = require('./searchingAlgorithm.js'); 
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use('/data', express.static("data"));
app.use(express.json());

function readJsonFile(filePath) {
    try {
        const jsonString = fs.readFileSync(filePath);
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading JSON file: ', error);
        return null;
    }
}



app.post("/", async (req, res) => {
    const { value } = req.body; 

    const userFilePath = 'data/users/user.json';
    const shopFilePath = 'data/shops/shop.json';
    const carFilePath =  'data/carBrands/carBrands.json';

    const users = readJsonFile(userFilePath);
    const shops = readJsonFile(shopFilePath);
    const cars = readJsonFile(carFilePath);

    let matchingData = [];

    let carMatches = searchInDB(cars, value);
    if(carMatches.length !== 0) {
        matchingData.push({ cars: carMatches });
    }
    
    let shopMatches = searchInDB(shops, value);
    if(shopMatches.length !== 0) {
        matchingData.push({ shops: shopMatches });
    }
    
    let userMatches = searchInDB(users, value);
    if(userMatches.length !== 0) {
        matchingData.push({ users: userMatches });
    }

    res.status(200).json(matchingData);
});


function searchInDB(database, searchableText) {
    let matchingUsers = [];
    searchableText = searchableText.split(" ");
    for (const data of database) {
        let matchCount = 0;

        for (const key in data) {
            if (key !== "id" && key !== "friends" && key !== "followers" && key !== "carID" 
            && key !== "shopID" && key!== "owner" && key!== "owners" && key!= "posts" && key!= "car" && data.hasOwnProperty(key)) {
                matchCount += searchingAlgorithm.searchText(String(data[key]), searchableText);
            }
        }

        if (matchCount !== 0) {
            matchingUsers.push({ dataDetails: data, matchCount});
        }
    }

    matchingUsers.sort((a, b) => b.matchCount - a.matchCount);
    return matchingUsers.map(match => match.dataDetails); 
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
