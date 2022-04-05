import { Button, TextField } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import Styles from "./Contact.module.scss";
import { StatesContext } from "../../App";

function Contact() {
	const { states, setStates } = useContext(StatesContext);

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	}, []);

	const styles = (theme) => ({
		multilineColor: {
			color: "red",
		},
	});

	return (
		<section className={Styles.contact}>
			<h1>Get In Touch!</h1>
			<div className={Styles.input_wrapper}>
				<div className={Styles.user_details}>
					<TextField
						variant="filled"
						size="small"
						placeholder="Name"
						color="success"
					/>
					<TextField
						variant="filled"
						size="small"
						placeholder="Email"
						color="success"
					/>
					<TextField
						variant="filled"
						size="small"
						placeholder="Contact"
						color="success"
					/>
				</div>
				<br />
				{/* <label htmlFor="name">Message:</label> */}
				{/* <TextField
					name="message"
					variant="outlined"
					size="small"
					color="success"
					placeholder="Message"
					multiline
					minRows={10}
					fullWidth
					className={Styles.message_input}
				/> */}
				<textarea className={Styles.message_input} rows={10} placeholder="Message" />
				<div className={Styles.bottom_div}>
					<div
						onMouseEnter={(e) => {
							const test = document.querySelector(".test");
							test.style.left = `${
								e.clientX - Math.floor(e.target.getBoundingClientRect().left)
							}px`;
							test.style.top = `${
								e.clientY - Math.floor(e.target.getBoundingClientRect().top)
							}px`;
						}}
						onMouseLeave={(e) => {
							const test = document.querySelector(".test");
							test.style.left = `${
								e.clientX - Math.floor(e.target.getBoundingClientRect().left)
							}px`;
							test.style.top = `${
								e.clientY - Math.floor(e.target.getBoundingClientRect().top)
							}px`;
						}}
						className={`${Styles.contact_btn}`}
					>
						<div className={`${Styles.test} test`}></div>
						<p>Send</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
