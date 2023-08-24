# Zig Zag Sequence

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k=(n+1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

### Example
a=[2,3,5,1,4]
Now if we permute the array as [1,4,5,3,2], the result is a zig zag sequence.
Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

### Note: 
You can modify at most three lines in the given code. You cannot add or remove lines of code.
To restore the original code, click on the icon to the right of the language selector.

### Input Format
The first line contains t the number of test cases. 
The first line of each test case contains an integer n, denoting the number of array elements. The next line of the test case contains n elements of array a.

### Constraints
- 1 <= t <= 20
- 1 <= n <= 10,000 (n is always odd)
- 1 <= a(i) <= 10^9

### Output Format
For each test cases, print the elements of the transformed zig zag sequence in a single line.

## Logic
### ProcessData logic
1. split the input via \n and space using regex expression and store it in x array.
2. The first element of x array is number of test case.
3. Initialize a variable pos to 1.
4. Iterate over x from 1 to its length.
5. get the size of each test case. Create a for loop till the size and extract and store in differnt array and send to function findZigZag and print the value you get.

### findZigZag function logic
1. Find the Middle Value:
The function starts by finding the middle value of the input array using Math.max(...input) to determine the value with the maximum numeric value.
2. Remove Middle Value from Input:
The middle value is removed from the input array using input.splice(input.indexOf(middleval.toString()), 1). It converts the middle value to a string to match the array elements.
3. Divide the Input Array:
The input array is divided into two parts: the left side (with smaller values) and the right side (with larger values). The left side will be used for the zigzag pattern, and the right side will be added at the end.
4. Loop Through Left Side (Smaller Values):
A loop runs for half of the input array's length (mid). In each iteration, it finds the smallest value in the remaining input array using Math.min(...input) and finds its position using input.indexOf(smallValue.toString()). This value is then removed from the input array using splice, and the small value is pushed to the arr array.
5. Add Middle Value to arr:
After the loop completes, the middle value that was removed earlier is pushed to the arr array.
6. Sort and Reverse the Right Side:
The remaining values in the input array (right side) are sorted and then reversed using input.sort() and input.reverse().
7. Merge Arrays and Return:
The left side (arr), middle value, and sorted-reversed right side (input) are merged together using the push method and the spread operator .... Finally, the merged array is joined into a space-separated string using join(' ') and returned.