function Stack() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

Stack.prototype.push = function (value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
};

Stack.prototype.pop = function () {
    if (!this.tail) {
        return null;
    }
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    return val;
};

Stack.prototype.size = function () {
    var count = 0;
    var currentNode = this.head;
    while (currentNode != null) {
        count++;
        currentNode = currentNode.next;
    }
    return count;
};

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2
