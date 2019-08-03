import React, { createContext } from "react";
import todoReducer from "../reducers/TodosReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [{ id: 1, task: "Make a To Do List", completed: false }];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
