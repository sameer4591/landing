import PropTypes from "prop-types";
import styles from "./testimonial-navigation.module.css";

const TestimonialNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.testimonialNavigation, className].join(" ")}>
      <div className={styles.navigationDots}>
        <div className={styles.dotsContainer}>
          <div className={styles.dots}>
            <div className={styles.dotsChild} />
            <div className={styles.dotsItem} />
            <div className={styles.dotsChild} />
            <div className={styles.dotsChild} />
          </div>
        </div>
        <div className={styles.contactHeadingParent}>
          <div className={styles.contactHeading}>
            <h1 className={styles.letsDesignTogether}>Lets Design Together</h1>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formFields}>
            <div className={styles.formLabels}>
              <div className={styles.formLabelsChild} />
              <input
                className={styles.enterYourEmail}
                placeholder="Enter Your Email"
                type="text"
              />
            </div>
            <button className={styles.formLabels1}>
              <div className={styles.formLabelsItem} />
              <div className={styles.contactMe}>{`Contact Me `}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialNavigation.propTypes = {
  className: PropTypes.string,
};

export default TestimonialNavigation;
