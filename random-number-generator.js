/*
    The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...
*/

    let randomNum=Math.random(); // generates 0 to 0.999.

// Now, let us see how we can use random() method to generate a random number between 0 and 10.

    let rndmNum=Math.random();
    let numZeroAndTen=rndmNum*11;
    console.log(numZeroAndTen);

    let floorToRandom=Math.floor(numZeroAndTen);
    console.log(floorToRandom);


// TODO : RANDOM GENERATOR FUNCTİON 
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        console.log(randomInt(50, 100));