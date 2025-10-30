import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'lessons' | 'kanji-detail' | 'progress' | 'quiz';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'lessons' as Page, label: 'Lessons' },
    { id: 'progress' as Page, label: 'Progress' },
    { id: 'quiz' as Page, label: 'Quiz' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl">🌸</span>
            <span className="text-xl">Kanjiverse</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors px-3 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-[#e91e63] text-white'
                    : 'text-gray-700 hover:bg-[#e91e63]/10 hover:text-[#e91e63]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#e91e63] text-white'
                      : 'text-gray-700 hover:bg-[#e91e63]/10 hover:text-[#e91e63]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
