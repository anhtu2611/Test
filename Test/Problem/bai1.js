

function adjacentElementsProduct(inputArray) {
    var arr = [];
    for(var i = 0; i < inputArray.length -1; i++) {
        arr.push(inputArray[i] * inputArray[i + 1]);
    };
     return Math.max(...arr);

}
console.log(adjacentElementsProduct([2, 3, -2, -5, 4,]));