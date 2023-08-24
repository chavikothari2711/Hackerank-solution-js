# Cipher

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Jack and Daniel are friends. They want to encrypt their conversations so that they can save themselves from interception by a detective agency so they invent a new cipher.

Every message is encoded to its binary representation. Then it is written down k times, shifted by 0,1,2....k-1 bits. Each of the columns is XORed together to get the final encoded string.

If b=1001011 and k=4 it looks like so:

1001011     shift 0 
01001011    shift 1
001001011   shift 2
0001001011  shift 3
----------
1110101001  <- XORed/encoded string s


Now we have to decode the message. We know that k=4. The first digit in s=1 so our output string is going to start with 1. The next two digits are also 1, so they must have been XORed with 0. We know the first digit of our 4th shifted string is a 1 as well. Since the 4th digit of s is 0, we XOR that with our 1 and now know there is a 1 in the 4th position of the original string. Continue with that logic until the end.

Then the encoded message s and the keyk  are sent to Daniel.

Jack is using this encoding algorithm and asks Daniel to implement a decoding algorithm. Can you help Daniel implement this?

## Function Description
Complete the cipher function in the editor below. It should return the decoded string.
cipher has the following parameter(s):
- k: an integer that represents the number of times the string is shifted
- s: an encoded string of binary digits

### Input Format
The first line contains two integers n and k, the length of the original decoded string and the number of shifts.
The second line contains the encoded string s consisting of n+k-1 ones and zeros.

### Constraints
- 1<= n<= 10^6
- 1<= k <= 10^6
- |s| = n+k-1
It is guaranteed thats  is valid.

### Output Format
Return the decoded message of length n, consisting of ones and zeros.

### Sample Input 0
7 4
1110100110

### Sample Output 0
1001010

## Logic
1. Initialize an empty array called ans to store the computed values.
2. Initialize a variable pref to keep track of the XOR cumulative value.
3. Get the length of the input string s and store it in the variable n.
4. Start a loop that iterates over each character of the input string s:
    - Convert the current character to an integer and subtract 0 to convert it to its numeric value.
    - XOR the current numeric value with the value of pref and store it in a variable called val.
    - Push the computed val to the ans array.
    - Update the value of pref by XOR-ing it with val.
    - If the loop has iterated through at least k characters (window size), then XOR the oldest value in the window (at index i - k + 1) from pref to remove it from the window.
5. After the loop, create a new array arr containing the elements of ans from the beginning up to the element before the (k - 1)-th element.
6. Join the elements of the arr array into a single string without any separator.
7. Return the resulting modified string.