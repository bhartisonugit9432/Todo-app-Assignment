// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AppName from "./components/AppName";
import TextArea from "./components/TextArea";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    { name: "Buy milk", dueDate: "04/03/2024" },
    { name: "Buy crud", dueDate: "04/03/2024" },
    { name: "Buy bread", dueDate: "04/03/2024" },
  ]);

  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingTask, setEditingTask] = useState({ name: "", dueDate: "" });

  const addTask = (newTask) => {
    if (editingIndex >= 0) {
      const updatedTasks = todoItems.map((item, index) =>
        index === editingIndex ? newTask : item
      );
      setTodoItems(updatedTasks);
      setEditingIndex(-1);
    } else {
      setTodoItems([...todoItems, newTask]);
    }
    setEditingTask({ name: "", dueDate: "" });
  };

  const deleteTask = (index) => {
    const updatedTasks = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditingTask(todoItems[index]);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="todo-container">
          <AppName />
          <div className="item-containers">
            <TextArea addTask={addTask} editingTask={editingTask} />
          </div>
          <div className="item-container table">
            <TodoItems
              todoItems={todoItems}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
