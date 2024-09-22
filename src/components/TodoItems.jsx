import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, deleteTask, editTask }) => {
  return (
    <div className="item-containers">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          // Pass delete function
          deleteTask={() => deleteTask(index)}
          // Pass edit function
          editTask={() => editTask(index)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
