/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  #todoList = [];

  add(todo) {
    this.#todoList.push(todo);
  }

  remove(index) {
    if (index >= this.#todoList.length) return 0;
    this.#todoList.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index < this.#todoList.length) {
      this.#todoList[index] = updatedTodo;
    } 
  }

  getAll() {
    return this.#todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.#todoList.length) return null;
    return this.#todoList[indexOfTodo];
  }

  clear() {
    this.#todoList.length = 0;
    // this.#todoList = [];
    // this.#todoList.splice(0, this.#todoList.length);
  }
}

module.exports = Todo;
