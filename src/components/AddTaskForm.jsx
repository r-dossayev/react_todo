import React, {useState} from 'react';

const AddTaskForm = ({addTask}) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            completed: false
        }
        addTask(task);
        setTitle("");
    }
    return (
        <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div  role="form" >
                        <div className="modal-header">
                            <h4 className="modal-title">Add Task</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                            <input onClick={handleSubmit} type="submit" className="btn btn-success" data-dismiss="modal" value="add" />
                    </div>
                </div>
            </div>
        </div>
</div>
    );
};

export default AddTaskForm;