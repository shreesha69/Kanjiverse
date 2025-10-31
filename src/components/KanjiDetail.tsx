import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, BookOpen, ArrowLeft, ArrowRight, List } from 'lucide-react';
import { Button } from './ui/button';
import { kanjiDatabase, lessons } from '../data/kanjiData';
import { useEffect, useState } from 'react';

interface KanjiDetailProps {
  kanji: string;
  lessonId: number | null;
  isLearned: boolean;
  isFavorite: boolean;
  onMarkAsLearned: (kanji: string) => void;
  onToggleFavorite: (kanji: string) => void;
  onNavigateToKanji: (kanji: string, lessonId?: number) => void;
  onBackToLessons: () => void;
}

export function KanjiDetail({
  kanji,
  lessonId,
  isLearned,
  isFavorite,
  onMarkAsLearned,
  onToggleFavorite,
  onNavigateToKanji,
  onBackToLessons
}: KanjiDetailProps) {
  const kanjiData = kanjiDatabase[kanji];

  // Fallback data if kanji not in database
  const data = kanjiData || {
    character: kanji,
    onyomi: '—',
    kunyomi: '—',
    meaning: 'Coming soon',
    examples: []
  };

  // Find current lesson and kanji index
  const currentLesson = lessonId ? lessons.find(l => l.id === lessonId) : null;
  const currentIndex = currentLesson ? currentLesson.kanji.indexOf(kanji) : -1;
  const hasPrevious = currentLesson && currentIndex > 0;
  const hasNext = currentLesson && currentIndex < currentLesson.kanji.length - 1;
  const nextLesson = currentLesson && !hasNext ? lessons.find(l => l.id === currentLesson.id + 1) : null;

  // State for showing new lesson banner
  const [showLessonBanner, setShowLessonBanner] = useState(false);
  const [previousLessonId, setPreviousLessonId] = useState<number | null>(lessonId);

  const handlePrevious = () => {
    if (currentLesson && hasPrevious) {
      onNavigateToKanji(currentLesson.kanji[currentIndex - 1], lessonId!);
    }
  };

  const handleNext = () => {
    if (currentLesson && hasNext) {
      onNavigateToKanji(currentLesson.kanji[currentIndex + 1], lessonId!);
    } else if (nextLesson) {
      // Show banner when moving to next lesson
      setShowLessonBanner(true);
      setTimeout(() => setShowLessonBanner(false), 3000);
      onNavigateToKanji(nextLesson.kanji[0], nextLesson.id);
    }
  };

  // Detect lesson change
  useEffect(() => {
    if (lessonId !== null && previousLessonId !== null && lessonId !== previousLessonId) {
      setShowLessonBanner(true);
      setTimeout(() => setShowLessonBanner(false), 3000);
    }
    setPreviousLessonId(lessonId);
  }, [lessonId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrevious) {
        handlePrevious();
      } else if (e.key === 'ArrowRight' && (hasNext || nextLesson)) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hasPrevious, hasNext, nextLesson, currentIndex]);

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* New Lesson Banner */}
        <AnimatePresence>
          {showLessonBanner && currentLesson && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-[#f9c5d1] to-[#b6e2d3] text-white px-8 py-4 rounded-full shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="font-semibold">
                    Lesson {currentLesson.id}: {currentLesson.titleEn}
                  </div>
                  <div className="text-sm opacity-90">{currentLesson.title}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBackToLessons}
            variant="ghost"
            className="hover:bg-[#f9c5d1]/10"
          >
            <List className="mr-2" size={20} />
            Back to Lessons
          </Button>

          {currentLesson && (
            <div className="flex items-center gap-2">
              <Button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                variant="outline"
                className="rounded-full"
              >
                <ArrowLeft size={20} className="mr-1" />
                Previous
              </Button>

              <div className="text-sm text-gray-600 px-3">
                {currentIndex + 1} / {currentLesson.kanji.length}
              </div>

              <Button
                onClick={handleNext}
                disabled={!hasNext && !nextLesson}
                variant="outline"
                className="rounded-full"
              >
                {hasNext ? (
                  <>
                    Next
                    <ArrowRight size={20} className="ml-1" />
                  </>
                ) : nextLesson ? (
                  <span className="flex items-center gap-1">
                    Next: Lesson {nextLesson.id}
                    <ArrowRight size={20} className="ml-1" />
                  </span>
                ) : (
                  <>
                    Next
                    <ArrowRight size={20} className="ml-1" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Main Kanji Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#f9c5d1]/20 to-[#b6e2d3]/20 rounded-3xl p-12 text-center mb-8 shadow-xl"
        >
          <div className="text-9xl sm:text-[12rem] mb-4">{data.character}</div>
          <div className="text-2xl text-gray-700">{data.meaning}</div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={() => onToggleFavorite(kanji)}
            variant={isFavorite ? 'default' : 'outline'}
            className={`flex-1 rounded-full ${
              isFavorite
                ? 'bg-yellow-400 hover:bg-yellow-500 text-white'
                : 'border-yellow-400 text-yellow-600 hover:bg-yellow-50'
            }`}
          >
            <Star className="mr-2" size={20} fill={isFavorite ? 'white' : 'none'} />
            {isFavorite ? 'Favorited' : 'Add to Favorites'}
          </Button>
          <Button
            onClick={() => onMarkAsLearned(kanji)}
            variant={isLearned ? 'default' : 'outline'}
            className={`flex-1 rounded-full ${
              isLearned
                ? 'bg-[#b6e2d3] hover:bg-[#b6e2d3]/90 text-gray-800'
                : 'border-[#b6e2d3] text-[#b6e2d3] hover:bg-[#b6e2d3]/10'
            }`}
          >
            <Check className="mr-2" size={20} />
            {isLearned ? 'Learned!' : 'Mark as Learned'}
          </Button>
        </div>

        {/* Readings Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#f9c5d1]/20 rounded-full flex items-center justify-center">
                <BookOpen size={16} className="text-[#f9c5d1]" />
              </div>
              <h3 className="text-lg">On'yomi (音読み)</h3>
            </div>
            <p className="text-2xl text-[#f9c5d1]">{data.onyomi}</p>
            <p className="text-sm text-gray-500 mt-2">Chinese reading</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#b6e2d3]/20 rounded-full flex items-center justify-center">
                <BookOpen size={16} className="text-[#b6e2d3]" />
              </div>
              <h3 className="text-lg">Kun'yomi (訓読み)</h3>
            </div>
            <p className="text-2xl text-[#b6e2d3]">{data.kunyomi}</p>
            <p className="text-sm text-gray-500 mt-2">Japanese reading</p>
          </motion.div>
        </div>

        {/* Example Words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl mb-4">Example Words</h3>
          {data.examples.length > 0 ? (
            <div className="space-y-4">
              {data.examples.map((example, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-gradient-to-r from-[#f9c5d1]/5 to-[#b6e2d3]/5 rounded-xl"
                >
                  <div className="flex-1">
                    <div className="text-xl mb-1">{example.word}</div>
                    <div className="text-gray-600">{example.reading}</div>
                  </div>
                  <div className="text-gray-700 sm:text-right">
                    {example.translation}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Example words coming soon...
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
