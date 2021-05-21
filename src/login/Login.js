import { Button, Card, TextField, Typography } from "@material-ui/core";
import styles from "./LoginStyles.js";
import { Link } from "react-router-dom";
import React from "react";
import cutImage from "../image/Path5616.svg";

const Login = (props) => {
  const { onClose } = props;
  const classes = styles();
  return (
    <div className={classes.loginContainer}>
      <Card className={classes.card}>
        <Button className={classes.closeBtn} onClick={onClose}>
          <img src={cutImage} />
        </Button>
        <Typography className={classes.login}>Login</Typography>

        <TextField
          type={"email"}
          className={classes.textField}
          placeholder={"your mail id"}
        ></TextField>
        <TextField
          type={"password"}
          className={classes.textField}
          placeholder={"enter password"}
        ></TextField>

        <Typography className={classes.fgPass} variant="caption">
          Forgot password?
        </Typography>
        <Link to="/UserPage">
          <Button className={classes.loginBtn} variant="contained">
            Login
          </Button>
        </Link>
        <Button className={classes.loginGmailBtn} variant="outlined">
          Login with gmail
        </Button>

        <Typography className={classes.signUp} variant="caption">
          Not a member of iLRNU? Sign up
        </Typography>
      </Card>
    </div>
  );
};

export default Login;
