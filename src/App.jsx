import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import LoadingBoxes from "./Components/LoadingBoxes";

function App() {
  const LazyTodo = lazy(() => import("./Pages/Todos"));

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/todos"
              element={
                <Suspense fallback={<LoadingBoxes />}>
                  <LazyTodo />
                </Suspense>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
