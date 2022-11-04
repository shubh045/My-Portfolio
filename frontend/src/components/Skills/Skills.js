import SkillsCard from "./SkillsCard";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills-section">
        <h5>What skills I have</h5>
        <h5>My Skills</h5>
        <div className="skills__section">
          <div>
            <h2 className="skill-heading">Programming/Scripting Languages</h2>
            <div className="skill">
              <SkillsCard value="HTML" experience="Experienced" />
              <SkillsCard value="CSS" experience="Experienced" />
              <SkillsCard value="Javascript" experience="Intermediate" />
              <SkillsCard value="C" experience="Intermediate" />
              <SkillsCard value="C++" experience="Intermediate" />
            </div>
          </div>

          <div>
            <h2 className="skill-heading">Tools/Libraries/Technologies</h2>
            <div className="skill">
              <SkillsCard value="MERN Stack" experience="Intermediate" />
              <SkillsCard value="Reactjs" experience="Intermediate" />
              <SkillsCard value="Bootstrap" experience="Intermediate" />
              <SkillsCard value="Git" experience="Intermediate" />
              <SkillsCard value="Github" experience="Intermediate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
