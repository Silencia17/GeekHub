function sum(a){

    let result = a;
    function second(b){
        result += b;
        return second;
    }
    second.toString = function(){
        return result;
    }
    return second;
}

console.log(sum()());
