import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineProject} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {AiOutlineExperiment} from 'react-icons/ai';
import { BiBook } from "react-icons/bi";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="#"><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#skills"><BiBook /></a>
        <a href="#experience"><AiOutlineExperiment /></a>
        <a href="#projects"><AiOutlineProject /></a>
        <a href="#contact"><AiOutlineContacts /></a>
      </nav>
    </>
  )
}

export default Navbar