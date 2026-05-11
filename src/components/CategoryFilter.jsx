import { motion } from 'motion/react';

const categories = ['All', 'Puzzle', 'Arcade', 'Sandbox', 'Logic', 'IO', 'Runner'];

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap gap-3 pb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-sm font-display font-medium text-sm transition-all border-2 
            ${selectedCategory === category 
              ? 'bg-neon-primary text-black border-neon-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' 
              : 'bg-transparent text-white border-white/20 hover:border-white'}`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
