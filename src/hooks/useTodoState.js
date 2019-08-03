import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      setTodos(todos.filter(todo => todo.id !== todoId));
    },
    toggleTodo: todoId => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    updateTodo: (updateTodoText, todoId) => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, task: updateTodoText } : todo
        )
      );
    }
  };
};
