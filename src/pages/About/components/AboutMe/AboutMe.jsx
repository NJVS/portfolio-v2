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
            <img src={profilePic} />
          </div>
          <div className={styles.content}>
            <p>Hello, I'm Neil!</p>
            <p>
              Full Stack Developer with professional experience in building scalable web applications 
              and platform features. Experienced in Laravel, Livewire, Tailwind CSS, and modern web 
              development practices, with a focus on clean code, maintainable systems, and improving 
              application performance.
            </p>
            <p>
              I enjoy solving and hack things up for any immediate projects I want to pursue,
              and majority of my personal projects came from problems I want to solve. By figuring
              out how to do that, I improve and expand my coding skills.
            </p>
            <Button type="link" url="https://www.dropbox.com/s/s6skg9gmkuvif1g/CV.pdf?dl=0" target="_target">Donwload CV</Button>
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
  )
}

export default AboutMe