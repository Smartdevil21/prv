import React from "react";
import Styles from "./Sidebar.module.scss";
import { Icon } from "@iconify/react";

function Sidebar() {
	return (
		<div className={Styles.sidebar}>
			<div className={Styles.sidebar_wrapper}>
				<p>Follow Me</p>
				<div className={Styles.separation_line}> </div>
				<div className={Styles.social_links}>
					<Icon className="mouse_hover" icon="akar-icons:linkedin-fill" />
                    <Icon className="mouse_hover" icon="bi:instagram" />
                    <Icon className="mouse_hover" icon="akar-icons:github-fill" />
                    <Icon className="mouse_hover" icon="dashicons:facebook-alt" />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
