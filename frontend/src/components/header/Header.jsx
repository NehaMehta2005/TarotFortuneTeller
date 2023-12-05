import Navbar from "./Navbar";
/* import Logo from "./Logo";
import MainTitle from "./MainTitel"; */
import "./Nav-bar.css"
import "./Header.css"

function Header() {
  return (
    <header className="header">
    {/*   <Logo />
      <MainTitle /> */}
      <Navbar />
    </header>
  );
}

export default Header;
