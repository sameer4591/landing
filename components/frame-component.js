import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.subtractParent}>
          <img
            className={styles.subtractIcon}
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
          <div className={styles.mumairWrapper}>
            <a className={styles.mumair}>
              <b>M</b>
              <span className={styles.umair}>{`umair `}</span>
            </a>
          </div>
        </div>
        <nav className={styles.navigationParent}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.aboutMe}>About Me</a>
            <a className={styles.services}>Services</a>
            <a className={styles.projects}>Projects</a>
          </nav>
        </nav>
        <div className={styles.lowerNavigationParent}>
          <div className={styles.lowerNavigationLinksParent}>
            <div className={styles.lowerNavigationLinks}>
              <a className={styles.testimonials}>Testimonials</a>
            </div>
            <div className={styles.lowerNavigationLinks}>
              <a className={styles.contact}>Contact</a>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <a className={styles.downlaodCv}>Downlaod CV</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
