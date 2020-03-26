var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizee = 0;
};

Stack.prototype.push = function(val){
  this.sizee++;
  this.storage[this.sizee] = val;
},
Stack.prototype.pop = function(){
  // last in first out
  var takeOut = this.storage[this.sizee];
  delete this.storage[this.sizee];
  if(this.sizee > 0){
    this.sizee--;
  }
  return takeOut;
},
Stack.prototype.size = function(){
  return this.sizee;
}


