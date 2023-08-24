# Min Max sum

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

### Example
arr=[1,3,5,7,9]
The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24. The function prints

### Output
16 24

### Function Description
Complete the miniMaxSum function in the editor below.
miniMaxSum has the following parameter(s):
- arr: an array of 5 integers

### Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

### Input Format
A single line of five space-separated integers.

### Constraints

1 <= arr[i] <= 10^9

### Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

### Sample Input
1 2 3 4 5

### Sample Output
10 14

## Logic
1. Initialize an empty array a to store the sums of subarrays.
2. Initialize a variable c to keep track of the element being excluded from the sum.
3. Iterate through each element in the arr array using a loop:
- For each element at index i, calculate the sum of the subarray by excluding the element at index i. This is done by iterating through the array again and summing all elements except the one at index c.
- Increment c to move on to the next element for exclusion.
- Push the calculated sum into the array a.
4. Sort the array a in ascending order.
5. Calculate the length of the sorted array minus one (denoted as l).
6. Log the first element (minimum sum) and the last element (maximum sum) of the sorted array, separated by a space