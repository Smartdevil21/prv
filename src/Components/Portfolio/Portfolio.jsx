import React, { useEffect, useContext } from "react";
import Styles from "./Portfolio.module.scss";
import { StatesContext } from "../../App";
import bork from "../../Images/bork_1.png";
// import mern from "../../Images/mern_club.png";
import cvzard from "../../Images/cvzard.png";
import flashcards from "../../Images/jlpt_flashcards.png";
import weddingPhotographer from "../../Images/weddingPhotographer.png";
import chillMountains from "../../Images/chillMountains.png";
import parallax from "../../Images/parallax.png";
import portfolio4 from "../../Images/portfolio4.png";
import portfolio3 from "../../Images/portfolio3.png";
import portfolio2 from "../../Images/portfolio2.png";
import portfolio1 from "../../Images/portfolio1.png";
import stayAfloat from "../../Images/stayAfloat.png";
import fun1 from "../../Images/fun1.png";
import fun2 from "../../Images/fun2.png";
import fun3 from "../../Images/fun3.png";
import gsap1 from "../../Images/gsap1.png";
import gsap2 from "../../Images/gsap2.png";
import { Icon } from "@iconify/react";
// import weddingPhotographer from "../../Images/weddingPhotographer.png";

function Portfolio() {
  const { states, setStates } = useContext(StatesContext);
  function scrollUp(className) {
    document.querySelector(className).scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    setStates((prev) => ({ ...prev, reversed: false }));
  }, []);

  return (
    <section className={Styles.portfolio}>
      <div className={Styles.portfolio_homepage}>
        <h1>Portfolio</h1>
        <div
          className={Styles.dropdown_wrapper}
          onClick={() => {
            scrollUp(".work");
          }}
        >
          <Icon icon="ant-design:caret-down-filled" color="#01ee99" />
        </div>
      </div>
      <div className={`${Styles.work} work`}>
        <div className={Styles.work_container}>
          <div className={Styles.bork_container}>
            <h3>My Projects</h3>
            <a href="https://cvzard.com/" rel="noreferrer" target={"_blank"}>
              <div className={Styles.bork_img}>
                <img src={cvzard} alt="" />
                <div className={Styles.bork_title}>
                  <p>CVZard</p>
                </div>
              </div>
            </a>
            <a
              href="https://kanji-flashcards-frontend.vercel.app/"
              rel="noreferrer"
              target={"_blank"}
            >
              <div className={Styles.bork_img}>
                <img src={flashcards} alt="" />
                <div className={Styles.bork_title}>
                  <p>JLPT Flashcards</p>
                </div>
              </div>
            </a>
            <a
              href="https://bork-silk.vercel.app/"
              rel="noreferrer"
              target={"_blank"}
            >
              <div className={Styles.bork_img}>
                <img src={bork} alt="" />
                <div className={Styles.bork_title}>
                  <p>Bork</p>
                </div>
              </div>
            </a>

            {/* <a href="https://mern-club.herokuapp.com/" rel="noreferrer" target={"_blank"}>
							<div className={Styles.bork_img}>
								<img src={mern} alt="" />
								<div className={Styles.bork_title}>
									<p>MERN-Club</p>
								</div>
							</div>
						</a> */}
          </div>
          <div className={Styles.works_container}>
            <h3>My Work</h3>
            <div className={Styles.work_flexbox}>
              <a
                href="https://brutemarkov.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={weddingPhotographer} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Brute Markov</p>
                  </div>
                </div>
              </a>
              <a
                href="https://pratik1803.github.io/prtk/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={portfolio4} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Portfolio-1</p>
                  </div>
                </div>
              </a>
              <a
                href="https://portfoliotype1.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={portfolio2} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Portfolio-2</p>
                  </div>
                </div>
              </a>
              <a
                href="https://pratikvaidya.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={portfolio3} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Portfolio-3</p>
                  </div>
                </div>
              </a>
              <a
                href="https://prtk.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={portfolio1} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Portfolio-4</p>
                  </div>
                </div>
              </a>
              <a
                href="https://calm-your-mind.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={fun1} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Calm Your Mind</p>
                  </div>
                </div>
              </a>
              <a
                href="https://random-anime-quotes.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={fun2} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Random Anime Quotes</p>
                  </div>
                </div>
              </a>
              <a
                href="https://pratik1803.github.io/De-Laze/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={fun3} alt="" />
                  <div className={Styles.work_heading}>
                    <p>De-Laze</p>
                  </div>
                </div>
              </a>
              <a
                href="https://chillmountains.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={chillMountains} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Chill Mountains</p>
                  </div>
                </div>
              </a>
              <a
                href="https://parallax1.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={parallax} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Parallax</p>
                  </div>
                </div>
              </a>
              <a
                href="https://gsapanimated.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={stayAfloat} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Stay Afloat {"(GSAP)"}</p>
                  </div>
                </div>
              </a>
              <a
                href="https://clothingwebsite.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={gsap1} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Clothing Brand {"(GSAP)"}</p>
                  </div>
                </div>
              </a>
              <a
                href="https://awesomefullpageanimation.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <div className={Styles.individual_work}>
                  <img src={gsap2} alt="" />
                  <div className={Styles.work_heading}>
                    <p>Fullpage Animation {"(GSAP)"}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
