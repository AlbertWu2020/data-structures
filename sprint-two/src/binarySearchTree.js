var BinarySearchTree = function(value) {
  //var trees = {};
  var trees = Object.create(treePrototype);
  //console.log('this is treePrototype', treePrototype)
  // assign value to root
  trees.value = value;
  // assign null to left
  trees.left = null;
  // assign null to right
  trees.right = null;
  return trees;

};

var treePrototype = {};

treePrototype.insert = function(value){

  // check val if less than root value
  if (value < this.value) {
    // if left is null
    if (this.left === null) {
      // assign val to left
      this.left = BinarySearchTree(value);
      // otherwise
    } else {
      // insert val to left
      this.left.insert(value);
    }// val greater than root value
  } else {
    // if right is null
    if (this.right === null) {
      // assign val to right
      this.right = BinarySearchTree(value);
      // otherwise
    } else {
      // insert val to right
      this.right.insert(value);
    }
    //console.log('this is trees', trees)
  }

};
treePrototype.contains = function(value){
//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
// create a variable as currentVal
var currentVal = this.value;

// if value equal currentVal
if( value === currentVal){
   // return true
  return true;
}
else if(value < currentVal){
// if value < currentVal
currentVal = !!(this.left && this.left.contains(value));

}else{
// otherwise
currentVal = !!(this.right && this.right.contains(value));
}

return currentVal;
};
treePrototype.depthFirstLog = function(cb){
// accepts a callback and executes it on every value contained in the tree
// if root value is not null
if(this.value !== null){
// access callback excute the root value
    cb(this.value);
}
  // if on the left
  if(this.left){
      this.left.depthFirstLog(cb)

  }
  if(this.right){
    // if on the right
    this.right.depthFirstLog(cb)
  }




};


/*
 * Complexity: What is the time complexity of the above functions?
 */
