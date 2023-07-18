import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Quote />
    </div>
  )
}

export default Home