import projects from 'data/projects.json';
import styles from './FeMentor.module.scss';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';
import dotSingle from 'assets/illustrations/dot-single.png';
import reqSingle from 'assets/illustrations/rect-single.png';

const FeMentor = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}><span>#</span>frontend-mentor</h2>
        </div>
        <div className={styles.body}>
          <ProjectShowcase projects={projects.fem} />
        </div>
        <div className={styles.illustration_left}>
          <img src={reqSingle} alt="" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotSingle} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FeMentor