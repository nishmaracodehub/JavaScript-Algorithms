// let re;
// re = /hello/;
// re = /hello/gi; //i ==> case sensitive
// re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);

// exec() - Result in an array or null
// const result = re.exec("Hey hellooo world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const testResult = re.test("hello this is hello");
// console.log(testResult);

// match() - returns result array or null
// const str = "hello there";
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match and if not found it returns -1
// const str = "Hello there";
// const result = str.search(re);
// console.log(result);

// replace() - will return new string with some or all matches of a pattern
// const str = "Hello There Hello";
// const newStr = str.replace(re, "Hi");
// console.log(newStr);

// regular expression
let re;
// Literal Characters
re = /hello/i;

//Metacharacter Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello$/i; //Must start and end with
re = /h.llo/i; // Matches any one charater
re = /h*llo/i; //Matches 0 or more characters
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; //Must be an a or e
re = /[GF]ray/i; //Must be a G or F
re = /[^GF]ray/i; //Match anything except G or F
// side note: if ^ is inside [^] then its not (!), shouldn't start with
// But if it's outside then it's should start

re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any case letter
re = /[0-9][0-9]ray/; //Match any digit

// Braces - {} these are quantifiers
re = /hel{2}o/i; //Must occur exactly n amount of times {n}
re = /hel{2,4}o/i; //Must occur in range {n,m} (n and m are inclusive)
re = /hel{2,}o/i; //Must occur atleast n times {n,}

//Parenthisis () - for Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; // one ore more Word character
re = /\W/; // Non-word character (!, space)
re = /\d/; //this is will match any digit
re = /\d+/; // will match 0 or more times
re = /\D/; //will match any non-digit
re = /\s/; //Match whitespace char
re = /\S/; //Match non-whitespace char
re = /Hell\b/i; //word boundary

//Assertions

re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if Not followed by y

//String to match
let str = "xssy";

//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
