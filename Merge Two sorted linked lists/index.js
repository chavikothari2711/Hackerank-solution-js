'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNewNode(value) {
    return { data: value, next: null };
}

function mergeLists(head1, head2) {
    let firstPointer = head1;
    let secondPointer = head2;
    let newhead = null;
    let newTail = newhead;
    let newNode = null;

    while (firstPointer != null && secondPointer != null) {

        if (firstPointer.data == secondPointer.data) {
            newNode = getNewNode(firstPointer.data);
            firstPointer = firstPointer.next;
        }
        else if (firstPointer.data < secondPointer.data) {
            newNode = getNewNode(firstPointer.data);
            firstPointer = firstPointer.next;
        }
        else if (firstPointer.data > secondPointer.data) {
            newNode = getNewNode(secondPointer.data);
            secondPointer = secondPointer.next;
        }
        if (newhead == null) {
            newhead = newNode;
            newTail = newhead;
        } else {
            newTail.next = newNode;
            newTail = newNode;
        }
        
    }

    if (firstPointer == null) {
        newTail.next = secondPointer;
    } else if (secondPointer == null) {
        newTail.next = firstPointer
    }
    return newhead;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
