// Importing the logo image from the assets folder
import Logo from '../assets/investment-calculator-logo.png';

// Header component
export default function Header() {
    return (
        // Header section with id "header"
        <header id='header'>

            {/* Displaying the logo image */}
            <img src={Logo} alt="Logo with money bag" />

            {/* Main heading of the application */}
            <h1>React Investment Calculator</h1>

        </header>
    )
}