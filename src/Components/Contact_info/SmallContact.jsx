import React from "react";
import Styles from "./Small_contact.module.scss";
import { Icon } from "@iconify/react";

function SmallContact() {
  return (
    <div className={Styles.small_contact}>
      <p>
        <strong>E: </strong>
        <a href="mailto:prtk.app.dev@gmail.com">prtk.app.dev@gmail.com</a>
      </p>
      <p>
        <strong>T: </strong>+91 70585 77538
      </p>
    </div>
  );
}

export default SmallContact;
