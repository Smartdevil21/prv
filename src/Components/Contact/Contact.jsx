import { Button, TextField } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import Styles from "./Contact.module.scss";
import { StatesContext } from "../../App";

function Contact() {
	const { states, setStates } = useContext(StatesContext);

	useEffect(() => {
		setStates((prev) => ({ ...prev, reversed: false }));
	},[]);

	return (
		<section className={Styles.contact}>
			<h1>Get In Touch!</h1>
			<div className={Styles.input_wrapper}>
				<div className={Styles.user_details}>
					<TextField variant="filled" size="small" label="Name" />
					<TextField variant="filled" size="small" label="Email" />
					<TextField variant="filled" size="small" label="Contact" />
				</div>
                <br/>
				<TextField
					variant="filled"
					label="Message"
					multiline
					minRows={10}
					fullWidth
                    style={{background:"#121212"}}
				/>
				<div className={Styles.bottom_btn}>
					<Button><p>Send</p></Button>
				</div>
			</div>
		</section>
	);
}

export default Contact;
