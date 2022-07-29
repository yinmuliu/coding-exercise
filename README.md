# Coding Exercise
Some coding exercise for practice.
## Questions
### Beach Planner
Write a function called beachPlanner that, given a minimum temperature and a maximum rainfall forecast, 
outputs a list of day(s) you can go to the beach.

Example:
With the following forecast:

Monday: the temperature is 20 and there is 12mm of rain <br>
Tuesday: the temperature is 25 and there is 6mm of rain<br>
Wednesday: the temperature is 27 and there is 24mm of rain<br>
Thursday: the temperature is 32 and there is 65mm of rain<br>
Friday: the temperature is 18 and there is 2mm of rain<br>
Saturday: the temperature is 26 and there is 0mm of rain <br>
Sunday: the temperature is 27 and there is 14mm of rain<br>
I'm ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain forecast, 
the output of the function should be: "Tuesday and Saturday".

```
beachPlanner(24,8) // return "Tuesday and Saturday"
```

Hint: Your function will need to access the data. Spend a good amount of time thinking about how you'll store your data 
for each day before you even write code to solve this. You can assume the data structure will be the same for each forecast.

### Compare Lists
Write a function called listDiff that takes two arguments, which we will call lists (they are both normal arrays), and returns the characters from the first list that do not appear in the second.

It should remove all values from the first list, which are present in second list keeping their order. If a value is present in the second list, all of its occurrences must be removed from the other.

Examples:
```
listDiff([], [4,5]); // => []
listDiff([3,4], [3]); // => [4]
listDiff([1,8,2], []); // => [1,8,2]
listDiff([1,2,2,2,3], [1,2]); // => [3]
