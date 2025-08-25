/**
 * Tricky JavaScript Equality Examples
 * Author: ChatGPT
 * Description: Examples showing how == and === behave differently in JavaScript.
 */

console.log('--- 1. Loose vs Strict Equality ---');
console.log('0 == "0":', 0 == '0');   // true
// Explanation: '0' is converted to number 0 in loose equality
console.log('0 === "0":', 0 === '0'); // false
// Explanation: Different types, strict equality checks type too

console.log('--- 2. Null and Undefined ---');
console.log('null == undefined:', null == undefined);   // true
// Explanation: Special case in JS: null and undefined are equal with ==
console.log('null === undefined:', null === undefined); // false
// Explanation: Different types

console.log('--- 3. Empty String & Numbers ---');
console.log('"" == 0:', '' == 0);   // true
// Explanation: Empty string converts to 0
console.log('"" === 0:', '' === 0); // false
// Explanation: Different types

console.log('--- 4. Boolean Conversion Surprise ---');
console.log('false == "0":', false == '0');  // true
// Explanation: '0' → 0, false → 0, 0 == 0
console.log('false === "0":', false === '0'); // false
// Explanation: Different types

console.log('--- 5. Arrays and Objects ---');
console.log('[] == 0:', [] == 0);        // true
// Explanation: [] → '' → 0
console.log('[] === 0:', [] === 0);      // false
// Explanation: Different types
console.log('[] == "":', [] == '');      // true
// Explanation: [] → '' 
console.log('[1] == 1:', [1] == 1);      // true
// Explanation: [1] → '1' → 1

console.log('--- 6. Object References ---');
console.log('{} == {}:', {} == {}); // false
// Explanation: Different object references are never equal
console.log('[] == []:', [] == []); // false
// Explanation: Different array references are never equal

console.log('--- 7. Null and Zero ---');
console.log('null > 0:', null > 0);    // false
// Explanation: null → 0, but null > 0 is false due to JS rules
console.log('null >= 0:', null >= 0);  // true
// Explanation: null → 0, 0 >= 0 is true

console.log('--- 8. NaN ---');
console.log('NaN == NaN:', NaN == NaN);   // false
console.log('NaN === NaN:', NaN === NaN); // false
// Explanation: NaN is never equal to anything, even itself

console.log('--- 9. String and Boolean ---');
console.log('"true" == true:', 'true' == true);   // false
// Explanation: 'true' → NaN, true → 1, NaN != 1    
console.log('"false" == false:', 'false' == false); // false
// Explanation: 'false' → NaN, false → 0, NaN != 0

console.log('--- 10. Zero and Empty Values ---');
console.log('false == undefined:', false == undefined); // false
console.log('false == null:', false == null);           // false
console.log('false == "":', false == '');               // true
// Explanation: '' → 0, false → 0, 0 == 0
