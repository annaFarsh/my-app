import PropTypes from 'prop-types'
import React from 'react'
import TaskFilter from './TasksFilter '
function Footer({ array, changeFilter, clearCompleted }) {
    let countTasks = () => {
        let arrayActive = array.filter((elem) => elem.status !== 'statusCompleted')
        return arrayActive.length
    }
    return (
        <footer className="footer">
            <span className="todo-count">{countTasks() + ' items left'}</span>
            <TaskFilter changeFilter={changeFilter} />
            <button
                className="clear-completed"
                onClick={() => {
                    clearCompleted()
                }}
            >
                Clear completed
            </button>
        </footer>
    )
}
Footer.propTypes = {
    array: PropTypes.array,
    changeFilter: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
}
export default Footer
