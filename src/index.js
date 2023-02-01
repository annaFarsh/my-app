import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { NewTaskForm } from "./components/NewTaskForm";
import {PropTypes} from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ToDoApp = () => {
  const [toDo, setToDo] = useState(""); //c помощью хука useState опред. начальное состояние инпута и при введении - toDo, устанавливается ф-цией setToDo
  const [arrayToDo, setToArray] = useState([]); //аналогично здесь буду помещать в массив значение инпута по нажатию на Enter, с помощью функции setToArray

  const addToArray = (event) => {
    if (event.key === "Enter") {
      let listItem = {
        id: arrayToDo.length + 1,
        body: toDo,
        status: "statusActive",
        date: new Date(),
        edit: false,
      };
      event.preventDefault();
      setToArray([...arrayToDo, listItem]);
      setToDo("");
    }
  };

  const deleteListItem = (idCheck) => {
    setToArray([...arrayToDo.filter((elem) => elem.id !== idCheck)]);
  };
  const changeListStatus = (checkId) => {
    setToArray([
      ...arrayToDo.map((elem) => {
        if (elem.id === checkId && elem.status === "statusActive") {
          elem.status = "statusCompleted";
        } else if (elem.id === checkId && elem.status === "statusCompleted") {
          elem.status = "statusActive";
        }
        return elem;
      }),
    ]);
  };
  const changeEdit = (checkId) =>{
    setToArray([
      ...arrayToDo.map((elem) => {
        if (elem.id === checkId) {
          elem.edit = true;
        } 
        return elem;
      }),
    ]);
  }
    const editListItem = (checkId, text) => {
    setToArray([
      ...arrayToDo.map((elem) => {
        if (elem.id === checkId) {
          elem.edit = false;
          elem.body = text;

        } 
        return elem;
      }),
    ]);
  };

  const clearCompleted = ()=>{
    setToArray([...arrayToDo.filter((elem) => elem.status !== "statusCompleted")]);
   }
  const [filter, setFilter] = useState("all");
  const changeFilter = (status) => {
    setFilter(status);
  };

  let filteredArray = [...arrayToDo];
  if (filter === "completed") {

    filteredArray = arrayToDo.filter(
      (elem) => elem.status === "statusCompleted"
    );
  }
  if (filter === "active") {
    filteredArray = arrayToDo.filter((elem) => elem.status === "statusActive");
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <form>
        <NewTaskForm setToDo={setToDo} toDo={toDo} addToArray={addToArray}/>
      </form>
      <section className="main">
        <TaskList
          array={filteredArray}
          deleteListItem={deleteListItem}
          changeListStatus={changeListStatus}
          editListItem = {editListItem}
          changeEdit = {changeEdit}
        />
      </section>
      <Footer changeFilter={changeFilter} clearCompleted = {clearCompleted} array = {arrayToDo}/>
    </section>
  );
};

root.render(<ToDoApp />);
