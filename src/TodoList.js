import React, { useContext } from "react";
import Todo from "./Todo";
import { Divider, Paper, List } from "@material-ui/core";
import { TodosContext } from "./contexts/TodosContext";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <Todo {...todo} key={todo.id} />
              {index < todos.length - 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
