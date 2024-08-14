import FrameComponent from "../components/frame-component";
import ContentParent from "../components/content-parent";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import GroupComponent2 from "../components/group-component2";
import TestimonialNavigation from "../components/testimonial-navigation";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent />
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <ContentParent />
      <FrameComponent1 />
      <section className={styles.testimonialCarousel}>
        <div className={styles.frameParent}>
          <GroupComponent1 />
          <GroupComponent />
          <GroupComponent2 />
        </div>
        <TestimonialNavigation />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
