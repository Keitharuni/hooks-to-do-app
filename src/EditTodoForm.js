import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { Paper, TextField } from "@material-ui/core";
import { DispatchContext } from "./contexts/TodosContext";

function EditTodoForm({ toggleEditing, id }) {
  const [value, updateValue] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ padding: "0 1rem" }}>
      <form
        style={{ width: "100%" }}
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "UPDATE", id: id, updateTask: value });
          toggleEditing();
        }}>
        <TextField
          value={value}
          onChange={updateValue}
          margin='20px'
          label='Update To Do'
          fullWidth
          autoFocus
        />
      </form>
    </Paper>
  );
}

export default EditTodoForm;
