# Recursive Digit Sum

## Table of Contents 
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
We define super digit of an integer  using the following rules:
Given an integer, we need to find the super digit of the integer.
- If  x has only  digit, then its super digit is .
- Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .

For example, the super digit of  will be calculated as:

	super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  

### Example
n = '9875'
k=4

The number  is created by concatenating the string n k times so the initial 
p = 9875987598759875.

    superDigit(p) = superDigit(9875987598759875)
                  9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)

All of the digits of p sum to 116. The digits of  sum to .  is only one digit, so it is the super digit.

### Function Description

Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

string n: a string representation of an integer
int k: the times to concatenate  to make 

### Returns

int: the super digit of  repeated  times

### Input Format

The first line contains two space separated integers, n and k.