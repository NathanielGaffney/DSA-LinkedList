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
            currNode = currNode.next;
        }
        if(currNode.next === null) {
            currNode.next = new _Node(item, null);
        } else {
            let tempNode = currNode.next;
        currNode.next = new _Node(item, tempNode);
        }
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
    findPrevious(item){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.next !== null) {
            if(currNode.next === null) {
                return `item not found 1`;
            } else if (currNode.next.value === item) {
                return currNode;
            } else {
                currNode = currNode.next;
            }
        }
        return `item not found 2`
    }
    findLast(){
        let currNode = this.head;
        if (!this.head){
            return null;
        }
        while(currNode.next !== null) {
            currNode = currNode.next;
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
    display(){
        let currNode = this.head;
        while(currNode !== null){
            if (currNode.next === null){
                console.log(`Value: ${currNode.value} :: Next: null\n`)
            } else {
                console.log(`Value: ${currNode.value} :: Next: ${currNode.next.value}\n`)
            }
            currNode = currNode.next;
        }
    }
    size(){
        let currNode = this.head;
        let acc = 0;
        while (currNode !== null){
            currNode = currNode.next;
            acc++;
        }
        return acc;
    }
    isEmpty(){
        if(this.head == null){
            return true;
        }
        return false;
    }
    reverse(){
        let i = 0;
        let node1 = this.head;
        let node2 = this.head;
        let node3 = this.head;
        while(node1 !== null){
            if(i === 0){
                node1 = node1.next;
                node2.next = null;
            } else {
                node3 = node1.next;
                node1.next = node2;
                this.head = node1;
                node2 = node1;
                node1 = node3; 
            }
            i++;
        }
        this.head = node2;
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
    // SLL.remove('squirrel');
    SLL.insertBefore('insBef', 'Apollo');
    SLL.insertAfter('insAft', 'Apollo');
    SLL.insertAt('hello', 1);
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 2);
    SLL.remove('Tauhida');
    console.log(SLL);
    SLL.display();
    console.log(SLL.size());
    console.log(SLL.isEmpty());
    const SLL2 = new LinkedList();
    console.log(SLL2.isEmpty());
    console.log(SLL.findPrevious('Apollo'));
    SLL.remove('insAft')
    SLL.display();
    console.log(SLL.findLast())
    SLL.reverse();
    SLL.display();


}

main();