import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
const theme = {
  palette: {
    default: {
      dark: "rgb(204, 204, 204)",
      main: "rgb(237, 237, 237)",
      light: "rgb(250, 250, 250)",
    },
    weUse: {
      black: "rgb(29, 27, 37)",
      white: "rgb(255, 255, 255)",
      main: "rgb(181,151,138)",
      mainHover: "rgba(181,151,138, 0.4)",
      done: "#A2B6C6",
      notDone: "rgba(181,151,138, 0.2)",
    },
    backgroundColor: {
      dark: "rgb(22, 23, 18)",
      main: "rgb(29, 30, 24)",
      light: "rgb(239, 241, 250)",
    },
    primary: {
      dark: "rgb(107, 143, 113)",
      main: "rgb(185, 245, 216)",
      light: "rgb(217, 255, 245)",
    },
    secondary: {
      dark: "rgb(210, 125, 55)",
      main: "rgb(98, 60, 234)",
      light: "rgb(237, 237, 237)",
    },
    link: {
      dark: "rgb(112, 235, 175)",
      main: "rgb(170, 210, 186)",
      light: "rgb(239, 241, 250)",
    },
    info: {
      dark: "rgb(29, 30, 24)",
      light: "rgb(239, 245, 251)",
    },
    success: {
      dark: "rgb(37, 121, 83)",
      main: "rgb(72, 199, 142)",
      light: "rgb(254, 236, 240)",
    },
    warning: {
      dark: "rgb(148, 108, 0)",
      main: "#37323E",
      light: "rgb(158, 166, 0)",
    },
    danger: {
      dark: "rgb(204, 15, 53)",
      main: "rgb(241, 70, 104)",
      light: "rgb(254, 236, 240)",
    },
    dark: {
      main: "rgb(54, 54, 54)",
    },
    light: {
      main: "rgb(254, 236, 240)",
    },
    accent: {
      main: "rgb(101, 100, 219)",
    },
    overlay: {
      light: "rgba(0, 0, 0, 0.15)",
      main: "rgba(0, 0, 0, 0.3)",
      dark: "rgba(0, 0, 0, 0.6)",
    },
  },
  screenSizes: {
    phone: 640,
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
