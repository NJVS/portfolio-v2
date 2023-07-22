import styles from './Home.module.scss';

import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import AboutMe from './components/AboutMe/AboutMe';


const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Quote />
      <FeaturedProjects />
      <AboutMe />
    </div>
  )
}

export default Home