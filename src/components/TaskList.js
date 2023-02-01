import { Task } from "..//components/Task";

export const TaskList = ({ array, deleteListItem, changeListStatus, editListItem, changeEdit }) => {
  return (
    <ul className="todo-list">
      {array.map((elem) => {
        return (
          <Task
            newTask={elem}
            key={elem.id}
            id={elem.id}
            deleteListItem={deleteListItem}
            changeListStatus={changeListStatus}
            editListItem = {editListItem}
            changeEdit = {changeEdit}
          />
        );
      })}
    </ul>
  );
};
