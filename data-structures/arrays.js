// The simplest memory data structure

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysOfWeek.length+ ' days');
console.log('-------');

// forEach
daysOfWeek.forEach(function(el){
	console.log(el);
});
console.log('-------');

var fibonacci = [0,1];

// loop
for(var i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
}
console.log('fibonacci numbers'); 
console.log(fibonacci);           
console.log('-------');

// Concat method
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat( 0, positiveNumbers);
console.log(numbers);
console.log('-------');

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var isEven = function (el) {
	console.log(el);
    return el % 2 == 0;
};

// Every 
var every = numbers.every(isEven);
console.log(every);
console.log('-------');

// Some
var some = numbers.some(isEven);
console.log(some);
console.log('-------');

// filter
var filtered = numbers.filter(function(el){
	return el % 2 == 0;
});
console.log(filtered);
console.log('-------');

// map
var mapped = numbers.map(function(el){
	return el + 1;
});
console.log(mapped);
console.log('-------');

// reduce
var reduced = numbers.reduce(function(prev,curr,i){
	return prev + curr;
});
console.log(reduced);
console.log('-------');

// Consider using eith Underscore or Lodash
// Check out and play with other built-in methods