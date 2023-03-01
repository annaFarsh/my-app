import React from 'react'
import PropTypes from 'prop-types'
function NewTaskForm({ setToDo, toDo, addToArray, setSec, setMin, sec, min }) {
    return (
        <form className="new-todo-form" onKeyDown={(e) => (e.key === 'Enter' ? addToArray(e) : null)}>
            <input
                type="text"
                onChange={(event) => setToDo(event.target.value)}
                value={toDo}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            ></input>
            <input
                type="text"
                onChange={(event) => setMin(event.target.value)}
                value={min}
                className="new-todo-form__timer"
                placeholder="Min"
            ></input>
            <input
                type="text"
                onChange={(event) => setSec(event.target.value)}
                value={sec}
                className="new-todo-form__timer"
                placeholder="Sec"
            ></input>
        </form>
    )
}
NewTaskForm.propTypes = {
    setToDo: PropTypes.func.isRequired,
    toDo: PropTypes.string,
    addToArray: PropTypes.func.isRequired,
    setSec: PropTypes.func.isRequired,
    setMin: PropTypes.func.isRequired,
    sec: PropTypes.string,
    min: PropTypes.string,
}
export default NewTaskForm
