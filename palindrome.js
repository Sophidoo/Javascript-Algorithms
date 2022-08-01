// palindrome
let sampleWord = "abba"
let stringReverse = ""
let correct  = "true"
let wrong = "false"
for(j = sampleWord.length -1; j >= 0; j--){
    stringReverse += sampleWord[j].toLowerCase()
}
// console.log(stringReverse)
if(sampleWord.toLowerCase() == stringReverse){
    console.log(correct)
    return correct;
}else{
    return wrong;
};