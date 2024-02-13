// Generate a number from 1 to 3
function randomNumber() {
    return Math.floor(Math.random()*3)+1;
}

// Create object for each word and assign items to it
const adjective = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

const shopName = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

const anotherWord = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

// Pick a random number from each of these objects
randomAdjective = adjective[randomNumber()];
randomShopName = shopName[randomNumber()];
randomAnotherWord = anotherWord[randomNumber()];

// Concatenate the above variables
console.log(`${randomAdjective} ${randomShopName} ${randomAnotherWord}`)