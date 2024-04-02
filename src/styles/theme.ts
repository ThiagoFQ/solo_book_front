export interface DefaultTheme {
    palette: PaletteType;
    typography: TypographyType;
    breakpoints: BreakpointType;
  }
  
  type PaletteType = {
    primary: {
      azur: string;
      ocean: string;
      purple: string;
      inputGrey: string; 
      darkBlue: string;
      snow: string;
      black: string;
    };
    secondary: {
      ocean: string;
      green: string;
      errorPink: string;
      warningOrange: string;
      purple1: string;
      purple2: string;
      inactiveGrey: string; 
      lightBlue: string;
      lilac: string;
    };
    background: {
      backgroundGrey: string;
      grey1: string;
      grey2: string;
    },
    icons: {
      snow: string;
      grey: string;
      grey1: string;
      grey3: string;
      grey4: string;
      grey5: string;
      purple: string;
      purple1: string;
      purple2: string;
      purple3: string;
      lightBlue: string;
      black: string;
    };
  };
  
  type TypographyType = {
    fontFamily: {
      Playfair: string;
      Montserrat: string;
      SFPro: string;
    };
    fontColor: {
      snow: string;
      grey: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      grey6: string;
      grey7: string;
      grey8: string;
      purple: string;
      lightBlue: string;
      blue: string;
      green: string;
      black: string;
      purple1: string;
    };
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      p: string;
      small: string;
    };
  };
  
  type BreakpointType = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  export const Theme: DefaultTheme = {
    palette: {
      primary: {
        azur: "#0a7aff", 
        ocean: "#0a7aff", 
        purple: "#572380",
        inputGrey: "#d9d9d9",
        snow: "#ffffff",
        darkBlue: "#272556",
        black: "#000000",
      },
      secondary: {
        ocean: "#0a7aff", 
        green: "#347b26", 
        errorPink: "#ff4d4f", 
        warningOrange: "#fa8c16", 
        purple1: "#562980",
        purple2: "#9b4b9d",
        inactiveGrey: "#d9d9d9",
        lightBlue: "#0A7aff12",
        lilac: "#b79ecb",
      },
      background: {
        backgroundGrey: "#e7e7e7", 
        grey1: "#eeeeee",
        grey2: "#d9d9d9",
      },
      icons: {
        snow: "#ffffff",
        grey: "#808080",
        grey1: "#cbc5d6",
        grey3: "#9d91ae",
        grey4: "#4f4f4f",
        grey5: "#656565",
        purple: "#572380",
        purple1: "#562980",
        purple2: "#9b4b9d",
        purple3: "#572380",
        lightBlue: "#0a7aff",
        black: "#000000",
      },
    },
    typography: {
      fontFamily: {
        Playfair: "Playfair Variable",
        Montserrat: "Montserrat Variable",
        SFPro: "SF Pro Text, sans-serif", 
      },
      fontColor: {
        snow: "#ffffff",
        grey: "#666666",
        grey1: "#808080",
        grey2: "#4f4f4f",
        grey3: "#656565",
        grey4: "#696969",
        grey5: "#e7e7e7",
        grey6: "#a4a4a4",
        grey7: "#cbc5d6",
        grey8: "#b1b1b1",
        purple: "#572380",
        lightBlue: "#0a7aff",
        blue: "#272556",
        green: "#347b26",
        black: "#000000",
        purple1: "#562980"
      },
      fontSize: {
        h1: "24px",
        h2: "",
        h3: "",
        h4: "",
        p: "16px",
        small: "10px",
      },
    },
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  };
  