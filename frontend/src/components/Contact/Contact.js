import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import ContactCard from "./ContactCard";
import "./contact.css";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: AiOutlineLinkedin,
      text: "Linkedin",
      value: "shubham-1045ba219",
      msg: "Send a message",
      link: "https://www.linkedin.com/in/shubham-1045ba219/",
    },
    {
      id: 2,
      icon: AiOutlineWhatsApp,
      text: "Whatsapp",
      value: "+917696017079",
      msg: "Send a message",
      link: "https://wa.me/917696017079",
    },
    {
      id: 3,
      icon: AiOutlineMail,
      text: "Email",
      value: "shubh6441@gmail.com",
      msg: "Send a message",
      link: "mailto: shubh6441@gmail.com",
    },
  ];

  console.log(contacts[0]);

  return (
    <>
      <section className="contact-section" id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
        <div className="contacts">
          <div className="contact-left">
            {contacts.map(({ id, icon, text, value, msg, link }) => (
              <ContactCard
                key={id}
                icon={icon}
                text={text}
                value={value}
                msg={msg}
                link={link}
              />
            ))}
          </div>
          <div className="contact-right">
            <div className="in-fields">
              <input type="text" placeholder="Your Full Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
              />
            </div>
            <button>Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
