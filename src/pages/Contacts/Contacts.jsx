import styles from './Contacts.module.scss';
import PageTitle from 'components/PageTitle/PageTitle';
import PageHeader from 'components/PageHeader/PageHeader';
import Footer from 'components/Footer/Footer';
import MailIcon from 'assets/icons/email.svg?react';
import dotRect from 'assets/illustrations/dot-rect.png';
import rectDouble from 'assets/illustrations/rect-double.png';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Neil Jonathan | Contacts" />
      <PageHeader className={styles.header} title="contacts" desc="Where you can find me?" />
      <div className={styles.body}>
        <div className={styles.intro}>
          <p>
            I am actively seeking Full-Stack and AI Engineering opportunities—including full-time roles,
            high-impact contract work, and innovative technical collaborations.
          </p>
          <p>
            Whether you are looking to build scalable web platforms, interactive playable experiences (Phaser / React),
            or integrate modern LLM and AI workflows into your product, let's connect!
          </p>
        </div>

        <div className={styles.contact_info}>
          <h5>Direct Contact</h5>
          <div className={styles.contactList}>
            <a href="mailto:neiljonathanv.sagisi@gmail.com" target="_blank" rel="noopener noreferrer">
              <MailIcon />
              neiljonathanv.sagisi@gmail.com
            </a>
            <a href="tel:09155391245">
              <span className={styles.phoneIcon}>📞</span>
              +63 915 539 1245
            </a>
            <div className={styles.locationMeta}>
              <span className={styles.locIcon}>📍</span>
              Manila, Philippines
            </div>
          </div>
        </div>

        <div className={styles.illustration_left}>
          <img src={dotRect} alt="" />
        </div>
        <div className={styles.illustration_right}>
          <img src={rectDouble} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
