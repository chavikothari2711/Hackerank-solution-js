# Caeser Cipher

## Table of contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example
s = There's-a-starman-waiting-in-the-sky
k=3

The alphabet is rotated by 3, matching the mapping above. The encrypted string is :
Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb

### Note:
The cipher only encrypts letters; symbols, such as -, remain unencrypted.

### Function Description
Complete the caesarCipher function in the editor below.
caesarCipher has the following parameter(s):
- string s: cleartext
- int k: the alphabet rotation factor

Returns
- string: the encrypted string

### Input Format
- The first line contains the integer, n, the length of the unencrypted string.
- The second line contains the unencrypted string, s.
- The third line contains k, the number of letters to rotate the alphabet by.

### Constarints
- 1<= n <= 100
- 0<= k <= 100
s is valid ASCII string without any space.

### Sample Input
11
middle-Outz
2

### Sample Output
okffng-Qwvb

### Explanation
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b

## Logic
1. The function caesarCipher(s, k) takes two parameters: s (the input string) and k (the number of positions to shift the characters).
2. The function first checks if k is less than or equal to 0. If so, it returns the original input string s unchanged, as there's no need to perform any encryption in this case.
3. If k is greater than 0, the function proceeds to loop through each character in the input string s.
4. For each character c, the code checks whether it is a letter using the regular expression /[a-z]/i.
5. If c is a letter, its Unicode code is obtained using s.charCodeAt(i).
6. If the code is within the range of uppercase letters (65 to 90), the character is shifted by (code - 65 + k) % 26 positions. This ensures that the character wraps around the alphabet if the shift goes beyond 'Z'.
7. If the code is within the range of lowercase letters (97 to 122), the same shifting logic is applied, but with lowercase characters and modulo operation.
8. The shifted character c is appended to the output string.
9. After processing all characters, the output string containing the encrypted text is returned.