var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var takeOut = storage[size];
    delete storage[size];
    if(size > 0){
      size--;
    }
    return takeOut;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
