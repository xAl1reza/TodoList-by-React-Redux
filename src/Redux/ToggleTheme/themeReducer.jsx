const TOGGLE_THEME = "TOGGLE_THEME";

const initailState = localStorage.getItem("theme") || "dark";

const themeReducer = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    default:
      return state;
  }
};

export default themeReducer;