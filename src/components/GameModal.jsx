import { Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl aspect-video bg-[#050505] brutal-border border-neon-primary shadow-[0_0_50px_-12px_rgba(0,255,0,0.3)]"
        >
          {/* Header */}
          <div className="absolute -top-12 left-0 right-0 flex items-center justify-between px-2 text-white">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-display font-bold italic uppercase tracking-tighter">
                Playing: <span className="text-neon-primary">{game.title}</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-sm transition-colors group"
            >
              <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Iframe */}
          <iframe
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full border-none rounded-sm"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />

          {/* Controls Overlay (Optional) */}
          <div className="absolute bottom-4 right-4 flex gap-2">
             <button 
                onClick={() => {
                  const iframe = document.querySelector('iframe');
                  if (iframe?.requestFullscreen) iframe.requestFullscreen();
                }}
                className="bg-black/80 p-3 brutal-border-hover border border-white/20 text-white rounded-sm"
                title="Fullscreen"
             >
                <Maximize2 size={20} />
             </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
