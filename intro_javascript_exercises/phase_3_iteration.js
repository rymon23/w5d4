Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      const j = i + 1;
      if (this[i] > this[j]) {
        [this[i], this[j]] = [this[j], this[i]];
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([3, 2, 5, 8, 6, 3, 4].bubbleSort())


String.prototype.substrings = function() {
  const subs = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs
}


console.log("octopus".substrings())