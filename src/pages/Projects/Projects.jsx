import PageHeader from 'components/PageHeader/PageHeader';
import styles from './Projects.module.scss';
import Personal from './components/Personal/Personal';

const Projects = () => {
  return (
    <div className={styles.container}>
      <PageHeader title="project" desc="List of my projects" />
      <Personal />
    </div>
  )
}

export default Projects