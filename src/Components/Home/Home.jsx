import React, { useEffect, useRef, useState } from "react";
import Styles from "./Home.module.scss";
import profile from "../../Images/profile.png";
import { StatesContext } from "../../App";
import { useContext } from "react";
import { Icon } from "@iconify/react";

function Home() {
	const { states, setStates } = useContext(StatesContext);
	const fillup = useRef();

	let letter = 0;
	let word = 0;
	let direction = "forwards";
	function typewriter() {
		let words = ["MERN Developer.", "UI/UX Designer.", "Freelancer."];
		let content = words[word].slice(0, letter);
		fillup.current.innerHTML = content;
		if (direction === "forwards") {
			if (words[word].length === letter) {
				direction = "backwards";
				setTimeout(typewriter, 700);
			} else {
				setTimeout(typewriter, 50);
			}
			letter++;
		} else if (direction === "backwards") {
			letter--;
			if (letter === 1) {
				word++;
				direction = "forwards";
				if (word === words.length) {
					word = 0;
				}
			}
			setTimeout(typewriter, 50);
		}
	}

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
		typewriter();
	}, []);

	return (
		<div className={Styles.home}>
			<div className={Styles.profile_img}>
				<img src={profile} alt="" />
			</div>
			<div className={Styles.intro_text}>
				<p>
					Hello, I’m <strong>Pratik Vaidya</strong>,<br /> UI/UX Designer and a
					MERN Stack Developer
					<br /> based in Nagpur, India.
				</p>
			</div>
			<div className={Styles.changing_text}>
				<h2>
					I am a <strong ref={fillup}></strong>
				</h2>
			</div>
			<div className={Styles.home_social_links}>
				<a
					href="https://www.linkedin.com/in/prateek-vaidya-65b986201/"
					target={"_blank"}
				>
					<Icon className="mouse_hover" icon="akar-icons:linkedin-fill" />
				</a>
				<a href="https://www.instagram.com/prtk.sd/" target={"_blank"}>
					<Icon className="mouse_hover" icon="bi:instagram" />
				</a>
				<a href="https://github.com/Pratik1803" target={"_blank"}>
					<Icon className="mouse_hover" icon="akar-icons:github-fill" />
				</a>
				<a href="">
					<Icon className="mouse_hover" icon="dashicons:facebook-alt" />
				</a>
			</div>
		</div>
	);
}

export default Home;
