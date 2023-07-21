import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Quote />
      <FeaturedProjects />
    </div>
  )
}

export default Home