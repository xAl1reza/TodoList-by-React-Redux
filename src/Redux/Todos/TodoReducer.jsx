import {
  SET_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_TODO,
  FILTER_TODOS,
} from "./TodoActionTypes";

const initalState = {
  todos: [],
};

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: action.payLoad,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payLoad),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payLoad.id
            ? { ...todo, completed: !action.payLoad.completed }
            : todo
        ),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payLoad, ...state.todos],
      };
    case FILTER_TODOS:
      return {
        ...state,
        todos: action.payLoad
      };
    default:
      return state;
  }
};

export default todoReducer;
