/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-purple selection:bg-brand-blue selection:text-brand-purple overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Products />
        <Testimonials />
        <FAQ />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}
