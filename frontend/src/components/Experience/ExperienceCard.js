const ExperienceCard = (props) => {
  return (
    <>
      <article className="experience">
        <div className="exp-head">
          <div className="role">
            <h3>{props.role}</h3>
            <h3>{props.time}</h3>
          </div>
          <small>{props.company}</small>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
