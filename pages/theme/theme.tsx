import {extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
   
    fonts: {
        body: "'Raleway', sans-serif",
      },
      styles: {
        global: {
          body: {
            fontFamily: "body",
          },
        },
      },
})

const theme = extendTheme(overrides)

export default theme;