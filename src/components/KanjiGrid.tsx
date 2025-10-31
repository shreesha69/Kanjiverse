import { motion } from "framer-motion";
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from './ui/button';
import { LessonData } from '../data/kanjiData';

interface KanjiGridProps {
  lesson: LessonData;
  learnedKanji: Set<string>;
  onViewKanji: (kanji: string, lessonId?: number) => void;
  onBack: () => void;
}

export function KanjiGrid({ lesson, learnedKanji, onViewKanji, onBack }: KanjiGridProps) {
  const learnedCount = lesson.kanji.filter(k => learnedKanji.has(k)).length;
  const progressPercentage = (learnedCount / lesson.kanji.length) * 100;

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 hover:bg-[#f9c5d1]/10"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Lessons
        </Button>

        {/* Lesson Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-block bg-[#f9c5d1]/20 text-[#f9c5d1] px-4 py-2 rounded-full mb-3">
            Lesson {lesson.id}
          </div>
          <h1 className="text-3xl sm:text-4xl mb-3">{lesson.title}</h1>
          <p className="text-gray-600">
            Progress: {learnedCount} / {lesson.kanji.length} kanji mastered ({Math.round(progressPercentage)}%)
          </p>
        </motion.div>

        {/* Kanji Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {lesson.kanji.map((kanji, index) => {
            const isLearned = learnedKanji.has(kanji);

            return (
              <motion.button
                key={kanji}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onViewKanji(kanji, lesson.id)}
                className={`relative aspect-square rounded-2xl p-6 flex items-center justify-center shadow-lg transition-all ${
                  isLearned
                    ? 'bg-gradient-to-br from-[#b6e2d3] to-[#b6e2d3]/80 border-2 border-[#b6e2d3]'
                    : 'bg-white hover:shadow-xl border-2 border-gray-100 hover:border-[#f9c5d1]/30'
                }`}
              >
                <span className="text-5xl">{kanji}</span>
                {isLearned && (
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                    <Check size={16} className="text-[#b6e2d3]" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
