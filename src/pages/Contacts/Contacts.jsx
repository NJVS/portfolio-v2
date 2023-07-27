import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './Contacts.module.scss';
import PageHeader from 'components/PageHeader/PageHeader';
import Footer from 'components/Footer/Footer';
import { ReactComponent as MailIcon } from 'assets/icons/email.svg';
import dotRect from 'assets/illustrations/dot-rect.png';
import rectDouble from 'assets/illustrations/rect-double.png';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Neil Jonathan | Contacts</title>
        <meta name="title" content="Neil Jonathan | Portfolio" />
        <meta name="description" content="Neil Jonathan is a aspiring front-end web developer. Explore a collection of my project and learn more about me." />
        <meta name="keywords" content="website portfolio, front-end developer portfolio" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Helmet>
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