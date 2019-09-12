Array.prototype.uniq = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!newArr.includes(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

// console.log([1, 2, 2, 3, 4, 5, 5, 5].uniq())

Array.prototype.twoSum = function() {
  let newArr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        newArr.push([i,j]);
      }
    }
  }
  return newArr;
}
// console.log([1, 2, 3, -3, -2, -1, 5, -5].twoSum());

Array.prototype.transpose = function() {
  const newArray = [],
  origArrayLength = this.length, //3
  subArrLength = this[0].length;  //2
  for (let i = 0; i < subArrLength; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < origArrayLength; i++) {
    for (let j = 0; j < subArrLength; j++) {
      newArray[j].push(this[i][j]);
    }
  }
  return newArray;
}
//console.log( [[1, 2], [3, 4], [5, 6]].transpose());

