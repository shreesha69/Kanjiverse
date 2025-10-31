import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'lessons' | 'progress' | 'quiz';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const calculateDaysUntilJLPT = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const december = new Date(currentYear, 11, 1);
    const firstSunday = new Date(december);

    while (firstSunday.getDay() !== 0) {
      firstSunday.setDate(firstSunday.getDate() + 1);
    }

    if (today > firstSunday) {
      firstSunday.setFullYear(currentYear + 1);
    }

    const diffTime = firstSunday.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysLeft = calculateDaysUntilJLPT();

  const infoCards = [
    {
      icon: BookOpen,
      title: 'Learn Easily',
      description: 'Master 110 essential JLPT N5 kanji step by step',
      emoji: '📖✨'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Visualize your learning journey with our ladder system',
      emoji: '🎯🗾'
    },
    {
      icon: Award,
      title: 'Stay Motivated',
      description: 'Build confidence with daily practice and quizzes',
      emoji: '🏆⛩️'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Mount Fuji"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Climb step-by-step to master JLPT N5 Kanji
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your friendly companion for learning essential Japanese characters
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => onNavigate('lessons')}
                className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-6 rounded-full shadow-lg"
              >
                Start Learning
              </Button>
              <Button
                onClick={() => onNavigate('progress')}
                variant="outline"
                className="border-2 border-[#e91e63] text-[#e91e63] hover:bg-[#e91e63] hover:text-white px-8 py-6 rounded-full shadow-md"
              >
                Continue Lesson
              </Button>
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block bg-white px-8 py-4 rounded-2xl shadow-md border border-[#e91e63]/30"
            >
              <p className="text-gray-700">
                <span className="text-[#e91e63]">JLPT N5</span> — {daysLeft} Days Left! 🗓️
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="text-xl mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649227770395-610fe3d1e3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Cherry Blossoms"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#fce4ec]/40 to-white/80"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Your Path to Kanji Mastery
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Based on Minna no Nihongo textbook series, designed for complete beginners
            </p>
            <div className="flex justify-center gap-6 text-6xl mb-8">
              <motion.span whileHover={{ scale: 1.2 }} className="cursor-default">
                山
              </motion.span>
              <motion.span whileHover={{ scale: 1.2 }} className="cursor-default">
                川
              </motion.span>
              <motion.span whileHover={{ scale: 1.2 }} className="cursor-default">
                日
              </motion.span>
              <motion.span whileHover={{ scale: 1.2 }} className="cursor-default">
                月
              </motion.span>
            </div>
            <Button
              onClick={() => onNavigate('lessons')}
              className="bg-[#00897b] hover:bg-[#00695c] text-white px-8 py-6 rounded-full shadow-lg"
            >
              View All Lessons
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
