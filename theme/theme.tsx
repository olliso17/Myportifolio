import { extendTheme } from "@chakra-ui/react";

const colorsSelect = {
  primaryGradientColor: "#a296bf",
  secondaryGradientColor: "#b5b8e2",
  thirdGradienthColor: "#e1dbf1",
  fourthGradienthColor: "#f1edfb",
  baseColor: "#e1dbf1",
  textColor: "#171923",
  cardIconColor: "#F6F5F4",
  cardColor: "#f1edfb",
  gitHubColor: "#171923",
  hoverGitHubColor: "#1A202C",
  linkedinColor: "#3182CE",
  hoverLinkedinColor: "#4299E1",
  whatsappColor: "#38A169",
  hoverWhatsappColor: "#48BB78",
};
const boxContext = {
  bgGradient:
    "linear-gradient(232deg,primaryGradientColor 0%, secondaryGradientColor 52%, thirdGradienthColor 82%, fourthGradienthColor 97%)",
  maxW: "100%",
  display: "flex",
  width: {
    base: "100vw",
    lg: "60vw",
    xl: "60vw",
  },
  flexDirection: {
    base: "column",
    lg: "row",
    xl: "row",
  },
  position: {
    base: "relative",
    lg: "absolute",
    xl: "absolute",
  },
  justifyContent: "center",
  alignItems: { base: "center", lg: "baseline", xl: "baseline" },
  right: { base: 0, lg: 0, xl: 0 },
};

const boxIntrodution = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgGradient:
    "linear-gradient(128deg, primaryGradientColor 0%, secondaryGradientColor 52%, thirdGradienthColor 82%, fourthGradienthColor 97%)",
  minH: "100%",
  maxW: "100%",
  // height: "80vh",
  width: {
    base: "100vw",
    lg: "40vw",
    xl: "40vw",
  },
  gap: "1vw",
  position: {
    base: "relative",
    lg: "fixed",
    xl: "fixed",
  },
  bottom: { base: 0, lg: 0, xl: 0 },
  left: { base: 0, lg: 0, xl: 0 },
};

const theme = extendTheme({
  fonts: {
    fontFamily: "'Raleway', sans-serif",
  },
  colors: colorsSelect,

  layerStyles: {
    boxIntrodution,
    boxContext,
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
      fontSize: { base: "lg", lg: "sm", xl: "sm" },
      margin: "1vw",
    },
    textTitle: {
      textAlign: "justify",
      fontFamily: "fontFamily",
      bgColor: "textColor",
      bgClip: "text",
      fontWeight: "extrabold",
      padding: 0,
      fontSize: { base: "lg", lg: "lg", xl: "lg" },
      margin: "1vw",
    },
    cardFooter: {
      display: "flex",
      width: "120px",
      height: "40px",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: "10px",
      bg: "cardIconColor",
    },
    cardContext: {
      width: {
        base: "95vw",
        lg: "40vw",
        xl: "28vw",
      },
      _hover: {
        boxShadow: "dark-lg", // Estilo de hover
      },
      margin: "0.5vw",
      bgGradient:
      "linear-gradient(128deg, secondaryGradientColor 22%, fourthGradienthColor 97%)",
    },
    cardHeaderContext: {
      bg: "secondaryGradientColor",
      margin: "0.5vw",
      borderRadius: "10px",
    },
    cardBodyIntrodytion: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: {
        base: "95vw",
        lg: "40vw",
        xl: "35vw",
      },
      _hover: {
        boxShadow: "dark-lg", // Estilo de hover
      },
      bgGradient:
      "linear-gradient(128deg, primaryGradientColor 0%, secondaryGradientColor 20%, thirdGradienthColor 50%, fourthGradienthColor 87%)",
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
