var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.sizee = 0;
  return someInstance;
};

var stackMethods = {
  push: function(val){
    this.sizee++;
    this.storage[this.sizee] = val;
  },
  pop: function(){
    var takeOut = this.storage[this.sizee];
    delete this.storage[this.sizee];
    if(this.sizee > 0){
      this.sizee--;
    }
    return takeOut;

  },
  size: function(){
    return this.sizee;
  }
};




