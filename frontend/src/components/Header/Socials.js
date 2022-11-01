import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const Socials = () => {
  return (
    <>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/shubham-1045ba219/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/shubh045" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href="https://wa.me/917696017079" target="_blank">
          <AiOutlineWhatsApp />
        </a>
        <a href="mailto: shubh6441@gmail.com" target="_blank">
          <AiOutlineMail />
        </a>
      </div>
    </>
  );
};

export default Socials;
