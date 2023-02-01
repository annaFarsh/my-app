import PropTypes from 'prop-types'

import Task from '..//components/Task'
function TaskList({ array, deleteListItem, changeListStatus, editListItem, changeEdit }) {
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
}
export default TaskList
