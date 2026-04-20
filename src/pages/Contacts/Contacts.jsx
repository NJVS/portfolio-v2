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
        <p>
          I'm interested in full-time opportunities. However, if you have other request or
          question, don't hesitate to contact me.
        </p>
        <div className={styles.contact_info}>
          <h5>Message me here</h5>
          <a href="mailto:neiljonathanv.sagisi@gmail.com" target='_blank' rel='noreferrer'>
            <MailIcon />
            neiljonathanv.sagisi@gmail.com
          </a>
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
