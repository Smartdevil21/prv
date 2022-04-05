import React, { useEffect, useContext } from "react";
import Styles from "./Portfolio.module.scss";
import { StatesContext } from "../../App";
import bork from "../../Images/bork_1.png";
import weddingPhotographer from "../../Images/weddingPhotographer.png";
import chillMountains from "../../Images/chillMountains.png";
import parallax from "../../Images/parallax.png";
import portfolio2 from "../../Images/portfolio2.png";
import portfolio1 from "../../Images/portfolio1.png";
import stayAfloat from "../../Images/stayAfloat.png";
import { Icon } from "@iconify/react";
// import weddingPhotographer from "../../Images/weddingPhotographer.png";

function Portfolio() {
	const { states, setStates } = useContext(StatesContext);
	function scrollUp(className){
		document.querySelector(className).scrollIntoView({
			behavior:"smooth",
		});
	};

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	}, []);

	return (
		<section className={Styles.portfolio}>
			<div className={Styles.portfolio_homepage}>
				<h1>Portfolio</h1>
				<div className={Styles.dropdown_wrapper} onClick={()=>{
					scrollUp(".work");
				}}>
					<Icon icon="ant-design:caret-down-filled" color="#01ee99" />
				</div>
			</div>
			<div className={`${Styles.work} work`}>
				<div className={Styles.work_container}>
					<div className={Styles.bork_container}>
						<h3>My Projects</h3>
						<a href="https://bork0.herokuapp.com/" target={"_blank"}>
							<div className={Styles.bork_img}>
								<img src={bork} alt="" />
                                <div className={Styles.bork_title}>
                                    <p>Bork</p>
                                </div>
							</div>
						</a>
					</div>
					<div className={Styles.works_container}>
						<h3>My Work</h3>
						<div className={Styles.work_flexbox}>
							<a href="" rel="noreferrer" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={weddingPhotographer} alt="" />
									<div className={Styles.work_heading}>
										<p>Brute Markov</p>
									</div>
								</div>
							</a>
                            <a href="" rel="noreferrer" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={chillMountains} alt="" />
									<div className={Styles.work_heading}>
										<p>Chill Mountains</p>
									</div>
								</div>
							</a>
                            <a href="" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={parallax} alt="" />
									<div className={Styles.work_heading}>
										<p>Parallax</p>
									</div>
								</div>
							</a>
                            <a href="" rel="noreferrer" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={portfolio1} alt="" />
									<div className={Styles.work_heading}>
										<p>Portfolio-1</p>
									</div>
								</div>
							</a>
                            <a href="" rel="noreferrer" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={portfolio2} alt="" />
									<div className={Styles.work_heading}>
										<p>Portfolio-2</p>
									</div>
								</div>
							</a>
							<a href="" rel="noreferrer" target={"_blank"}>
								<div className={Styles.individual_work}>
									<img src={stayAfloat} alt="" />
									<div className={Styles.work_heading}>
										<p>Stay Afloat</p>
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
