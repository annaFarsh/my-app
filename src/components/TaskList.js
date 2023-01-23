import { Task } from "..//components/Task"

export const TaskList = ({array}) =>{
    return(<ul className="todo-list">
        {array.map((elem, index)=>{
            return (
            <li key = {index}>
             <Task newTask = {elem} />
            </li>)
           })}
        
        </ul>
    )
}