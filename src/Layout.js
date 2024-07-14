import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout(params) {
    return (<div className="bg-slate-600 min-h-screen">
        <Navbar  />
        <Outlet />
      </div>)
}

export default Layout