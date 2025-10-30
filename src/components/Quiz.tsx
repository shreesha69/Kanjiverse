import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { allKanji, kanjiDatabase } from '../data/kanjiData';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';

interface QuizProps {
  learnedKanji: Set<string>;
  onMarkAsLearned: (kanji: string) => void;
}

interface QuizQuestion {
  kanji: string;
  correctAnswer: string;
  options: string[];
}

export function Quiz({ learnedKanji }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const totalQuestions = 10;

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const availableKanji = allKanji.filter(k => kanjiDatabase[k]);
    const shuffled = [...availableKanji].sort(() => Math.random() - 0.5);
    const selectedKanji = shuffled.slice(0, totalQuestions);

    const newQuestions = selectedKanji.map(kanji => {
      const data = kanjiDatabase[kanji];
      const correctAnswer = data.meaning;
      
      // Generate wrong answers from other kanji
      const otherMeanings = availableKanji
        .filter(k => k !== kanji && kanjiDatabase[k])
        .map(k => kanjiDatabase[k].meaning)
        .filter(m => m !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = [correctAnswer, ...otherMeanings].sort(() => Math.random() - 0.5);

      return {
        kanji,
        correctAnswer,
        options
      };
    });

    setQuestions(newQuestions);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setAnsweredQuestions(answeredQuestions + 1);

    // Auto advance after 1.5 seconds
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    generateQuestions();
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(0);
    setIsCorrect(null);
  };

  if (questions.length === 0) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="text-6xl mb-4">📚</div>
        <p className="text-xl text-gray-600">Loading quiz...</p>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
      message = 'Excellent! You\'re a kanji master! 🎉';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Great job! Keep up the good work! 👏';
      emoji = '⭐';
    } else if (percentage >= 50) {
      message = 'Good effort! Practice makes perfect! 💪';
      emoji = '📖';
    } else {
      message = 'Keep studying! You\'ll get there! 🌱';
      emoji = '🌸';
    }

    return (
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-[#f9c5d1]/20 to-[#b6e2d3]/20 rounded-3xl p-12 text-center shadow-xl"
          >
            <div className="text-8xl mb-6">{emoji}</div>
            <h2 className="text-4xl mb-4">Quiz Complete!</h2>
            <p className="text-2xl mb-6">{message}</p>
            
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-6xl mb-4">{score}/{totalQuestions}</div>
              <p className="text-xl text-gray-600">
                You got {percentage}% correct
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={restartQuiz}
                className="bg-[#f9c5d1] hover:bg-[#f9c5d1]/90 text-white px-8 py-6 rounded-full"
              >
                <RotateCcw className="mr-2" size={20} />
                Try Again
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-gray-600">
              Score: {score}/{answeredQuestions}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#f9c5d1] to-[#b6e2d3]"
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8"
          >
            {/* Kanji Display */}
            <div className="bg-gradient-to-br from-[#f9c5d1]/20 to-[#b6e2d3]/20 p-12 text-center">
              <p className="text-gray-600 mb-4">What does this kanji mean?</p>
              <div className="text-9xl mb-4">{currentQuestion.kanji}</div>
            </div>

            {/* Answer Options */}
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.correctAnswer;
                  
                  let buttonClass = 'bg-white hover:bg-gray-50 border-2 border-gray-200';
                  
                  if (selectedAnswer !== null) {
                    if (isCorrectAnswer) {
                      buttonClass = 'bg-[#b6e2d3] border-[#b6e2d3] text-white';
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonClass = 'bg-red-100 border-red-300 text-red-700';
                    }
                  } else if (isSelected) {
                    buttonClass = 'bg-[#f9c5d1]/10 border-[#f9c5d1]';
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`p-6 rounded-xl transition-all ${buttonClass} flex items-center justify-between`}
                    >
                      <span className="text-lg">{option}</span>
                      {selectedAnswer !== null && isCorrectAnswer && (
                        <Check size={24} />
                      )}
                      {selectedAnswer !== null && isSelected && !isCorrectAnswer && (
                        <X size={24} />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {isCorrect !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 p-4 rounded-xl text-center ${
                      isCorrect
                        ? 'bg-[#b6e2d3]/20 text-[#b6e2d3]'
                        : 'bg-red-50 text-red-600'
                    }`}
                  >
                    {isCorrect ? '✅ Correct! Well done!' : '❌ Not quite. The correct answer is highlighted.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
