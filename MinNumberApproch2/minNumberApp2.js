function findMinNumber(array) {
    if(!array.length) {
        throw new Error('array should not be empty');
    } else if (array.length === 1){
        return array[0];
    } else {
        let currentMin = array[0];
        for(let i = 1 ; i < array.length; i++) {
            if(array[i] < currentMin) {
                currentMin = array[i];
            }
        }
        return currentMin;
    }
} 
const result = findMinNumber([2,3,4,5,6,1]);
console.log(result);