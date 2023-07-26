import PageHeader from 'components/PageHeader/PageHeader';
import styles from './Projects.module.scss';
import Personal from './components/Personal/Personal';
import FeMentor from './components/FeMentor/FeMentor';
import Footer from 'components/Footer/Footer';

const Projects = () => {
  return (
    <div className={styles.container}>
      <PageHeader title="project" desc="List of my projects" />
      <Personal />
      <FeMentor />
      <Footer />
    </div>
  )
}

export default Projects