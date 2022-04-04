import React, { useRef, useContext, useEffect } from "react";
import Styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { StatesContext } from "../../App";

function Navbar() {
	const header = useRef();
	const navigator = useNavigate();
	const { states, setStates } = useContext(StatesContext);

	function changeLink(link) {
		setStates((prev) => ({ ...prev, reversed: true }));
		setTimeout(() => {
			navigator(link);
		}, 1700);
	}

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (
				document.querySelector(".app").getBoundingClientRect().top < -300
			) {
				header.current.style.background = "#0C0C0C";
				header.current.style.top = "0px";
				header.current.style.padding = "20px 0px";
			} else {
				header.current.style.background = "transparent";
				header.current.style.top = "30px";
				header.current.style.padding = "0px 0px";
			};
		});
	}, []);

	return (
		<header className={`${Styles.header} header`} ref={header}>
			<div className={Styles.logo}>
				<h2>
					P<strong>V</strong>
				</h2>
			</div>
			<div className={Styles.navlinks}>
				<div
					className={Styles.link_wrapper}
					onClick={() => {
						changeLink("/prv");
					}}
				>
					<p style={{ color: states.activeLink === "/prv" ? "#fff" : "#989898" }}>
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
							color: states.activeLink === "/prv/portfolio" ? "#fff" : "#989898",
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
