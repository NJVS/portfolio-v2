import projects from 'data/projects.json';
import styles from './Personal.module.scss';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';

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
      </div>
    </section>
  )
}

export default Personal