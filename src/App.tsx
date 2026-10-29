import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { LearningCenterView } from './views/LearningCenterView';
import { CalculatorsView } from './views/CalculatorsView';
import { CatalogView } from './views/CatalogView';
import { ExercisesView } from './views/ExercisesView';
import { QnABotView } from './views/QnABotView';
import { StudentDashboardView } from './views/StudentDashboardView';

const MainContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<number | undefined>(undefined);
  const { setLastModule } = useProgress();

  const handleNavigate = (view: ViewType, moduleId?: number) => {
    if (moduleId !== undefined) {
      setSelectedModuleId(moduleId);
      setLastModule(moduleId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync hash routing if desired
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'modules', 'calculators', 'catalog', 'exercises', 'qna', 'dashboard'].includes(hash)) {
        setCurrentView(hash as ViewType);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView === 'modules' && (
          <LearningCenterView onNavigate={handleNavigate} />
        )}
        {currentView === 'module-detail' && (
          <LearningCenterView 
            initialModuleId={selectedModuleId} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentView === 'calculators' && <CalculatorsView />}
        {currentView === 'catalog' && <CatalogView />}
        {currentView === 'exercises' && <ExercisesView />}
        {currentView === 'qna' && <QnABotView />}
        {currentView === 'dashboard' && (
          <StudentDashboardView onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ProgressProvider>
      <MainContent />
    </ProgressProvider>
  );
};

export default App;
