# Lonely integer

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem statement
Given an array of integers, where all elements but one occur twice, find the unique element.

### Example
a=[1,2,3,4,3,2,1]

The unique element is 4.

### Function Description
Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
- int a[n]: an array of integers

Returns
int: the element that occurs only once

### Input Format
The first line contains a single integer,n , the number of integers in the array.
The second line contains n space-separated integers that describe the values in .

### Constraints
- 1<= n < 100
- It is guaranteed that n is an odd number and that there is one unique element
- 0<= a[i] <= 100, where 0 <= i < n .

## Logic
1. The function lonelyinteger takes an array a as its parameter.
2. It defines an inner function called count which takes a value v as its parameter. The count function uses the filter method on the input array a to find all elements that are equal to v. It then returns the length of the filtered array, which represents the count of occurrences of the value v in the array.
3. The main part of the logic is implemented in a loop that iterates through each element of the input array a.
4. Inside the loop, it checks whether the count of occurrences of the current element a[i] is equal to 1. If the count is 1, it means that the current element appears only once in the array.
5. If the condition is satisfied, the function returns the current element a[i] as it is the lonely integer in the array.
6. If no element is found that appears only once in the array, the function will simply exit the loop and return undefined (or null in some cases) since there's no lonely integer.