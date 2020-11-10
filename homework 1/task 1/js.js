//var arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
//const Negative = [-1,-8,2];
//const Positive = [1,7,3];
//const mas = [1,undefined,3,5,-3];
var arr = [1,NaN,3,5,-3];

//max

function maxValue(){
    currentValue = arr[0];
      for(var i = 0; i < arr.length; i++){
        if(arr[i] > currentValue){
      currentValue = arr[i];
        }
      }
    }
maxValue()
console.log('max:' + ' ' + currentValue)

//min

function minValue(){
    currentValue = arr[0];
      for(var i = 0; i < arr.length; i++){
        if(arr[i] < currentValue){
        currentValue = arr[i];
        }
      }
    }
minValue();
console.log('min:' + ' ' + currentValue)

//Сумма

function sum(){
    var summ = 0;
      for (var i = 0; i<arr.length; i++){
        summ +=arr[i];
    }
      console.log('Сумма:' + ' ' + summ)
}
sum()