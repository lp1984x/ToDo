import React from "react";

import { Row } from "react-bootstrap";
import Tditem from "../Tditem/Tditem";
import { useAppSelector } from "../../hooks";

const TdList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <Row className="d-flex justify-content-center">
      {todos.map((td) => (
        <Tditem
          id={td.id}
          completed={td.completed}
          title={td.title}
          key={td.id}
        />
      ))}
    </Row>
  );
};

export default TdList;
