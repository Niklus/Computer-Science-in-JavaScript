/*
	A stack is an ordered collection of items that follows 
	the LIFO (Last In First Out) principle 
	The end of the stack is known as the top and the opposite is known as the base. 
	The newest elements are near the top, and the oldest elements are near the base.
*/

function Stack() {
	
	// Storing items in the stack
	this.items = [];
}

// Adding items on top of the stack
Stack.prototype.push = function(element){ 
	this.items.push(element);
}; 

// Removing top item, and returning it
Stack.prototype.pop = function(){ 
	return this.items.pop();
};

// return top element without modifiying the stack
Stack.prototype.peek = function(){
	return this.items[this.items.length-1];
};

// return true if the stack is empty
Stack.prototype.isEmpty = function(){
	return this.items.length == 0;
};

// return size of the stack
Stack.prototype.size = function(){
	return this.items.length;
};

// empties stack
Stack.prototype.clear = function(){
	this.items = []; // or this.items.length = 0;
};

Stack.prototype.print = function(){
    console.log(this.items.toString());
};



// Testing the Stack class
var stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // 8

stack.push(11);
stack.push(15);

console.log(stack.size()); //  3
console.log(stack.isEmpty()); // false

stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
stack.print(); // outputs [5, 8]

// Use Cases