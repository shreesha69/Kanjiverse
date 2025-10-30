import { motion } from 'motion/react';
import { Star, Check, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { kanjiDatabase } from '../data/kanjiData';

interface KanjiDetailProps {
  kanji: string;
  isLearned: boolean;
  isFavorite: boolean;
  onMarkAsLearned: (kanji: string) => void;
  onToggleFavorite: (kanji: string) => void;
}

export function KanjiDetail({
  kanji,
  isLearned,
  isFavorite,
  onMarkAsLearned,
  onToggleFavorite
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

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
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
