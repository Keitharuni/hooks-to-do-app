import React, { useContext, memo } from "react";
import EditTodoForm from "./EditTodoForm";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Checkbox
} from "@material-ui/core";
import useToggle from "./hooks/useToggle";
import { DispatchContext } from "./contexts/TodosContext";
import { Edit, Delete } from "@material-ui/icons";

function Todo({ task, completed, id }) {
  const [isEditing, setIsEditing] = useToggle(false);
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm toggleEditing={setIsEditing} task={task} id={id} />
      ) : (
        <>
          <Checkbox
            style={{ color: "#57d46c" }}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
            checked={completed}
          />{" "}
          <ListItemText
            style={{
              cursor: "pointer",
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "gray" : "black"
            }}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}>
            {task}
          </ListItemText>
        </>
      )}
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit' onClick={setIsEditing}>
          <Edit color='primary' />
        </IconButton>
        <IconButton
          aria-label='Delete'
          onClick={() => dispatch({ type: "REMOVE", id: id })}>
          <Delete style={{ color: "red" }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default memo(Todo);
