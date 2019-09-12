Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++ ) {
      cb(this[i]);
  }
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myEach(function(ele) { 
//   console.log(ele);
// });

Array.prototype.myMap = function(cb) {
  const newArr = [];
  this.myEach(function(ele) {
    newArr.push(cb(ele));
  })
  return newArr;
}

// console.log( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myMap(function(el) {
//    return el *= 2 ;
//   }
// ))


Array.prototype.myReduce = function(cb, init = this[0]) {
  let acc = init;
  this.myEach(function(ele) {
    acc = cb(acc,ele);
  });
  return acc;
};

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce(function(acc, el) {
//     return (acc * el); 
//   },10))

