
import React, { useState } from 'react';
import { AppView } from './types';
import Header from './components/Header';
import HeuristicsSection from './components/HeuristicsSection';
import MataponoMaoriSection from './components/MataponoMaoriSection';
import QuizSection from './components/QuizSection';
import CaseStudySelection from './components/CaseStudySelection';
import WarehouseCaseStudy from './components/WarehouseCaseStudy';
import TradeMeCaseStudy from './components/TradeMeCaseStudy';
import TurnersCaseStudy from './components/TurnersCaseStudy';
import NokuCaseStudy from './components/NokuCaseStudy';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HEURISTICS);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const handleSetView = (newView: AppView) => {
    // Reset case study selection when navigating away or back to the case study hub
    if (newView === AppView.CASE_STUDY || view === AppView.CASE_STUDY) {
      setActiveCaseStudy(null);
    }
    setView(newView);
  };
  
  const handleBackToSelection = () => {
    setActiveCaseStudy(null);
  };

  const renderContent = () => {
    switch (view) {
      case AppView.HEURISTICS:
        return <HeuristicsSection />;
      case AppView.MATAPONO_MAORI:
        return <MataponoMaoriSection />;
      case AppView.QUIZ:
        return <QuizSection />;
      case AppView.CASE_STUDY:
        if (activeCaseStudy === 'warehouse') {
          return <WarehouseCaseStudy onBack={handleBackToSelection} />;
        }
        if (activeCaseStudy === 'trademe') {
          return <TradeMeCaseStudy onBack={handleBackToSelection} />;
        }
        if (activeCaseStudy === 'turners') {
            return <TurnersCaseStudy onBack={handleBackToSelection} />;
        }
        if (activeCaseStudy === 'noku') {
            return <NokuCaseStudy onBack={handleBackToSelection} />;
        }
        return <CaseStudySelection setActiveCaseStudy={setActiveCaseStudy} />;
      default:
        return <HeuristicsSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={view} setView={handleSetView} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>DTŌTA Usability Principles Study Guide</p>
      </footer>
    </div>
  );
};

export default App;
