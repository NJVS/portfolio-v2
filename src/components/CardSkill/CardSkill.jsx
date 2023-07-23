import styles from './CardSkill.module.scss';

const CardSkill = ({ data }) => {


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>{data.title}</h5>
      </div>
      <div className={styles.body}>
        <p>
          {data.stacks.join(', ')}
        </p>
      </div>
    </div>
  )
}

export default CardSkill