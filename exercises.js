/*
    ! EXERCİSES LEVEL 1 : 
*/

/*
    TODO 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
*/
    let challenge='30 Days Of JavaScript';

/*
    TODO 2: Print the string on the browser console using console.log().
*/
    console.log(challenge);

/*
    TODO 3: Print the length of the string on the browser console using console.log()
*/
    console.log(challenge.length);

/*
    TODO 4: Change all the string characters to capital letters using toUpperCase() method
*/
    console.log(challenge.toUpperCase());

/*
    TODO 5 : Change all the string characters to lowercase letters using toLowerCase() method
*/
    console.log(challenge.toLocaleLowerCase());

/*
    TODO 6 : Cut (slice) out the first word of the string using substr() or substring() method
*/
    console.log(challenge.substring(0,2));

/*
    TODO 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
*/
    console.log(challenge.substr(2));

/*
    TODO 8: Check if the string contains a word Script using includes() method
*/
    console.log(challenge.includes('Script'));

/*
    TODO 9 : Split the string into an array using split() method
*/ 
    console.log(challenge.split());

/*
    TODO 10 : Split the string 30 Days Of JavaScript at the space using split() method
*/
    console.log(challenge.split(' '));

/*
    TODO 11 : 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
*/
let values='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(values.split(' '));

/*
    TODO 12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
*/
 console.log(challenge.replace('JavaScript','Python'));

 /*
    TODO 13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
 */
   console.log(challenge.charAt(15)); // s

/*
    TODO 14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
*/
  console.log(challenge.charCodeAt('J')); // 51

/*
    TODO 15 : Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
*/
    console.log(challenge.indexOf('a')); // 4

/*
    TODO 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
*/
    console.log(challenge.lastIndexOf('a')); // 14 

/*
    TODO 17 : Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
    let metlins='You cannot end a sentence with because because because is a conjunction';
    console.log(metlins.indexOf('because')); // 31

/*
    TODO 18 :  Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
    console.log(metlins.lastIndexOf('because')); // 47

/*
    TODO 19 : Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
    console.log(metlins.search('because')); // 31

/*
    TODO 20 : Use trim() to remove any trailing whitespace at the beginning and the end of string '30 Days Of JavaScript'. 
*/
    let metlins2='  30 Days Of JavaScript   ';
    console.log(metlins2);
    console.log(metlins2.trim());

/*
    TODO 21 : use startsWith() method with the string 30 Days Of JavaScript and make the result true
*/
    let start='30 Days Of JavaScript';
    console.log(start.startsWith('30 Days Of JavaScript'));

/*
    TODO 22 : Use endsWith() method with the string 30 Days Of JavaScript and make the result true
*/
    let ends='30 Days Of JavaScript';
    console.log(ends.endsWith('30 Days Of JavaScript'));

/*
    TODO 23: Use Match() : method to find all the a's in 30 Days Of JavaScript
*/
    let js='30 Days Of JavaScript';
    console.log(js.match('a'));

/*
    TODO 24 : Use concat() and merge ' 30 Days Of' and ' JavaScript' to a single string ' 30 Days Of javaSCript';
*/
    let jss='30 Days Of';
    console.log(jss.concat(' JavaScript'));

/*
    TODO 25: Use repeat() : method print 30 Days Of javaScript 2 times.
*/
    let repet='30 Days Of JavaScript';
    console.log(repet.repeat(2));


/*
    ! EXERCİSES LEVEL 2 
*/

/*
    TODO 1: Using console.log() print out the following statement:
*/
 console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

 /*
    TODO 2: Using console.log() print out the following quote by Mother Teresa:
 */
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.");

/*
    TODO 3 : Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/
    let num='10';
    console.log(typeof num);
    let numInt=parseInt(num);
    console.log(numInt);
    console.log(`Control the Equal =  ${num == numInt}`);

/*
    TODO 4 : Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
*/
    let value='9.81';
    let valueFloat=parseFloat(value);
    console.log(`Control the Equal  = ${valueFloat == 10} `);

/*
    TODO 5 : Check if 'on' is found in both python and jargon
*/
    let py='python';
    let jy='jargon';
    console.log(py.includes('on'));
    console.log(jy.includes('on'));

/*
    TODO 6: I hope this course is not full of jargon. Check if jargon is in the sentence.
*/
    let sentece='I hope this course is not full of jargon';
    console.log(sentece.includes('jargon'));

/*
    TODO 7 : Generate a random number between 0 and 100 inclusively.
*/
    let random1=Math.floor(Math.random()*101);
    console.log(random1);

/*
    TODO 8 : Generate a random number between 50 and 100 inclusively.
*/
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        console.log(randomInt(50, 100));

/*
    TODO 9: Generate a random number between 0 and 255 inclusively.
*/
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(randomInt(0, 255));

/*
    TODO 10 : Access the 'JavaScript' string characters using a random number.
*/
    let metins='JavaScript';
    let randomNum2=Math.floor(Math.random()*10);
    console.log(metins[randomNum2]);

/*
    TODO 11  : Use console.log() and escape characters to print the following pattern.
*/
    console.log("1\t1\t1\t1\t1");
    console.log("2\t1\t2\t4\t8");
    console.log("3\t1\t3\t9\t27");
    console.log("4\t1\t4\t16\t64");
    console.log("5\t1\t5\t25\t125");

/*
    TODO 12 : Use substr to slice out the phrase because because because from the following sentence:
    TODO : 'You cannot end a sentence with because because because is a conjunction'
*/
 let sen='You cannot end a sentence with because because because is a conjunction';
 console.log(sen.substr(31));


 /*
    ! EXERCİSES LEVEL 3 : 
 
 */

/*
    TODO 1 : 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
    TODO  : Count the number of word love in this sentence.
*/
 let met= 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
    console.log(met.match('love'));

 /*
    TODO 2: Use match() to count the number of all because in the following sentence:
    TODO : 'You cannot end a sentence with because because because is a conjunction'
 */
let met2='You cannot end a sentence with because because because is a conjunction';
    console.log(met2.match('because'));

/*
    TODO 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


/*
    TODO 4 : Calculate the total annual income of the person by extracting the numbers from the following text. 
    TODO  : 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/
    let salary=5000;
    let annualBonus=10000;
    let onlineCourses=15000;

    console.log(`He earns ${salary} euro from salary per month, ${annualBonus} euro annual bonus, ${onlineCourses} euro online
        courses per month`);