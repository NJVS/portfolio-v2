import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import PageHeader from 'components/PageHeader/PageHeader';
import Footer from 'components/Footer/Footer';
import { ReactComponent as MailIcon } from 'assets/icons/email.svg';
import dotRect from 'assets/illustrations/dot-rect.png';
import rectDouble from 'assets/illustrations/rect-double.png';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <PageHeader className={styles.header} title="contacts" desc="Where you can find me?" />
      <div className={styles.body}>
        <p>
          I'm interested in full-time opportunities. However, if you have other request or
          question, don't hesitate to contact me.
        </p>
        <div className={styles.contact_info}>
          <h5>Message me here</h5>
          <Link to="mailto:neiljonathanv.sagisi@gmail.com" target='_blank'>
            <MailIcon />
            neiljonathanv.sagisi@gmail.com
          </Link>
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
  )
}

export default Contacts