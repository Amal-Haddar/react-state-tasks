import React, { useState, useCallback } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TasksList from "./components/TasksList/TasksList";

function App() {
  const steps = ["Enter the task title", "click on add task"];
  let loading = false;

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn html",
      duration: 60,
      description: "stay tuned",
      type: "IT",
      date: "2020-03-06",
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
      description: "hhhh",
      description: "stay tuned",
      type: "IT",
      date: "2020-03-06",
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
      description: "hhhh",
      description: "stay tuned",
      type: "IT",
      date: "2020-03-06",
    },
  ]);

  const addTask = (title, duration, description, type, date) => {
    setTasks([...tasks, { title, duration, description, type, date }]);
  };

  const updateTask = (id, title, duration, description, type, date) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, duration, description, type, date } : task
    );
    setTasks(newTasks);
  };
  //to use after to explain callback and memo
  // const memoizedCallback = useCallback(addTask, [])

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      {loading && <div>Loading ... </div>}
      {!loading && (
        <div>
          <TaskForm addTask={addTask} />
          {
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          }
        </div>
      )}
    </div>
  );
}

export default App;
