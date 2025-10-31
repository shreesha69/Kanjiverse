type Page = 'home' | 'lessons' | 'progress' | 'quiz';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const links = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'lessons' as Page, label: 'Lessons' },
    { id: 'quiz' as Page, label: 'Quiz' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 mt-20">
      {/* Decorative sakura petals */}
      <div className="absolute top-0 left-0 right-0 flex justify-around opacity-20 pointer-events-none">
        <span className="text-4xl text-[#f9c5d1]">🌸</span>
        <span className="text-3xl text-[#f9c5d1] mt-4">🌸</span>
        <span className="text-4xl text-[#f9c5d1]">🌸</span>
        <span className="text-3xl text-[#f9c5d1] mt-2">🌸</span>
        <span className="text-4xl text-[#f9c5d1]">🌸</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-gray-600 hover:text-[#f9c5d1] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="text-gray-600 hover:text-[#f9c5d1] transition-colors">
              About
            </button>
            <button className="text-gray-600 hover:text-[#f9c5d1] transition-colors">
              Contact
            </button>
          </div>

          {/* Japanese Quote */}
          <div className="text-center mb-2">
            <p className="text-lg text-gray-700 mb-1">七転び八起き</p>
            <p className="text-sm text-gray-500 italic">
              Nana korobi ya oki - Fall seven times, stand up eight
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-center">
            Made with dedication for JLPT N5 learners | © <strong>Kanjiverse 2025</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
