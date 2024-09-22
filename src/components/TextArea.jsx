import React, { useState, useEffect } from "react";

function TextArea({ addTask, editingTask }) {
  const [taskName, setTaskName] = useState(editingTask.name);
  const [taskDate, setTaskDate] = useState(editingTask.dueDate);

  useEffect(() => {
    setTaskName(editingTask.name);
    setTaskDate(editingTask.dueDate);
  }, [editingTask]);

  const handleAddTask = () => {
    if (taskName && taskDate) {
      const newTask = {
        name: taskName,
        dueDate: taskDate,
      };
      addTask(newTask);
      setTaskName("");
      setTaskDate("");
    }
  };

  return (
    <div className="container">
      <div className="input-area">
        <div className="row item-container">
          <div className="col-lg-5 col-12 mb-2">
            <div className="mx-2">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-5 col-12 mb-2">
            <div className="mx-1">
              <input
                type="date"
                className="form-control"
                placeholder="Due Date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-12">
            <button
              type="button"
              className="btn btn-success s-button w-100"
              onClick={handleAddTask}
            >
              {editingTask.name ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
