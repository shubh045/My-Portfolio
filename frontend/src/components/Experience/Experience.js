import "./experience.css";
import ExperienceCard from "./ExperienceCard";
import { BiCheck } from "react-icons/bi";

const Experience = () => {
  return (
    <>
      <section className="experience-section" id="experience">
        <h5>What industrial experience I have</h5>
        <h5>My Experience</h5>
        <div className="experiences">
          <div className="company">
            <ExperienceCard
              role="Open Source Contributor"
              time="09/2021 - 11/2021"
              company="Girlscript Foundation"
            />
            <ul className="exp-list">
              <li>
                <BiCheck className="icon icon-a" />
                <p>Girlscript Winter Of Contribution</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>Contributed as a participant</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>Contributed in the form of documentation</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>Five pull requests got merged on GitHub</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>
                  Contributions related to C/CPP programming language are,{" "}
                  <a
                    href="https://github.com/girlscript/winter-of-contributing/blob/main/C_CPP/Data%20Structures/Array/Matrix_multiplication/Matrix_multiplication.md"
                    id="contribution"
                  >
                    Matrix multiplication,{" "}
                  </a>
                  <a
                    href="https://github.com/girlscript/winter-of-contributing/blob/main/C_CPP/Algorithmic%20Approaches/Recursive/Factorial_Recursion/Factorial_Recursion.md"
                    id="contribution"
                  >
                    Factorial of a number using recursion,{" "}
                  </a>
                  <a
                    href="https://github.com/girlscript/winter-of-contributing/blob/main/C_CPP/Algorithmic%20Approaches/Recursive/Recursive_Fibonacci/recursive_Fibonacci.md"
                    id="contribution"
                  >
                    Recursive Fibonacci,{" "}
                  </a>
                  <a
                    href="https://github.com/girlscript/winter-of-contributing/blob/main/C_CPP/Fundamentals/Arrays/ArrayADT/ArrayADT.md"
                    id="contribution"
                  >
                    Array ADT.
                  </a>
                </p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>
                  Contribution related to Web development is,{" "}
                  <a
                    href="https://github.com/girlscript/winter-of-contributing/blob/Frontend_Web_Development_HTML_CSS_JS/Web_Development/FrontEnd/HTML_Button/HTML_Button.md"
                    id="contribution"
                  >
                    HTML Buttons.
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="company">
            <ExperienceCard
              role="Intern"
              time="07/2022 - 08/2022"
              company="Block8"
            />
            <ul className="exp-list">
              <li>
                <BiCheck className="icon icon-a" />
                <p>Got to know about the working of an IT company</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>Learned new technologies and implement them</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>learned how to work in a team</p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>
                  Worked on the project (Leave Management System) using the MERN
                  stack technology
                </p>
              </li>
              <li>
                <BiCheck className="icon icon-a" />
                <p>Worked on both Frontend and Backend of the project</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
