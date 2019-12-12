class _Node {
    constructor(value, next, previous) {
        this.value = value
        this.previous = previous
        this.next = next
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(item) {
        const newNode = new _Node(item, this.head, null);
            if( this.head === null) {
                this.head = newNode
            } else 
            this.head.previous = newNode
            newNode.previous = newNode 
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
        let currNode = this.find(before)
        let tempNode = new _Node (item, currNode, currNode.previous)
        currNode.previous.next = tempNode;
        currNode.previous = tempNode
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
}

function main() {
    let DLL = new DoublyLinkedList();
        DLL.insertFirst('Tauron')
        DLL.insertLast('Picon')
        DLL.insertBefore('Apple', 'cereal')
        DLL.display();
}

main();