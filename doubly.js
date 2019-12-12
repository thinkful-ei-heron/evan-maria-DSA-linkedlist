class _Node {
    constructor(value, next) {
        this.head = null 
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(item) {
        const newNode = new _Node(item, this.head);
            if( this.head === null) {
                this.head = newNode
            } else 
            this.head.previous = newNode
            newNode.previous = newNode 
      }
}



function main() {
    let DLL = new DoublyLinkedList();
        DLL.insertFirst('')
}