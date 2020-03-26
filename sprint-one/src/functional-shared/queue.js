var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
    sizee: 0,
    storage: {}

  }

  extend(queue, queueMethods);
  return queue;
};


var queueMethods = {
  enqueue: function(val){
    this.sizee++;
    this.storage[this.sizee] = val;
  },
  dequeue: function(){
    var takeOut = this.storage[1];
    delete this.storage[1];
    for(var i=0; i < this.sizee; i++){
      this.storage[i] = this.storage[i+1];
    }
    if(this.sizee > 0){
      this.sizee--;
    }

    return takeOut;
  },
  size: function(){
    return this.sizee;
  }
};


