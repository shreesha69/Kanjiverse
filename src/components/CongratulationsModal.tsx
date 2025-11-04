import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from './ui/dialog';
import { AnimatedButton } from './AnimatedButton';
import { Sparkles } from 'lucide-react';

interface CongratulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartReview: () => void;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  delay: number;
}

export function CongratulationsModal({ isOpen, onClose, onStartReview }: CongratulationsModalProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const colors = ['#f9c5d1', '#b6e2d3', '#ffd4e5', '#c8e6c9', '#ffe4b5', '#e1bee7'];
  
  const messages = [
    { japanese: 'おめでとうございます！', english: 'Congratulations!' },
    { japanese: 'がんばったね！', english: 'You did great!' },
    { japanese: 'すごい！', english: 'Amazing!' }
  ];

  const [currentMessage] = useState(messages[Math.floor(Math.random() * messages.length)]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti
      const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        delay: Math.random() * 0.5
      }));
      setConfetti(newConfetti);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-none shadow-2xl overflow-hidden p-0">
        {/* Confetti Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {confetti.map((piece) => (
              <motion.div
                key={piece.id}
                initial={{ 
                  x: `${piece.x}%`, 
                  y: `${piece.y}%`,
                  rotate: piece.rotation,
                  opacity: 1
                }}
                animate={{ 
                  y: '120%',
                  rotate: piece.rotation + 360,
                  opacity: 0
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: piece.delay,
                  ease: 'easeIn'
                }}
                className="absolute"
                style={{
                  width: piece.size,
                  height: piece.size,
                  backgroundColor: piece.color,
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px'
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative bg-gradient-to-br from-[#fce4ec] via-[#f3e5f5] to-[#e8f5e9] p-10">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="text-center"
          >
            {/* Trophy/Celebration Icon */}
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="text-8xl mb-6"
            >
              🏆
            </motion.div>

            {/* Japanese Message */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl mb-3"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {currentMessage.japanese}
            </motion.h2>

            {/* English Translation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-700 mb-6"
            >
              {currentMessage.english}
            </motion.p>

            {/* Achievement Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/40"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="text-[#f9c5d1]" size={24} />
                <h3 className="text-xl">All 110 Kanji Mastered!</h3>
                <Sparkles className="text-[#b6e2d3]" size={24} />
              </div>
              <p className="text-gray-600">
                You've completed all JLPT N5 kanji lessons.
                <br />
                Ready to start your review? 🌸
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <AnimatedButton
                onClick={onStartReview}
                className="flex-1 bg-gradient-to-r from-[#f9c5d1] to-[#f7b3c4] hover:from-[#f7b3c4] hover:to-[#f59bb0] text-gray-800 px-6 py-6 rounded-full shadow-lg"
              >
                Start Review
              </AnimatedButton>
              <AnimatedButton
                onClick={onClose}
                variant="outline"
                className="flex-1 border-2 border-[#b6e2d3] text-gray-700 hover:bg-[#b6e2d3]/20 px-6 py-6 rounded-full"
              >
                Keep Going
              </AnimatedButton>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-6 text-4xl flex justify-center gap-3"
            >
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                🌸
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                ⛩️
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                🎌
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
