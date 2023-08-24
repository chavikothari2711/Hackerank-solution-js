# Birthday Cake Candles

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.

### Function Description
Complete the function birthdayCakeCandles in the editor below.
birthdayCakeCandles has the following parameter(s):
- int candles[n]: the candle heights

Returns
- int: the number of candles that are tallest

### Input Format
The first line contains a single integer, n, the size of candles.
The second line contains n space-separated integers, where each integer i describes the height of candles[i].

### Constraints
- 1<= n <= 10^5
- 1 <= candles[i] <= 10^7 

### Sample Input 
4
3 2 1 3

### Sample Output 
2

### Explanation 
Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.

## Logic
1. Find Maximum height from the array using Math.max function.
2. Set count to 0
3. Iterate over array and increase the count when the array element is equal to maximum height.
4. Return count.