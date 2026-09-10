import { useState, useEffect, useRef } from 'react';
import styles from './AIAssistant.module.scss';
import experienceData from 'data/experience.json';

const PRESET_PROMPTS = [
  { label: '💼 Work Experience', query: 'Tell me about Neil\'s professional work experience and companies.' },
  { label: '✨ AI & LLM Background', query: 'What is Neil\'s background in AI, machine learning, and data?' },
  { label: '💻 Full-Stack Skills', query: 'What frameworks and backend systems does Neil use?' },
  { label: '🎓 Education & Degree', query: 'Where did Neil study and what is his degree?' },
  { label: '📫 Contact Neil', query: 'How can I reach Neil directly?' },
];

const INITIAL_MESSAGE = {
  sender: 'ai',
  text: "Hi! I'm **Neil's AI Assistant**. Ask me anything about Neil's career at **HPL Game Design**, **RealHomes Property**, **Appen**, his full-stack engineering skills, or his education!",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const presetScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Drag scroll handlers for preset chips
  const handleMouseDown = (e) => {
    const el = presetScrollRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = presetScrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleChipClick = (query) => {
    if (hasMovedRef.current) return;
    handleSend(query);
  };

  // Listen to custom trigger events from Hero CTA
  useEffect(() => {
    function handleToggle(e) {
      if (e.detail?.open !== undefined) {
        setIsOpen(e.detail.open);
      } else {
        setIsOpen((prev) => !prev);
      }
    }
    window.addEventListener('toggle-ai-assistant', handleToggle);
    return () => window.removeEventListener('toggle-ai-assistant', handleToggle);
  }, []);

  // Semantic knowledge matcher powered by CV and experience
  function generateAIResponse(userPrompt) {
    const q = userPrompt.toLowerCase();

    // Specific company queries
    if (q.includes('hpl') || q.includes('game') || q.includes('phaser') || q.includes('playable') || q.includes('spine')) {
      return (
        "### Mid Front-End Developer @ HPL Game Design (May 2026 - Sept 2026)\n\n" +
        "At HPL Game Design, Neil focused on high-performance interactive experiences:\n\n" +
        "- **Playable Ads:** Engineered lightweight, interactive mobile playable ads using React.js and modern JavaScript within strict ad-network file size limits.\n" +
        "- **2D Gameplay Engines:** Built complex 2D gameplay loops using **Phaser.js** for high-converting user engagement.\n" +
        "- **Spine 2D Animations:** Integrated Spine 2D skeletal animations, optimizing texture atlases and canvas render calls for smooth **60 FPS mobile performance**.\n" +
        "- **Asset Optimization:** Profiled memory and asset loading to minimize latency and maximize conversion rates."
      );
    }

    if (q.includes('realhomes') || q.includes('property') || q.includes('laravel') || q.includes('livewire')) {
      return (
        "### Full-Stack Developer @ RealHomes Property Inc. (Apr 2024 - May 2026)\n\n" +
        "At RealHomes Property, Neil built robust full-stack web platforms:\n\n" +
        "- **Full-Stack Architecture:** Developed and maintained scalable applications with **Laravel (PHP)**, **Livewire**, and **MySQL**.\n" +
        "- **Interactive UIs:** Crafted modern, responsive interfaces using **Tailwind CSS**, **Alpine.js**, and JavaScript.\n" +
        "- **Database Performance:** Optimized complex SQL queries and backend workloads to reduce page load latency.\n" +
        "- **Clean Code & MVC:** Implemented modular components and maintainable MVC patterns."
      );
    }

    if (q.includes('appen') || q.includes('annotat') || q.includes('nlp') || q.includes('data')) {
      return (
        "### AI Data Annotator @ Appen (Aug 2019 - Jun 2022)\n\n" +
        "At Appen, Neil was deeply involved in foundational AI & ML model training:\n\n" +
        "- **Dataset Labeling:** Annotated and labeled high-volume multimodal datasets (text, images, audio) for machine learning models.\n" +
        "- **Natural Language Processing (NLP):** Executed text classification, sentiment analysis, entity tagging, and linguistic evaluation.\n" +
        "- **Quality Assurance:** Performed rigorous data validation ensuring benchmark accuracy for AI model pipelines."
      );
    }

    if (q.includes('experience') || q.includes('work') || q.includes('career') || q.includes('companies') || q.includes('history') || q.includes('job')) {
      return (
        "### Neil's Career History\n\n" +
        "1. **Mid Front-End Developer** @ *HPL Game Design* (May 2026 – Sept 2026)\n" +
        "   - Playable mobile ads, React.js, Phaser.js, Spine 2D 60 FPS mobile optimization.\n\n" +
        "2. **Full-Stack Developer** @ *RealHomes Property Inc.* (Apr 2024 – May 2026)\n" +
        "   - Scalable full-stack apps with Laravel, Livewire, MySQL, Alpine.js, and Tailwind CSS.\n\n" +
        "3. **AI Data Annotator** @ *Appen* (Aug 2019 – Jun 2022)\n" +
        "   - Model training datasets, NLP text classification, sentiment analysis, and QA.\n\n" +
        "4. **Network & System Administrator** @ *Land Management Bureau* (May 2018 – Aug 2019)\n" +
        "   - Enterprise network infrastructure, routers/switches, and security access control.\n\n" +
        "You can explore the full timeline on the **[About page](/about#experience)**!"
      );
    }

    if (q.includes('education') || q.includes('school') || q.includes('university') || q.includes('degree') || q.includes('college') || q.includes('study')) {
      return (
        "### Education\n\n" +
        "**Bachelor of Science in Computer Science**\n" +
        "- **Institution:** Lyceum of the Philippines University (Intramuros, Manila)\n" +
        "- **Years:** 2011 – 2017\n" +
        "- **Focus:** Computer science theory, algorithms, software engineering, systems architecture, and database design."
      );
    }

    if (q.includes('ai') || q.includes('llm') || q.includes('machine learning') || q.includes('prompt') || q.includes('rag') || q.includes('agent')) {
      return (
        "### Neil's AI & LLM Expertise\n\n" +
        "Neil blends practical AI model training experience with modern GenAI app development:\n\n" +
        "- **Hands-on AI Background:** 3 years at **Appen** annotating NLP datasets for machine learning models.\n" +
        "- **GenAI Architectures:** Gemini API, OpenAI API, LangChain, RAG embeddings, and vector search.\n" +
        "- **Multi-Agent Systems:** Autonomous agent loops, function calling, and workflow orchestration.\n" +
        "- **Prompt Engineering:** Structured output schemas, system instructions, and token optimization.\n\n" +
        "Check out his **AI Agent Orchestrator** and **PromptLab AI Studio** on the **[Projects page](/projects)**!"
      );
    }

    if (q.includes('full-stack') || q.includes('stack') || q.includes('backend') || q.includes('frontend') || q.includes('skills')) {
      return (
        "### Technical Stack Summary\n\n" +
        "- **Frontend:** React 19, Next.js, JavaScript (ES6+), TypeScript, Phaser.js, Spine 2D, Tailwind CSS, GSAP.\n" +
        "- **Backend:** Laravel, Livewire, PHP, Alpine.js, MySQL, Node.js, REST APIs.\n" +
        "- **AI & Data:** Gemini API, OpenAI API, NLP text annotation, RAG pipelines, Prompt Engineering.\n" +
        "- **Cloud & Tools:** Git, GitHub, Vite, AWS S3, Laravel Cloud, Webpack, npm, Figma."
      );
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('call') || q.includes('hire')) {
      return (
        "### How to Contact Neil\n\n" +
        "- **Email:** [neiljonathanv.sagisi@gmail.com](mailto:neiljonathanv.sagisi@gmail.com)\n" +
        "- **Phone:** [+63 915 539 1245](tel:09155391245)\n" +
        "- **LinkedIn:** [linkedin.com/in/neil-sagisi](https://www.linkedin.com/in/neil-sagisi/)\n" +
        "- **GitHub:** [github.com/NJVS](https://github.com/NJVS)\n" +
        "- **Location:** Manila, Philippines\n\n" +
        "Neil is actively seeking Full-Stack & AI roles and contract opportunities!"
      );
    }

    if (q.includes('reference')) {
      return (
        "### Professional References\n\n" +
        "- **Deony Diras:** Lead Developer @ HPL Game Design (deony.diras1998@gmail.com | 09513003072)\n" +
        "- **Sigfred Vhen Ordoves:** Software Engineer @ Yondu Inc. (sigfredvhen@gmail.com | 09081693737)"
      );
    }

    // Default intelligent fallback
    return (
      `Neil is a Full-Stack Developer & AI Engineer with experience at **HPL Game Design** (React, Phaser.js, Spine 2D), **RealHomes Property** (Laravel, Livewire, Tailwind), and **Appen** (AI data annotation & NLP).\n\n` +
      `Ask me about his **[Work Experience](/about#experience)**, **[Projects](/projects)**, tech stack, or how to contact him!`
    );
  }

  function handleSend(textToSend) {
    const query = (textToSend || inputVal).trim();
    if (!query || isTyping) return;

    const userMessage = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAIResponse(query);
      const aiMessage = {
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 500);
  }

  function renderFormattedText(text) {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return <h4 key={idx} className={styles.msgHeader}>{line.replace('### ', '')}</h4>;
      }
      if (line.startsWith('- ')) {
        const item = line.replace('- ', '');
        return (
          <li key={idx} className={styles.msgListItem}>
            {parseInline(item)}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        const item = line.replace(/^\d+\.\s/, '');
        return (
          <p key={idx} className={styles.msgNumberItem}>
            <strong>{line.match(/^\d+\./)[0]}</strong> {parseInline(item)}
          </p>
        );
      }
      if (!line.trim()) {
        return <div key={idx} className={styles.msgSpacer} />;
      }
      return <p key={idx} className={styles.msgParagraph}>{parseInline(line)}</p>;
    });
  }

  function parseInline(text) {
    const parts = [];
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
      } else if (token.startsWith('[') && token.includes('](')) {
        const linkText = token.substring(1, token.indexOf(']('));
        const linkUrl = token.substring(token.indexOf('](') + 2, token.length - 1);
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={styles.msgLink}
          >
            {linkText}
          </a>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  return (
    <div className={styles.assistantRoot}>
      {/* Floating Launcher Button */}
      <button
        className={`${styles.launcherBtn} ${isOpen ? styles.launcherOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        <span className={styles.launcherIcon}>{isOpen ? '✕' : '✨'}</span>
        {!isOpen && <span className={styles.launcherText}>Ask Neil's AI</span>}
      </button>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-labelledby="ai-chat-title">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.aiAvatar}>🤖</div>
              <div>
                <h3 id="ai-chat-title" className={styles.headerTitle}>
                  Neil's AI Assistant
                </h3>
                <div className={styles.statusIndicator}>
                  <span className={styles.greenDot}></span>
                  <span className={styles.statusText}>CV Knowledge Active</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
              aria-label="Close Assistant"
            >
              ✕
            </button>
          </div>

          {/* Quick Prompts - Drag Scrollable Only */}
          <div className={styles.presetContainer}>
            <div
              ref={presetScrollRef}
              className={styles.presetScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {PRESET_PROMPTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(item.query)}
                  className={styles.presetChip}
                  disabled={isTyping}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.messageRow} ${
                  msg.sender === 'user' ? styles.userRow : styles.aiRow
                }`}
              >
                {msg.sender === 'ai' && <div className={styles.msgAvatar}>✨</div>}
                <div className={styles.messageBubble}>
                  {renderFormattedText(msg.text)}
                  <span className={styles.timestamp}>{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageRow} ${styles.aiRow}`}>
                <div className={styles.msgAvatar}>✨</div>
                <div className={`${styles.messageBubble} ${styles.typingBubble}`}>
                  <span className={styles.typingDot}></span>
                  <span className={styles.typingDot}></span>
                  <span className={styles.typingDot}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            className={styles.inputForm}
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about HPL Game Design, RealHomes, Appen..."
              className={styles.chatInput}
              disabled={isTyping}
            />
            <button
              type="submit"
              className={styles.sendBtn}
              disabled={!inputVal.trim() || isTyping}
              aria-label="Send message"
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
