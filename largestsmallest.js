//second largest and second smallest
let numberArray = [2, 6, 10, 3, 7, 9, 1, 12]
let solvedArray = []

numberArray.sort(function(a, b){
    return a-b
})
solvedArray.push(numberArray[1])
solvedArray.push(numberArray[numberArray.length-2])
return solvedArray


// //second method for last question
// let newNumberArray = []
// let solved = []
// for(i = 1; i < numberArray.length; i++){
//     for(j = 0; j< numberArray.length; j++){
//         if(numberArray[j] < numberArray[i]){
//             var number = numberArray[j]
//         }
//     }
//     newNumberArray.push(number)
// }
// newNumberArray.push(numberArray[numberArray.length - 1])
// // console.log(newNumberArray)
// solved.push(newNumberArray[1])
// solved.push(newNumberArray[newNumberArray.length-2])

// return solved