import { formatDistanceToNow } from 'date-fns'
import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
function Task({ newTask, deleteListItem, id, changeListStatus, editListItem, changeEdit }) {
    const [editValue, setEditValue] = useState(newTask.body)
    const [pause, setPause] = useState(true)
    const [minOneTask, setMinOneTask] = useState(newTask.min)
    const [secOneTask, setSecOneTask] = useState(newTask.sec)

    function dropTime() {
        if (!pause) {
            if (secOneTask >= 0 && minOneTask >= 0) {
                setSecOneTask(secOneTask - 1)
                if (secOneTask === 0) {
                    setMinOneTask(minOneTask - 1)
                    setSecOneTask(60)
                }
                if (secOneTask === 0 && minOneTask === 0) {
                    setMinOneTask(0)
                    setSecOneTask(0)
                }
            }
        }
    }
    useEffect(() => {
        const timer = setInterval(dropTime, 1000)
        return () => clearInterval(timer)
    }, [minOneTask, secOneTask, pause])

    let listItem = (
        <div className="view">
            <input
                id={id}
                className={newTask.status === 'statusCompleted' ? 'toggle checked' : 'toggle'}
                onClick={() => changeListStatus(id)}
                type="checkbox"
            />
            <label htmlFor={newTask.id}>
                <span className="title">{newTask.body}</span>
                <span className="description">
                    <button onClick={() => setPause(false)} className="icon icon-play"></button>
                    <button
                        onClick={() => setPause(true)}
                        className={!pause ? 'icon icon-pause' : 'icon icon-stop'}
                    ></button>
                    <span className="timer">
                        {minOneTask}:{secOneTask}
                    </span>
                </span>

                <span className="created">
                    {'created ' +
                        formatDistanceToNow(newTask.date, {
                            includeSeconds: true,
                            addSuffix: true,
                        })}
                </span>
                <button className="icon icon-edit" onClick={() => changeEdit(id)}></button>
                <button className="icon icon-destroy" onClick={() => deleteListItem(id)}></button>
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
        sec: PropTypes.number,
        min: PropTypes.number,
    }),
    deleteListItem: PropTypes.func.isRequired,
    id: PropTypes.number,
    changeListStatus: PropTypes.func.isRequired,
    editListItem: PropTypes.func.isRequired,
    changeEdit: PropTypes.func.isRequired,
}

export default Task
