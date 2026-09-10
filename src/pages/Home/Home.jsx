import styles from './Home.module.scss';
import PageTitle from 'components/PageTitle/PageTitle';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Experience from 'components/Experience/Experience';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from 'components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Neil Jonathan" />
      <Hero />
      <Quote />
      <FeaturedProjects />
      <Experience isPreview={true} />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
