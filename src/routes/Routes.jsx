import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import Payment from "../pages/Dashboard/Payment";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "userhome",
                element: <UserHome />
            },
            {
                path: "mycart",
                element: <MyCart />
            },
            {
                path: "payment",
                element: <Payment />
            },
            // admin route
            {
                path: "adminhome",
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "allusers",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "additem",
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: "manageitems",
                element: <AdminRoute><ManageItems /></AdminRoute>
            }
        ]
    }
]);

export default router;