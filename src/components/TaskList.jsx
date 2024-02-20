import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks, deleteTask, setTask}) => {

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Tasks</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i
                                    className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Is Completed</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks?.map((task) => {
                            return <TaskItem key={task.id} task={task} deleteTask={deleteTask}  setTask={setTask}/>
                        })}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default TaskList;