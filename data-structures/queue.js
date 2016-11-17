/*
	A queue is an ordered collection of items that follows the FIFO (First In First Out) principle. 
	The addition of new elements in a queue is at the tail and the removal is from the front. 
	The newest element added to the queue must wait at the end of the queue.
*/

function Queue() {
	this.items = [];
}

// Add elements to the back of the queue
Queue.prototype.enqueue = function(element){ 
	this.items.push(element);
}; 

// remove item in front of queue, and return it
Queue.prototype.dequeue = function(){ 
	return this.items.shift();
};

// return front element without modifiying the stack
Queue.prototype.front = function(){
	return this.items[0];
};

// return true if the queue is empty
Queue.prototype.isEmpty = function(){
	return this.items.length == 0;
};

// return size of the queue
Queue.prototype.size = function(){
	return this.items.length;
};

// empties queue
Queue.prototype.clear = function(){
	this.items = []; // or this.items.length = 0;
};

Queue.prototype.print = function(){
    console.log(this.items.toString());
};


// Testing the queue class
var queue = new Queue();
console.log(queue.isEmpty()); // true


queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();

console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();
queue.print();

// Use Cases