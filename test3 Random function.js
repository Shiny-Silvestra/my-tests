function getRandomItem(arr) 
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const hands = ["rock","paper","scissors"];

const result = getRandomItem(hands);
console.log(result);