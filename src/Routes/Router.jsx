import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import AllPackages from "../Pages/AllPackages";
import MyBookings from "../Pages/MyBookings";
import PrivateRoutes from "../Contexts/PrivateRoutes";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'packages',
                element: <AllPackages></AllPackages>
            },
            {
                path: 'mybookings',
                element:
                    <PrivateRoutes>
                        <MyBookings></MyBookings>
                    </PrivateRoutes>
            }
        ]
    }
])

export default Router