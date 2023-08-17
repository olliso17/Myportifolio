import { extendTheme } from "@chakra-ui/react";

const allTheme = extendTheme({
  fonts: {
    fontFamily: "'Raleway', sans-serif",
  },
  colors: {
    primaryColorGray: "#E2E8F0",
    secondaryColorGray: "#EDF2F7",
    thirdColorGray: "#F7FAFC",
  },

  layerStyles: {
    boxIntrodution: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      bgGradient:
        "linear-gradient(to bottom, primaryColorGray, secondaryColorGray, thirdColorGray)",
      border: "solid",
      borderColor: "purple.200",
      borderRadius: "1vw",
      minH: "100%",
      maxW: "100%",
      width: {
        base: "100vw",
        lg: "49vw",
        xl: "49vw",
      },
      wrap: "wrap",
      position: {
        base: "relative",
        lg: "fixed",
        xl: "fixed",
      },
      bottom: { base: 0, lg: 0, xl: 0 },
      left: { base: 0, lg: 0, xl: 0 },
    },
    containerBodyTheme: {
      className: "box_context",
      maxW: "100vw",
      width: "100vw",
      display: "flex",
      alignItems: "baseline",
      flexDirection: {
        base: "column",
        lg: "row",
        xl: "row",
      },
      justifyContent: "space-between",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "fontFamily",
        backgroundColor: "white",
      },
    },
  },
});

const theme = extendTheme(allTheme);

export default theme;
