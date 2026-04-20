/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Facebook, Linkedin, Send, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shareLinks = [
    { icon: <MessageCircle size={20} />, label: "WhatsApp", color: "hover:bg-[#25D366]", url: `https://wa.me/5515992601355?text=${encodeURIComponent("Olá! Vi o site da Chaveiro Master e gostaria de mais informações: " + window.location.href)}` },
    { icon: <Send size={20} />, label: "Telegram", color: "hover:bg-[#0088cc]", url: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}` },
    { icon: <Linkedin size={20} />, label: "LinkedIn", color: "hover:bg-[#0077b5]", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
    { icon: <Facebook size={20} />, label: "Facebook", color: "hover:bg-[#1877F2]", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
  ];

  return (
    <footer className="pt-24 pb-12 px-6 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-brand-purple">
                <span className="font-display font-bold">C</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                CHAVEIRO<span className="text-brand-blue">MASTER</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Elevando o conceito de brindes corporativos através do design e tecnologia em acrílico.
            </p>
            <div className="flex gap-4">
              {shareLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-colors ${link.color}`}
                  title={`Compartilhar no ${link.label}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 hover:text-brand-blue transition-colors cursor-pointer text-sm">
                <MapPin className="shrink-0" size={18} />
                <span>Av. Pedro Gonçalves 564<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 hover:text-brand-blue transition-colors cursor-pointer text-sm">
                <Phone className="shrink-0" size={18} />
                <span>(15) 99260-1355</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 hover:text-brand-blue transition-colors cursor-pointer text-sm">
                <Mail className="shrink-0" size={18} />
                <a href="mailto:joaocasouza.10@gmail.com">joaocasouza.10@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li className="hover:text-white transition-colors cursor-pointer">Catálogo Online</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trabalhe Conosco</li>
              <li className="hover:text-white transition-colors cursor-pointer">Termos de Coleta</li>
              <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Novidades</h4>
            <p className="text-sm text-white/40 mb-4">Receba lançamentos exclusivos e promoções.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 glass px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button className="p-3 bg-brand-blue text-brand-purple rounded-xl box-glow hover:bg-white transition-colors">
                <Send size={18} />
              </button>
            </div>
            
            {/* Alternative Share Button */}
            <motion.a
              href={`https://wa.me/5515992601355?text=${encodeURIComponent("Olá! Vi o site da Chaveiro Master e gostaria de mais informações: " + (typeof window !== 'undefined' ? window.location.href : ''))}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center justify-center gap-3 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all"
            >
              <MessageCircle size={20} />
              COMPARTILHAR NO WHATSAPP
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest font-bold">
          <p>© {currentYear} Chaveiro Master. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span>Desenvolvido com Luxo</span>
            <span className="flex items-center gap-1">
              Feito por <span className="text-brand-blue">João Carlos</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
