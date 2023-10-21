# New Year Chaos

## Table of Contents
- [Problem Statement](#problem-statement)
- [Logic](#logic)

## Problem Statement

It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

### Example
q = [1,2,3,5,4,6,7,8]

If person  bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

### Function Description
Complete the function minimumBribes in the editor below.
minimumBribes has the following parameter(s):
int q[n]: the positions of the people after all bribes

### Returns
No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.

### Input Format
The first line contains an integer , the number of test cases.
Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.

## Logic
1. Initialize two variables: num to keep track of the total number of bribes and chaotic to determine whether the queue is too chaotic (initialized to false).

2. Iterate through the queue q in reverse order, starting from the last person and moving towards the first person (i.e., from q.length - 1 to 0).

3. For each person at index i, check if the difference between their current position (q[i]) and their original position (which is i + 1 since the queue is 1-indexed) is greater than 3. If this condition is met, set chaotic to true and break out of the loop. This means the queue is too chaotic to determine the minimum number of bribes.

4. If the queue is not too chaotic, proceed to count the number of bribes for this person. To do this, start a nested loop from j = q[i] - 2 (since people can bribe at most 2 positions ahead of their original position) down to i.

5. In the nested loop, check if the person at position j had a higher original position than the person at position i. If this condition is met (i.e., q[j] > q[i]), increment the num variable to count the bribe.

6. After processing all elements in the queue, if chaotic is still false, print the value of num, which represents the minimum number of bribes needed to get the queue in its final state.

7. If chaotic is true, print "Too chaotic" to indicate that the queue is too chaotic to determine the minimum number of bribes.