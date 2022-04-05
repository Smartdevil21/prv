import React, { useRef, useContext, useEffect, useState } from "react";
import Styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { StatesContext } from "../../App";
import gsap from "gsap";

function Navbar() {
	const header = useRef();
	const navigator = useNavigate();
	const [navState, setNavState] = useState(false); //false means closed/normal
	const { states, setStates } = useContext(StatesContext);
	const tl = useRef();

	//for opening and Closing of navbar in mobile view
	function hamburger() {
		setNavState(!navState);
	}

	function changeLink(link) {
		setStates((prev) => ({ ...prev, reversed: true }));
		setTimeout(() => {
			navigator(link);
		}, 1700);
		hamburger();
	}

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (document.querySelector(".app").getBoundingClientRect().top < -300) {
				header.current.style.background = "#0C0C0C";
				header.current.style.top = "0px";
				header.current.style.padding = "20px 50px";
			} else {
				header.current.style.background = "transparent";
				if (window.innerWidth > 800) {
					header.current.style.top = "30px";
				} else {
					header.current.style.top = "0px";
				}
				header.current.style.padding = "0px 50px";
			}
		});
		tl.current = gsap
			.timeline()
			.to(header.current, { height: "80px", duration: 0.3 })
			.to(header.current, { backgroundColor: "transparent", duration: 0.3 });
	}, []);

	useEffect(() => {
		tl.current.reversed(navState);
	}, [navState]);

	return (
		<header
			className={Styles.header}
			ref={header}
		>
			<div className={Styles.logo}>
				<h2>
					P<strong>V</strong>
				</h2>
			</div>
			<div
				className={`${Styles.hamburger} ${
					navState ? Styles.nav_open : Styles.nav_close
				}`}
				onClick={hamburger}
			>
				<div className={`${Styles.ham_line1} ham_line1`}></div>
				<div className={`${Styles.ham_line2} ham_line2`}></div>
				<div className={`${Styles.ham_line3} ham_line3`}></div>
			</div>
			<div className={Styles.navlinks}>
				<div
					className={Styles.link_wrapper}
					onClick={() => {
						changeLink("/prv");
					}}
				>
					<p
						style={{ color: states.activeLink === "/prv" ? "#fff" : "#989898" }}
					>
						Home
					</p>
				</div>
				<div
					className={`${Styles.link_wrapper} mouse_hover`}
					onClick={() => {
						changeLink("/prv/about");
					}}
				>
					<p
						style={{
							color: states.activeLink === "/prv/about" ? "#fff" : "#989898",
						}}
					>
						About
					</p>
				</div>
				<div
					className={`${Styles.link_wrapper} mouse_hover`}
					onClick={() => {
						changeLink("/prv/services");
					}}
				>
					<p
						style={{
							color: states.activeLink === "/prv/services" ? "#fff" : "#989898",
						}}
					>
						Services
					</p>
				</div>
				<div
					className={`${Styles.link_wrapper} mouse_hover`}
					onClick={() => {
						changeLink("/prv/portfolio");
					}}
				>
					<p
						style={{
							color:
								states.activeLink === "/prv/portfolio" ? "#fff" : "#989898",
						}}
					>
						Portfolio
					</p>
				</div>
				<div
					className={`${Styles.link_wrapper} mouse_hover`}
					onClick={() => {
						changeLink("/prv/contact");
					}}
				>
					<p
						style={{
							color: states.activeLink === "/prv/contact" ? "#fff" : "#989898",
						}}
					>
						Contact
					</p>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
