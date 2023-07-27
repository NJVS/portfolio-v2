import { Helmet } from 'react-helmet';
import PageHeader from 'components/PageHeader/PageHeader';
import styles from './Projects.module.scss';
import Personal from './components/Personal/Personal';
import FeMentor from './components/FeMentor/FeMentor';
import Footer from 'components/Footer/Footer';

const Projects = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Neil Jonathan | Projects</title>
        <meta name="title" content="Neil Jonathan | Portfolio" />
        <meta name="description" content="Neil Jonathan is a aspiring front-end web developer. Explore a collection of my project and learn more about me." />
        <meta name="keywords" content="website portfolio, front-end developer portfolio" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
      <PageHeader title="project" desc="List of my projects" />
      <Personal />
      <FeMentor />
      <Footer />
    </div>
  )
}

export default Projects