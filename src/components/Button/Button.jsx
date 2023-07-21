import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ type, url, className, onClick, children }, ref) => {
  return type === 'link' ? (
    <Link ref={ref} to={url} target="_blank" className={`${styles.container} ${className ? className : ''}`}>
      {children}
    </Link>
  ) : (
    <button ref={ref} onClick={onClick}>
      {children}
    </button>
  )
}

export default forwardRef(Button)