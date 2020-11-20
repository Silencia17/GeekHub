function Calculate(){
    this.value = null;

    this.calculate = function (a){
        this.value = a
        return this
    }
    this.add = function (b){
        this.value += b;
        return this
    }
    this.multiply = function (c){
        this.value *= c;
        return this
    }
    this.result = function (){
        return this.value
    }
}

var calculator = new Calculate();

console.log(calculator.calculate(3).add(3).multiply(3).result())