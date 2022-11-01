import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineProject} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {AiOutlineExperiment} from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="#"><AiOutlineHome /></a>
        <a href="#"><AiOutlineUser /></a>
        <a href="#"><AiOutlineExperiment /></a>
        <a href="#"><AiOutlineProject /></a>
        <a href="#"><AiOutlineContacts /></a>
      </nav>
    </>
  )
}

export default Navbar