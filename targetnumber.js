// //index of two numbers whose sum is equal to target
let arr = [2, 10, 5, 4]
let numbers = []
let target = 7
for (let i = 0; i < arr.length; i++){
    for( let j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] == target){
            const targetNumbers = i
            numbers.push(targetNumbers)
            break;
        }
    }
}
console.log(numbers)
return numbers;


