import { forwardRef } from 'react';
import styles from './MenuToggler.module.scss';

const MenuToggler = ({ onClick }, ref) => {
  return (
    <button ref={ref} className={styles.container} onClick={onClick}>
      <span></span>
      <span></span>
    </button>
  )
}

export default forwardRef(MenuToggler)