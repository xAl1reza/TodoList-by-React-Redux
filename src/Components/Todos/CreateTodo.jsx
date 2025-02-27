import { useState } from "react";
import { addTodo } from "../../Redux/Todos/TodoActions";
import { useDispatch } from "react-redux";

function CreateTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <>
      <h4 className="my-3 text-xl text-zinc-800 dark:text-white">
        Create Todo:
      </h4>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="felx flex-col md:flex-row"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Todo Title"
          className="w-full mb-3 sm:mb-0 sm:mr-3 sm:w-[70%] h-12 outline-hidden bg-transparent border dark:border-white border-zinc-800 dark:text-white p-2 rounded-md"
          type="text"
        />
        <p className="my-3 text-red-600 dark:text-red-500">
          {title ? "" : "Title is required"}
        </p>
        <button
          className="flex gap-1 my-4 items-center px-6 text-white dark:text-zinc-900 py-2 rounded-md bg-zinc-950 dark:bg-gray-400 cursor-pointer"
          type="submit"
        >
          Create
        </button>
      </form>
    </>
  );
}

export default CreateTodo;
