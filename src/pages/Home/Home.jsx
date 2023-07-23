import styles from './Home.module.scss';

import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from 'components/Footer/Footer';


const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Quote />
      <FeaturedProjects />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home