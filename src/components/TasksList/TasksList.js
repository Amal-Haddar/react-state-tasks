import React, { useState } from "react";
import Task from "../task/Task";
import "./TasksList.css";
export default function TasksList({ tasks, deleteTask, updateTask }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="tasks-list">
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        {isVisible &&
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              duration={task.duration}
              description={task.description}
              type={task.type}
              date={task.date}
              details={task.details}
              deleteTask={deleteTask}
              updateTask={updateTask}
            >
              {task.description}
              {task.type}
              {task.date}
              <div>Hello</div>
              <div>Hi</div>
            </Task>
          ))}
      </div>
    </div>
  );
}
