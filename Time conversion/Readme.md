# Time Conversion

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

### Note: 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

### Example
- s='12:01:00PM'
  Return '12:01:00'.

- s= '12:01:00AM'
  Return '00:01:00'.

### Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
- string s: a time in  hour format

Returns
- string: the time in  hour format

### Input Format

A single string  that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM  or hh:mm:ssPM ).

### Constraints
- All input times are valid

### Sample Input
07:05:45PM

### Sample Output
19:05:45

## Logic
1. Extract t = AM or PM , h = hh (make it integer using parseInt() method ) and the restd = left over
2. Check if t is AM or PM 
- If t==AM check if hour is 12 , if yes then make h = '00' else extract h again (as on making integer if hh is 07 it will be 7)
- if t==PM check if hour is 12 , if yes then keep h='12' else add 12 in it and make it string using toString() method
3. concat restd (left over) and h (final hour) and return it