function Tamagotchi (
  hungry = 100,
  health = 100,
  happiness = 100,
  toilet = 100,
  sleep = 100,
  purity = 100
) {
  this.hungry = hungry
  this.health = health
  this.happiness = happiness
  this.toilet = toilet
  this.sleep = sleep
  this.purity = purity
  this.name = 'Alice'

  this.voice = function () {
    console.log('Привет,я твой новый друг,меня зовут ' + this.name)
    console.log(this)
  }

  this.walk = function () {
    if (this.happiness <= 94) {
      this.happiness += Math.floor(Math.random() * 5)
      this.toilet -= Math.floor(Math.random() * 3)
      this.health -= Math.floor(Math.random() * 3)
      this.sleep -= Math.floor(Math.random() * 5)
      this.purity -= Math.floor(Math.random() * 3)
      this.hungry -= Math.floor(Math.random() * 5)
      console.log(this)
    } else {
      console.log('Я итак счастлив!)')
      console.log(this)
    }
  }
  this.eat = () => {
    if (this.hungry <= 94) {
      this.happiness += Math.round(Math.random() * 5)
      this.toilet -= Math.round(Math.random() * 7)
      this.hungry += Math.round(Math.random() * 8)
    } else {
      console.log('я не голоден')
    }
  }
  this.shower = () => {
    if (this.purity <= 94) {
      this.happiness += Math.floor(Math.random() * 4)
      this.hungry -= Math.round(Math.random() * 7)
      this.sleep -= Math.round(Math.random() * 7)
      this.purity += Math.round(Math.random() * 8)
    } else {
      console.log('я не хочу в душ')
    }
  }
  this.sleeping = () => {
    if (this.sleep <= 90) {
      this.sleep += Math.round(Math.random() * 10)
      this.hungry -= Math.round(Math.random() * 5)
      this.toilet -= Math.round(Math.random() * 7)
    } else {
      console.log('я не хочу спать')
    }
  }
  this.goToilet = () => {
    if (this.toilet <= 94) {
      this.toilet += Math.round(Math.random() * 7)
      this.hungry -= Math.round(Math.random() * 4)
      this.purity -= Math.round(Math.random() * 6)
    } else {
      console.log('я не хочу в туалет')
    }
  }
  this.heal = () => {
    if (health <= 94) {
      this.health += Math.round(Math.random() * 10)
      this.hungry -= Math.round(Math.random() * 4)
      this.happiness -= Math.floor(Math.random() * 5)
    } else {
      console.log('я итак здоров')
    }
  }
  const life = (time = 2) => {
    this.hungry = this.hungry - time
    this.health = this.health - time
    this.happiness = this.happiness - time
    this.toilet = this.toilet - time
    this.sleep = this.sleep - time
    this.purity = this.purity - time
    if (!this.hungry || !this.health || !this.happiness || !this.toilet || !this.sleep || !this.purity) {
      console.log('ну всё...я умер..')
      clearInterval(interval)
    }
  }
  const interval = setInterval(life, 5000)
}

const pet = new Tamagotchi()

pet.voice()
// pet.walk();
// pet.shower()
// pet.eat()
// pet.goToilet()
// pet.heal()
// pet.sleeping()

