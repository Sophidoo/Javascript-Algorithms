// vowels and consonants
let string = "adad"
const vowels = "aeiou"
const consonant = "bcdfghjklmnpqrstvwxyz"
let vowelCount = 0
let consonantCount = 0
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
    return "Vowel Wins"
}else if(consonantCount > vowelCount){
    return "Consonant Wins"
}else{
    return "Draw"
}