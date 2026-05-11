import { Gamepad2, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b-2 border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 bg-neon-primary text-black rounded-sm transform -rotate-12">
            <Gamepad2 size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tighter uppercase italic">
            Nexus<span className="text-neon-primary">Games</span>
          </h1>
        </motion.div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 rounded-sm py-3 pl-12 pr-4 focus:border-neon-primary focus:outline-none transition-colors font-medium"
          />
        </div>
      </div>
    </header>
  );
}
