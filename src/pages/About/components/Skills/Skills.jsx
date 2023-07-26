import skills from 'data/skills.json';
import styles from './Skills.module.scss';
import illustration from 'assets/illustrations/illus-mix.png';
import CardSkill from 'components/CardSkill/CardSkill';

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}><span>#</span>skills</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.illustration}>
            <img src={illustration} />
          </div>
          <div className={styles.content_desktop}>
            <div>
              <CardSkill data={skills.front_end} />
            </div>
            <div>
              <CardSkill data={skills.build_tools} />
              <CardSkill data={skills.cms} />
              <CardSkill data={skills.web_service} />
            </div>
            <div>
              <CardSkill data={skills.uiux} />
              <CardSkill data={skills.version_control} />
              <CardSkill data={skills.others} />
            </div>
          </div>
          <div className={styles.content_mobile}>
            <div>
              <CardSkill data={skills.front_end} />
              <CardSkill data={skills.build_tools} />
              <CardSkill data={skills.cms} />
            </div>
            <div>
              <CardSkill data={skills.web_service} />
              <CardSkill data={skills.uiux} />
              <CardSkill data={skills.version_control} />
              <CardSkill data={skills.others} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills