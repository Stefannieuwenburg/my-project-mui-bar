import { createTheme } from "@mui/material/styles";

const Colors = {
    primary: "#0c0d0d",
    secondary: "#95defb",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};

const styled = createTheme({
    palette: {
        primary: {
            light: Colors.light,
            main: Colors.primary,
            dark: Colors.dark,
            contrastText: Colors.white,
        },
        secondary: {
            light: Colors.light,
            main: Colors.secondary,
            dark: Colors.dark,
            contrastText: Colors.black,
        },
        error: {
            light: "#ef5350",
            main: "#f44336",
            dark: "#c62828",
            contrastText: "#FFF",
        },
        warning: {
            light: "#fff176",
            main: "#ffeb3b",
            dark: "#f57f17",
            contrastText: "#FFF",
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});

export default styled;
