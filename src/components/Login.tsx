import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { AnimatedButton } from './AnimatedButton';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'home' | 'signup';

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Image - White Flowers & Mountain */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="White Flowers Mountain Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl mb-2 font-semibold"
            >
              Welcome Back 🎌
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-600 font-medium"
            >
              Learn. Level up. Conquer the Kanjiverse.
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#b6e2d3] focus:ring-2 focus:ring-[#b6e2d3]/20 transition-all"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#b6e2d3] focus:ring-2 focus:ring-[#b6e2d3]/20 transition-all"
              />
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <AnimatedButton
                type="submit"
                className="w-full bg-[#b6e2d3] hover:bg-[#a0d4c3] text-gray-800 py-6 rounded-2xl shadow-lg font-medium"
              >
                Log In
              </AnimatedButton>
            </motion.div>
          </form>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-[#b6e2d3] hover:text-[#a0d4c3] transition-colors underline decoration-2 font-medium"
              >
                Sign up
              </button>
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex justify-center gap-4 text-2xl"
          >
            <span>⛩️</span>
            <span>🏯</span>
            <span>🌸</span>
          </motion.div>
        </div>

        {/* Additional Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center mt-6 text-gray-500 text-sm"
        >
          Ready to climb the kanji ladder? 🪜
        </motion.p>
      </motion.div>
    </div>
  );
}