import { useDispatch } from "react-redux";
import { updateTodo } from "../../Redux/Todos/TodoActions";

function UpdateTodo({ todo }) {
  const dispatch = useDispatch();

  return (
    <>
      {todo.completed ? (
        <i
          onClick={() => dispatch(updateTodo(todo))}
          className="text-2xl text-zinc-800 dark:text-gray-400 bi bi-check-all"
        ></i>
      ) : (
        <i
          onClick={() => dispatch(updateTodo(todo))}
          className="text-2xl text-zinc-800 dark:text-gray-400 bi bi-check"
        ></i>
      )}
    </>
  );
}

export default UpdateTodo;
