var Stack = function(capacity) {
    this.storage = {};
    this._count = 0;
    this.capacity = capacity || 4;
};

Stack.prototype.push = function(value) {
    if (this._count === this.capacity) {
        return "Max capacity already reached. Remove element before adding a new one.";
    }
    this.storage[this._count++] = value;
    return this._count;
};

Stack.prototype.pop = function () {
    delete this.storage[--this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return this.storage[this._count];
};

Stack.prototype.count = function() {
    return this._count;
};

Stack.prototype.peek = function() {
    var lastIndex = this._count - 1;
    return this.storage[lastIndex];
};

Stack.prototype.contains = function(query) {
    var found = false;
    for(var i = 0; i < this._count; i++) {
        if (this.storage[i] === query) {
            return true;
        }
    }
    return found;
};

Stack.prototype.until = function(value) {
    var count = this._count;
    while(this.storage[count] !== value) {
        count--;
    }
    return this._count - count;
};

Stack.prototype.inverse = function() {
    var inverse = {};
    for(var i = 0; i < this._count; i++) {
        inverse[(this._count - 1) - i] = this.storage[i];
    }
    return inverse;
};

module.exports = Stack;
