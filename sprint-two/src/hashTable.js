

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

  HashTable.prototype.insert = function (k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);

  var getIndex = this._storage.get(index) || [];

  //if getIndex has a tuple(container of values)
    //iterate over each Index to get the values
      //if getIndex[0] is equal to k
        //Set getIndex[1] =v
  for (var i = 0; i < getIndex.length; i++) {

    if (getIndex[i][0] === k) {
      var oldValue = getIndex[1];
      getIndex[i][1] = v;
      return oldValue;
    }
  }

  //if getIndex is empty
  //Push tuple(container) into the empty array
  //place the getINdex back in the storage.

  getIndex.push([k, v]);
  this._storage.set(index, getIndex);
  };



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var getIndex = this._storage.get(index) || [];

  for (var i = 0; i < getIndex.length; i++) {
    if (getIndex[i][0] === k) {
      return getIndex[i][1];
    }
  }

};










HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // delete the value at hashing key
  //delete this._storage[k];
  var getIndex = this._storage.get(index);
  for(var i = 0; i < getIndex.length; i++){

    if(getIndex[i][0] === k){

      getIndex.splice(i,1);


      //console.log('this is getIndex', getIndex);
    }
  }

  return undefined;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */


