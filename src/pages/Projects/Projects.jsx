import { useState, useMemo } from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import PageHeader from 'components/PageHeader/PageHeader';
import styles from './Projects.module.scss';
import AIProjects from './components/AIProjects/AIProjects';
import Personal from './components/Personal/Personal';
import FeMentor from './components/FeMentor/FeMentor';
import ProjectFilter from './components/ProjectFilter/ProjectFilter';
import ProjectShowcase from 'components/ProjectShowcase/ProjectShowcase';
import Footer from 'components/Footer/Footer';
import projectsData from 'data/projects.json';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Combine all unique projects for search & filtering
  const allProjects = useMemo(() => {
    const list = [
      ...(projectsData.ai || []),
      ...(projectsData.personal || []),
      ...(projectsData.fem || []),
    ];
    // Deduplicate by id
    const seen = new Set();
    return list.filter((item) => {
      const id = item.id || item.title;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }, []);

  const filteredProjects = useMemo(() => {
    let list = allProjects;

    if (activeFilter === 'ai') {
      list = projectsData.ai || [];
    } else if (activeFilter === 'personal') {
      list = projectsData.personal || [];
    } else if (activeFilter === 'fem') {
      list = projectsData.fem || [];
    }

    if (!searchQuery.trim()) {
      return list;
    }

    const query = searchQuery.toLowerCase().trim();
    return list.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(query);
      const descMatch = p.desc.toLowerCase().includes(query);
      const stackMatch =
        Array.isArray(p.stacks) &&
        p.stacks.some((s) => s.toLowerCase().includes(query));
      const categoryMatch = p.category && p.category.toLowerCase().includes(query);
      return titleMatch || descMatch || stackMatch || categoryMatch;
    });
  }, [allProjects, activeFilter, searchQuery]);

  const isFilteringActive = Boolean(searchQuery.trim()) || activeFilter !== 'all';

  return (
    <div className={styles.container}>
      <PageTitle title="Neil Jonathan | Projects" />
      <PageHeader title="projects" desc="Full-Stack, AI &amp; Software Projects" />

      <ProjectFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalCount={filteredProjects.length}
      />

      {isFilteringActive ? (
        <section className={styles.filteredSection}>
          <div className={styles.filteredWrapper}>
            {filteredProjects.length > 0 ? (
              <ProjectShowcase projects={filteredProjects} />
            ) : (
              <div className={styles.emptyState}>
                <p>No projects match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className={styles.resetBtn}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <AIProjects />
          <Personal />
          <FeMentor />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
