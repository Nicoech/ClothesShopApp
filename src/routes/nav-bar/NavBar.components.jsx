import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
      
        <Link className="logo-container" to={"/"}>
            <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"/auth"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
