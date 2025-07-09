import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-center"
            id="mynavbar"
          >
            <ul className="navbar-nav gap-3 items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none" }}
                  className={(e) => (e.isActive ? "opacity-100" : "opacity-60")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Posts"
                  style={{ textDecoration: "none" }}
                  className={(e) => (e.isActive ? "opacity-100" : "opacity-60")}
                >
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Products"
                  style={{ textDecoration: "none" }}
                  className={(e) => (e.isActive ? "opacity-100" : "opacity-60")}
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
