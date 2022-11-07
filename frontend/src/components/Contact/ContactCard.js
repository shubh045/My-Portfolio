const ContactCard = (props) => {
  return (
    <article className="contact" key={props.key}>
      <props.icon className="contact-icon" />
      <div className="contact-content">
        <h4>{props.text}</h4>
        <h5>{props.value}</h5>
      </div>
      <a href={props.link}>{props.msg}</a>
    </article>
  );
};

export default ContactCard;
