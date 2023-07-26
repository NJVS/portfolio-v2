import styles from './ProjectShowcase.module.scss';
import Card from './Card/Card';

const ProjectShowcase = ({ projects }) => {
  // console.log(projects[0].title)

  return (
    <div className={styles.container}>
      {projects.map((item, index) =>
        <Card
          key={index}
          thumbnail={item.thumbnail}
          stacks={item.stacks.join(' ')}
          title={item.title}
          desc={item.desc}
          demoUrl={item.liveUrl}
          repoUrl={item.repoUrl}
        />
      )}
    </div>
  )
}

export default ProjectShowcase