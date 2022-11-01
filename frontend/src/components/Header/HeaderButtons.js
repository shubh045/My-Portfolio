import React from "react";
import CV from '../../assets/Shubham_Resume.pdf';
const HeaderButtons = () => {
  return (
    <div className="btns">
      <a href={CV}>Download CV</a>
      <a href="#">Let's Talk</a>
    </div>
  );
};

export default HeaderButtons;
