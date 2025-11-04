import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ReactNode, useState } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
}

export function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'default',
  className = '' 
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      variant={variant as any}
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -10 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="inline-flex"
        >
          <ArrowRight size={20} />
        </motion.span>
      </span>
      
      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </Button>
  );
}
