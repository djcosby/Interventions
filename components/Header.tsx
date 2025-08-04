
import React from 'react';

interface HeaderProps {
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExpandAll, onCollapseAll }) => {
  return (
    <header className="text-center border-b-2 border-blue-700 pb-6 mb-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">
        IOP Interventions & Curricula Compendium
      </h1>
      <h2 className="text-xl font-normal text-slate-500">
        An Interactive Reference Guide
      </h2>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <button
          onClick={onExpandAll}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Expand All
        </button>
        <button
          onClick={onCollapseAll}
          className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-md cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        >
          Collapse All
        </button>
      </div>
    </header>
  );
};

export default Header;
