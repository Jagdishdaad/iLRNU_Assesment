import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./UserPageStyle.js";
import logoImage from "../image/ca4f826a.png";
import menuImage from "../image/Group440.svg";
import profileImage from "../image/Group442.svg";
import { Link } from "react-router-dom";

function UserPage() {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className={classes.header}>
        <div>
          <img src={logoImage} />
        </div>
        <div>
          <Button>Join as tutor</Button>
          <Button onClick={handleClick} className={classes.button}>
            <img src={menuImage} />
            <img src={profileImage} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to="/">Logout</Link>
            </MenuItem>
            <MenuItem>Sign up</MenuItem>
            <MenuItem>How online Tutoring works</MenuItem>
            <MenuItem>Help centre</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
