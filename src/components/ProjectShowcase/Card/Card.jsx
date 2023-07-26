import Button from 'components/Button/Button';
import styles from './Card.module.scss';

const CardProject = ({ thumbnail, stacks, title, desc, demoUrl, repoUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} />
      </div>
      <div className={styles.stacks}><p>{stacks}</p></div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.links}>
          <Button type='link' url={demoUrl}>Live Demo</Button>
          <Button type='link' url={repoUrl}>Github</Button>
        </div>
      </div>
    </div>
  )
}

export default CardProject