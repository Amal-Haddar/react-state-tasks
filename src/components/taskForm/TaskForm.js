import React, { useState, useRef, memo } from "react";
import "./TaskForm.css";
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const inputTitle = useRef(null);
  const handleAddTask = () => {
    addTask(title, duration, description, type, date);
    setTitle("");
    setDescription("");
    setType("");
    setDate("");
    setDuration(0);
    inputTitle.current.focus();
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="task-form">
      <div className="toggle">
        <button className="togglebutton" onClick={toggleVisibility}>
          Show the adding task form
        </button>
      </div>
      {isVisible && (
        <table>
          <tbody>
            <tr>
              <td>Title </td>
              <td>
                <input
                  type="text"
                  name="title"
                  ref={inputTitle}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td> Duration</td>
              <td>
                <input
                  type="number"
                  value={duration}
                  name="duration"
                  onChange={(e) => setDuration(e.target.value)}
                />
              </td>
            </tr>
            {/* amal */}
            <tr>
              <td>Description</td>
              <td>
                <input
                  type="text"
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <input
                  type="text"
                  value={type}
                  name="type"
                  onChange={(e) => setType(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input
                  type="text"
                  value={date}
                  name="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            {/* fin amal */}
            <button className="button" onClick={handleAddTask}>
              Add a task
            </button>
          </tbody>
        </table>
      )}
    </div>
  );
}
export default memo(TaskForm);
