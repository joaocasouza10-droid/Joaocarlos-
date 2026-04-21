/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import React, { useRef, useState } from 'react';

const initialTestimonials = [
  {
    id: 1,
    name: "Ana Silveira",
    role: "Marketing na TechGrowth",
    text: "Os chaveiros ficaram simplesmente impecáveis. A qualidade do acrílico e a fidelidade das cores superaram qualquer expectativa que tínhamos.",
  },
  {
    id: 2,
    name: "Rodrigo Mota",
    role: "CEO da UrbanStyle",
    text: "Trabalho profissional desde o primeiro contato até a entrega. Os brindes foram o maior sucesso no nosso evento de lançamento.",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Eventos na BlueOcean",
    text: "Precisávamos de um prazo curto e o João Carlos entregou antes do combinado com uma perfeição milimétrica. Recomendo demais!",
  },
  {
    id: 4,
    name: "Marcos Vinicius",
    role: "Proprietário da MV Designs",
    text: "O efeito neon nos chaveiros da minha agência ficou incrível. Meus clientes sempre perguntam onde eu fiz. Branding nota 10!",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;

    setIsSubmitting(true);
    
    // Simulating a small delay for better UX
    setTimeout(() => {
      const newEntry = {
        id: testimonials.length + 1,
        name: newName,
        role: newRole || "Cliente",
        text: newText,
      };

      setTestimonials([newEntry, ...testimonials]);
      setNewName('');
      setNewRole('');
      setNewText('');
      setRating(5);
      setIsSubmitting(false);
      
      // Auto scroll to start to see new message
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 600);
  };

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
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                    <Quote size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <span className="text-sm text-white/40">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form para novos comentários */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl -mr-16 -mt-16" />
            
            <h3 className="text-2xl font-display font-bold mb-2">Deixe seu <span className="text-brand-blue">Depoimento</span></h3>
            <p className="text-white/50 text-sm mb-8">Sua opinião é fundamental para continuarmos entregando o melhor do acrílico.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors text-white placeholder:text-white/30"
                />
                <input 
                  type="text" 
                  placeholder="Empresa/Cargo (Opcional)" 
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors text-white placeholder:text-white/30"
                />
              </div>
              
              <div className="flex gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    className={`transition-colors ${s <= rating ? 'text-yellow-400' : 'text-white/10'}`}
                  >
                    <Star size={20} fill="currentColor" />
                  </button>
                ))}
              </div>

              <textarea 
                placeholder="Escreva aqui seu comentário sobre nossos produtos e atendimento..." 
                required
                rows={4}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors text-white placeholder:text-white/30 resize-none"
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-blue text-brand-purple font-bold py-5 rounded-2xl box-glow flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    ENVIAR COMENTÁRIO
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
