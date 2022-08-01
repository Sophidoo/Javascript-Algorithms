//palindrome
var sampleWord = "abba"
var stringReverse = ""
for(j = sampleWord.length -1; j >= 0; j--){
    stringReverse += sampleWord[j].toLowerCase()
}
// console.log(stringReverse)
if(sampleWord.toLowerCase() == stringReverse){
    console.log("true")
    // return "true"
}else{
    console.log("false")
    // return "false"
}


//index of two numbers whose sum is equal to target
var arr = [2, 10, 5, 4]
var numbers = []
var target = 7
for (let i = 0; i < arr.length; i++){
    for( let j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] == target){
           var targetNumbers = i
        numbers.push(targetNumbers)
        break;
    }
}
}
console.log(numbers)


// vowels and consonants
var string = "ada"
var vowels = "aeiou"
var consonant = "bcdfghjklmnpqrstvwxyz"
for(i = 0; i < string.length; i++){
    
}

