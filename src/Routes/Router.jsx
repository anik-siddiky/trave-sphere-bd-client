import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import AllPackages from "../Pages/AllPackages";
import MyBookings from "../Pages/MyBookings";
import PrivateRoutes from "../Contexts/PrivateRoutes";
import AddPackages from "../Pages/AddPackages";
import ManageMyPackages from "../Pages/ManageMyPackages";
import ErrorLayout from "../Layouts/ErrorLayout";
import ErrorPage from "../Pages/ErrorPage";
import PackageDetails from "../Pages/PackageDetails";

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
                path: 'all-packages',
                element: <AllPackages></AllPackages>
            },
            {
                path: 'my-bookings',
                element:
                    <PrivateRoutes>
                        <MyBookings></MyBookings>
                    </PrivateRoutes>
            },
            {
                path: 'add-packages',
                element:
                    <PrivateRoutes>
                        <AddPackages></AddPackages>
                    </PrivateRoutes>
            },
            {
                path: 'manage-my-packages',
                element:
                    <PrivateRoutes>
                        <ManageMyPackages></ManageMyPackages>
                    </PrivateRoutes>
            },
            {
                path: 'package-details/:id',
                element:
                    <PrivateRoutes>
                        <PackageDetails></PackageDetails>
                    </PrivateRoutes>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default Router