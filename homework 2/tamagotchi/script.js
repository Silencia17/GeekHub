function Tamagotchi(hungry,health,happiness,toilet,sleep, purity,name) {

    this.hungry = 100;
    this.health = 100;
    this.happiness = 100;
    this.toilet = 100;
    this.sleep = 100;
    this.purity = 100;
    this.name = 'Alice';

    this.voice = function () {
        console.log("Привет,я твой новый друг,меня зовут " + this.name)
        console.log(this)
    }

    this.walk = function () {
        if (this.happiness <= 90) {
            this.happiness += Math.floor(Math.random() * 5);
            this.toilet -= Math.floor(Math.random() * 3);
            this.health -= Math.floor(Math.random() * 3);
            this.sleep -= Math.floor(Math.random() * 5);
            this.purity -= Math.floor(Math.random() * 3);
            this.hungry -= Math.floor(Math.random() * 5);
            console.log(this)
        } else {
            console.log('Я итак счастлив!)');
            console.log(this)
        }
    }

    this.heal = function () {
        if (this.health <= 50) {
            console.log('Ура,я буду здоров!)');
            this.happiness -= Math.floor(Math.random() * 7);
            this.sleep -= Math.floor(Math.random() * 5);
            this.health += Math.floor(Math.random() * 6);
            console.log(this)
        } else {
            console.log('Я итак здоров!)')
            console.log(this)
        }
    }
    this.goToilet = function (){
        if(this.toilet <= 92){
            this.toilet += Math.floor(Math.random() * 8);
            this.happiness += Math.floor(Math.random() * 2);
            this.hungry -= Math.floor(Math.random() * 2);
            this.purity -= Math.floor(Math.random() * 5);
            console.log(this)
        }
        else{
            console.log('Я не хочу в туалет!');
            console.log(this)
        }
    }
    this.sleeping = function (){
        if(this.sleep <= 92){
            this.sleep += Math.floor(Math.random() * 8);
            this.happiness += Math.floor(Math.random() * 2);
            this.hungry -= Math.floor(Math.random() * 6);
            this.purity -= Math.floor(Math.random() * 5);
            console.log(this)
        }
        else{
            console.log('я не хочу спать!)')
            console.log(this)
        }
    }
    this.eating = function (){
        if(this.hungry <= 95){
            this.hungry += Math.floor(Math.random() * 6);
            console.log(this)
        }
        else {
            console.log('Я не хочу есть!)')
            console.log(this)
        }
    }
    this.getShower = function (){
        if(this.purity <= 95){
            this.purity += Math.floor(Math.random() * 5);
            this.hungry -= Math.floor(Math.random() * 4);
            this.happiness += Math.floor(Math.random() * 2);
            console.log(this)
        }
        else{
            console.log('Давай немного позже')
            console.log(this)
        }
    }
    this.run = function (){
        console.log('я хочу свободы,прости...')
        this.hungry = 0;
        this.health = 0;
        this.happiness = 0;
        this.toilet = 0;
        this.sleep = 0;
        this.purity = 0;
        console.log(this)
    }
     // this.end = function (){

    //     else {
    //         console.log('Dead')
    //     }
  //  }
}
    var pet = new Tamagotchi();

        setInterval(function propInt(time = 2) {
        pet.hungry = pet.hungry - parseInt(time);
        pet.health = pet.health - parseInt(time);
        pet.happiness = pet.happiness - parseInt(time);
        pet.toilet = pet.toilet - parseInt(time);
        pet.sleep = pet.sleep - parseInt(time);
        pet.purity = pet.purity - parseInt(time);
    }, 5000)

     // if(pet.hungry === 0 || pet.health === 0 || pet.happiness === 0 || pet.toilet === 0 || pet.sleep === 0 || pet.purity === 0 ){
     //     alert('я умер')
     // }
     // else {
     //     console.log('Dead')
     // }
//
// if (this.hungry === 0 || this.health === 0 || this.happiness === 0 || this.toilet === 0 || this.sleep === 0 || this.purity === 0 ){
//            alert('edqwdqwd');
//        }


    pet.voice();
    // pet.walk();
    // pet.heal();
    // pet.goToilet();
    // pet.eating();
    // pet.sleeping();
    // pet.run();
    // pet.getShower();
    // pet.end();
