import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">Cool Thing!</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;