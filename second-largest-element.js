// Write a javascript program where find the second largest element from array.


function findSecondLargest(inputValues) {
    let largest = -Infinity;
    let secondLargest = -Infinity
    for(i=0; i<inputValues.length; i++) {
        let currentValue = inputValues[i];
        if(currentValue > largest) {
            secondLargest = largest;
            largest = currentValue;
        } else if(currentValue > secondLargest && currentValue !== largest) {
            secondLargest = currentValue
        }
    }
    return secondLargest;
}

const inputArr = [12, 35, 1, 10, 34, 1, 9];
console.log(findSecondLargest(inputArr));