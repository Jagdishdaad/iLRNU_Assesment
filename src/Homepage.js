import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./HomepageStyles.js";
import btnImage from "./image/Group441.svg";
import logoImage from "./image/ca4f826a.png";

import Login from "./login/Login.js";

function Homepage() {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [showLogin, setShowLogin] = useState(false);
  const onLoginClick = () => {
    setShowLogin(!showLogin);
  };

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
          <Button variant="outlined">Join as tutor</Button>
          <Button onClick={handleClick}>
            <img src={btnImage} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={onLoginClick}>Login</MenuItem>
            <MenuItem>Sign up</MenuItem>
            <MenuItem>How online Tutoring works</MenuItem>
            <MenuItem>Help centre</MenuItem>
          </Menu>
        </div>
      </div>
      <div>{showLogin ? <Login onClose={onLoginClick} /> : ""}</div>
    </div>
  );
}

export default Homepage;
