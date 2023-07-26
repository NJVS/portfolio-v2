import { Link } from 'react-router-dom';
import projects from 'data/projects.json';
import styles from './FeaturedProjects.module.scss';
import { ReactComponent as Arrow } from 'assets/icons/arrow-right.svg';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';
import dotSingle from 'assets/illustrations/dot-single.png';
import reqSingle from 'assets/illustrations/rect-single.png';

const FeaturedProjects = () => {

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}><span>#</span>projects</h2>
          <Link to="/projects">View More <Arrow /></Link>
        </div>
        <div className={styles.body}>
          <ProjectShowcase projects={projects.featured} />
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

export default FeaturedProjects