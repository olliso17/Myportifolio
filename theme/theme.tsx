import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    fontFamily: "'Raleway', sans-serif",
  },
  colors: {
    primaryColorGray: "#E2E8F0",
    secondaryColorGray: "#EDF2F7",
    thirdColorGray: "#F7FAFC",
    textColor: "#2D3748",
    gitHubColor: "#171923",
    hoverGitHubColor: "#1A202C",
    linkedinColor: "#3182CE",
    hoverLinkedinColor: "#4299E1",
    whatsappColor: "#38A169",
    hoverWhatsappColor: "#48BB78",
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
    textAll: {
      textAlign: "justify",
      fontFamily: "fontFamily",
      bgColor: "textColor",
      bgClip: "text",
      fontWeight: "extrabold",
      padding: 0,
      fontSize: { base: "sm", lg: "md", xl: "md" },
      margin: "1vw",
    },
    cardWhatsapp: {
      _hover: { bg: "hoverWhatsappColor" },
      bg: "whatsappColor",
    },
    iconLinkedin: {
      fontSize: "30px",
      _hover: { textColor: "hoverLinkedinColor" },
      textColor: "linkedinColor",
    },
    icongitHub: {
      fontSize: "30px",
      _hover: { textColor: "hoverGitHubColor" },
      textColor: "gitHubColor",
    },
    iconWhatsapp: {
      fontSize: "30px",
      _hover: { textColor: "hoverWhatsappColor" },
      textColor: "whatsappColor",
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

export default theme;