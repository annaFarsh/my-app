import { formatDistanceToNow } from 'date-fns'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
function Task({ newTask, deleteListItem, id, changeListStatus, editListItem, changeEdit }) {
    const [editValue, setEditValue] = useState(newTask.body) //опять хук для сохранения и установки отредактированного li (по умолчанию - предыдущее значение)

    let listItem = (
        <div className="view">
            <input
                id={id}
                className={newTask.status === 'statusCompleted' ? 'toggle checked' : 'toggle'}
                onClick={() => changeListStatus(id)}
                type="checkbox"
            />
            <label htmlFor={newTask.id}>
                <span className="description">{newTask.body}</span>
                <span className="created">
                    {'created ' +
                        formatDistanceToNow(newTask.date, {
                            includeSeconds: true,
                            addSuffix: true,
                        })}
                </span>
            </label>
        </div>
    )

    let listItemEdit = (
        <form onSubmit={() => editListItem(id, editValue)}>
            <input
                className="edit"
                id={id}
                type="text"
                onChange={(event) => {
                    setEditValue(event.target.value)
                }}
                value={editValue}
            />
        </form>
    )

    return (
        <li className={newTask.status === 'statusCompleted' ? 'completed' : 'active'}>
            {newTask.edit ? listItemEdit : listItem}
            <button className="icon icon-edit" onClick={() => changeEdit(id)}></button>
            <button className="icon icon-destroy" onClick={() => deleteListItem(id)}></button>
        </li>
    )
}

Task.propTypes = {
    newTask: PropTypes.shape({
        id: PropTypes.number,
        body: PropTypes.string,
        status: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        edit: PropTypes.bool,
    }),
    deleteListItem: PropTypes.func.isRequired,
    id: PropTypes.number,
    changeListStatus: PropTypes.func.isRequired,
    editListItem: PropTypes.func.isRequired,
    changeEdit: PropTypes.func.isRequired,
}

export default Task
