function isPalindrome(word){
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}


/* 
itterate over the word to the halfway mark
create an end word index
if the indexes are not equal, stop the loop and return false
if they are continue through each index
return true


*/

/*
  we want the code to iterate through the first half of the word and compare it 
  with the coresponding back half. We can use a for loop to iterate over the word.
   So i needs to be compared to the reverse index j.
  Then for every time they are not different move on to the next index until you 
  run out and then voi la! Its True. Otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
