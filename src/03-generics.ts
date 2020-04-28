export class Queue {
  queue = [];

  put(value) {
    this.queue = [value, ...this.queue];
  }

  take() {
    return this.queue.pop();
  }
}

console.log("The queue of numbers...");
const queueOfNumbers = new Queue();
queueOfNumbers.put("1");
queueOfNumbers.put(2);
queueOfNumbers.put(3);
console.log(queueOfNumbers.take());
console.log(queueOfNumbers.take());

console.log("The queue of strings...");
const queueOfStrings = new Queue();
queueOfStrings.put("first");
queueOfStrings.put(2);
queueOfStrings.put("third");
console.log(queueOfStrings.take());
console.log(queueOfStrings.take());

console.log("The queue of users...");
const queueOfUsers = new Queue();
queueOfUsers.put({ id: 1, mame: "Bob", email: "jack@email.com" });
queueOfUsers.put({ id: 2, name: "Jack", email: "jack@email.com" });
queueOfUsers.put({ id: 3, name: "Anna", email: "anna@email.com" });

const firstUser = queueOfUsers.take();
console.log(`Handling user ${firstUser.name.toUpperCase()}`);
