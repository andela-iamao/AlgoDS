var Stack = require('../stacks');

function TwoStackQueue() {
    this.__frontStack = new Stack();
    this.__backStack = new Stack();
    this.store = this.join();
    this._count = 0;
}

TwoStackQueue.prototype.enqueueLeft = function(value) {
    this.__frontStack.push(value);
    this._count++;
    return this._count;
};

TwoStackQueue.prototype.enqueueRight = function(value) {
    this.__backStack.push(value);
    this._count++;
    return this._count;
};

TwoStackQueue.prototype.dequeueLeft = function(value) {
    this.__frontStack.pop(value);
    return --this._count;
};

TwoStackQueue.prototype.dequeueRight = function(value) {
    this.__backStack.pop(value);
    this._count--;
    return this._count;
};

TwoStackQueue.prototype.join = function () {
    var queue = this.__frontStack.inverse();
    for (var i = 0; i < this.__backStack.count(); i++) {
        queue[this.__frontStack.count() + i] = this.__backStack.storage[i];
    }
    return queue;
};
