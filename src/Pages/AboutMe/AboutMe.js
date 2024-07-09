import React from "react";
import styles from "./AboutMe.module.scss";
import classNames from "classnames/bind";
import { FaAddressCard } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { BsFillHexagonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const cx = classNames.bind(styles);
const AboutMe = () => {
  return (
    <>
      <h1 className={cx("name")}>
        Louay <span>Harb</span>
      </h1>
      <div className={cx("text", "align-center")}>
        <span className={cx("label")}>
          <FaAddressCard className={cx("icon")} />
        </span>
        <span className={cx("ctx")}>FullStack Developer</span>
      </div>
      <div className={cx("text", "align-center")}>
        <span className={cx("label")}>
          <FaMap className={cx("icon")} />
        </span>
        <span className={cx("ctx")}>
          Beirut Lebanon
        </span>
      </div>
      <div className={cx("alert")}>
        Hi there, welcome to look at my profile!
        <br />
        In <strong>1+ years</strong> of JavaScript experience. I'm passionate
        about creating seamless user experiences and believe that simplifying
        code leads to more agile applications.
      </div>
      <div className={cx("text-sub")}>
        <span className={cx("label", "mg-top")}>
          <RiReactjsFill className={cx("icon", "cl-react")} />
        </span>
        <span className={cx("ctx")}>
          <strong>Front-end:</strong> I have experience working with
          <strong>
            {" "}
            ReactJS (NextJS,Redux), Material UI, CSS,
            and other technologies.
          </strong>
        </span>
      </div>
      <div className={cx("text-sub")}>
        <span className={cx("label", "mg-top")}>
          <BsFillHexagonFill className={cx("icon", "cl-node")} />
        </span>
        <span className={cx("ctx")}>
          <strong>Back-end:</strong> I have experience working with
          <strong>
            {" "}
            Node.JS, TypeScript, ExpressJS, NestJS, MongoDB, MySQL, and other
            technologies.
          </strong>
        </span>
      </div>
      <div className={cx("social")}>
        <div className={cx("item")}>
          <FaPhoneSquareAlt className={cx("icon", "phone")} />{" "}
          <span>+961 70 360451</span>
        </div>
        <div className={cx("item")}>
          <LiaBirthdayCakeSolid className={cx("icon", "birth")} />{" "}
          <span>05/06/2001</span>
        </div>
        <div className={cx("item")}>
          <MdEmail className={cx("icon", "gmail")} />{" "}
          <span>Louayharb7@gmail.com</span>
        </div>
        <div className={cx("list-icon")}>
          <a
            href="https://github.com/LouayHarb"
            className={cx("bl-icon", "bg-github")}
          >
            <RxGithubLogo className={cx("icon")} />
          </a>
          <a
            href="https://www.facebook.com/loulou.harb.1?mibextid=LQQJ4d"
            className={cx("bl-icon", "bg-facebook")}
          >
            <FaFacebookF className={cx("icon")} />
          </a>
        </div>
      </div>
      <div className={cx("text-sub")}>
        <span className={cx("ctx", "font-italic")}>
          "Looking up at a starry night sky. How little are we in this
          universe?"
        </span>
      </div>
    </>
  );
};

export default AboutMe;
