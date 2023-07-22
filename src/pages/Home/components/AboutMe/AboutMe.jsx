import Button from 'components/Button/Button';
import styles from './AboutMe.module.scss';
import profilePic from 'assets/images/profile-pic.png';

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}><span>#</span>about-me</h2>
        </div>
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
            <Button type="link" url="/about-me" >More about me</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe