import React, {useState} from 'react';

const EditTask = ({selectedTask ,setTask}) => {
    let [name, setName] = useState(selectedTask.title);
    let [isCompleted, setIsCompleted] = useState(selectedTask.completed);
    const setTask2 = () => {
        setTask({
            ...selectedTask,
            title: name,
            completed: isCompleted
        })
    }

    return (
        <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div>
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Employee</h4>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" required  value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>is completed</label>
                                <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)}/>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                            <input className="btn btn-info" data-dismiss="modal" value="Save" onClick={setTask2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;