import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface LessonCardProps {
  lessonNumber: number;
  title: string;
  titleEn: string;
  kanjiPreview: string[];
  learnedCount: number;
  totalCount: number;
  onViewLesson: () => void;
}

export function LessonCard({
  lessonNumber,
  title,
  titleEn,
  kanjiPreview,
  learnedCount,
  totalCount,
  onViewLesson
}: LessonCardProps) {
  const progressPercentage = (learnedCount / totalCount) * 100;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="inline-block bg-[#f9c5d1]/20 text-[#f9c5d1] px-3 py-1 rounded-full text-sm mb-2">
            Lesson {lessonNumber}
          </div>
          <h3 className="text-lg mb-1">{titleEn}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Kanji Preview */}
      <div className="bg-gradient-to-br from-[#f9c5d1]/5 to-[#b6e2d3]/5 rounded-xl p-4 mb-4 min-h-[80px] flex items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {kanjiPreview.slice(0, 10).map((kanji, index) => (
            <span key={index} className="text-2xl text-gray-700">
              {kanji}
            </span>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm">
            {learnedCount}/{totalCount}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* View Lesson Button */}
      <Button
        onClick={onViewLesson}
        className="w-full bg-[#f9c5d1] hover:bg-[#f7b3c4] text-gray-800 rounded-full"
      >
        View Lesson
      </Button>
    </motion.div>
  );
}
