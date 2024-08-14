import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./skills.module.css";

const Skills = ({ className = "", uX, propDisplay, propMinWidth }) => {
  const uXStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.skills, className].join(" ")}>
      <div className={styles.ux} style={uXStyle}>
        {uX}
      </div>
      <div className={styles.uXIconsWrapper}>
        <div className={styles.uXIcons}>
          <div className={styles.uXIconShapes} />
          <div className={styles.webIcons} />
          <div className={styles.appIcons} />
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
  uX: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Skills;
