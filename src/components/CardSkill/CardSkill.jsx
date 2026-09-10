import styles from './CardSkill.module.scss';

const CardSkill = ({ data }) => {
  if (!data) return null;
  const isAI = data.title && (data.title.toLowerCase().includes('ai') || data.title.toLowerCase().includes('llm'));

  return (
    <div className={`${styles.container} ${isAI ? styles.aiCard : ''}`}>
      <div className={styles.header}>
        <h5>{data.title}</h5>
        {isAI && <span className={styles.badge}>AI FOCUS</span>}
      </div>
      <div className={styles.body}>
        <p>{data.stacks.join(', ')}</p>
      </div>
    </div>
  );
};

export default CardSkill;