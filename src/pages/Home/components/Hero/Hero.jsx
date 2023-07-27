import styles from './Hero.module.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ReactComponent as Arrow } from 'assets/icons/arrows.svg';
import rectdouble from 'assets/illustrations/rect-double.png';
import dotrect from 'assets/illustrations/dot-rect.png';

const Hero = () => {
  const { height } = useWindowDimensions();

  function scrollToHandler() {
    window.scroll({
      top: height,
      behavior: 'smooth'
    })
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Neil is a <span>web designer</span> and <span>fron-end developer</span></h1>
        <p>He create responsive website where technology meets creativity</p>
        <button className={styles.nav_arrow} onClick={scrollToHandler}><Arrow /></button>
        <div className={styles.illustration_left}>
          <img src={rectdouble} alt="double rect" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotrect} alt="double rect" />
        </div>
      </div>
    </section>
  )
}

export default Hero