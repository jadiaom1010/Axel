import { useContext } from 'react'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
import TabsComponent from '../MidSection/TabsComponent'
import FurnitureFlow from '../MidSection/FurnitureFlow'
import NewsLetter from "../../Components/MidSection/NewsLetter"
import Cards from '../MidSection/Cards'
import Footer from "../Footer/Footer";
import PopUpButton from '../PopUpButton/PopUpButton'
import { ThemeContext } from '../../pages/Home'
import Navbar from "../Navbar/Navbar"
import Chatbot from '../chatbot'

const HomePage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme === "light" ? "relative sm:w-full sm:overflow-x-hidden" : "relative bg-dark sm:w-full sm:overflow-x-hidden"} >
            <div className="fixed right-4 bottom-2 z-20">
                {/*<PopUpButton></PopUpButton>*/}
                <Chatbot></Chatbot>
            </div>
            <div className="bg-white p-0 m-0 w-full">
                <WrapperContainer navHead>
                    <Navbar />
                    <Header />
                </WrapperContainer>
            </div>
            <div className={theme === "light" ? "bg-gray-100 w-full" : "bg-gray-900 w-full"} >
                <WrapperContainer>
                    <MidFilterSection />
                    <MidComponentParent />
                    <TabsComponent />
                    <FurnitureFlow />
                    <Cards />
                    <NewsLetter />
                </WrapperContainer>
                <div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default HomePage
