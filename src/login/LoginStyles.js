import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  loginContainer: {},
  card: {
    display: "flex",
    flexDirection: "column",
    height: "40% ",
    width: "25%",
    verticalAlign: "center",

    borderRadius: "16px !important",
    marginLeft: "35%",
    marginTop: "5%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  login: {
    fontWeight: "700 !important",
    fontSize: "24px !important",
    marginLeft: "40% !important",
  },
  textField: {
    backgroundColor: "lightgrey",
    border: "none",
    borderRadius: "8px",
    borderBottom: "none !important",

    margin: "16px 28px 0px 28px !important",
  },
  loginBtn: {
    backgroundColor: "blue !important",
    borderRadius: "8px",
    width: "84%",
    color: "white !important",
    borderRadius: "8px !important",
    margin: "16px 28px 0px 28px !important",
    textTransform: "none !important",
  },
  loginGmailBtn: {
    borderRadius: "8px !important",
    color: "blue !important",
    border: "1px solid blue !important",
    margin: "16px 28px 0px 28px !important",
    textTransform: "none !important",
  },
  signUp: {
    margin: "16px 28px 28px 28px !important",
    marginLeft: "20% !important",
  },
  fgPass: {
    margin: "16px 28px 0px 28px !important",
    align: "right",
    marginLeft: "60% !important",
  },
  closeBtn: {
    width: "10px",
    marginLeft: "85% !important",
  },
});

export default styles;
