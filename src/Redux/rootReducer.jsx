import { combineReducers } from "redux";
import themeReducer from "./ToggleTheme/themeReducer";
import todoReducer from "./Todos/TodoReducer";

const rootReducer = combineReducers({
    theme : themeReducer,
    todos : todoReducer
});

export default rootReducer;