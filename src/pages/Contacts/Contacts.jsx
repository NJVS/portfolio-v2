import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import PageHeader from 'components/PageHeader/PageHeader';
import Footer from 'components/Footer/Footer';
import { ReactComponent as MailIcon } from 'assets/icons/email.svg';

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
          <Link>
            <MailIcon />
            neiljonathanv.sagisi@gmail.com
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts