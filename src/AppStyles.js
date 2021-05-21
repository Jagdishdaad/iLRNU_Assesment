import bgImage from "./image/bg-image.jpg";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  homepage: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "100%",
    height: "100vh",
  },
});

export default styles;
