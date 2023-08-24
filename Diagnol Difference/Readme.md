# Diagnol difference

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:
1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1+5+9 = 15 . The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17=2| .

### Function description
Complete the  function in the editor below.
diagonalDifference takes the following parameter:
- int arr[n][m]: an array of integers
Return
- int: the absolute diagonal difference

### Input Format
The first line contains a single integer, n , the number of rows and columns in the square matrix arr.
Each of the next  lines describes a row, arr[i], and consists of n  space-separated integers arr[i][j].

### Constraints
- -100<= arr[i][j] <= 100

### Output Format
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Sample Input
3
11 2 4
4 5 6
10 8 -12

### Sample Output
15

## Logic
1. find the sum of left diagonal where i and j are same
2. find the sum of right diagnol where i+j==size of matrix-1
3. return difference between right_diag_sum and left_diag_sum if it is positive or else return left_diag_sum - right_diag_sum.