import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Taha.</h2>
    <div>
      <Link to={"/"}>
        <a onClick={() => setMenuOpen(false)}>Home</a>
      </Link>
      <Link to={"/work"}>
        <a onClick={() => setMenuOpen(false)}>Work</a>
      </Link>
      <Link to={"/timeline"}>
        <a onClick={() => setMenuOpen(false)}>Experience</a>
      </Link>
      <Link to={"/services"}>
        <a onClick={() => setMenuOpen(false)}>Services</a>
      </Link>
      {/* <Link to={"/testimonial"}>
        <a onClick={() => setMenuOpen(false)}>Testimonial</a>
      </Link> */}
      <Link to={"/contact"}>
        <a onClick={() => setMenuOpen(false)}>Contact</a>
      </Link>
    </div>
    <a href="mailto:rajataha062@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
