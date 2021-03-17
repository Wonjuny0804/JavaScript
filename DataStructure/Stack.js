class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) return 'Stack is full!';

    this.array[this.top++] = value;
  }

  pop() {
    if (!this.top) return 'Stack is Empty';

    return this.array[--this.top];
  }

  peek() {
    if (!this.top) return 'Stack is Empty';

    return this.array[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }
}

const A_Stack = new Stack(8);
A_Stack.push(5);
console.log(A_Stack.array);
