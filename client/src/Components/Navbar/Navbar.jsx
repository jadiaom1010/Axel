import { useState, useEffect, useContext } from 'react'
import { navbarData } from "../../DataforPage/dummyData"
import logo from "/images/logo.svg"
import { Link } from "react-scroll"
import { ThemeContext } from '../../pages/Home';
import MobileNavbar from './MobileNavbar'

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    // const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(true);

    // const showNavbar = !(location.pathname === '/login' || location.pathname === '/register');

    useEffect(() => {
        const checkLoggedIn = () => {
            if (localStorage.getItem("usertoken")) setLoggedIn(true);
            else setLoggedIn(false);
        }
        checkLoggedIn();
    }, []);


    return (
        <div>
            <div
                className={
                    scroll ? "h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20 sm:hidden"
                        : "bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20 sm:hidden"
                }>
                <div className="grid grid-cols-2 justify-items-center items-center content-center w-full mx-auto">
                    <div>
                        <img className="h-10 mr-[280px]" src={logo} alt="logo-img"></img>
                    </div>
                    <div className="flex flex-row items-center w-full ml-[300px]">
                        {navbarData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Link
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={500}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                        spyThrottle={500}
                                        className={theme === "light" ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500" : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"} >
                                        {item.name}
                                    </Link>
                                </div>
                            )

                        })}
                        {loggedIn ?
                            <a href='/login' className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 text-white" onClick={() => localStorage.removeItem("usertoken")}>Signout</a>
                            :
                            <a href='/login' className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white" >Login</a>
                        }
                    </div>
                </div>
            </div>
            <div className="Mobile-navbar hidden sm:block">
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar
