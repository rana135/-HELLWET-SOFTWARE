import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import RequireAuth from "../Login/RequireAuth";
import AddTask from "../Home/AddTask";
import EditTask from "../Home/EditTask";
import TaskDetail from "../Home/TaskDetail";
import ContactUs from "../Contact/Contact";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/", element:
                    <RequireAuth>
                        <Home></Home>
                    </RequireAuth>
            },
            {
                path: "/taskDetail/:id", element:
                    <RequireAuth>
                        <TaskDetail></TaskDetail>
                    </RequireAuth>
            },
            {
                path: "/contact", element: <RequireAuth>
                    <ContactUs></ContactUs>
                </RequireAuth>
            },
            { path: "/login", element: <Login></Login> },
            { path: "/signUp", element: <SignUp></SignUp> },
            {
                path: "/editTask/:id", element: <RequireAuth>
                    <EditTask></EditTask>
                </RequireAuth>
            },
            {
                path: "/addTask", element:
                    <RequireAuth>
                        <AddTask></AddTask>
                    </RequireAuth>
            },
        ]
    },
    { path: "*", element: <div>This Page is not found</div> }
])

export default routes;
