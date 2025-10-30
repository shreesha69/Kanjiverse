import { motion } from 'motion/react';
import { TrendingUp, Award, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Progress as ProgressBar } from './ui/progress';
import { lessons, allKanji } from '../data/kanjiData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProgressProps {
  learnedKanji: Set<string>;
}

export function Progress({ learnedKanji }: ProgressProps) {
  const totalKanji = allKanji.length;
  const learnedCount = learnedKanji.size;
  const progressPercentage = (learnedCount / totalKanji) * 100;

  return (
    <div className="relative py-12 px-4 min-h-screen">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758971180731-a50a122f94c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBnYXJkZW4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2MTY3MjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Zen Garden"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">
            Your Progress
          </h1>
          <p className="text-xl text-gray-600">
            Keep climbing towards JLPT N5 mastery!
          </p>
        </motion.div>

        {/* Main Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#f9c5d1]/20 to-[#b6e2d3]/20 rounded-3xl p-8 sm:p-12 mb-8 shadow-xl text-center"
        >
          <div className="text-7xl sm:text-8xl mb-6">🎯</div>
          <h2 className="text-3xl sm:text-4xl mb-4">
            {learnedCount} / {totalKanji} Kanji
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            You've mastered {Math.round(progressPercentage)}% of JLPT N5 kanji!
          </p>
          <ProgressBar value={progressPercentage} className="h-4 mb-4" />
          <p className="text-gray-500">
            {totalKanji - learnedCount} kanji remaining
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#f9c5d1]/20 rounded-full flex items-center justify-center">
                <TrendingUp className="text-[#f9c5d1]" size={24} />
              </div>
              <h3 className="text-lg">Total Learned</h3>
            </div>
            <p className="text-3xl">{learnedCount}</p>
            <p className="text-gray-500 text-sm mt-1">kanji characters</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#b6e2d3]/20 rounded-full flex items-center justify-center">
                <Award className="text-[#b6e2d3]" size={24} />
              </div>
              <h3 className="text-lg">Lessons Completed</h3>
            </div>
            <p className="text-3xl">
              {lessons.filter(l => l.kanji.every(k => learnedKanji.has(k))).length}
            </p>
            <p className="text-gray-500 text-sm mt-1">out of {lessons.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Target className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-lg">Remaining</h3>
            </div>
            <p className="text-3xl">{totalKanji - learnedCount}</p>
            <p className="text-gray-500 text-sm mt-1">kanji to learn</p>
          </motion.div>
        </div>

        {/* Ladder Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
        >
          <h2 className="text-2xl mb-6 text-center">Your Learning Ladder</h2>
          <div className="space-y-3">
            {lessons.map((lesson, index) => {
              const lessonLearnedCount = lesson.kanji.filter(k => learnedKanji.has(k)).length;
              const lessonProgress = (lessonLearnedCount / lesson.kanji.length) * 100;
              const isComplete = lessonProgress === 100;

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isComplete
                      ? 'bg-gradient-to-r from-[#b6e2d3]/20 to-[#b6e2d3]/10 border-[#b6e2d3]'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isComplete ? 'bg-[#b6e2d3] text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {lesson.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span>{lesson.title}</span>
                        <span className="text-sm text-gray-600">
                          {lessonLearnedCount}/{lesson.kanji.length}
                        </span>
                      </div>
                      <ProgressBar value={lessonProgress} className="h-2" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="text-center">
          <Button className="bg-[#f9c5d1] hover:bg-[#f9c5d1]/90 text-white px-8 py-6 rounded-full">
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
