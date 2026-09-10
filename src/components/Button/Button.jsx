import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ type, url, target, className = '', onClick, children }, ref) => {
  const isExternal = url && (url.startsWith('http') || url.startsWith('mailto:'));
  const combinedClasses = `${styles.container} ${className}`.trim();

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={url}
          className={combinedClasses}
          target={target || '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        to={url}
        className={combinedClasses}
        target={target || undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={combinedClasses} type="button">
      {children}
    </button>
  );
};

export default forwardRef(Button);