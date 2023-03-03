import TdForm from "./components/Form/TdForm";
import { useState } from "react";

import { useAppDispatch } from "./hooks";
import { addTodo } from "../src/store/todoSlice";
import Header from "./components/Header/Header";

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
      <TdForm text={text} updateText={setText} handleAction={addTask} />
    </>
  );
}

export default App;
