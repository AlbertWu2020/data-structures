var Queue = function() {
  var someInstance = {};
  // create a size variable
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add size
    size ++;
    // assign value in storage after size add
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    // check if size > 0
    if(size > 0){
      // subtract a size
      size --;
    }
    // create a variable for the one val should be took out
    var takeOut = storage[1];
    // delete the val should be took out
    delete storage[1];
    // subs the position of the origin val to a new val
    for(var key in storage){
      storage[key - 1] = storage[key];
    }
    // return take out
    return takeOut;
  };

  someInstance.size = function() {
    // return size
    return size;
  };

  return someInstance;
};
