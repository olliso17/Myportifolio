import { extendTheme } from "@chakra-ui/react";
import { boxIntrodution } from "./theme_box_introdution";
import { colorsSelect } from "./theme_colors";
import { boxContext } from "./theme_box_context";
import { containerBodyTheme } from "./theme_container";


const theme = extendTheme({
  fonts: {
    fontFamily: "'Raleway', sans-serif",
  },
  colors: colorsSelect,

  layerStyles: {
    boxIntrodution,
    boxContext,
    containerBodyTheme,
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
