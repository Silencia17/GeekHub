function Tamagotchi(hungry,health,happiness,toilet,sleep, purity) {
    this.hungry = hungry;
    this.health = health;
    this.happiness = happiness;
    this.toilet = toilet;
    this.sleep = sleep;
    this.purity = purity;
    this.name = name;

    this.voice = function () {
        console.log("Привет,я твой новый друг,меня зовут " + this.name)
    }

    this.walk = function () {
        if (this.happiness <= 90) {
            this.happiness += Math.floor(Math.random() * 5);
            this.toilet -= Math.floor(Math.random() * 3);
            this.health -= Math.floor(Math.random() * 3);
            this.sleep -= Math.floor(Math.random() * 5);
            this.purity -= Math.floor(Math.random() * 3);
            this.hungry -= Math.floor(Math.random() * 5);
        } else {
            console.log('Я итак счастлив!)');
        }
    }

    this.heal = function () {
        if (this.health <= 50) {
            console.log('Ура,я буду здоров!)');
            this.happiness -= Math.floor(Math.random() * 7);
            this.sleep -= Math.floor(Math.random() * 5);
            this.health += Math.floor(Math.random() * 6);
        } else {
            console.log('Я итак здоров!)')
        }
    }
    this.goToilet = function (){
        if(this.toilet <= 92){
            console.log('Я не хочу в туалет!');
        }
        else{
            this.toilet += Math.floor(Math.random() * 8);
            this.happiness += Math.floor(Math.random() * 2);
            this.hungry -= Math.floor(Math.random() * 2);
            this.purity -= Math.floor(Math.random() * 5);
        }
    }
    this.sleeping = function (){
        if(this.sleep <= 92){
            this.sleep += Math.floor(Math.random() * 8);
            this.happiness += Math.floor(Math.random() * 2);
            this.hungry -= Math.floor(Math.random() * 6);
            this.purity -= Math.floor(Math.random() * 5);
        }
        else{
            console.log('я не хочу спать!)')
        }
    }
    this.eating = function (){
        if(this.hungry <= 95){
            this.hungry += Math.floor(Math.random() * 6);
        }
        else {
            console.log('Я не хочу есть!)')
        }
    }
    this.getShower = function (){
        if(this.purity <= 95){
            this.purity += Math.floor(Math.random() * 5);
            this.hungry -= Math.floor(Math.random() * 4);
            this.happiness += Math.floor(Math.random() * 2);
        }
        else{
            console.log('Давай немного позже')
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
    }
    this.end = function (){
        if(this.hungry === 0 || this.health === 0 || this.happiness === 0 || this.toilet === 0 || this.sleep === 0 || this.purity === 0 ){
            console.log('Я умер............')
             window.location.reload();
        }
        else {
            console.log('Dead')
        }
    }
}


    var pet = new Tamagotchi(100, 100, 100, 100, 100, 100, 'Alice');

    //while(pet.hungry > 0 && pet.health >0 && pet.happiness >0 && pet.toilet >0 && pet.sleep >0 && pet.purity >0){
        setInterval(function propInt(Time = 2) {
        pet.hungry = pet.hungry - parseInt(Time);
        pet.health = pet.health - parseInt(Time);
        pet.happiness = pet.happiness - parseInt(Time);
        pet.toilet = pet.toilet - parseInt(Time);
        pet.sleep = pet.sleep - parseInt(Time);
        pet.purity = pet.purity - parseInt(Time);
    }, 5000)

    pet.voice();
    // pet.walk();
    // pet.heal();
    // pet.goToilet();
    // pet.eating();
    // pet.sleeping();
    // pet.run();
    // pet.getShower();
    // pet.end();
