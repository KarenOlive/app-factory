
//Palindrome check
const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr; //the sentence should read the same forwards and backwards.
}
const testString = "Never odd or even";
const testString2 = "The cat ate the rat";
if (isPalindrome(testString)) {
    console.log(`"${testString}" is a palindrome.`);
    return true;
} else {
    console.log(`"${testString}" is not a palindrome.`);
    return false;
}

