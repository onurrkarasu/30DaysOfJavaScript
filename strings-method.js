/*
    ! String Methods : 

    Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string
    object has many methods. There are different string methods that can help us to work with strings.
*/

    /*
        TODO : 1.length : The String length method returns the number of characters in a string included empty space.
        !example : 
    */ 
      let js='JavaScript';
      console.log(js.length); // 18
      let firstName='Asabeneh';
      console.log(firstName.length); // 8

    /* 
        TODO : 2. Accesing characters in a string: We can access each character in a string using it index. In programming, counting start from 0.
        TODO : - The first index of the string is zero, and the last index is the length of the minus one.

        ! Let us access different characters in 'JavaScript' string.
        !example 
    */
        let string='JavaScript';
        let firstLetter=string[0];
        console.log(firstLetter);  // J


        let secondLetter=string[1];
        let thirdLetter=string[2];
        let lastLetter=string[9];
        console.log(lastLetter);

        // ! last index  calculations
        let lastIndex=string.length-1;
        console.log(string[lastIndex]);

    /*
        TODO 3 : toUpperCase() : this method changes the string to uppercase letters

        !example
    */
        let str='javascript';
        let adim='onur';
        console.log(str.toUpperCase());
        console.log(adim.toUpperCase());

    /*
        TODO 4 : toLowerCase(): this method changes the string to lowercase letters

        !example: 
    */
        let str1='JAVASCRIPT';
        let ad='ONUR';
        console.log(str1.toLowerCase());
        console.log(ad.toLowerCase());

    /*
        TODO 5 : substr() : It takes two arguments, the starting index and number of characters to slice

        !example
    */

        let strings='JavaScript';
        console.log(string.substr(4,6)); // Script

        let country='Finland';
        console.log(country.substr(3,4)); // land

    
    /*
        TODO 6 : substring() : It takes two arguments, the starting index the stopping index but it doesn't include the character at the stopping index.

        !example 
    */

        let str2='JavaScript';
        console.log(str2.substring(0,4)); // Java
        console.log(str2.substring(4,10)); // Script
        console.log(str2.substring(4)); // Script

        let ct='Finland';
        console.log(ct.substring(0,3)); // Fin
        console.log(ct.substring(3,7)); // land
        console.log(ct.substring(3));  // land

    /*
        TODO 7: split() : The split method splits a string at specified place.

        !example
    */
    let metin='30 Days Of JavaScript';
    console.log(metin.split()); // Changes to an array -> ["30 Days Of JavaScript"]
    console.log(metin.split(' ')); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


    let first_Name='Asabeneh';
    console.log(first_Name.split()) // Change to an array - > ["Asabeneh"]
    console.log(first_Name.split('')); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]


    let countries='Finland, Sweden, Norway, Denmark, and Iceland';
    console.log(countries.split(',')); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
    console.log(countries.split(', ')); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


    /*
        TODO 8 : trim() : Removes trailing space in the beginning or the end of a string.

        !example
    */

        let metlin='    30 days of JavaSCript';
        console.log(metlin);
        console.log(metlin.trim());

        let adims='     Onur        ';
        console.log(adims);
        console.log(adims.trim());

    /*
        TODO 9 : includes()  : It takes a substring argument and it checks if substring argument exists in the string. includes() returns boolean.
        TODO : If a substring exist in a string, it returns true, otherwise it returns false.

        !example
    */
    
        let m1='30 Days Of JavaScript';

        console.log(m1.includes('Days'));  // true
        console.log(m1.includes('days'));  // false
        console.log(m1.includes('Script')); // true
        console.log(m1.includes('script')); // false
        console.log(m1.includes('java')); // false 
        console.log(m1.includes('Java')); // true

        let ct2='Finland';

        console.log(ct2.includes('fin')); // false
        console.log(ct2.includes('Fin')); // true
        console.log(ct2.includes('land')); // true
        console.log(ct2.includes('Land')); // false

    /*
        TODO 10  replace() :  takes as a parameter the old substring and a new substring.

        * string.replace(oldSubstring,newSubstring);
    */
        let metin2='30 Days Of JavaScript';
        console.log(metin2.replace('JavaScript','Python'));

        let ulkem='Turkiye';
        console.log(ulkem.replace('Turk','Turan'));


    /*
        TODO 11  charAt(): Takes index and it returns the value at that index
        * string.charAt(index).
    */
     console.log(metin2.charAt(0)); // 3

     let lastIndext=metin2.length-1;
     console.log(metin2.charAt[lastIndext]); // undefined

    
     /*
        TODO 12  charCodeAt() : Takes index and it returns char code (ascıı number) of the value at that index
        * string.charCodeAt(index)
     */

        console.log(metin2.charCodeAt(3));

        let lastIndex2=metin2.length-1;
        console.log(metin2.charCodeAt[lastIndex2]); // undefined

    /*
        TODO 13 : indexOf()  : Takes a substring and if the  substring exists in string it returns the first position of the the substring
        todo : if does not exist it returns -1

        string.indexOf(subString);
        !examples
    */
        let metin4='30 Days Of JavaScript';

        console.log(metin4.indexOf('D')); // 3
        console.log(metin4.indexOf('Days')); // 3
        console.log(metin4.indexOf('days')); // -1 
        console.log(metin4.indexOf('a')); // 4
        console.log(metin4.indexOf('JavaScript')); // 11
        console.log(metin4.indexOf('Script')); // 15
        console.log(metin4.indexOf('script')); // -1


    /*
        TODO 14: lastIndexOf()  : Takes a substring and if the substring exist in a string it returns the last position of the substring if it 
        todo : does not exist it returns -1 

        * string.lastIndexOf(substring)
    */

        let metin5='I love  JavaScript. If you do not love JavaScript what else can you love.';

        console.log(metin5.lastIndexOf('love')); // 68
        console.log(metin5.lastIndexOf('you')); // 64
        console.log(metin5.lastIndexOf('JavaScript')); // 39

    /*
        TODO 15 : concat(): it takes many substrings and joins them.

        *  string.concat(substring,substring,substring)
    */

        let yas='30';
        console.log(yas.concat('Days','Of','JavaScript')); //30DaysOfJavaScript

        let ulk="Tur";
        console.log(ulk.concat('ki','ye')); // Turkiye

    
    /*
        TODO 16: startsWith() : It takes a substring as an argument and it checks if the strings starts with that specified substring.It returns a boolean
        todo : (true or false)...

        * string.startsWith(substring)
    */  

        let love='Love is the best to in this world';
        console.log(love.startsWith('love')); // false
        console.log(love.startsWith('Love')); // true
        console.log(love.startsWith('world')); // false

        let ct31='Finland';
        console.log(ct31.startsWith("fin")); //  false
        console.log(ct31.startsWith('land')); // false
        console.log(ct31.startsWith('Fin')); // true

    /*
        TODO 17: endsWith() : it takes a substring as argument an it checks if the substring ends with that specified substring. It returns a boolean
        todo : (true or false)

        * string.endsWith(substring)
    */
    
    console.log(love.endsWith('world')); // true
    console.log(love.endsWith('love')); // false
    console.log(love.endsWith('in the world')); // false

    console.log(ct31.endsWith('land')); // true
    console.log(ct31.endsWith('fin')); // false
    console.log(ct31.endsWith('Fin')); // false

/*
    TODO 18 : search () : it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular
    todo : expression pattern.

    *   string.search(substring)
*/
    console.log(love.search('Love')); // 0
    console.log(love.search(/javascript/gi)); // -1

/*
    TODO 19 : match () : it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.
    todo: Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign. 

    * string.match(substring)
*/

    let metlins='I love JavaScript. If you do not love JavaScript what else can you love.';
    console.log(metlins.match('love'));

    let pattern=/love/gi;
    console.log(metlins.match(pattern));

/*
    Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic. 
    We will cover regular expressions later on.
*/

let txt='In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';
let regEx=/\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));  // ["2019", "30", "2020"]

/*
    TODO 20 : repeat() : it takes a number as argument and it returns the repeated version of the string.

    * string.repeat(n)
*/
    
    let met='string';
    console.log(met.repeat(31));

