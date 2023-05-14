
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> ,
    },
    {
      path:"/dashboard",
      element: <Dashboard/>
    },
    {
      path:"/signup",
      element: <SignUp/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
