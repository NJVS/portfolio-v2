import skills from 'data/skills.json';
import styles from './Skills.module.scss';
import illustration from 'assets/illustrations/illus-mix.png';
import CardSkill from 'components/CardSkill/CardSkill';

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>#</span>skills
          </h2>
        </div>
        <div className={styles.body}>
          <div className={styles.illustration}>
            <img src={illustration} alt="Skills illustration" />
          </div>
          <div className={styles.content_desktop}>
            <div>
              <CardSkill data={skills.ai_engineering} />
              <CardSkill data={skills.languages} />
            </div>
            <div>
              <CardSkill data={skills.front_end} />
              <CardSkill data={skills.back_end} />
            </div>
            <div>
              <CardSkill data={skills.uiux} />
              <CardSkill data={skills.tools_devops} />
            </div>
          </div>
          <div className={styles.content_mobile}>
            <div>
              <CardSkill data={skills.ai_engineering} />
              <CardSkill data={skills.front_end} />
              <CardSkill data={skills.languages} />
            </div>
            <div>
              <CardSkill data={skills.back_end} />
              <CardSkill data={skills.uiux} />
              <CardSkill data={skills.tools_devops} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;