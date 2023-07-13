import styles from './SectionWrapper.module.scss';

const SectionWrapper = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

export default SectionWrapper