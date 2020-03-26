var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storageSize = {
    sizee: 0
  };

  extend(storageSize, stackMethods);

  return storageSize;
};

var extend = function(newStorage, storage){
  for(var key in storage){
    newStorage[key] = storage[key];
  }
}
var stackMethods = {
  size: function(){
    return this.sizee;
  },
  push: function(val){
    this.sizee++;
    this[this.sizee] = val;
  },
  pop: function(){
    var takeOut = this[this.sizee];
    delete this[this.sizee];
    if(this.sizee > 0){
      this.sizee--;
    }
    return takeOut;
  }
};
// stackMethods.push = function(val){
//   this.size = val
// };


