import Home from "./Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Playing from "./Playing";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Playing />,
    path: "/start",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
