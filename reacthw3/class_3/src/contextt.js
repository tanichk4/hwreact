import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
    const theme = {color: "blue"};

    return (
        <ThemeContext.Provider value={{ theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
// export default ThemeProvider
