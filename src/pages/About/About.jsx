import { Helmet } from 'react-helmet';
import styles from './About.module.scss';
import PageHeader from 'components/PageHeader/PageHeader';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from 'components/Footer/Footer';

const About = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Neil Jonathan | About me</title>
        <meta name="title" content="Neil Jonathan | Portfolio" />
        <meta name="description" content="Neil Jonathan is a aspiring front-end web developer. Explore a collection of my project and learn more about me." />
        <meta name="keywords" content="website portfolio, front-end developer portfolio" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
      <PageHeader title="about-me" desc="Who am i?" />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  )
}

export default About