import Btn from "./btn";
import Skills from "./skills";
import Skills1 from "./skills1";
import PropTypes from "prop-types";
import styles from "./content-parent.module.css";

const ContentParent = ({ className = "" }) => {
  return (
    <section className={[styles.contentParent, className].join(" ")}>
      <div className={styles.contentContainer}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroDetails}>
              <div className={styles.heroNameParentParent}>
                <div className={styles.heroNameParent}>
                  <div className={styles.nameAndTitle}>
                    <div className={styles.nameContainer}>
                      <div className={styles.hiIAmWrapper}>
                        <div className={styles.hiIAm}>{`Hi I am `}</div>
                      </div>
                      <h3
                        className={styles.muhammadUmair}
                      >{`Muhammad Umair `}</h3>
                    </div>
                  </div>
                  <h1 className={styles.uiUx}>{`UI & UX`}</h1>
                </div>
                <div className={styles.heroDescription}>
                  <div className={styles.descriptionParent}>
                    <div className={styles.descriptionContainer}>
                      <div className={styles.designerWrapper}>
                        <h1 className={styles.designer}>{`Designer `}</h1>
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialMediaParent}>
              <div className={styles.socialMediaContainer}>
                <img
                  className={styles.socialMediaContainerChild}
                  loading="lazy"
                  alt=""
                  src="/group-2@2x.png"
                />
                <div className={styles.backgroundShape} />
              </div>
              <div className={styles.socialMediaLinks}>
                <div className={styles.socialIcons}>
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/linkedin--negative.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutContentParent}>
          <div className={styles.aboutContent}>
            <img
              className={styles.socialMediaContainerChild}
              loading="lazy"
              alt=""
              src="/group-7@2x.png"
            />
            <div className={styles.imageShape} />
          </div>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutMeParent}>
              <h1 className={styles.aboutMe}>{`About Me `}</h1>
              <div className={styles.skillsContainer}>
                <div className={styles.aboutDescription}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                </div>
                <Skills uX="UX" />
                <Skills1 websiteDesign="Website Design" />
                <Skills1
                  websiteDesign="App Design "
                  propWidth="721px"
                  propRight="20px"
                />
                <Skills
                  uX="Graphic Design "
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentParent.propTypes = {
  className: PropTypes.string,
};

export default ContentParent;
