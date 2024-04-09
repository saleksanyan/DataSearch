const fs = require('fs');

// Function to generate a random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumberArray(min, max) {
    let followerIDs = [];
    let quantity = Math.floor(Math.random() * (max - min + 1) + min);
    for(let i = 0; i<quantity; i++){
        followerIDs.push(generateRandomNumber(1,1000));
    }
    return followerIDs;
}

// Arrays of shop names and posts
const shopList = [
    "ArtisanWonders", "SereneHarbor", "UrbanNest", "VelvetBoutique", "MystiKraft",
    "PoshPalette", "VintageVista", "RusticRoots", "RadiantAura", "DreamWeave Emporium",
    "Celestial Finds", "Aurora Emporium", "WhimsiWorks", "EnchantedGrove", "NomadTreasures",
    "TimelessAllure", "BohoChic Bazaar", "WillowWhispers", "UptownCharm", "OceanWonders",
    "CrystalCove", "The Velvet Vignette", "Earthly Elegance", "The Hidden Gem Emporium",
    "Ethereal Haven", "QuirkyQuest Treasures", "CoastalMoods", "ArtfulAlchemy",
    "Renaissance Reverie", "LushLabyrinth", "ElysianEcho", "LuxeLoom", "CuriousCrafts Haven",
    "Dazzling Dunes", "EnigmaticEmpire", "GildedGrove", "RadiantRetro", "MystiqueMosaic",
    "SplendidSundown", "WhimsyWagon", "UrbanUtopia", "VelvetVoyager", "VintageWhispers",
    "BohemianBreeze", "TimelessTokens", "UrbanUtopia", "SerendipityShores", "RusticRhapsody",
    "IllusionaryIdyll", "CharmingCrest", "ShopSavvy", "TrendyTrinkets", "EcoFusion Finds",
    "StyleSplash", "GourmetGlow", "ChicVoyage", "Wanderlust Emporium", "JewelJunction",
    "HarmonyHaven", "UrbanPulse", "ElegantEdge", "CraftedCurios", "LuxeLane",
    "Bohemian Bliss Boutique", "WhimsyWave", "Gemstone Galore", "RusticVogue", "TreasuresTraverse",
    "ChicPetal", "CoastalGems", "BlissfulBoutique", "FreshFinds", "TrendyTrinkets",
    "UrbanElegance", "LuxeLoom", "ChicCrafted", "AuraAdorn", "WanderlustWares", "CoastalCharms",
    "DreamyDwell", "GourmetGems", "HarmonyHaven", "StylishSail", "RadiantRendezvous", "BohoBoulevard",
    "TrendyTrinkets", "GemstoneGrove", "BlissfulBazaar", "SerenityShores", "CoastalCrafts", "BohoBoutique",
    "ElegantEnsemble", "AuraAdornments", "CraftedCuriosities", "EnchantingEmporium", "LuxeLoot",
    "ChicCanvas", "GemstoneGatherings", "CoastalCharisma", "TimelessTrinkets"
];

const posts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"];
let ownerID = 1;
let shopID = 1;

function generateRandomShop() {
    return {
        shopID: shopID++,
        shopName: shopList[Math.floor(Math.random() * shopList.length)],
        owner: ownerID++,
        address: generateRandomString(20),
        posts: posts.slice(0, Math.floor(Math.random() * posts.length) + 1),
        followers: generateRandomNumberArray(0, 10)
    };
}


function generateRandomShops(count) {
    const shops = [];
    for (let i = 0; i < count; i++) {
        shops.push(generateRandomShop());
    }
    return shops;
}


const shops = generateRandomShops(shopList.length);

fs.writeFileSync('data/shops/shop.json', JSON.stringify(shops, null, 2));

console.log('Random shops data generated and saved to data/shops/shop.json');
