import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isOn, setIsOn] = useState(false);
    useEffect(() => {
        const currentTheme = localStorage.getItem('@theme:') || 'light'; 
        setTheme(currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
        setIsOn(currentTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIsOn(newTheme === 'dark');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('@theme:', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isOn }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);
