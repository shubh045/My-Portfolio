import HeaderButtons from './HeaderButtons';
import './header.css';


const Header = () => {
  return (
    <>
      <header>
        <div className="bio">
          <p>Hello I'm</p>
          <p>Shubham</p>
          <p>Student</p>
        </div>
        <HeaderButtons />
      </header>
    </>
  );
};

export default Header;
