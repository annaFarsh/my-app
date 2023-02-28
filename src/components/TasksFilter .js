import PropTypes from 'prop-types'
import React from 'react'
function TaskFilter({ changeFilter, filter }) {
    return (
        <div className="filters">
            <label className={filter === 'all' ? 'selected' : null} onClick={() => changeFilter('all')}>
                <input type="radio" />
                All
            </label>
            <label
                className={filter === 'active' ? 'selected' : null}
                onClick={() => {
                    changeFilter('active')
                }}
            >
                <input type="radio" />
                Active
            </label>
            <label className={filter === 'completed' ? 'selected' : null} onClick={() => changeFilter('completed')}>
                <input type="radio"></input>
                Completed
            </label>
        </div>
    )
}
TaskFilter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
}
export default TaskFilter
