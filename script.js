'use strict';

var largestNumber = 100;
/* Print FizzBuzz in the console & in the browser */
function fizzy(count){
	for (var i = 1; i <= count; i++) {
		var word = '';
		if (i % 3 === 0){
			word = 'Fizz';
		}
		if (i % 5 === 0){
			word += 'Buzz';
		}
		console.log((word || i) + '\n');
		document.write((word || i) + '<br>');
	}
}
fizzy(largestNumber);
