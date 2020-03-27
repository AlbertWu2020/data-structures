

// Instantiate a new graph
var Graph = function() {
  // create an array or object
   this.graphArray = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // node val in graphArray equal to val of node or empty array
  this.graphArray[node] = this.graphArray[node] || [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// return val of graphArry
return !!this.graphArray[node]; // !! means giving a true or false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// delete the node val of graph array
delete this.graphArray[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if the array not contains a node
  if(!this.contains([fromNode]) || !this.contains(toNode)){
    return false;
  }
  return !!this.graphArray[fromNode][toNode];

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if node val in graph array

  if(!this.contains(fromNode) || !this.contains(toNode)){
    return false;
  }
  this.graphArray[fromNode][toNode] = true;
  this.graphArray[toNode][fromNode] = true;


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// check if the edge not exits
if(!this.contains(fromNode) || !this.contains(toNode)){
  // return true
  return true;
}
  this.graphArray[fromNode][toNode] = undefined;
  this.graphArray[toNode][fromNode] = undefined;


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over the graph to callback each element in node
  // for(var i = 0; i < this.graphArray.length; i++){
  //   console.log('forloop', i)
  //   cb(i);
  // }
  for(let key in this.graphArray){
    //console.log('forIN', key)
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


