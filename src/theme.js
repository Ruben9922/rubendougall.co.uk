import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: red,
    // type: "dark",
  },
  overrides: {
    MuiTypography: {
      h4: {
        marginTop: "16px",
        marginBottom: "16px",
      },
      h5: {
        marginTop: "40px",
        marginBottom: "16px",
      },
      h6: {
        marginTop: "40px",
        marginBottom: "16px",
      },
      paragraph: {
        marginTop: "16px",
        marginBottom: "16px",
      },
    },
  },
  props: {
    MuiContainer: {
      style: {
        paddingTop: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }
    },
  },
});

export default theme;