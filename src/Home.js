import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/store"> About </Link>
          <Link to="/store"> Store </Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail"> Gmail </Link>
          <Link to="/images"> Images </Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      {/* Body*/}
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
