import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { NewTaskForm } from "./components/NewTaskForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
//корневой элемент приложения
//c помощью хука useState 
const ToDoApp = () => {
  const [toDo, setToDo] = useState(""); //опред. состояние инпута при введении - toDo, устанавливается ф-цией setToDo
  const [arrayToDo, setToArray] = useState([]);//и 

  const addToArray = (event) => {
    let newItem = toDo;
    if (event.key === "Enter") {
      event.preventDefault();
      setToArray([...arrayToDo, newItem]);
      setToDo("");
    }
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <form>
        <NewTaskForm
setToDo = {setToDo} toDo = {toDo} addToArray = {addToArray}
        />
      </form>
      <section className="main">
        <TaskList array={arrayToDo} />
      </section>
      <Footer />
    </section>
  );
};

root.render(<ToDoApp />);
