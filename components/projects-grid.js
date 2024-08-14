import PropTypes from "prop-types";
import styles from "./projects-grid.module.css";

const ProjectsGrid = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
}) => {
  return (
    <div className={[styles.projectsGrid, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.webDesignsParent}>
          <img className={styles.webDesignsIcon} alt="" src={webDesigns} />
          <img className={styles.webDesignsIcon1} alt="" src={webDesigns1} />
        </div>
      </div>
      <div className={styles.webDesignParent}>
        <div className={styles.webDesign}>{`Web Design `}</div>
        <b className={styles.businessLandingPage}>
          {businessLandingPageDesign}
        </b>
      </div>
    </div>
  );
};

ProjectsGrid.propTypes = {
  className: PropTypes.string,
  webDesigns: PropTypes.string,
  webDesigns1: PropTypes.string,
  businessLandingPageDesign: PropTypes.string,
};

export default ProjectsGrid;
