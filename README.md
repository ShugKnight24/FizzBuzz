# FizzBuzz

*Update:* Saw this question in a technical interview on 10/22/19 and the engineer I was paired with noted that this solution was fine, but it would have difficulty scaling with additions. He had an interesting recommendation for a solution that would reduce the number of conditions used. This not only reduces the amount of code written, but it allows for easier adding of new numbers / words in the future while minimizing the number of cases one would have to write. 

*Update:* Minor changes made on 8/17/2017. I was refactoring old code while streaming on Twitch. Changed name of scripts.js to script.js, added `'use strict';` in script.js, and caught an error that I was printing out 0 in the console version because I didn't start i at 1.

Will possibly revisit in the future to improve UI, although that is not too important.

I created an app that lists integers 1-100.
Numbers that are divisible by 3 are replaced with the word "Fizz."
Those divisible by 5 are replaced by the word "Buzz."
Those divisible by both 3 and 5 are replaced with the word "FizzBuzz."
Created a console.log and document.log variation.
