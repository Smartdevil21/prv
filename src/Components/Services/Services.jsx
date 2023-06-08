import React, { useEffect, useContext } from "react";
import Styles from "./Services.module.scss";
import { Icon } from "@iconify/react";
import { StatesContext } from "../../App";
import { services } from "../../data/service.data";

function Services() {
  const { states, setStates } = useContext(StatesContext);

  useEffect(() => {
    setStates((prev) => ({ ...prev, reversed: false }));
  }, []);

  function scrollUp(className) {
    document.querySelector(className).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className={Styles.services_wrapper}>
      <div className={Styles.services_homepage}>
        <h1>Services</h1>
        <div
          className={Styles.dropdown_wrapper}
          onClick={() => {
            scrollUp(".services");
          }}
        >
          <Icon icon="ant-design:caret-down-filled" color="var(--green)" />
        </div>
      </div>
      <div className={`${Styles.services} services`}>
        <h3>What I Do?</h3>
        <div className={Styles.services_container}>
          <div className={Styles.flexbox}>
            {services.map((service, index) => {
              return (
                <div className={Styles.service} key={index}>
                  <Icon icon={service.icon} color="var(--green)" />
                  <p className={Styles.service_heading}>{service.title}</p>
                  <p className={Styles.service_desc}>{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
