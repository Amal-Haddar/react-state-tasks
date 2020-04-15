import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Task.css";
export default function Task({
  id,
  title,
  duration,
  description,
  type,
  date,
  deleteTask,
  updateTask,
}) {
  const [updateMode, setUpdateMode] = useState(false);
  const [titleToUpdate, setTitleToUpdate] = useState(title);
  const [durationToUpdate, setDurationToUpdate] = useState(duration);
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(description);
  const [typeToUpdate, setTypeToUpdate] = useState(type);
  const [dateToUpdate, setDateToUpdate] = useState(date);
  const handleUpdateTask = () => {
    updateTask(
      id,
      titleToUpdate,
      durationToUpdate,
      descriptionToUpdate,
      typeToUpdate,
      dateToUpdate
    );
    setUpdateMode(false);
  };
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            <div className="title">
              <span> Title : </span> {title} <span> Duration : </span> (
              {duration} mn) <span> Description : </span> {description}
              <span> Type : </span> {type} <span> Date : </span>
              {date}
            </div>
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={() => setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={durationToUpdate}
            name="duration"
            onChange={(e) => setDurationToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={descriptionToUpdate}
            name="description"
            onChange={(e) => setDescriptionToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={typeToUpdate}
            name="type"
            onChange={(e) => setTypeToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={dateToUpdate}
            name="date"
            onChange={(e) => setDateToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  );
}
Task.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
  description: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
};

Task.defaultProps = {
  duration: 30,
};
