var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // assign val to new tail
    var newTail = Node(value);


 // check if the node is not in the list
 if(list.head === null){
   list.head = newTail;
 }


 // check the node if it is tail
 if(list.tail){
  // set the next value to equal the variable which is value
  list.tail.next = newTail;
 }

 list.tail = newTail;

  };

  list.removeHead = function() {
    var currentHead = list.head;
    // the new head will be the first head
    list.head = list.head.next;
    // remove the first head from the list
    delete currentHead;
    // return remove value
    return currentHead.value;
  };

  list.contains = function(target) {
    // set variable assign to check the head
    var checkHead = list.head.value;
    // console.log(checkHead);
    // console.log(target);
    // console.log(list);
    //while(checkHead){
       // check the value if it is equal target
      if(checkHead === target){

      // return true
        return true;
      // else
      }else{
       // return false
        return false;
      }

    //}

    // checkHead = list.head.next;
    // console.log(checkHead);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
