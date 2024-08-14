import ProjectsGrid from "./projects-grid";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.serviceContentWrapper, className].join(" ")}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceDetails}>
          <div className={styles.serviceHeading}>
            <div className={styles.serviceTitleParent}>
              <div className={styles.servicesWrapper}>
                <h1 className={styles.services}>Services</h1>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
          <div className={styles.cardsParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.cardOne}>
                <div className={styles.cardOneIcons}>
                  <img
                    className={styles.cardOneTopIcons}
                    alt=""
                    src="/card-one-top-icons.svg"
                  />
                  <img
                    className={styles.cardOneBottomIcons}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.cardTwoIcons}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.cardTwoTopIcons}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.cardTwoBottomIcons}
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className={styles.cardThreeIcon}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className={styles.cardFourIcon}
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className={styles.cardFiveIcon}
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
              </div>
              <div className={styles.cardNames}>
                <h3 className={styles.uiux}>UI/UX</h3>
                <div className={styles.cardDescriptions}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.frameChild} />
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1.svg"
              />
              <h3 className={styles.webDesign}>{`Web Design `}</h3>
              <div className={styles.cardThreeDescription}>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </div>
              </div>
            </div>
            <div className={styles.cards1}>
              <div className={styles.frameChild} />
              <div className={styles.cardsInner}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-18.svg"
                />
              </div>
              <div className={styles.cardNames}>
                <h3 className={styles.webDesign}>App Design</h3>
                <div className={styles.cardThreeDescription}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cards2}>
              <div className={styles.frameChild} />
              <div className={styles.frameDiv}>
                <div className={styles.cardOneIcons}>
                  <img
                    className={styles.cardOneTopIcons}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className={styles.cardNames}>
                <h3 className={styles.webDesign}>{`Graphic Design `}</h3>
                <div className={styles.cardThreeDescription}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectContentWrapper}>
          <div className={styles.projectContent}>
            <div className={styles.projectDetails}>
              <div className={styles.projectHeading}>
                <div className={styles.projectTitleParent}>
                  <h1 className={styles.myProjects}>My Projects</h1>
                </div>
                <div className={styles.loremIpsumDolor5}>
                  Lorem ipsum dolor sit amet consectetur. Mollis erat duis
                  aliquam mauris est risus lectus. Phasellus consequat urna
                  tellus
                </div>
              </div>
            </div>
            <div className={styles.projectFilters}>
              <div className={styles.viewAllButton}>
                <div className={styles.viewAllParent}>
                  <div className={styles.all}>All</div>
                </div>
              </div>
              <div className={styles.filterNames}>
                <div className={styles.uiux1}>UI/UX</div>
              </div>
              <button className={styles.filterNames1}>
                <div className={styles.webDesign1}>Web Design</div>
              </button>
              <button className={styles.filterNames2}>
                <div className={styles.appDesign1}>App Design</div>
              </button>
              <button className={styles.filterNames2}>
                <div className={styles.appDesign1}>Graphic Design</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.projectsGridParent}>
          <div className={styles.projectsGrid}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.webDesignsTitles}>
                <img
                  className={styles.webDesignsIcon}
                  loading="lazy"
                  alt=""
                  src="/web-designs@2x.png"
                />
                <img
                  className={styles.webDesignsIcon1}
                  alt=""
                  src="/web-designs-1@2x.png"
                />
              </div>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.webDesignsDescriptions}>
              <div className={styles.webDesign2}>{`Web Design `}</div>
              <b
                className={styles.aircallingLandingPage}
              >{`AirCalling Landing Page Design `}</b>
            </div>
          </div>
          <ProjectsGrid
            webDesigns="/web-designs-2@2x.png"
            webDesigns1="/web-designs-3@2x.png"
            businessLandingPageDesign="Business Landing Page Design "
          />
          <ProjectsGrid
            webDesigns="/web-designs-4@2x.png"
            webDesigns1="/web-designs-5@2x.png"
            businessLandingPageDesign="Ecom Web Page Design "
          />
        </div>
        <div className={styles.testimonialsContentWrapper}>
          <div className={styles.serviceTitleParent}>
            <div className={styles.servicesWrapper}>
              <h1 className={styles.services}>Testimonials</h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
