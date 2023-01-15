let numbers = [0,1,2,3,4,5,6,7,8,9];
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let randArray = [];
let x = 10;
let y = 20;
let spacing = 10;
let randomNum = 250;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < randomNum; i++) {
        let randNum = floor(random(10)); // generates a random number between 0 and 9
        let randLetter = letters[floor(random(26))]; // generates a random letter from the letters array
        randArray.push(randNum);
        randArray.push(randLetter);
    }
}

function draw() {
    background(220);
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);       
    }

    
    // Generate a random number between 1 and 10 (including 1 and 10)
    var rnd = generateRandomNumber(33, 128);
    let xPos = x;
    let yPos = y;
    for(let i = 0; i < randArray.length; i++){
        if(typeof randArray[i] == "number"){
          let asciiNum = char(randArray[i] + rnd);
          text(asciiNum, xPos, yPos);
        }else{
          text(randArray[i], xPos, yPos);
        }
        xPos += textWidth(randArray[i]) + spacing; // move x position for next element
        if(xPos > width) {
            xPos = x;
            yPos += textWidth(randArray[i]) + spacing;
        }
    }
}
