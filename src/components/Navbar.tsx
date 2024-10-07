import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
      <img src="/logo1.png" alt="logo" style={{ width: '300px', height: 'auto' }} />
      <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/faqs"}>FAQS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
