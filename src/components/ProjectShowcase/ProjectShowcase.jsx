import styles from './ProjectShowcase.module.scss';
import Card from './Card/Card';

const ProjectShowcase = ({ projects = [] }) => {
  return (
    <div className={styles.container}>
      {projects.map((item, index) => (
        <Card key={item.id || item.title || index} project={item} />
      ))}
    </div>
  );
};

export default ProjectShowcase;