import Task1 from "./Task1"

const Task = ({tasks,onDelete,onToggle}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
             <Task1 key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </div>
    )
}

export default Task
