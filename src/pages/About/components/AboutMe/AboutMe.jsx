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
              I am an aspiring front-end web developer seeking to kick-start my career in
              the field. Although I missed my chance to start my developer career immediately
              after graduation, I continue to strive to stay up-to-date with the latest trends
              and technologies in ever-evolving world of web development.
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