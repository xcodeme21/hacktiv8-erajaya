import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">SukaSukaMovie</Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Search Movie
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
