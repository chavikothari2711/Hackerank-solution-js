# Merge two sorted linked lists

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

### Function Description
Complete the mergeLists function in the editor below.
mergeLists has the following parameters:
- SinglyLinkedListNode pointer headA: a reference to the head of a list
- SinglyLinkedListNode pointer headB: a reference to the head of a list

### Returns
SinglyLinkedListNode pointer: a reference to the head of the merged list

### Input Format
The first line contains an integer , the number of test cases.
The format for each test case is as follows:
The first line contains an integer , the length of the first linked list.
The next  lines contain an integer each, the elements of the linked list.
The next line contains an integer , the length of the second linked list.
The next  lines contain an integer each, the elements of the second linked list.

### Sample Input

1
3
1
2
3
2
3
4

### Sample Output
1 2 3 3 4 

## Logic
1. Initialize two pointers, firstPointer and secondPointer, to the heads of the two input linked lists, head1 and head2, respectively.

2. Initialize a new linked list with newhead set to null. Also, initialize newTail and newNode to null.

3. Start a loop that continues as long as both firstPointer and secondPointer are not null. Inside the loop, the function does the following:
    a. Check if the data at the current nodes pointed by firstPointer and secondPointer is the same. If they are equal, create a new node newNode with the same data, and move firstPointer to the next node.
    b. If the data at the current node pointed by firstPointer is less than the data at the current node pointed by secondPointer, create a new node newNode with the data from firstPointer, and move firstPointer to the next node.
    c. If the data at the current node pointed by firstPointer is greater than the data at the current node pointed by secondPointer, create a new node newNode with the data from secondPointer, and move secondPointer to the next node.
    d. Append the newNode to the merged list:
        - If newhead is null, it means this is the first node in the merged list, so set newhead and newTail to the new node.
        - If newhead is not null, it means there are already nodes in the merged list, so set the next of the newTail to the new node and update newTail to the new node.

4. After the loop, one of the input lists (firstPointer or secondPointer) might still have some elements left. If firstPointer is null, it means all elements from head1 have been processed, so you set newTail.next to the remaining elements in secondPointer. If secondPointer is null, it means all elements from head2 have been processed, so you set newTail.next to the remaining elements in firstPointer.

5. Finally, return newhead, which is the head of the merged linked list containing all elements in ascending order.