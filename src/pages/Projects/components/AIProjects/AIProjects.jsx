import projects from 'data/projects.json';
import styles from './AIProjects.module.scss';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';
import rectdouble from 'assets/illustrations/rect-double.png';
import dotrect from 'assets/illustrations/dot-rect.png';

const AIProjects = () => {
  const aiProjects = projects.ai || [];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>#</span>ai-and-llm-systems
          </h2>
          <span className={styles.tag}>INTELLIGENT APPS &amp; AGENTS</span>
        </div>
        <div className={styles.body}>
          <ProjectShowcase projects={aiProjects} />
        </div>
        <div className={styles.illustration_left}>
          <img src={rectdouble} alt="" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotrect} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
