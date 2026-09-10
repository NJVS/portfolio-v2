import styles from './Footer.module.scss';
import Logo from 'assets/icons/Logo-solid.svg?react';
import IconGithub from 'assets/icons/github.svg?react';
import IconLinkedin from 'assets/icons/linkedin.svg?react';
import Iconfb from 'assets/icons/fb-messenger.svg?react';
import Icontwitter from 'assets/icons/twitter.svg?react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo />
            <h4>Neil</h4>
          </div>
          <a
            href="mailto:neiljonathanv.sagisi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            neiljonathanv.sagisi@gmail.com
          </a>
          <p>Full-Stack Developer &amp; AI Engineer</p>
        </div>
        <div className={styles.socmed}>
          <h4>Media</h4>
          <ul>
            <li>
              <a
                href="https://github.com/NJVS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <IconGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neil-sagisi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://m.me/neil.sagisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Messenger"
              >
                <Iconfb />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_lieneil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <Icontwitter />
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.attribution}>
          Copyright &copy;{currentYear}. Built by Neil Jonathan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
