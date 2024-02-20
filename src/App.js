import './App.css';
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import {useEffect, useState} from "react";
import EditTask from "./components/EditTask";

function App() {
    const [tasks, setTasks] = useState([]);

    let url = "https://jsonplaceholder.typicode.com/todos?userId=1"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setTasks(json))
    }, []);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const setTask = (task) => {
        task.completed = !task.completed;
        setTasks(tasks.map((t) => t.id === task.id ? task : t));
    }

  return (
    <div className="App">
     <TaskList tasks={tasks} deleteTask={deleteTask}  setTask={setTask}/>
      <AddTaskForm addTask={addTask}/>
    </div>
  );
}

export default App;
