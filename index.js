//1. Create a linked list class

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, before) {
    let currNode = this.head;
    let tempNode = this.head;
    while (currNode.value !== before) {
      tempNode = currNode;
      currNode = currNode.next;
    }
    tempNode.next = new _Node(item, currNode);
  }
  insertAfter(item, after) {
    let currNode = this.find(after);
    let nextNode = currNode.next;
    currNode.next = new _Node(item, nextNode);
  }
  insertAt(item, index) {
    let currIndex = 0;
    let currNode = this.head;
    while (currIndex !== (index - 1)) {
      currNode = currNode.next;
      currIndex++;
    }
    currNode.next = new _Node(item, currNode.next.next);
  }
  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  display() {
    let currNode = this.head;
    let str = '';
    while(currNode.next !== null) {
      str = str + currNode.value + ', ';
      currNode = currNode.next;
    }
    str = str + currNode.value;
    console.log(str);
  }
  size() {
    let size = 0;
    let currNode = this.head;
    while (currNode !== null) {
      size++;
      currNode = currNode.next;
    }
    return size;
  }
  isEmpty(){
    if(this.head === null){
      return true;
    }
    return false;
  }
  findPrevious(item) {
    let currNode = this.head;
    if(currNode === null) {
      return 'empty list';
    } else {
      let tempNode = currNode;
      while (currNode.value !== item) {
        tempNode = currNode;
        currNode = currNode.next;
      }
      return tempNode;
    }
  }
  findLast() {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  reverse (node) {
    if (node.next !== null) {
      this.reverse(node.next);
      node.next.next = node;
      node.next = null;
    } else {
      this.head = node;
    }
  }
  middleOfList() {
    let currNode = this.head;
    let size = this.size();
    size = Math.floor(size/2);
    for(let i = 0; i < size; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }
  findThirdFromLast() {
    let currNode = this.head;
    if(currNode.next === null) {
      return null;
    }
    if (currNode.next.next === null) {
      return null;
    }
    while(currNode.next.next.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  cycle(node) {
    if(this.head === null) {
      this.insertFirst(node.value);
    } else {
      let final = this.head;
      while (final.next !== null) {
        final = final.next;
      }
      final.next = node;
    }
  }
  cycleList() {
    let object = {};
    let currentHead = this.head;
    while(currentHead.next !== null) {
      if(object[currentHead.value]) {
        return true;
      }
      object[currentHead.value] = currentHead.value;
      currentHead = currentHead.next;
    }
    return false;
  }
}

let ll = new LinkedList;

ll.insertFirst(5);

// console.log(ll);

function main() {
  let SLL = new LinkedList;
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //   SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');
  //   console.log(SLL.findPrevious('Hotdog'));
  // SLL.reverse(SLL.head);
  //   console.log(SLL.findLast());
  //   console.log(SLL.findThirdFromLast());
  //   console.log(SLL.middleOfList());
  console.log('Should display false below');
  console.log(SLL.cycleList());
  SLL.display();
}

main();


// #4 removes duplications by checking the current value vs. the next value, 
// and if they are equal,
// it will set the next value equal to the next.next value.

//#8
function cycleLinkedList() {
  let cycleList = new LinkedList();
  cycleList.insertLast('cat');
  cycleList.insertLast('dog');
  cycleList.insertLast('test');
  cycleList.insertLast('info');
  cycleList.insertLast('final');
  cycleList.insertLast('cat');
  cycleList.cycle('final');
  console.log('Should display true below');
  console.log(cycleList.cycleList());
}

cycleLinkedList();