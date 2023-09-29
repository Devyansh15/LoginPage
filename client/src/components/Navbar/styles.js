import { theme } from "../../themes/Default";
import { deepPurple } from "@mui/material/colors";

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(100,183,255, 1)",
    textDecoration: "none",
    margin: "0 10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    margin: "0 10px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "180px",
    margin: "0 10px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    margin: "0 10px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 10px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    margin: "0 10px",
  },
};
