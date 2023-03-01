import PropTypes from 'prop-types'
import React from 'react'
import Task from './Task'
function TaskList({ array, deleteListItem, changeListStatus, editListItem, changeEdit, goTime, stopTime }) {
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
                        editListItem={editListItem}
                        changeEdit={changeEdit}
                        goTime={goTime}
                        stopTime={stopTime}
                    />
                )
            })}
        </ul>
    )
}

TaskList.propTypes = {
    array: PropTypes.array,
    deleteListItem: PropTypes.func.isRequired,
    changeListStatus: PropTypes.func.isRequired,
    editListItem: PropTypes.func.isRequired,
    changeEdit: PropTypes.func.isRequired,
    goTime: PropTypes.func.isRequired,
    stopTime: PropTypes.func.isRequired,
}
export default TaskList
