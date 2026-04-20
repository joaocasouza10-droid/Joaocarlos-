/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ana Silveira",
    role: "Marketing na TechGrowth",
    text: "Os chaveiros ficaram simplesmente impecáveis. A qualidade do acrílico e a fidelidade das cores superaram qualquer expectativa que tínhamos.",
    image: "https://i.pravatar.cc/150?u=ana",
    videoThumbnail: "https://picsum.photos/seed/keychain-review-1/400/225",
  },
  {
    id: 2,
    name: "Rodrigo Mota",
    role: "CEO da UrbanStyle",
    text: "Trabalho profissional desde o primeiro contato até a entrega. Os brindes foram o maior sucesso no nosso evento de lançamento.",
    image: "https://i.pravatar.cc/150?u=rodrigo",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Eventos na BlueOcean",
    text: "Precisávamos de um prazo curto e o João Carlos entregou antes do combinado com uma perfeição milimétrica. Recomendo demais!",
    image: "https://i.pravatar.cc/150?u=juju",
    videoThumbnail: "https://picsum.photos/seed/keychain-review-2/400/225",
  },
  {
    id: 4,
    name: "Marcos Vinicius",
    role: "Proprietário da MV Designs",
    text: "O efeito neon nos chaveiros da minha agência ficou incrível. Meus clientes sempre perguntam onde eu fiz. Branding nota 10!",
    image: "https://i.pravatar.cc/150?u=marcos",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Quem usa, <span className="text-brand-blue">se apaixona</span>
            </h2>
            <p className="text-white/50 text-lg">
              Veja o que nossos clientes corporativos dizem sobre a experiência Chaveiro Master.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full glass hover:bg-brand-blue hover:text-brand-purple transition-all box-glow"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10"
        >
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="min-w-full md:min-w-[450px] snap-center"
            >
              <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col hover:border-brand-blue/30 transition-colors group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <Quote className="text-brand-blue/20" size={40} />
                </div>

                <p className="text-xl md:text-2xl font-medium italic text-white/90 mb-8 leading-relaxed flex-grow">
                  "{t.text}"
                </p>

                {t.videoThumbnail && (
                  <div 
                    onClick={() => setPlayingVideo(t.videoThumbnail!)}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 cursor-pointer group/video"
                  >
                    <img 
                      src={t.videoThumbnail} 
                      alt="Review em vídeo" 
                      className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="p-4 rounded-full glass group-hover/video:scale-110 transition-transform">
                        <PlayCircle className="text-brand-blue" size={32} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-blue/40" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <span className="text-sm text-white/40">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Overlay */}
      <AnimatePresence>
        {playingVideo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPlayingVideo(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden glass border border-white/20 z-10"
            >
               <button 
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full glass hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="rotate-90 md:rotate-0" />
              </button>
              <div className="w-full h-full flex items-center justify-center bg-black">
                <span className="text-brand-blue animate-pulse font-display text-xl">Carregando Depoimento...</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
