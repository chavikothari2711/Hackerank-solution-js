# XOR Matrix

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Consider a zero-indexed matrix with  rows and  columns, where each row is filled gradually. Given the first row of the matrix, you can generate the elements in the subsequent rows using the following formula:

Each row is generated one by one, from the second row through the last row. Given the first row of the matrix, find and print the elements of the last row as a single line of space-separated integers.

Note: The  operator denotes bitwise XOR.

### Input Format

The first line contains two space-separated integers denoting the respective values of  (the number of columns in the matrix) and  (the number of rows in the matrix).
The second line contains  space-separated integers denoting the respective values of the elements in the matrix's first row.

### Constraints
- 1<= n <= 10^5
- 1<= m <=10^18
- 0<= a(i,j) <= 10^9

### Output Format
Print n space-separated integers denoting the respective values of the elements in the last row of the matrix.

### Sample Input 0
4 2
6 7 1 3

### Sample Output 0
1 6 2 5


## Logic
1. Calculate the length of the first_row and store it in n.

2. Decrement m by 1, which is used as a bitmask for generating a binary pattern to determine which XOR operations to perform. This is done to skip the first row (as 0 is subtracted).

3. Convert the value of m to its binary representation and store it in mb.

4. Determine the length of the binary representation of m and store it in lmb.

5. Initialize the result array with the values of first_row. This will be the initial row to which XOR operations will be applied.

6. Iterate through each bit in the binary representation of m (from left to right).
    a. If the current bit in mb is '1', perform the following operations:
    b. Create a copy of the result array and store it in the tmp variable.
    c. Calculate an offset value as 2 raised to the power of the current bit's position from the right (starting at 0).
    d. Iterate through the elements of the result array.
        i. For each element at index j, perform an XOR operation between the corresponding element in tmp (at index j) and the element in tmp that is offset positions ahead, wrapping around if necessary using modulo n.
        ii. Store the result of the XOR operation in the result array at index j.

7. After all iterations, the result array will contain the final row after applying XOR operations based on the binary pattern in m.

8. Return the result array as the final output.