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
    insertFirst(item){
        this.head = new _Node(item, this.head)
    }
    insertLast(item){
        let tempNode = this.head
        while(tempNode.next !== null){
            tempNode = tempNode.next
        }
        tempNode.ext =  new _Node(item, null)
    }
}


let ll = new LinkedList()
ll.insertFirst(5);
ll.insertFirst(2); 
ll.insertLast(10);


console.log(LinkedList)