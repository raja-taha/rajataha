import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import founder from "../assets/founder.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={founder} alt="founder" />
        <h2>Muhammad Taha</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.github.com/raja-taha/" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/raja-taha/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/rajataha062" target="blank">
            <AiFillInstagram />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
