/*
    ! Checking Data Types and Casting

    Checking Data Types
    To check the data type of certain variable we use the typeof method.

    * example
*/

    let fistName='Asabeneh';    // string
    let lastName='Yetayeh';     // string
    let country='Finland';      // string
    let city='Helsinki';        // string
    let age=250;                // number, it is not my real age, do not worry about it
    let job;                    // undefined, because a value was not assigned

    console.log(typeof 'Asabeneh'); // string
    console.log(typeof firstName);  // string
    console.log(typeof 10); // number
    console.log(typeof 3.14); // number
    console.log(typeof true); // boolean
    console.log(typeof false); // boolean
    console.log(typeof NaN);  // number
    console.log(typeof job); // undefined
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object


/*
    ! Changing Data Types (Casting) : 

    * Casting :Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetich
    * operations strings numbers should be first converted to integer or float if not it returns an errors. 

    ! String to Int  :
    * We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10' , '5'.
    * We can convert string to number using the following methods : 
        
        * parseInt()
        * Number()
        * Plus sign(+)
*/
    let num='10';
    let numInt=parseInt(num);
    console.log(numInt);

    let number='10';
    let numberInt=Number(number);
    console.log(numberInt);

    let plusNum='10';
    let plusNumInt=+plusNum;
    console.log(plusNumInt);


/*
    ! String to Float

    * We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float
    * number : '9.81', '3.14' , '1.44' . We can convert string float to number using the following  methods:

        * parsetFloat():
        * Number()
        * Plus sign(+)

*/
        let value='9.81';
        let valueFloat=parseFloat(value);
        console.log(valueFloat);

        let valueNum='9.81';
        let valueNumConvert=Number(valueNum);
        console.log(valueNumConvert);

        let valueSign='9.81';
        let valueConvertSign=+valueSign;
        console.log(valueConvertSign);


/*
    ! Float to Int 
    * we can convert float numbers to integers. we use the following method to convert float to int.
        * parseInt()

*/
    let floatInt=9.31;
    let floatConvertInt=parseInt(floatInt);
    console.log(floatConvertInt);

    



    