import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <div className={styles.footerBrand}>
              <div className={styles.brandLogo}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.brandName}>
                  <h1 className={styles.mumair}>
                    <b>M</b>
                    <span className={styles.umair}>{`umair `}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.footerNavigation}>
              <div className={styles.home}>Home</div>
              <div className={styles.aboutMe}>About Me</div>
              <div className={styles.services}>Services</div>
              <div className={styles.projects}>Projects</div>
              <div className={styles.testimonials}>Testimonials</div>
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <div className={styles.socialLinks}>
              <img
                className={styles.facebookNegative}
                alt=""
                src="/facebook--negative.svg"
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src="/twitter--negative.svg"
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src="/instagram--negative.svg"
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src="/linkedin--negative.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.copyright}>
        <div className={styles.copyrightChild} />
        <div className={styles.mumairAllRightsContainer}>
          <span>{`© 2023 `}</span>
          <b className={styles.mumair1}>{`Mumair `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
