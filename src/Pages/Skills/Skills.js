import React from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import {
  FaNode,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaCheck,
} from "react-icons/fa";
import { SiNestjs, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";

const cx = classNames.bind(styles);
const Skills = () => {
  return (
    <>
      <h1 className={cx("name")}>Skills</h1>
      <div className={cx("desc")}>Programming Languages & Tools:</div>
      <div className={cx("bl-languages")}>
        <IoLogoJavascript className={cx("language", "javaScript")} />
        <SiTypescript className={cx("language", "typeScript")} />
        <RiReactjsFill className={cx("language", "reactJs")} />
        <FaNode className={cx("language", "nodeJs")} />
        <SiNestjs className={cx("language", "nestJs")} />
        <DiMongodb className={cx("language", "mongodb")} />
        <GrMysql className={cx("language", "mysql")} />
        <FaHtml5 className={cx("language", "html5")} />
        <IoLogoCss3 className={cx("language", "css3")} />
        <SiTailwindcss className={cx("language", "tailwind")} />
        <FaBootstrap className={cx("language", "bootstrap")} />
        <SiRedux className={cx("language", "redux")} />
        <FaGithub className={cx("language", "github")} />
        <FaGitlab className={cx("language", "gitlab")} />
        <FaTrello className={cx("language", "trello")} />
      </div>
      <div className={cx("desc")}>Workflow:</div>
      <ul className={cx("list-skill")}>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Testing & Debugging</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Git, Github for Teamwork</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Responsive Web Design</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>Agile Development & Scrum</span>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>English for Work!</span>
        </li>
        <li>
          <ul className={cx("item-show")}>
            <li>
              • For Reading: I can comfortably read and interpret documentation,
              project specifications, and work totally in English.
            </li>
            <li>
              • For Speaking: I am capable of basic communication and am always
              striving to improve everyday. I am now practicing communication
              with a Philippines teacher every weekend.
            </li>
            <li>
              • I would really like the opportunity to work at your
              organization, where I would be able to practice my ability to
              speak English.
            </li>
          </ul>
        </li>
        <li className={cx("item")}>
          <FaCheck className={cx("icon")} />
          <span className={cx("strong")}>My maxim:</span>
          <span>"Learning new everyday not the copycat of yesterday!"</span>
        </li>
      </ul>
    </>
  );
};

export default Skills;
