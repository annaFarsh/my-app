import { formatDistanceToNow } from 'date-fns';
export const Task = ({newTask, deleteListItem, id, changeListStatus}) => {

    return (
        <li className = {newTask.status === "statusCompleted"?  "completed" : "active"} >
            <div className="view">
              <input id={id}  className = {newTask.status === "statusCompleted"?  "toggle checked" : "toggle"} onClick = {() => changeListStatus(id)} type="checkbox" />
              <label htmlFor = {newTask.id}>
                <span className="description">{newTask.body}</span>
                <span className="created">{`created `+ formatDistanceToNow(newTask.date, { includeSeconds: true, addSuffix: true })}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick = {()=>deleteListItem(id)}></button>
            </div>
        </li>
        )
}