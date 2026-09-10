import adviceGenerator from 'assets/images/projects/advice-generator.jpg';
import aiAgentHub from 'assets/images/projects/ai-agent-hub.jpg';
import easybank from 'assets/images/projects/easybank.jpg';
import insure from 'assets/images/projects/insure.jpg';
import musicPlayer from 'assets/images/projects/music-player.jpg';
import portfolioV1 from 'assets/images/projects/portfolio-v1.jpg';
import portfolioV2 from 'assets/images/projects/portfolio-v2.jpg';
import promptAiStudio from 'assets/images/projects/prompt-ai-studio.jpg';
import rpsls from 'assets/images/projects/rpsls.jpg';
import shortly from 'assets/images/projects/shortly.jpg';
import sudokuSolver from 'assets/images/projects/sudoku-solver.jpg';
import todoApp from 'assets/images/projects/todo-app.jpg';
import towerOfHanoi from 'assets/images/projects/tower-of-hanoi.jpg';

export const projectImages = {
  'advice-generator': adviceGenerator,
  'ai-agent-hub': aiAgentHub,
  'easybank': easybank,
  'insure': insure,
  'music-player': musicPlayer,
  'portfolio-v1': portfolioV1,
  'portfolio-v2': portfolioV2,
  'prompt-ai-studio': promptAiStudio,
  'rpsls': rpsls,
  'shortly': shortly,
  'sudoku-solver': sudokuSolver,
  'todo-app': todoApp,
  'tower-of-hanoi': towerOfHanoi,
};

export const getProjectImage = (imageKey, fallbackUrl) => {
  return projectImages[imageKey] || fallbackUrl || portfolioV2;
};

export default projectImages;
