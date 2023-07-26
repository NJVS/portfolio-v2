import styles from './PageHeader.module.scss';

const PageHeader = ({title, desc, className}) => {
  return (
    <header className={`${styles.container} ${className}`}>
      <div className={styles.wrapper}>
        <h1><span>/</span>{title}</h1>
        <p>{desc}</p>
      </div>
    </header>
  )
}

export default PageHeader