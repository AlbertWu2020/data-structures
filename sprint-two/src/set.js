var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add porperties into empty obj
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // return boolean if we found an item or not
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  // delete the add val
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
