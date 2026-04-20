import styles from './About.module.scss';
import PageTitle from 'components/PageTitle/PageTitle';
import PageHeader from 'components/PageHeader/PageHeader';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from 'components/Footer/Footer';

const About = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Neil Jonathan | About me" />
      <PageHeader title="about-me" desc="Who am i?" />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  )
}

export default About
