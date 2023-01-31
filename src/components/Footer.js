import {TaskFilter} from "./TasksFilter "

export const Footer = ({array, changeFilter, clearCompleted}) => {
 let countTasks = () => {
 let arrayActive = array.filter((elem) => elem.status !== "statusCompleted");
  return arrayActive.length;
 }
return (
     <footer className="footer">
    <span className="todo-count">{countTasks() + ` items left`}</span>
<TaskFilter changeFilter={changeFilter} />
    <button className="clear-completed" onClick = {()=>{clearCompleted()}}>Clear completed</button>
  </footer>
)
}