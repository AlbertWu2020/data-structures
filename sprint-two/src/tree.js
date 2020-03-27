var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];  // children should be an array
  // merge newTree and treeMethods object into newTree object
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  // create an variable for invoke the tree function
  var invokeTree = Tree(value);
  // pushing the new elements to children array
  this.children.push(invokeTree);
};

treeMethods.contains = function(target) {
  // check if the target equal value
  if(this.value === target){
    // true
    return true;
    // else
  }else{
    // iterate over children
    for(var i=0; i < this.children.length; i++){
       // check if the value equal target
       if(this.children[i].contains(target)){

         // true
         return true;
       }

    }

  }
  // return false for false cases
  return false;



};



/*
 * Complexity: What is the time complexity of the above functions? O(N)
 */
