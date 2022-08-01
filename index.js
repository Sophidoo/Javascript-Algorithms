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
var string = "adadd"
var vowels = "aeiou"
var consonant = "bcdfghjklmnpqrstvwxyz"
var vowelCount = 0
var consonantCount = 0
for(i = 0; i < vowels.length; i++){
    for(j = 0; j < string.length; j++){
        if(string[j].includes(vowels[i])){
            vowelCount++
        }
    }
}
for(i = 0; i < consonant.length; i++){
    for(j = 0; j < string.length; j++){
        if(string[j].includes(consonant[i])){
            consonantCount++
        }
    }
}
if(vowelCount > consonantCount){
    console.log("Vowel Wins")
}else if(consonantCount > vowelCount){
    console.log("Consonant Wins")
}else{
    console.log("Draw")
}


//second largest and second smallest
var 
