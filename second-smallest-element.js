// Write a javascript program where find the second smallest element from array.


function findSecondSmallest(inputValues) {
    let smallest = Infinity;
    let secondSmallest = Infinity
    for(i=0; i<inputValues.length; i++) {
        let currentValue = inputValues[i];
        if(currentValue < smallest) {
            secondSmallest = smallest;
            smallest = currentValue;
        } else if(currentValue < secondSmallest && currentValue !== smallest) {
            secondSmallest = currentValue
        }
    }
    return secondSmallest;
}

const inputArr = [12, 35, 1, 10, 34, 1, 9];
console.log(findSecondSmallest(inputArr));
