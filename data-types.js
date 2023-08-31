/*
    ! Data Types: 

    In the previous section, we mentioned a little bit about data types. Data or values have data types. Data types describe
    the characteristics of data. Data types can be divided into two:

    1. Primitive data types
    2. Non-Pprimitive Data typees

    ! Primitive Data Types 
    Pritimive data types in JavaScript include : 

        1. Numbers  - Integer, floats
        2. String   - Any data under single quote, double quote, backtick quote
        3. Booleans     - true or false value
        4. Null     - empty value or no value
        5. Undefined    - a declared variable without a value
        6. Symbol   -  A unique value that can be generated by symbol constructor.

    Non-primitive data types in JavaScript includes: 
        
        1. Object
        2. Array


    Now, let us see what exacty primitive and non-primitive data types mean. Primitive data types are immutable (non-modifiable) data types.
    Once a a primitive data types is created we cannot modify it.

    example :
*/
    let word='JavaScript';
/* If we try to modify the string stored in variable word, JavaScript should raise an error. Any data type under a single quote, double quote, or backtick quote, 
    is a string data type.
*/
    word[0]='Y';
    console.log(word);

/*
    This expression does not change the string stored in the variable word. So, we can say that string are not modifiable or in other words immutable.
    Primitive data types are compared by its values. Let us compare different data values. See the example below.
*/
    let numOne=3;
    let numTwo=3;

    console.log(numOne==numTwo); // true

    let js='JavaScript';
    let py='Python';
    console.log(js==py); // false

    let lightOn=true;
    let lightOff=false;
    console.log(lightOn==lightOff); // false

/*
  !  Non - primitive Data Types : 
  Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by
  by creating an array. An Array a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are 
  referenced by their index. In JavaScript array index start at zero. The first element of an array is found at index zero, the second element at 
  index one, and the third element at index two.
*/
    let nums=[1,2,3];
    nums[0]=10;
    console.log(nums); // 10,2,3

/*
    As you can see, an array, which is a non-primitive data types is mutable. Non-primitive data types cannot be compared by value. Even if two
    non-primitive data types have the same properties and values, they are not strictly equaş.
*/
    let num=[1,2,3];
    let numbers=[1,2,3];
    console.log(num==numbers); // false

    let userOne={
        name:'Asabeneh',
        role:'teacher',
        country:'Finland'
    };

    let userTwo={
        name:'Asabeneh',
        role:'teacher',
        country:'Finland'
    };
    console.log(userOne==userTwo); // false

/*
    Rule of thumb, we do not compore non-primitive data types. Do not compore arrays, functions, or objects. Non-primitive values are referred
    to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the 
    same underyling object.
*/
    let n=[1,2,3];
    let nmbrs=n;
    console.log(n==nmbrs); // true;

    let userThree={
        name:'Asabeneh',
        role:'teacher',
        country:'Finland'
    };
    let userFour=userThree;
    console.log(userThree==userFour); // true;

    