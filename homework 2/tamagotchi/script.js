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
    if (this.happiness <= 90) {
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

  this.run = function () {
    console.log('я хочу свободы,прости...')
    this.hungry = 0
    this.health = 0
    this.happiness = 0
    this.toilet = 0
    this.sleep = 0
    this.purity = 0
    console.log(this)
  }

  this.addStat = function (property) {
    if (this[property] < 90) {
      this[property] += Math.round(Math.random() * 5)
    } else {
      console.log('Давай немного позже')
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

pet.voice();
//pet.walk();
//pet.run();

// pet.addStat('')
