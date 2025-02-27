import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../Redux/Todos/TodoActions";
import UpdateTodo from "../Components/Todos/UpdateTodo";
import DeleteTodo from "../Components/Todos/DeleteTodo";
import CreateTodo from "../Components/Todos/CreateTodo";
import FilterTodos from "../Components/Todos/filterTodos";

function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className="container my-8">
        <h2 className="text-center my-10 text-zinc-800 dark:text-white text-4xl">
          Todo Page
        </h2>
        <CreateTodo />
        <FilterTodos />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {todos &&
            todos.map((todo) => (
              <div
                className={`flex justify-between items-center p-4 border ${
                  todo.completed && "bg-gray-300 dark:bg-zinc-900"
                } border-zinc-800 dark:border-white rounded-md shadow-custome shadow-zinc-800 dark:shadow-white`}
                key={todo.id}
              >
                <p className="text-zinc-900 dark:text-white">
                  {todo.completed ? (
                    <del>{todo.title}</del>
                  ) : (
                    <span>{todo.title}</span>
                  )}
                </p>
                <div className="flex items-center gap-x-1">
                  <UpdateTodo todo={todo} />
                  <DeleteTodo todoId={todo.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
