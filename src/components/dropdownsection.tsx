// components/DropdownSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function DropdownSection({ title, children }: DropdownSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-3xl font-bold mb-4 flex items-center justify-between"
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}