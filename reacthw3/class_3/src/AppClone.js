import React from "react";

import './App.css';

import ClassEx from "./ClassEx";
import {ThemeProvider} from "./contextt";
import FuncEx from "./FuncEx";

const AppClone = () => {
    return (
        <div>
            <div>
                <ThemeProvider>
                    <ClassEx />
                </ThemeProvider>
            </div>
            <div>
                <ThemeProvider>
                    <FuncEx />
                </ThemeProvider>  
            </div>
        </div>
    )
}
export default AppClone