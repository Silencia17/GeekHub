// ForEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// Sort
Array.prototype.mySort = function () {
  const len = this.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      var thisj= this[j].toString()
      var thisi = this[j+1].toString()
      if (thisj > thisi) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
  return this
}

// map

Array.prototype.myMap = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}
// filter

Array.prototype.myFilter = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    if (callback (this[i], i, this)) {
      res[res.length] = this[i]
    }
  }
  return res
}

// find

Array.prototype.myFind = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      newArray.push((this[i], i, this))
      return arr[i]
    } else {
      return undefined
    }
  }
}
