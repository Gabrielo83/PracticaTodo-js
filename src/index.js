import "./styles.css";
import { Todo, TodoList } from "./classes/index";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();
// const tarea = new Todo("Aprender Javascript");

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem("my-key", "Prueba123");
// sessionStorage.setItem("my-key2", "Prueba123");

// setTimeout(() => {
//   localStorage.removeItem("my-key");
// }, 3000);

todoList.todos.forEach((todo) => {
  crearTodoHtml(todo);
});
