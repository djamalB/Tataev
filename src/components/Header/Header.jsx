import logo from "../../assets/Logo/Header.jpg";
import './Header.css'

function Header() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" width={350} />
      </div>

    </>
  );
}

export default Header;
