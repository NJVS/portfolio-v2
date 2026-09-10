import Button from 'components/Button/Button';
import { getProjectImage } from 'data/projectImages';
import styles from './Card.module.scss';

const CardProject = ({ project }) => {
  const {
    title,
    desc,
    stacks = [],
    imageKey,
    thumbnail,
    liveUrl,
    demoUrl,
    repoUrl,
    category,
    isAI,
  } = project;

  const resolvedImage = getProjectImage(imageKey, thumbnail);
  const activeLiveUrl = liveUrl || demoUrl;

  return (
    <div className={`${styles.container} ${isAI ? styles.aiCard : ''}`}>
      <div className={styles.thumbnailWrapper}>
        <img src={resolvedImage} alt={title} className={styles.thumbnail} loading="lazy" />
        {isAI && <span className={styles.aiBadge}>AI Powered</span>}
        {category && <span className={styles.categoryBadge}>{category}</span>}
      </div>

      <div className={styles.stacks}>
        {Array.isArray(stacks) ? (
          stacks.map((stack, idx) => (
            <span key={idx} className={styles.stackTag}>
              #{stack}
            </span>
          ))
        ) : (
          <span className={styles.stackTag}>{stacks}</span>
        )}
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.links}>
          {activeLiveUrl && (
            <Button type="link" url={activeLiveUrl} target="_blank">
              Live Demo
            </Button>
          )}
          {repoUrl && (
            <Button type="link" url={repoUrl} target="_blank">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;