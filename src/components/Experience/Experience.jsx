import { Link } from 'react-router-dom';
import experienceData from 'data/experience.json';
import styles from './Experience.module.scss';
import Arrow from 'assets/icons/arrow-right.svg?react';
import dotSingle from 'assets/illustrations/dot-single.png';
import reqSingle from 'assets/illustrations/rect-single.png';

const Experience = ({ isPreview = false }) => {
  const roles = isPreview
    ? experienceData.work.slice(0, 2)
    : experienceData.work;

  return (
    <section id="experience" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>
              <span>#</span>experience
            </h2>
            <span className={styles.subtext}>
              {isPreview ? 'Featured Career Roles' : 'Professional Work History & Education'}
            </span>
          </div>
          {isPreview && (
            <Link to="/about#experience" className={styles.viewMoreLink}>
              Full Timeline <Arrow />
            </Link>
          )}
        </div>

        <div className={styles.timeline}>
          {roles.map((item, index) => (
            <div key={item.id || index} className={styles.timelineItem}>
              {/* Timeline Node & Line */}
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < roles.length - 1 && <div className={styles.markerLine}></div>}
              </div>

              {/* Content Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.companyMeta}>
                      <span className={styles.companyName}>@{item.company}</span>
                      <span className={styles.dotSeparator}>•</span>
                      <span className={styles.location}>{item.location}</span>
                    </div>
                  </div>
                  <span className={styles.periodBadge}>{item.period}</span>
                </div>

                <p className={styles.summary}>{item.summary}</p>

                <ul className={styles.highlightsList}>
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className={styles.stacksGroup}>
                  {item.stacks.map((st, sIdx) => (
                    <span key={sIdx} className={styles.stackTag}>
                      #{st}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section (Full View) */}
        {!isPreview && experienceData.education && (
          <div className={styles.educationBlock}>
            <h3 className={styles.educationTitle}>
              <span>#</span>education
            </h3>
            <div className={styles.educationGrid}>
              {experienceData.education.map((edu, eIdx) => (
                <div key={eIdx} className={styles.educationCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                      <p className={styles.institutionName}>
                        {edu.institution} &bull; {edu.location}
                      </p>
                    </div>
                    <span className={styles.periodBadge}>{edu.period}</span>
                  </div>
                  <p className={styles.eduDesc}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.illustration_left}>
          <img src={reqSingle} alt="" />
        </div>
        <div className={styles.illustration_right}>
          <img src={dotSingle} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
