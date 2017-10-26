function Queue(capacity) {
    this.store = {};
    this._count = 0;
    this.capacity = capacity || 4;
}

Queue.prototype.enqueue = function(value) {
    if (this.capacity === this._count) {
        return "Max capacity already reached. Remove element before adding a new one.";
    }
    this.store[this._count++] = value;
    return this._count;
};
// Time complexity:

Queue.prototype.dequeue = function() {
    for (var i = 0; i < this._count; i++) {
        this.store[i] = this.store[i + 1];
    }
    delete this.store[this._count - 1];
    this._count--;
    return this.store[this._count - 1];
};
// Time complexity:

Queue.prototype.peek = function() {
    return this.store[this._count - 1];
};

Queue.prototype.count = function() {
    return this._count;
};

Queue.prototype.contains = function(value) {
    for(var i = 0; i < this._count; i++) {
        if (this.store[i] === value) {
            return true;
        }
    }
    return false;
};

Queue.prototype.until = function(value) {
    var count = 1;
    while (this.store[count - 1] !== value) {
        count++;
    }
    return count;
};

var pizzaLine = new Queue();
x