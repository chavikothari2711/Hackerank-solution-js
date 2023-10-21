# Grid Challenge

## Table of Contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement 
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

Example
grid=['abc','ade','efg']

The grid is illustrated below.

a b c
a d e
e f g
The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.

### Function Description

Complete the gridChallenge function in the editor below.

gridChallenge has the following parameter(s):

string grid[n]: an array of strings

### Returns

string: either YES or NO

### Input Format

The first line contains , the number of testcases.

Each of the next  sets of lines are described as follows:
- The first line contains , the number of rows and columns in the grid.
- The next  lines contains a string of length 

Each string consists of lowercase letters in the range ascii[a-z]

### Output Format

For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.

## Logic
1. Initialize a variable flag to 'YES'. This variable will be used to determine whether the grid meets the required conditions. If it remains 'YES' throughout the process, it means the grid can be rearranged as required. If it changes to 'NO' at any point, it indicates that the grid cannot be rearranged.

2. Create an empty array col[]. This array will be used to store the columns of the grid, with each column represented as a sorted array of characters.

3. Iterate through each row of the grid (using the variable i to keep track of the current row):
    - Split the current row string into an array of characters.
    - Sort the array of characters in lexicographical order (ascending order).
    - Append the sorted array to the col array, representing the current column.
    - Initialize a variable first with the first character of the sorted row.

4. Within the same loop for rows, iterate through the sorted characters in each row (using the variable j to keep track of the current character):
    - Compare the ASCII code of the current character with the previous character in the sorted row.
    - If the current character has a smaller ASCII code than the previous character, set flag to 'NO' and break out of the loop.
    - If flag is 'NO', break out of the row iteration as well.

5. After checking the rows, check the columns:
    - Iterate through each column (using the variable i to keep track of the current column):
    - Within the column loop, iterate through the sorted characters in each column (using the variable j to keep track of the current character):
    - Compare the ASCII code of the current character with the previous character in the column.
    - If the current character has a smaller ASCII code than the previous character, set flag to 'NO' and break out of the loop.
    - If flag is 'NO', break out of the column iteration as well.

6. Return the value of flag, which will be 'YES' if both rows and columns can be rearranged in non-decreasing order, and 'NO' if not.