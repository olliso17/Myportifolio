import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    fontFamily: "'Raleway', sans-serif",
  },
  colors: {
    primarygradientColor: "#1A1311",
    secondaryGradientColor: "#402B2C",
    thirdGradientthColor: "#796D67",
    baseColor: "#988C86",
    textColor: "#F6F5F4",
    cardColor: "#F6F5F4",
    gitHubColor: "#171923",
    hoverGitHubColor: "#1A202C",
    linkedinColor: "#3182CE",
    hoverLinkedinColor: "#4299E1",
    whatsappColor: "#38A169",
    hoverWhatsappColor: "#48BB78",
    buttonColor: "#1A1311",
    hoverButtonColor: "#402B2C"

  },

  layerStyles: {
    boxIntrodution: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      bgGradient:
        "linear-gradient(to bottom, primarygradientColor, secondaryGradientColor, thirdGradientthColor)",
      border: "solid",
      borderColor: "baseColor",
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
    cardFooter: {
      display: "flex",
      width: "12vw", 
      height: "40px", 
      justifyContent: "space-around",
      alignItems:"center",
      borderRadius:"10px",
      bg:"cardColor"
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
        backgroundColor: "baseColor",
      },
    },
  },
});

export default theme;
