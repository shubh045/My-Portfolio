import React from "react";
import CV from '../../assets/Shubham-Resume-3.pdf';
import { Link } from "react-scroll";
const HeaderButtons = () => {
  return (
    <div className="btns">
      <a href={CV}>Download CV</a>
      <Link to="contact">Let's Talk</Link>
    </div>
  );
};

export default HeaderButtons;
