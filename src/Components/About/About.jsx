import React, { useEffect } from "react";
import Styles from "./About.module.scss";
import { StatesContext } from "../../App";
import { useContext } from "react";
import { Button } from "@mui/material";

function About() {
	const { states, setStates } = useContext(StatesContext);

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	}, []);

	return (
		<section className={Styles.about}>
			<div className={Styles.about_homepage}>
				<h1>About Me</h1>
			</div>
			<div className={Styles.about_me}>
				<div className={Styles.about_me_wrapper}>
					<h3>Who Am I?</h3>
					<div className={Styles.info_wrapper}>
						<div className={Styles.image_wrapper}>
							{/* <img src="" alt="" /> */}
						</div>
						<div className={Styles.text_wrapper}>
							<p>
								I am a freelance MERN Stack developer and a UI/UX Designer
								powered by Figma, JavaScript, Visual Studio Code and Coffee. I
								love cycling, photography, drawing and bumming around. For any
								business related issue, email me and to get in touch, feel free
								to contact me anytime.
							</p>
							<div className={Styles.info_sec}>
								<div className={Styles.info_half_1}>
									<p>
										<strong>Age</strong> 20
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
										<strong>Email</strong> pratikvaidya1803@gmail.com
									</p>
								</div>
							</div>
							<Button>Contact</Button>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.skills}>
				<h3>My Skills</h3>
				<div className={Styles.skills_wrapper}>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 90%, #0C0C0C 90% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>90%</p>
							</div>
						</div>
						<p>HTML/CSS</p>
					</div>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 80%, #0C0C0C 80% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>80%</p>
							</div>
						</div>
						<p>JavaScript</p>
					</div>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 80%, #0C0C0C 80% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>80%</p>
							</div>
						</div>
						<p>ReactJS</p>
					</div>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 60%, #0C0C0C 60% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>60%</p>
							</div>
						</div>
						<p>NodeJS</p>
					</div>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 70%, #0C0C0C 70% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>70%</p>
							</div>
						</div>
						<p>MongoDB</p>
					</div>
					<div className={Styles.skill_container}> 
						<div className={Styles.outer_box} style={{background:"conic-gradient(#01EE99 0% 60%, #0C0C0C 60% 100%)"}}>
							<div className={Styles.inner_box}>
								<p>60%</p>
							</div>
						</div>
						<p>Github</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
