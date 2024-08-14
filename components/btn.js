import PropTypes from "prop-types";
import styles from "./btn.module.css";

const Btn = ({ className = "" }) => {
  return (
    <div className={[styles.btn, className].join(" ")}>
      <div className={styles.buttonShape} />
      <div className={styles.hireMe}>{`Hire Me `}</div>
    </div>
  );
};

Btn.propTypes = {
  className: PropTypes.string,
};

export default Btn;
