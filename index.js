//palindrome
let sampleWord = "abbak"
let string = ""
let stringReverse = ""
for(i = 0; i < sampleWord.length; i++){
    string += sampleWord[i]
    console.log(string)
    for(j = sampleWord.length -1; j >= 0; j--){
        stringReverse += sampleWord[j]
        console.log(stringReverse)
    }
}
let s = string 
let r = stringReverse
if (s === r){
    return "true"
}else{
    return "false"
}