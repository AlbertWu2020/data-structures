class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, sizee) {
    this.storage = {};
    this.sizee = 0;
  }
  enqueue(val){
    this.sizee++;
    this.storage[this.sizee] = val;
  };
  dequeue(){
    var takeOut = this.storage[1];
    delete this.storage[1];
    for(var i = 1; i < this.sizee; i++){
      this.storage[i] = this.storage[1 + i];
    }
    if(this.sizee > 0){
      this.sizee--;
    }
    return takeOut;
  };
  size(){
    return this.sizee;
  }

}
