
const AboutCard = (props) => {
  return (
    <>
      <div className="about__card">
        <article className="abt-card">
          <span>
            <props.icon className="exp-icon" />
          </span>
          <h5>{props.value}</h5>
          <small>{props.time}</small>
        </article>
      </div>
    </>
  );
};

export default AboutCard;
