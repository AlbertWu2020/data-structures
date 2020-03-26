class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, siezee) {
    this.storage = {};
    this.sizee = 0;
  }
  push(val){
    this.sizee++;
    this.storage[this.sizee] = val;
  };
  pop(){
    var takeOut = this.storage[this.sizee];
    delete this.storage[this.sizee];
    if(this.sizee > 0){
      this.sizee--;
    }
    return takeOut;
  };
  size(){
    return this.sizee;
  }

}