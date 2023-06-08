import React from "react";
import Styles from "./Sidebar.module.scss";
import { Icon } from "@iconify/react";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.sidebar_wrapper}>
        <p>Get In Touch</p>
        <div className={Styles.separation_line}> </div>
        <div className={Styles.social_links}>
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
    </div>
  );
}

export default Sidebar;
