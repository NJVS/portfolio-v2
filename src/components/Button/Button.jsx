import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ type, url, target, className, onClick, children }, ref) => {
  return type === 'link' ? (
    <Link
      ref={ref}
      to={url}
      className={`${styles.container} ${className ? className : ''}`}
      target={`${target ? target : ''}`}
    >
      {children}
    </Link>
  ) : (
    <button ref={ref} onClick={onClick}>
      {children}
    </button>
  )
}

export default forwardRef(Button)