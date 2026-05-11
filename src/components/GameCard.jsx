import { Play } from 'lucide-react';
import { motion } from 'motion/react';

const GameCard = ({ game, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(game)}
      className="group relative bg-[#111] overflow-hidden brutal-border brutal-border-hover cursor-pointer"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onSelect(game)}
            className="p-4 bg-neon-primary text-black rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300"
          >
            <Play fill="currentColor" size={24} />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neon-primary bg-neon-primary/10 px-2 py-0.5 rounded-sm">
            {game.category}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-neon-primary transition-colors">
          {game.title}
        </h3>
        <p className="text-white/50 text-sm line-clamp-2 font-medium leading-relaxed">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GameCard;
