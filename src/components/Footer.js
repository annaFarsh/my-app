import {TaskFilter} from "./TasksFilter "

export const Footer = () => {
return (
     <footer className="footer">
    <span className="todo-count">1 items left</span>
<TaskFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>
)
}