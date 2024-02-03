import React, { useEffect } from "react";
import Styles from "./About.module.scss";
import { StatesContext } from "../../App";
import { useContext } from "react";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import portrait from "../../Images/portrait.jpg";
import { useRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { skills } from "../../data/skills.data";
import { languagesData } from "../../data/languages.data";

function About() {
  const navigate = useNavigate();
  const { states, setStates } = useContext(StatesContext);

  useEffect(() => {
    setStates((prev) => ({ ...prev, reversed: false }));
  }, []);

  function scrollUp(className) {
    document.querySelector(className).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className={Styles.about}>
      <div className={Styles.about_homepage}>
        <h1>About Me</h1>
        <div
          className={Styles.dropdown_wrapper}
          onClick={() => {
            scrollUp(".about_me");
          }}
        >
          <Icon icon="ant-design:caret-down-filled" color="#01ee99" />
        </div>
      </div>
      <div className={`${Styles.about_me} about_me`}>
        <div className={Styles.about_me_wrapper}>
          <h3>Who Am I?</h3>
          <div className={Styles.info_wrapper}>
            <div className={Styles.image_wrapper}>
              <img src={portrait} alt="" />
            </div>
            <div className={Styles.text_wrapper}>
              <p>
                <strong>Hello,</strong>
              </p>
              <p>
                I am a passionate Fullstack web developer with expertise in
                TypeScript, and JavaScript. I'm an aspiring DevOps enthusiast
                embarking on an exciting journey. I'm passionate about
                leveraging my skills to optimize deployments, enhance
                performance, and ensure rock-solid infrastructure.
              </p>
              <br />
              <p>
                When I'm not coding up a storm, you can find me tinkering with
                new tech gadgets, sipping coffee in cozy cafes, or exploring the
                great outdoors. I'm always on the lookout for opportunities to
                collaborate, learn, and create something extraordinary.
              </p>
              <div className={Styles.info_sec}>
                <div className={Styles.info_half_1}>
                  <p>
                    <strong>Age</strong> 22
                  </p>
                  <p>
                    <strong>Freelance</strong> Available
                  </p>
                  <p>
                    <strong>Phone</strong> +91 70585 77538
                  </p>
                </div>
                <div className={Styles.info_half_2}>
                  <p>
                    <strong>Residence</strong> India
                  </p>
                  <p>
                    <strong>Address</strong> Nagpur, India
                  </p>
                  <p>
                    <strong>Email</strong>{" "}
                    <a href="mailto:prtk.app.dev@gmail.com">
                      prtk.app.dev@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={(e) => {
                  const test = document.querySelector(".test");
                  test.style.left = `${
                    e.clientX -
                    Math.floor(e.target.getBoundingClientRect().left)
                  }px`;
                  test.style.top = `${
                    e.clientY - Math.floor(e.target.getBoundingClientRect().top)
                  }px`;
                  // test.style.width = "200px";
                  // test.style.height = "200px";
                }}
                onMouseLeave={(e) => {
                  const test = document.querySelector(".test");
                  // test.style.width = "00px";
                  // test.style.height = "00px";
                  test.style.left = `${
                    e.clientX -
                    Math.floor(e.target.getBoundingClientRect().left)
                  }px`;
                  test.style.top = `${
                    e.clientY - Math.floor(e.target.getBoundingClientRect().top)
                  }px`;
                }}
                className={`${Styles.contact_btn}`}
              >
                <div className={`${Styles.test} test`}></div>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.languages}>
        <h3>Languages</h3>
        <div className={Styles.languages_wrapper}>
          {Object.entries(languagesData).map((ele, index) => (
            <div className={Styles.language} key={ele}>
              <span className={Styles.language_title}>{ele[0]}</span>
              <div className={Styles.level}>
                <div
                  className={Styles.level_indicator}
                  data-level={`${ele[1]}%`}
                  style={{ width: `${ele[1]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.skills}>
        <h3>My Skills</h3>
        <div className={Styles.skills_wrapper}>
          {skills.map((skill, index) => {
            return (
              <div className={Styles.skill_container} key={index}>
                <div
                  className={Styles.outer_box}
                  style={{
                    background: `conic-gradient(#01EE99 0% ${skill.level}%, #0C0C0C ${skill.level}% 100%)`,
                  }}
                >
                  <div className={Styles.inner_box}>
                    <p>{skill.level}%</p>
                  </div>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
