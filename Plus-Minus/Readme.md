# Plus Minus

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## PROBLEM STATEMENT
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  6 places after the decimal.

### Note: 
This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^(-4) are acceptable.

### Example
arr=[1,1,0,-1,-1]
There are  elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000 ,2/5 = 0.400000  and 1/5 = 0.200000. Results are printed as:

### Output
0.400000
0.400000
0.200000

### Function Description
Complete the plusMinus function in the editor below.
plusMinus has the following parameter(s):
- int arr[n]: an array of integers

### Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

### Input Format
- The first line contains an integer, n, the size of the array.
- The second line contains n  space-separated integers that describe arr[n]

### Constraints
0 < n <= 100
-100 <= arr[i] <= 100

### Output Format
Print the following 3 lines, each to 6 decimals:
- proportion of positive values
- proportion of negative values
- proportion of zeros

## Logic
1. Filter and get 3 different array for positive, negative and zero numbers
2. Divide the length of filtered array with actual array length 
3. Print the answer using toFixed() method to 6 decimal places
