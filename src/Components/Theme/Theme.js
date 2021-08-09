import React from 'react'
import {ThemeProvider} from "styled-components";

function Theme(props) {
    return (
        <ThemeProvider 
        theme={{
            bgc1: "#A67744",
            bgc2: "#EEF3F4",
            bgc3: "#F7F7F7",
            bgc4: "#547665",
            bgc5: "#e0e4e7",
            bgc6: "#FAFAFA",
            fontcolor1: "#F7F5E6",
            fontcolor2: "#354E57",
            fontcolor3: "#2E2E22",
            fontcolor4: "#EEF2F4",
            bordercolor1: "#547665",
            white: "white",
            red: "red",
            primaryFont: "Proxima Nova"
        }}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;