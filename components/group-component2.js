import PropTypes from "prop-types";
import styles from "./group-component2.module.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/ellipse-11@2x.png"
      />
      <div className={styles.name}>Name</div>
      <div className={styles.parent}>
        <h3 className={styles.h3}>“</h3>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumDolorSitAmetConParent}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.h31}>“</h3>
              </div>
            </div>
            <div className={styles.ceo}>CEO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
