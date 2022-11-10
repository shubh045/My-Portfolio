import HeaderButtons from "./HeaderButtons";
import "./header.css";
import MyImg from "../../assets/img/My_img.png";
import Socials from "./Socials";
import { Link } from "react-scroll";

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
          <Link to="footer" id="scroll">
            Scroll Down
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
