/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Play, Shield, CheckCircle2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  videoUrl?: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "premium-acrylic",
    name: "Acrílico Premium Cristal",
    description: "Transparência total e acabamento de alto brilho.",
    longDescription: "Nosso carro-chefe. Produzido com acrílico cast virgem de 3mm, oferece uma clareza superior ao vidro e altíssima resistência a impactos. Material premium que garante leveza, transparência cristalina e acabamento profissional incomparável.",
    image: "https://images.unsplash.com/photo-1619888804558-7ca54394019e?auto=format&fit=crop&q=80&w=600&h=600",
    features: ["100% Acrílico", "Transparência Cristalina", "Leveza Superior", "Acabamento Profissional"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "neon-style",
    name: "Linha Neon & Vibrante",
    description: "Cores que brilham e destacam sua marca.",
    longDescription: "Ideal para eventos noturnos, bares e festivais. Cores fluorescentes que reagem à luz negra, garantindo que seu brinde nunca passe desespercebido. Alta Durabilidade: Resistente a impactos, riscos e desgaste diário, mantendo o brilho e cor por muito mais tempo.",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600&h=600",
    features: ["Alta Durabilidade", "Resistente a Impactos", "Cores Neon Vibrantes", "Incluso Tag de QR Code"],
  },
  {
    id: "metalic-details",
    name: "Detalhes Metálicos",
    description: "Luxo com aplicação de foil e metais nobres.",
    longDescription: "A fusão perfeita entre a leveza do acrílico e a sofisticação do metal. Acabamentos em dourado, rosê ou prata aplicados com tecnologia termostática. Personalização Completa: Impressão de nomes, logos, fotos, datas e temas personalizados com precisão e qualidade.",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdce4c2d?auto=format&fit=crop&q=80&w=600&h=600",
    features: ["Personalização Completa", "Impressão UV 3D", "Estilo Executivo", "Embalagem Individual Premium"],
  },
  {
    id: "exclusive-shapes",
    name: "Formatos Exclusivos",
    description: "Sua logo em recorte especial e personalizado.",
    longDescription: "Não se prenda ao quadrado ou redondo. Criamos o seu chaveiro exatamente no shape da sua logomarca ou produto, garantindo 100% de exclusividade. Uso Versátil: Ideal para eventos corporativos, casamentos, aniversários, formaturas e estratégias de marketing.",
    image: "https://images.unsplash.com/photo-1517420812314-8549b17939df?auto=format&fit=crop&q=80&w=600&h=600",
    features: ["Uso Versátil", "Recorte Especial", "Design Sob Medida", "Versão com Chapa Dupla"],
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 px-6 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Nossas <span className="text-brand-blue">Coleções</span></h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10">Explore as possibilidades infinitas do acrílico premium para sua marca.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            <div className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-tighter">100% Acrílico</span>
              <div className="w-1 h-1 bg-brand-blue rounded-full" />
            </div>
            <div className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-tighter">Alta Durabilidade</span>
              <div className="w-1 h-1 bg-brand-blue rounded-full" />
            </div>
            <div className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-tighter">Personalização Completa</span>
              <div className="w-1 h-1 bg-brand-blue rounded-full" />
            </div>
            <div className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-tighter">Uso Versátil</span>
              <div className="w-1 h-1 bg-brand-blue rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Card BG/Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-brand-purple/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-blue animate-pulse">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-white/60 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {product.description}
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="h-full bg-brand-blue" 
                  />
                </div>
                <button className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-blue/80 hover:text-white transition-colors text-left">
                  Saiba mais +
                </button>
              </div>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/50 transition-colors duration-300 rounded-3xl pointer-events-none box-glow" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedProduct.id}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-dark rounded-[2.5rem] overflow-hidden border border-white/20 z-10 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full glass hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Left: Visual */}
              <div className="md:w-1/2 relative bg-black shrink-0 min-h-[300px]">
                {selectedProduct.videoUrl ? (
                  <div className="w-full h-full relative group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover opacity-80"
                    >
                      <source src={selectedProduct.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-brand-blue animate-pulse">
                        <Play fill="currentColor" size={32} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Modal Right: Content */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-4 block">Detalhes do Produto</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedProduct.name}</h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  {selectedProduct.longDescription}
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {selectedProduct.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <Shield className="text-brand-blue w-4 h-4" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/5515992601355"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-brand-blue text-brand-purple font-bold rounded-2xl hover:bg-white transition-colors box-glow text-center"
                  >
                    Pedir Orçamento
                  </motion.a>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
