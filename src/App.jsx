/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import Header from './components/Header';
import gamesData from './data/games.json';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-neon-primary selection:text-black">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic tracking-tighter mb-4">
              LEVEL <span className="text-neon-primary">UP</span> YOUR BREAK
            </h2>
            <div className="h-1 w-24 bg-neon-primary mb-8" />
          </motion.div>

          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onSelect={(g) => setSelectedGame(g)} 
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredGames.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <h3 className="text-2xl font-display uppercase tracking-widest text-white/30">
                No games found... try another search.
              </h3>
            </motion.div>
          )}
        </section>

        {/* Footer Area */}
        <footer className="mt-32 pb-12 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-primary rounded-sm rotate-45" />
            <span className="font-display font-bold uppercase tracking-tighter text-xl">Nexus Games</span>
          </div>
          <div className="flex gap-8 text-white/40 font-medium text-sm">
            <a href="#" className="hover:text-neon-primary transition-colors uppercase">Terms</a>
            <a href="#" className="hover:text-neon-primary transition-colors uppercase">Privacy</a>
            <a href="#" className="hover:text-neon-primary transition-colors uppercase">Support</a>
          </div>
          <p className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} NEXUS_OS // ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>

      {/* Game Viewer */}
      <GameModal 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
    </div>
  );
}
