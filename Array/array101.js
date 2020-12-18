Array.prototype.remove = function (item) {
  for (let i=0; i < this.length; i++) {
    if (this[i] === item) this.splice(i,1)
  }
  return this;
};
arr = [1, 2, 3, 4, 2, 4, 3, 23];
console.log(arr.remove(2));