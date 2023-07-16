import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuMobile.module.scss';

const MenuMobile = ({ isMenuToggled }, ref) => {
  return (
    <div ref={ref} className={`${styles.container} ${isMenuToggled ? styles.toggled : ''}`}>
      <ul className={styles.wrapper}>
        <li>
          <NavLink to="/" className={styles.menu_item}><span>#</span>home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.menu_item}><span>#</span>projects</NavLink>
        </li>
        <li>
          <NavLink to="/aboutme" className={styles.menu_item}><span>#</span>about-me</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={styles.menu_item}><span>#</span>contacts</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default forwardRef(MenuMobile)