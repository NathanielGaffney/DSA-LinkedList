class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }
    insertLast(item){
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(item, pos){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.next.value !== pos) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        let tempNode = currNode.next;
        currNode.next = new _Node(item, tempNode);
    }
    insertAfter(item, pos){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.value !== pos) {
            if(currNode.next === null) {
                currNode.next = new _Node(item, null);
            } else {
                currNode = currNode.next;
            }
        }
        let tempNode = currNode.next;
        currNode.next = new _Node(item, tempNode);
    }
    insertAt(item, index){
        let i = 0;
        let currNode = this.head;
        if(index === 0){
            this.insertFirst(item)
        }
        while (i < index){
            currNode = currNode.next;
            i++;
        }
        this.insertBefore(item, currNode.value);
    }
    find(item){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item){
        if (!this.head){
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main(){
    const SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore('insBef', 'Apollo');
    SLL.insertAfter('insAft', 'Apollo');
    SLL.insertAt('hello', 1);
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 2);
    SLL.remove('Tauhida');
    console.log(SLL);
}

// main();