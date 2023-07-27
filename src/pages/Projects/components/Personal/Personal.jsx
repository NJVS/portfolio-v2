import projects from 'data/projects.json';
import styles from './Personal.module.scss';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';
import rectdouble from 'assets/illustrations/rect-double.png';
import dotrect from 'assets/illustrations/dot-rect.png';

const Personal = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}><span>#</span>personal</h2>
        </div>
        <div className={styles.body}>
          <ProjectShowcase projects={projects.personal} />
        </div>
        <div className={styles.illustration_left}>
          <img src={rectdouble} alt="double rect" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotrect} alt="double rect" />
        </div>
      </div>
    </section>
  )
}

export default Personal