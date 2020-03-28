var BinarySearchTree = function(value) {
  // assign value to root
  this.root = value;
  // assign null to left
  this.left = null;
  // assign null to right
  this.right = null;





};

BinarySearchTree.prototype.insert = function(val){
  // check val if less than root value
  if (val < this.root) {
    // if left is null
    if (this.left === null) {
      // assign val to left
      this.left = val;
      // otherwise
    } else {
      // insert val to left
      this.left.insert(val);
      //console.log(this.left.insert(val));
    }// val greater than root value
  } else {
    // if right is null
    if (this.right === null) {
      // assign val to right
      this.right = val;
      // otherwise
    } else {
      // insert val to right
      this.right.insert(val);
    }
  }

};
BinarySearchTree.prototype.contains = function(targetVal){
//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
// create a variable as currentVal
var currentVal = this.root;
// while has a currentVal
// if targetVal equal currentVal
 // return true
 // if targetVal < currentVal
  // currentVal assign to left
 // otherwise
  // currentVal assign to right

// return false
};
BinarySearchTree.prototype.depthFirstLog = function(cb){
// accepts a callback and executes it on every value contained in the tree
// if root value is not null
  // access callback excute the root value
  // if on the left
   // return this.left.depthFirstLog(cb)
  // if on the right
  // return this.right.depthFirstLog(cb)

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
