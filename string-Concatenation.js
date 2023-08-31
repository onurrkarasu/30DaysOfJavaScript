/*
    ! String  Concatenation : 
    
    connecting two or more string together is called concanetaion. Using the strings declared in the previous string section: 


*/

    let space = ' ';           // an empty space string
    let firstName = 'Asabeneh';
    let lastName = 'Yetayeh';
    let country = 'Finland';
    let city = 'Helsinki';
    let language = 'JavaScript';
    let job = 'teacher';
    let age=250;
    let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
    let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

    let fullName=firstName+space+lastName; // concatenation, merging two string together.
    console.log(fullName);

/*
    We can concatenate string in different ways. 
*/

 /*
    Concatenating Using Addition Operator

    Concatenating using the addition operator is an old way. This way of  concatenating is tedious and error-prone.
    It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings (explained later on).
 */


    let full_name=firstName+space+lastName;
    let personInfoOne=fullName+' . I am '+age+' .I live in '+country; // ES5 string addition
    console.log(personInfoOne);

/*
    Long Literal Strings : 
    
    A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash
    character (\) at the end of each line to indicate that the string will continue on the next line.
*/
    const paragraph="My name is Asabeneh Yetayeh. I live in Finland, Helsinki. \
    I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
    In the end of 2019, I was thinking to expand my teaching and to reach\
    to global audience and I started a Python challenge from november 20 - December 19. \
    It was one of most rewarding and inspiring experience\
    Now, we are in 2020. I am enjoying preparing the 30 DaysOfJavaScript challange and \
    I hope you are enjoying too.";

    console.log(paragraph);

/*
    Escape Sequences in Strings : 
    In JavaScript and other programming languges \ followed by some characters is an escape sequences. Let's see the most common escape characters:

    \n : new line
    \t:  Tab Line
    \\: Back slash
    \': Single quote
    \": Double quote
*/
    console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you?'); // line break
    console.log('Days\tTopics\tExercises');
    console.log('Day 1\t3\t5');
    console.log('Day 2\t3\t5');
    console.log('Day 3\t3\t5');
    console.log('Day 4\t3\t5');
    console.log('This is backslash symbol (\\)'); // To write a backslash
    console.log('In every programming language it starts with \"Hello, World\"');
    console.log("In every programming language it starts with \'Hello,World\'");
    console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020');

/*
    ! Template Literals (Template Strings)
    To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose
    the expression with a curly bracket {{}} preceded by a $ sign. See the syntax below.

    Syntax
    `String Literal text`
    `String Literal text ${expression}`
*/
    // TODO : Example 1
    console.log(`The sum of 2 and 3 and is 5`); // statically writing the data
    let a=2;
    let b=3;
    console.log(`The sum of ${a} and ${b} and is ${a+b}`); // injecting the data dynamically

    // TODO: Example 2
    let full_Names=firstName+' '+lastName;

    let personInfoTwo=`I am ${fullName}. I am ${age}. I live in ${country}. `; // ES6 - String interpolation method
    let personInfoThree=`I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
    console.log(personInfoOne);
    console.log(personInfoThree);

    /*
        Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison,
            arithmetic operations, ternary operations.)
    */

    // TODO: Example 3
    let value1=2;
    let value2=3;
    console.log(`${a} is greater than ${b}: ${a>b}`);

    

