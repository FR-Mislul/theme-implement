import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.querySelector("html").setAttribute("data-theme", theme)
    }, [theme])

    const handelTheme = isDarkMode => {
        setTheme(isDarkMode ? "dark" : "light")
    }

    const themeInfo = {
        theme,
        handelTheme
    }
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;