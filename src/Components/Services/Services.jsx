import React, { useEffect, useContext } from "react";
import Styles from "./Services.module.scss";
import { Icon } from "@iconify/react";
import { StatesContext } from "../../App";

function Services() {
	const { states, setStates } = useContext(StatesContext);

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	}, []);

	function scrollUp(className){
		document.querySelector(className).scrollIntoView({
			behavior:"smooth",
		});
	};

	return (
		<section className={Styles.services_wrapper}>
			<div className={Styles.services_homepage}>
				<h1>Services</h1>
				<div className={Styles.dropdown_wrapper} onClick={()=>{
					scrollUp(".services");
				}}>
					<Icon icon="ant-design:caret-down-filled" color="#01ee99" />
				</div>
			</div>
			<div className={`${Styles.services} services`}>
				<h3>What I Do?</h3>
				<div className={Styles.services_container}>
					<div className={Styles.flexbox}>
						<div className={Styles.service}>
							<Icon icon="bx:code-alt" color="#01ee99" />
							<p className={Styles.service_heading}>MERN-Stack Development</p>
							<p className={Styles.service_desc}>
								Modern and mobile-ready website that will help you reach all of
								your marketing.
							</p>
						</div>
						<div className={Styles.service}>
                        <Icon icon="akar-icons:figma-fill" color="#01ee99" />
							<p className={Styles.service_heading}>UI/UX Design</p>
							<p className={Styles.service_desc}>
								Modern and mobile-ready website that will help you reach all of
								your marketing.
							</p>
						</div>
						<div className={Styles.service}>
                        <Icon icon="entypo:feather" color="#01ee99" />
							<p className={Styles.service_heading}>Content Writing</p>
							<p className={Styles.service_desc}>
								Modern and mobile-ready website that will help you reach all of
								your marketing.
							</p>
						</div>
						<div className={Styles.service}>
                        <Icon icon="bx:search-alt" color="#01ee99" />
							<p className={Styles.service_heading}>SEO</p>
							<p className={Styles.service_desc}>
								Modern and mobile-ready website that will help you reach all of
								your marketing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
