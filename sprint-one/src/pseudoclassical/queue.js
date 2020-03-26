var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizee = 0;
};

Queue.prototype.enqueue = function(val){
  this.sizee++;
  this.storage[this.sizee] = val;
},
Queue.prototype.dequeue = function(){
  // first in first out
  var takeOut = this.storage[1];
  delete this.storage[1];
  for(var i = 0; i < this.sizee; i++){
    this.storage[i] = this.storage[1 + i];
  }
  if(this.sizee > 0){
    this.sizee--;
  }
  return takeOut;
},
Queue.prototype.size = function(){
  return this.sizee;
}


