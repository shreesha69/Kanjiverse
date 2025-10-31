import { motion } from "framer-motion";
import { LessonCard } from "./LessonCard";
import { lessons } from "../data/kanjiData";
import { useState } from "react";
import { KanjiGrid } from "./KanjiGrid";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LessonsProps {
  onViewKanji: (kanji: string, lessonId?: number) => void;
  learnedKanji: Set<string>;
}

export function Lessons({
  onViewKanji,
  learnedKanji,
}: LessonsProps) {
  const [selectedLesson, setSelectedLesson] = useState<
    number | null
  >(null);

  if (selectedLesson !== null) {
    const lesson = lessons.find((l) => l.id === selectedLesson);
    if (lesson) {
      return (
        <KanjiGrid
          lesson={lesson}
          learnedKanji={learnedKanji}
          onViewKanji={onViewKanji}
          onBack={() => setSelectedLesson(null)}
        />
      );
    }
  }

  return (
    <div className="relative py-12 px-4 min-h-screen">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1701738504681-24dc50595e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGxhbmRzY2FwZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2MTY3MjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Japanese Landscape"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">
            JLPT N5 Kanji Lessons
          </h1>
          <p className="text-xl text-gray-600">
            11 lessons • 110 essential kanji characters
          </p>
        </motion.div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => {
            const learnedCount = lesson.kanji.filter((k) =>
              learnedKanji.has(k),
            ).length;

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <LessonCard
                  lessonNumber={lesson.id}
                  title={lesson.title}
                  titleEn={lesson.titleEn}
                  kanjiPreview={lesson.kanji}
                  learnedCount={learnedCount}
                  totalCount={lesson.kanji.length}
                  onViewLesson={() =>
                    setSelectedLesson(lesson.id)
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}