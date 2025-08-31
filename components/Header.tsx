
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: AppView.HEURISTICS, label: "Nielsen's Heuristics" },
    { view: AppView.MATAPONO_MAORI, label: "Mātāpono Māori" },
    { view: AppView.CASE_STUDY, label: "Case Study" },
    { view: AppView.QUIZ, label: "Knowledge Quiz" },
  ];

  return (
    <header className="bg-primary shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <h1 className="text-xl font-bold text-white">Usability Study Tool</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setView(item.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.view
                      ? 'bg-white text-primary'
                      : 'text-gray-200 hover:bg-secondary hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;