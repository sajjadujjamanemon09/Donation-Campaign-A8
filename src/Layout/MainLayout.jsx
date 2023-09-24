import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;