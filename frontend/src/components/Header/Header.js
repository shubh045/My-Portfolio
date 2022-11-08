import HeaderButtons from "./HeaderButtons";
import "./header.css";
import MyImg from "../../assets/img/My_img.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <>
      <header id="home">
        <div className="bio">
          <p>Hello I'm</p>
          <p>Shubham</p>
          <p>Engineering Student</p>
        </div>
        <HeaderButtons />
        <div className="me">
          <Socials />
          <div className="my-img">
            <img src={MyImg} alt="me" />
          </div>
          <a href="#footer" id="scroll">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
