var arr = [3,-5,1,44,-12,3,1,2,-3,-3,2,1,4,-2-3-1];
//var arr = [-1,-8,2];
//var arr = [1,7,3];
//var arr = [1,undefined,3,5,-3];
//var arr = [1,NaN,3,5,-3];

//max

function maxValue(arr){
    var currentValue = -Infinity;
    for(var i = 0; i < arr.length; i++){
        if (typeof currentValue !== 'boolean' && !isNaN(arr[i])){
            currentValue = arr[i]
        }
        else if(arr[i] > currentValue){
            currentValue = arr[i];
        }
    }
    return currentValue;
}
console.log('max: ' + maxValue([]))

//min

function minValue(arr){
    currentValue = Infinity;
    for(var i = 0; i < arr.length; i++){
        if (typeof currentValue !== 'boolean' && !isNaN(arr[i])){
            currentValue = arr[i]
        }
        else if(arr[i] < currentValue){
            currentValue = arr[i];
        }
    }
    return currentValue;
}

console.log('min: ' + minValue(arr))

//Sum


function sum(arr){
    var sumResult = 0;
    for (var i = 0; i<arr.length; i++){
        if (typeof sumResult !== 'number' && !isNaN(arr[i])){
            sumResult +=arr[i];
        }
    }
    return sumResult
}
console.log('Sum: ' + sum())
