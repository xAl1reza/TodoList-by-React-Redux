import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/Todos/TodoActions";

function DeleteTodo({ todoId }) {
  const dispatch = useDispatch();

  return (
    <>
      <i
        onClick={() => dispatch(deleteTodo(todoId))}
        className="text-2xl text-zinc-800 dark:text-gray-400 bi bi-trash-fill"
      ></i>
    </>
  );
}

export default DeleteTodo;
