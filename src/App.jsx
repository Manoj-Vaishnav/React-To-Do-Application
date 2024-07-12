import Navbar from "./component/Navbar"
import Todo from "./component/Todo"
import About from "./component/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><hr className="border-b-2 m-2"/><Todo/></>,
  },
  {
    path:"/about",
    element:<><Navbar/><hr className="border-b-2 m-2"/><About/></>
  }
]);

function App() {
  return (
    <div >
    <RouterProvider router={router} />
    </div>
  )
}

export default App
