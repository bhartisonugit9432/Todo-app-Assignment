import "bootstrap/dist/css/bootstrap.min.css";
function TodoItem({ todoName, todoDate, deleteTask, editTask }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <p>{todoName}</p>
                </th>
                <th scope="col">
                  <p>{todoDate}</p>
                </th>
                <th scope="col">
                  <button
                    type="button"
                    className="btn btn-warning s-button"
                    onClick={editTask}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger s-button"
                    onClick={deleteTask}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
