import { useContext } from 'react'
import flowLight from "/images/flow-light.png"
import flowDark from "/images/flow-dark.png"
import { ThemeContext } from '../../pages/Home'

const FurnitureFlow = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <img className="bg-center bg-no-repeat bg-cover" src={theme === "light" ? flowLight : flowDark} alt=" Furniture Flow"></img>
        </div >
    )
}

export default FurnitureFlow
