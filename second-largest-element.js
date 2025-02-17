// Write a javascript program where find the second largest element from array.


function findSecondLargest(inputValues) {
    let largest = -Infinity;
    let secondLargest = -Infinity
    for(i=0; i<inputValues.length; i++) {
        if(inputValues[i] > largest) {
            secondLargest = largest;
            largest = inputValues[i];
        } else if(inputValues[i] > secondLargest && inputValues[i] !== largest) {
            secondLargest = inputValues[i]
        }
    }
    return secondLargest;
}

const inputArr = [12, 35, 1, 10, 34, 1, 9];
console.log(findSecondLargest(inputArr));