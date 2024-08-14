import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./skills1.module.css";

const Skills1 = ({ className = "", websiteDesign, propWidth, propRight }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const graphicIconsStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={[styles.skills, className].join(" ")}>
      <div className={styles.websiteDesign}>{websiteDesign}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} style={rectangleDivStyle} />
        <div className={styles.graphicIcons} style={graphicIconsStyle} />
      </div>
    </div>
  );
};

Skills1.propTypes = {
  className: PropTypes.string,
  websiteDesign: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default Skills1;
