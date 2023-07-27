import styles from './Home.module.scss';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from 'components/Footer/Footer';


const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Neil Jonathan</title>
        <meta name="title" content="Neil Jonathan | Portfolio" />
        <meta name="description" content="Neil Jonathan is a aspiring front-end web developer. Explore a collection of my project and learn more about me." />
        <meta name="keywords" content="website portfolio, front-end developer portfolio" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
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