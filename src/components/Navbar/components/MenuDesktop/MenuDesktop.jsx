import { NavLink } from 'react-router-dom';
import styles from './MenuDesktop.module.scss';

const MenuDesktop = () => {
  return (
    <ul className={styles.container}>
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
  )
}

export default MenuDesktop