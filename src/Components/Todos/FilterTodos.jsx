import axios from "axios";
import { useDispatch } from "react-redux";
import { filterTodos } from "../../Redux/Todos/TodoActions";

function FilterTodos() {
    const dispatch = useDispatch();

    const handleChange = async (e)=>{
        let optionValue;
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        if(e.target.value === "all"){
            optionValue = res.data.length
        }else{
            optionValue = e.target.value;
        }

        dispatch(filterTodos(optionValue))
    }
  return (
    <>
      <p className="text-zinc-800 dark:text-white my-3">Filter</p>
      <div className="flex gap-x-2 items-center">
        <select
          onChange={(e) => handleChange(e)}
          className="mb-6 w-48 outline-hidden p-1.5 rounded-md text-zinc-800 dark:text-white text-sm bg-transparent border border-zinc-800 dark:border-white"
        >
          <option className="text-zinc-800" value={"all"}>
            All
          </option>
          <option className="text-zinc-800" value={5}>
            5
          </option>
          <option className="text-zinc-800" value={10}>
            10
          </option>
          <option className="text-zinc-800" value={15}>
            15
          </option>
          <option className="text-zinc-800" value={30}>
            30
          </option>
          <option className="text-zinc-800" value={60}>
            60
          </option>
          <option className="text-zinc-800" value={100}>
            100
          </option>
        </select>
      </div>
    </>
  );
};

export default FilterTodos;
