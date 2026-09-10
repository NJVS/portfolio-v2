import styles from './ProjectFilter.module.scss';

const ProjectFilter = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  totalCount,
}) => {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: '✨ AI & LLMs' },
    { id: 'personal', label: 'Full-Stack & Web' },
    { id: 'fem', label: 'Frontend Mentor' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title, stack (e.g. React, Gemini, API)..."
          className={styles.searchInput}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={styles.clearBtn}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className={styles.filtersWrapper}>
        <div className={styles.filterPills}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange(cat.id)}
              className={`${styles.pill} ${
                activeFilter === cat.id ? styles.active : ''
              } ${cat.id === 'ai' ? styles.aiPill : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <span className={styles.countBadge}>
          {totalCount} {totalCount === 1 ? 'project' : 'projects'}
        </span>
      </div>
    </div>
  );
};

export default ProjectFilter;
