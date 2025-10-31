import { useState } from 'react';
import { Home } from './components/Home';
import { Lessons } from './components/Lessons';
import { KanjiDetail } from './components/KanjiDetail';
import { Progress } from './components/Progress';
import { Quiz } from './components/Quiz';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

type Page = 'home' | 'lessons' | 'kanji-detail' | 'progress' | 'quiz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedKanji, setSelectedKanji] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [learnedKanji, setLearnedKanji] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleViewKanji = (kanji: string, lessonId?: number) => {
    setSelectedKanji(kanji);
    if (lessonId) {
      setSelectedLessonId(lessonId);
    }
    setCurrentPage('kanji-detail');
  };

  const handleMarkAsLearned = (kanji: string) => {
    setLearnedKanji(prev => {
      const newSet = new Set(prev);
      if (newSet.has(kanji)) {
        newSet.delete(kanji);
      } else {
        newSet.add(kanji);
      }
      return newSet;
    });
  };

  const handleToggleFavorite = (kanji: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(kanji)) {
        newSet.delete(kanji);
      } else {
        newSet.add(kanji);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'lessons' && <Lessons onViewKanji={handleViewKanji} learnedKanji={learnedKanji} />}
        {currentPage === 'kanji-detail' && selectedKanji && (
          <KanjiDetail 
            kanji={selectedKanji}
            lessonId={selectedLessonId}
            isLearned={learnedKanji.has(selectedKanji)}
            isFavorite={favorites.has(selectedKanji)}
            onMarkAsLearned={handleMarkAsLearned}
            onToggleFavorite={handleToggleFavorite}
            onNavigateToKanji={handleViewKanji}
            onBackToLessons={() => handleNavigate('lessons')}
          />
        )}
        {currentPage === 'progress' && <Progress learnedKanji={learnedKanji} onNavigate={handleNavigate} />}
        {currentPage === 'quiz' && <Quiz learnedKanji={learnedKanji} onMarkAsLearned={handleMarkAsLearned} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
