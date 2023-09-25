import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonateCard from "../Pages/DonateCard/DonateCard";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donations/:id',
                element: <DonateCard></DonateCard>,
                loader: () => fetch('/public/donation.json'),
            },
        ]
    }
])
 

export default myCreatedRoute;