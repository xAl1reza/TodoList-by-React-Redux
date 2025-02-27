import { SET_TODO, DELETE_TODO , UPDATE_TODO  , ADD_TODO , FILTER_TODOS} from "./TodoActionTypes";
import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: SET_TODO, payLoad: res.data });
  };
};

export const deleteTodo = (tododId) => {
  return {
    type: DELETE_TODO,
    payLoad: tododId,
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payLoad: todo,
  };
};

export const addTodo = (title) => {
  return async (dispatch) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos" , {
      title : title,
      completed : false
    });
    dispatch({ type: ADD_TODO, payLoad: res.data });
  };
};

export const filterTodos = (value) => {
  return async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`);
    dispatch({ type: FILTER_TODOS, payLoad: res.data });
  };
};