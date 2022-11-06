import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import ContactCard from "./ContactCard";
import { useState } from "react";
import axios from "axios";
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

  const [emailContent, setEmailContent] = useState({
    email: "",
    name: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEmailContent({
      ...emailContent,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = emailContent;
    const response = await axios.post(
      "http://localhost:8000/api/sendemail",
      data
    );
    console.log(response.data);
  };

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
          <form onSubmit={submitForm} className="contact-right">
            <div className="in-fields">
              <input
                type="text"
                name="name"
                value={emailContent.name}
                placeholder="Your Full Name"
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                value={emailContent.email}
                placeholder="Your Email"
                onChange={changeHandler}
              />
              <textarea
                name="message"
                value={emailContent.msg}
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                onChange={changeHandler}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
