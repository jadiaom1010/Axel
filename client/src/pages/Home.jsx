import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import HomePage from "../Components/AllComponents/Home";
// import { ThemeBgContext } from './Components/ContextWrapper/ThemeContext.jsx';

export const ThemeContext = createContext(null);

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            if (!localStorage.getItem("usertoken")) {
                navigate('/login');
            }
        }
        checkAuth();
    }, [navigate]);

    //storing in local storage
    const storage = JSON.parse(localStorage.getItem("theme"));

    const [theme, setTheme] = useState(storage);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = () => {
        if (storage) {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        } else {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <div className="App m-0 p-0 w-full" >
                <HomePage />
            </div>
        </ThemeContext.Provider>
    )
}

export default Home
