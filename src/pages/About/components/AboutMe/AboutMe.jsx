import Button from 'components/Button/Button';
import styles from './AboutMe.module.scss';
import profilePic from 'assets/images/profile-pic.png';
import dotRect from 'assets/illustrations/dot-rect.png';
import rectDouble from 'assets/illustrations/rect-double.png';

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.profile}>
            <img src={profilePic} alt="Neil Jonathan" />
          </div>
          <div className={styles.content}>
            <p>Hello, I'm Neil!</p>
            <p>
              Full-Stack Developer and AI Engineer with professional experience in designing
              and building scalable web applications, robust APIs, and intelligent product features.
              Deeply versed in Laravel, Livewire, Tailwind CSS, modern React, and AI tooling,
              with a dedicated focus on clean architecture, resilient system design, and continuous optimization.
            </p>
            <p>
              I actively build with and integrate AI—ranging from multi-agent orchestration and RAG pipelines
              to generative UI components and developer tooling. Every personal project originates from
              a real problem I am determined to solve, driving constant growth across the full stack.
            </p>
            <Button
              type="link"
              url="https://www.dropbox.com/s/s6skg9gmkuvif1g/CV.pdf?dl=0"
              target="_blank"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className={styles.illustration_left}>
          <img src={dotRect} alt="" />
        </div>
        <div className={styles.illustration_right}>
          <img src={rectDouble} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;