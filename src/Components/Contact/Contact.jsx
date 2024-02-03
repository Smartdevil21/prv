import { Stack } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./Contact.module.scss";
import { StatesContext } from "../../App";

function Contact() {
  const { states, setStates } = useContext(StatesContext);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Not a valid email adderess")
      .required("Your email is required"),
    message: Yup.string().min(1).required("Please provide a message"),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnBlur: true,
    });

  useEffect(() => {
    setStates((prev) => ({ ...prev, reversed: false }));
  }, []);

  return (
    <section className={Styles.contact}>
      <h1>Get In Touch!</h1>
      <div className={Styles.input_wrapper}>
        <form onSubmit={handleSubmit}>
          <Stack gap={0.5} sx={{ width: "100%" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoFocus
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}
              >
                {errors.name}
              </span>
            )}
          </Stack>
          <Stack gap={0.5} sx={{ width: "100%" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}
              >
                {errors.email}
              </span>
            )}
          </Stack>
          <Stack gap={0.5} sx={{ width: "100%" }}>
            <textarea
              rows={5}
              name="message"
              placeholder="Write your message here"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}
              >
                {errors.message}
              </span>
            )}
          </Stack>
          <button
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
            type="submit"
            disabled={isSubmitting}
          >
            <div className={`${Styles.test} test`}></div>
            <p>{isSubmitting ? "Loading" : "Send"}</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
