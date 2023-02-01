import PropTypes from 'prop-types'
function TaskFilter({ changeFilter, filter }) {
    return (
        <ul className="filters">
            <li>
                <button className={filter === 'all' ? 'selected' : null} onClick={() => changeFilter('all')}>
                    All
                </button>
            </li>
            <li>
                <button
                    className={filter === 'active' ? 'selected' : null}
                    onClick={() => {
                        changeFilter('active')
                    }}
                >
                    Active
                </button>
            </li>
            <li>
                <button
                    className={filter === 'completed' ? 'selected' : null}
                    onClick={() => changeFilter('completed')}
                >
                    Completed
                </button>
            </li>
        </ul>
    )
}
TaskFilter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
}
export default TaskFilter
