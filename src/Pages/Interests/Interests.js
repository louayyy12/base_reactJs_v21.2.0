import React from "react";
import styles from "./Interests.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Interests = () => {
  return (
    <>
      <h1 className={cx("name")}>Interests</h1>
    </>
  );
};

export default Interests;
