# Staircase

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Staircase detail
This is a staircase of size n=4:
       #
      ##
     ###
    ####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n.

### Function Description
Complete the staircase function in the editor below.
staircase has the following parameter(s):
- int n: an integer

### Print
Print a staircase as described above.

### Input Format

A single integer, n, denoting the size of the staircase.

### Constraints
- 0< n <= 100

### Output Format
Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

### Sample Input
6 

### Sample Output

         #
        ##
       ###
      ####
     #####
    ######

### Explanation
The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.

## Logic
1. Outer Loop (i loop):
The outer loop iterates from 1 to n, representing the number of steps in the staircase.

2. First Inner Loop (j loop):
The first inner loop iterates from 0 to n - i. This loop is responsible for printing spaces before the # characters on each step. The number of spaces printed decreases as you go higher up the staircase.

3. Second Inner Loop (k loop):
The second inner loop iterates from 0 to i. This loop is responsible for printing the # characters on each step. The number of # characters printed increases as you go higher up the staircase.

4. Print Newline (console.log()): 
After the spaces and #characters have been printed for a particular step, a newline character is printed usingconsole.log()`. This moves the cursor to the next line, creating the effect of moving to the next step of the staircase.
