import styles from './Hero.module.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Arrow from 'assets/icons/arrows.svg?react';
import Button from 'components/Button/Button';
import rectdouble from 'assets/illustrations/rect-double.png';
import dotrect from 'assets/illustrations/dot-rect.png';

const Hero = () => {
  const { height } = useWindowDimensions();

  function scrollToHandler() {
    window.scroll({
      top: height || window.innerHeight,
      behavior: 'smooth',
    });
  }

  function openAiChatHandler() {
    window.dispatchEvent(new CustomEvent('toggle-ai-assistant', { detail: { open: true } }));
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.badge}>
          <span className={styles.statusDot}></span>
          Available for Full-Stack & AI opportunities
        </div>

        <h1>
          Neil is a <span>Full-Stack Developer</span> and <span>AI Engineer</span>
        </h1>

        <p>
          Crafting high-performance web applications and intelligent AI experiences
          where robust architecture meets creative engineering.
        </p>

        <div className={styles.ctaGroup}>
          <Button type="link" url="/projects">
            View Projects -&gt;
          </Button>
          <Button type="button" onClick={openAiChatHandler} className={styles.aiBtn}>
            ✨ Ask Neil's AI
          </Button>
          <Button type="link" url="/contacts" className={styles.contactBtn}>
            Contact Me
          </Button>
        </div>

        <button
          className={styles.nav_arrow}
          onClick={scrollToHandler}
          aria-label="Scroll to next section"
        >
          <Arrow />
        </button>

        <div className={styles.illustration_left}>
          <img src={rectdouble} alt="geometry decoration" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotrect} alt="geometry decoration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
