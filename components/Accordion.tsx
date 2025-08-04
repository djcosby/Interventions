
import React from 'react';

interface AccordionProps {
  id: string;
  title: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
  level?: number;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, isOpen, onToggle, level = 1, children }) => {
  const levelStyles = {
    1: {
      container: "border border-slate-300 bg-white rounded-lg shadow-sm",
      button: `text-xl font-semibold p-4 ${isOpen ? 'bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'}`,
      content: "p-5 border-t border-slate-300"
    },
    2: {
      container: "border border-slate-200 bg-white rounded-md",
      button: `text-base font-semibold p-3 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'}`,
      content: "p-4 border-t border-slate-200"
    }
  };

  const styles = level === 2 ? levelStyles[2] : levelStyles[1];

  return (
    <div className={`${styles.container} overflow-hidden transition-all duration-300`}>
      <button
        onClick={() => onToggle(id)}
        className={`${styles.button} w-full text-left flex justify-between items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <span className="flex-1 pr-4">{title}</span>
        <div className="flex-shrink-0">
          <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div id={`content-${id}`} className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
