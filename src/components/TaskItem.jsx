import React from 'react';

const TaskItem = ({task ,setSelectedTask, deleteTask , setTask}) => {

        const setTask2 = (task) => {
        setTask(task)
        }
    return (
        <tr className="for">


            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.completed?"Yes":"No"}</td>
            <td>
                <a  onClick={() => setTask2(task)}
                     className="edit" ><i className="material-icons" data-toggle="tooltip"
                                                                                     title="Edit">&#xE254;</i></a>
                <a onClick={() => deleteTask(task.id)}
                   className="delete" data-toggle="modal"><i className="material-icons"
                                                              data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
    );
};

export default TaskItem;