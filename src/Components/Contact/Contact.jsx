import { Button, TextField } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import Styles from "./Contact.module.scss";
import { StatesContext } from "../../App";
import axios from "axios";

function Contact() {
	const [loading, setLoading] = useState(false);
	const { states, setStates } = useContext(StatesContext);
	const [messageDetails, setMessageDetails] = useState({
		name: "",
		email: "",
		contact:"",
		message: "",
	});

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	}, []);

	const styles = (theme) => ({
		multilineColor: {
			color: "red",
		},
	});

	const submit = async () => {
		try {
			setLoading(true);
			const result = await axios({
				method: "post",
				url: `${process.env.REACT_APP_BACKEND_URL}`,
				data: {
					username: messageDetails.name,
					email: messageDetails.email,
					message: messageDetails.message,
				},
			});
			alert("Message Sent! ✈️");
			setMessageDetails({
				name:"",
				email:"",
				contact:"",
				message:""
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

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
						value={messageDetails.name}
						onChange={(e) => {
							setMessageDetails((prev) => ({ ...prev, name: e.target.value }));
						}}
					/>
					<TextField
						variant="filled"
						size="small"
						placeholder="Email"
						color="success"
						type={"email"}
						value={messageDetails.email}
						onChange={(e) => {
							setMessageDetails((prev) => ({ ...prev, email: e.target.value }));
						}}
					/>
					<TextField
						variant="filled"
						size="small"
						placeholder="Contact"
						color="success"
						type={"tel"}
						value={messageDetails.contact}
						onChange={(e) => {
							setMessageDetails((prev) => ({ ...prev, contact: e.target.value }));
						}}
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
				<textarea
					className={Styles.message_input}
					value={messageDetails.message}
					onChange={(e) => {
						setMessageDetails((prev) => ({ ...prev, message: e.target.value }));
					}}
					rows={10}
					placeholder="Message"
				/>
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
						onClick={submit}
					>
						<div className={`${Styles.test} test`}></div>
						<p>{loading ? "Loading" : "Send"}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
