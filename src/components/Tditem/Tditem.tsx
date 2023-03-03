import React from "react";
import { useAppDispatch } from "../../hooks";
import { Form, Row } from "react-bootstrap";
import { IToDo } from "../models";
import { removeTodo, toggleComplete } from "../../store/todoSlice";
import "./item.scss";

const TodoItem: React.FC<IToDo> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <Row className="d-flex" style={{ position: "relative" }}>
      <div
        style={{
          cursor: "pointer",
          width: "15px",
          position: "absolute",
          left: "-4px",
          top: "-2px",
          fontSize: "18px",
        }}
        className="text-danger p-0"
        onClick={() => dispatch(removeTodo(id))}
      >
        &times;
      </div>
      <Form.Check
        reverse
        label={title}
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
        type="checkbox"
        id={id}
        className="text-center border-bottom"
      />
    </Row>
  );
};
export default TodoItem;
