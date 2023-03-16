/**
 * @param {string} s1 the first line of the page, composed of uppercase letters only
 * @param {string} s2 the second line, composed of uppercase letters and of the same length as s1
 * @return {string} the decrypted message, created by alternating the letters of s1 and s2
 */
function decrypt(s1, s2) {
    // Write your code here
    let arr1 = s1.split('');
    let arr2 = s2.split('');

    let newArr =[];
   let i = 0;
let j = 0;
newArrayLength = arr1.length + arr2.length;
for (let index = 0; index < newArrayLength; index++) {
   if(index%2===0 ){
 newArr.push(arr1[j]);
    j++; 

  }
   else if(index%2!==0){
    newArr.push(arr2[i]);
    i++; 

  }

}

let string = newArr.join('');
console.log(string);

    return string;

}


/* Ignore and do not change the code below */

/**
 * Try a solution
 * @param message the decrypted message, created by alternating the letters of s1 and s2
 */
function trySolution(message) {
    console.log('' + JSON.stringify(message));
}
trySolution(decrypt(
    JSON.parse(readline()),
    JSON.parse(readline())
));

/* Ignore and do not change the code above */
