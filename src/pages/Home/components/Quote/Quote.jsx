import styles from './Quote.module.scss';
import quoteIcon from 'assets/icons/quotes.svg';
import dots from 'assets/illustrations/dot-single-sm.png';
import rect from  'assets/illustrations/rect-single-sm.png';

const Quote = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Luck is what happens when preparation meets oportunity</h3>
          <img src={quoteIcon} className={styles.quote_top} />
          <img src={quoteIcon} className={styles.quote_bot} />
          <div className={styles.author}>
            <p>- Seneca</p>
          </div>
        </div>
        <div className={styles.illustration_left}><img src={dots} /></div>
        <div className={styles.illustration_right}><img src={rect} /></div>
      </div>
    </section>
  )
}

export default Quote