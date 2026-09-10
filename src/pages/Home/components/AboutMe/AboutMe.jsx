import Button from 'components/Button/Button';
import styles from './AboutMe.module.scss';
import profilePic from 'assets/images/profile-pic.png';
import dotRect from 'assets/illustrations/dot-rect.png';
import rectDouble from 'assets/illustrations/rect-double.png';

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>#</span>about-me
          </h2>
        </div>
        <div className={styles.body}>
          <div className={styles.profile}>
            <img src={profilePic} alt="Neil Jonathan" />
          </div>
          <div className={styles.content}>
            <p>Hello, I'm Neil!</p>
            <p>
              Full-Stack Developer and AI Engineer experienced in architecting scalable
              web applications, interactive user interfaces, and intelligent LLM-driven features.
              Skilled across the modern JavaScript/TypeScript ecosystem (React 19, Next.js, Vite),
              Laravel, Livewire, Tailwind CSS, and AI APIs.
            </p>
            <p>
              I thrive on solving real-world problems by blending clean engineering with
              cutting-edge AI workflows—building maintainable systems that empower users
              and elevate product performance.
            </p>
            <Button type="link" url="/about">
              More about me -&gt;
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