import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";

export const Task = ({
  newTask,
  deleteListItem,
  id,
  changeListStatus,
  editListItem,
  changeEdit,
}) => {
  const [editValue, setEditValue] = useState(newTask.body);//опять хук для сохранения и установки отредактированного li (по умолчанию - предыдущее значение)

  let listItem;
  if (!newTask.edit) {
    listItem = (
      <div className="view">
        <input
          id={id}
          className={
            newTask.status === "statusCompleted" ? "toggle checked" : "toggle"
          }
          onClick={() => changeListStatus(id)}
          type="checkbox"
        />
        <label htmlFor={newTask.id}>
          <span className="description">{newTask.body}</span>
          <span className="created">
            {`created ` +
              formatDistanceToNow(newTask.date, {
                includeSeconds: true,
                addSuffix: true,
              })}
          </span>
        </label>
      </div>
    );
  } else if (newTask.edit) {
    listItem =
    (
      <input
        className="edit" //здесь остановилась
        id={id}
        type="text"
        onChange={(event) => {
          setEditValue(event.target.value);
        }}
        value={editValue}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
          editListItem(id, editValue);
        }}}
      />
    );
  }

  return (
    <li
      className={newTask.status === "statusCompleted" ? "completed" : "active"}
    >
      {listItem}
      <button
        className="icon icon-edit"
        onClick={() => changeEdit(id)}
      ></button>
      <button
        className="icon icon-destroy"
        onClick={() => deleteListItem(id)}
      ></button>
    </li>
  );
};
