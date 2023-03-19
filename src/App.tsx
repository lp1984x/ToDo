import TdForm from "./components/Form/TdForm";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch } from "./hooks";
import { addTodo } from "../src/store/todoSlice";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import "./app.scss";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center">
        <Routes>
          <Route
            path="/"
            element={
              <TdForm text={text} updateText={setText} handleAction={addTask} />
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
