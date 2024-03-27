import { createTheme } from "@mui/material/styles";

export const themeSettings = () => {
  return {
    palette: {
      primary: {
        main: "#21293C",
      },
      secondary: {
        main: "#33ADD1",
      },
      //   background: {
      //     default: "#000000",
      //   },
    },
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 400,

      h1: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 700,
      },
      h2: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400,
      },
      h3: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 400,
      },
      h4: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 400,
      },
      h5: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 30,
        fontWeight: 700,
      },
    },
  };
};

export const useTheme = () => {
  const theme = createTheme(themeSettings());

  return [theme];
};
