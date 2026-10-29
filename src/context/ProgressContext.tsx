import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, Badge } from '../types';

export const ALL_BADGES: Badge[] = [
  {
    id: 'first-module',
    title: 'Primeiro Circuito',
    description: 'Concluiu seu primeiro módulo de estudo na plataforma.',
    icon: 'Zap',
    category: 'iniciante'
  },
  {
    id: 'ohm-master',
    title: 'Mestre da Lei de Ohm',
    description: 'Completou o módulo da Lei de Ohm e acertou o quiz.',
    icon: 'Award',
    category: 'calculo'
  },
  {
    id: 'calculator-pro',
    title: 'Calculista de Bancada',
    description: 'Realizou cálculos em pelo menos 3 calculadoras elétricas.',
    icon: 'Calculator',
    category: 'calculo'
  },
  {
    id: 'quiz-champion',
    title: 'Desafiante Expert',
    description: 'Acertou mais de 80% das questões em um desafio de exercícios.',
    icon: 'Trophy',
    category: 'mestre'
  },
  {
    id: 'safety-first',
    title: 'Eletrotécnico Seguro',
    description: 'Leu as orientações de segurança elétrica e boas práticas.',
    icon: 'ShieldCheck',
    category: 'seguranca'
  },
  {
    id: 'all-modules',
    title: 'Técnico Graduado',
    description: 'Concluiu todos os 10 módulos da Central de Aprendizagem!',
    icon: 'GraduationCap',
    category: 'mestre'
  }
];

const INITIAL_PROGRESS: UserProgress = {
  completedModules: [],
  lastModuleId: 1,
  quizScores: {},
  totalPoints: 0,
  unlockedBadges: [],
  favorites: {
    modules: [],
    calculators: [],
    components: []
  }
};

const STORAGE_KEY = 'eletroajuda_user_progress_v1';

interface ProgressContextType {
  progress: UserProgress;
  markModuleComplete: (moduleId: number) => void;
  unmarkModuleComplete: (moduleId: number) => void;
  recordQuizScore: (quizKey: string, score: number, total: number) => void;
  addPoints: (points: number) => void;
  unlockBadge: (badgeId: string) => void;
  setLastModule: (moduleId: number) => void;
  toggleFavoriteModule: (moduleId: number) => void;
  resetProgress: () => void;
  overallPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Erro ao ler progresso do localStorage:', e);
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Erro ao salvar progresso no localStorage:', e);
    }
  }, [progress]);

  const markModuleComplete = (moduleId: number) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) return prev;
      const updated = [...prev.completedModules, moduleId];
      const newPoints = prev.totalPoints + 100;
      const badges = [...prev.unlockedBadges];

      if (updated.length === 1 && !badges.includes('first-module')) {
        badges.push('first-module');
      }
      if (moduleId === 3 && !badges.includes('ohm-master')) {
        badges.push('ohm-master');
      }
      if (updated.length === 10 && !badges.includes('all-modules')) {
        badges.push('all-modules');
      }

      return {
        ...prev,
        completedModules: updated,
        totalPoints: newPoints,
        unlockedBadges: badges,
        lastModuleId: moduleId
      };
    });
  };

  const unmarkModuleComplete = (moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.filter(id => id !== moduleId),
      totalPoints: Math.max(0, prev.totalPoints - 100)
    }));
  };

  const recordQuizScore = (quizKey: string, score: number, total: number) => {
    setProgress(prev => {
      const ratio = total > 0 ? score / total : 0;
      const earnedXP = score * 25;
      const badges = [...prev.unlockedBadges];

      if (ratio >= 0.8 && !badges.includes('quiz-champion')) {
        badges.push('quiz-champion');
      }

      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizKey]: {
            score,
            total,
            date: new Date().toISOString()
          }
        },
        totalPoints: prev.totalPoints + earnedXP,
        unlockedBadges: badges
      };
    });
  };

  const addPoints = (points: number) => {
    setProgress(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points
    }));
  };

  const unlockBadge = (badgeId: string) => {
    setProgress(prev => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      return {
        ...prev,
        unlockedBadges: [...prev.unlockedBadges, badgeId]
      };
    });
  };

  const setLastModule = (moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      lastModuleId: moduleId
    }));
  };

  const toggleFavoriteModule = (moduleId: number) => {
    setProgress(prev => {
      const exists = prev.favorites.modules.includes(moduleId);
      return {
        ...prev,
        favorites: {
          ...prev.favorites,
          modules: exists
            ? prev.favorites.modules.filter(id => id !== moduleId)
            : [...prev.favorites.modules, moduleId]
        }
      };
    });
  };

  const resetProgress = () => {
    if (window.confirm('Tem certeza que deseja zerar seu histórico e progresso de estudos no EletroAjuda?')) {
      setProgress(INITIAL_PROGRESS);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const overallPercentage = Math.round((progress.completedModules.length / 10) * 100);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markModuleComplete,
        unmarkModuleComplete,
        recordQuizScore,
        addPoints,
        unlockBadge,
        setLastModule,
        toggleFavoriteModule,
        resetProgress,
        overallPercentage
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
