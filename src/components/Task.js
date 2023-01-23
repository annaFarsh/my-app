export const Task = ({newTask}) => {
    return (
        
            <div className="view">
              <input className="toggle" type="checkbox"></input>
              <label>
                <span className="description">{newTask}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
         
        )
}