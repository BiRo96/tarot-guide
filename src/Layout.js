import { Outlet, Link } from "react-router-dom";

function Layout(params) {
    return (<>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>)
}

export default Layout