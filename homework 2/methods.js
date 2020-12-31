const arr = [1, 2, 3, 7, 8, 4, 1]

// ForEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
arr.myForEach(function (element) {
  console.log(element)
})

// Sort
Array.prototype.mySort = function () {
  const len = this.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
  return this
}

// arr.mySort(function (element){
//   console.log(element)
// })

// map

Array.prototype.myMap = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

arr.myMap(function (element) {
  console.log(element)
})
// filter

Array.prototype.myFilter = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      arr.push((this[i], i, this))
    }
    return arr
  }
}
arr.myFilter(function (element) {
  console.log(element)
})

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

arr.myFind(function (element) {
  console.log(element)
})
