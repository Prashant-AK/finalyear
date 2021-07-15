import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import FaceIcon from "@material-ui/icons/Face";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/474x/07/02/58/07025812265bda82e582459319a299f8.jpg"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <Link
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            textDecoration: "none",
            color: "black",
          }}
          to="/login"
        >
          <FaceIcon />
          Sign-In
        </Link>

        <Link
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            textDecoration: "none",
            color: "black",
          }}
          to="/register"
        >
          <FaceIcon />
          Sign-up
        </Link>

        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Menu
            <ExpandMoreIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/myprofile">
                My Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>My Booking</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
