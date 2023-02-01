import PropTypes from 'prop-types'
function NewTaskForm({ setToDo, toDo, addToArray }) {
    return (
        <input
            type="text"
            onChange={(event) => setToDo(event.target.value)}
            value={toDo}
            onKeyDown={addToArray}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
        ></input>
    )
}
NewTaskForm.propTypes = {
    setToDo: PropTypes.func.isRequired,
    toDo: PropTypes.string,
    addToArray: PropTypes.func.isRequired,
}
export default NewTaskForm
