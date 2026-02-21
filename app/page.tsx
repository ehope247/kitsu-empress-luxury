"use client";

import { motion } from "framer-motion";
import { Crown, ArrowRight, Cat, Sparkles, ScrollText, Coins, Gem, ShieldCheck, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [buyText, setBuyText] = useState("Buy $KITSU"); // State for button text

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Buy Button Click
  const handleBuyClick = () => {
    setBuyText("Launching Soon...");
    setTimeout(() => setBuyText("Buy $KITSU"), 2000); // Reset after 2 seconds
  };

  // Fixed animation variants to remove TypeScript error
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      
      {/* --- 1. LUXURY NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-cream/95 backdrop-blur-xl py-4 shadow-sm border-b border-gold/10" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-serif font-bold tracking-widest text-charcoal">
            <Crown className="text-gold" size={24} /> $KITSU
          </div>
          
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal/60">
            <a href="#lore" className="hover:text-gold transition-colors">Lore</a>
            <a href="#tokenomics" className="hover:text-gold transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-gold transition-colors">Roadmap</a>
          </div>

          <a href="https://t.me/Kitsucatonsol" target="_blank" rel="noopener noreferrer">
            <button className="bg-charcoal text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 shadow-lg shadow-charcoal/20 hover:shadow-gold/40">
              Join The Pride
            </button>
          </a>
        </div>
      </nav>

      {/* --- 2. HERO SECTION (The Empress) --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-light blur-[120px] rounded-full -z-10 opacity-40" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="z-10 flex flex-col items-center"
        >
          <div className="mb-8 px-6 py-2 border border-charcoal/10 rounded-full bg-white/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal/70 shadow-sm">
            The Internet Belongs to Cats
          </div>

          <h1 className="text-7xl md:text-[9rem] font-serif font-bold tracking-tighter mb-6 text-charcoal leading-[0.9]">
            The <span className="text-gold-gradient italic pr-4">Empress</span> <br />
            of Meme Coins.
          </h1>

          <p className="text-charcoal/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Built for cat lovers. Owned by believers. <br />
            Dogs compete. The Empress simply reigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={handleBuyClick}
              className="bg-gold text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-charcoal hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/30 min-w-[200px]"
            >
              {buyText}
            </button>
            <a href="#lore">
              <button className="group border border-charcoal/20 px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-all duration-300 flex items-center gap-2 bg-white/50 backdrop-blur-sm">
                Read The Lore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </motion.div>

        {/* Floating Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-20 relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-gold/20 bg-gradient-to-b from-cream-dark to-white flex items-center justify-center luxury-shadow overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          {/* IMAGE: Ensure your file in 'public' folder is named 'kitsu.png' */}
          <img 
            src="/kitsu.png" 
            alt="Kitsu The Empress" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* --- 3. THE LORE --- */}
      <section id="lore" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 text-gold font-bold tracking-[0.2em] text-xs uppercase mb-6">
              <ScrollText size={16} /> The Rise of Kitsu
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-charcoal leading-tight">
              Dogs bark. <br />
              <span className="text-gold italic">Kitsu observes.</span>
            </h2>
            <p className="text-charcoal/70 mb-6 text-lg font-light leading-relaxed">
              Long ago, the internet crowned dogs as kings. They barked loud. They ran fast. They begged for attention.
            </p>
            <p className="text-charcoal/70 mb-8 text-lg font-light leading-relaxed">
              From the shadows of memes and the glow of screens, Kitsu emerged. Not loud. Not desperate. <strong className="text-gold font-medium">Elegant. Calculated. Inevitable.</strong>
            </p>
            <div className="pl-6 border-l-2 border-gold">
              <p className="text-charcoal/80 italic font-serif text-xl">
                "$Kitsu is not here to compete with dogs. Dogs compete with $Kitsu."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "Independence", icon: <Crown size={24} />, desc: "Owned by no one." },
              { title: "Intelligence", icon: <Sparkles size={24} />, desc: "Smarter money." },
              { title: "Wealth", icon: <Coins size={24} />, desc: "Luxury asset." },
              { title: "Power", icon: <Cat size={24} />, desc: "Feline dominance." },
            ].map((item, i) => (
              <div key={i} className="group bg-cream p-10 hover:-translate-y-2 transition-transform duration-500 border border-charcoal/5 hover:border-gold/50 text-center flex flex-col items-center gap-4 hover:shadow-xl hover:shadow-gold/10">
                <div className="text-gold group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">{item.title}</h3>
                <p className="text-[10px] text-charcoal/50 uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. TOKENOMICS --- */}
      <section id="tokenomics" className="py-32 bg-charcoal text-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-black to-black" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">Financial Architecture</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-6">Luxury Doesn't Tax Loyalty.</h3>
            <p className="text-cream/50 max-w-2xl mx-auto font-light">
              A fair launch. No insider allocations. Pure, decentralized elegance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Supply */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white/5 border border-white/10 p-10 backdrop-blur-md text-center group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <Gem className="text-gold" size={32} />
              </div>
              <h4 className="text-4xl font-serif text-white mb-2">1 Billion</h4>
              <p className="text-gold text-xs uppercase tracking-widest mb-4">Total Supply</p>
              <p className="text-cream/40 text-sm font-light">Fixed supply. No minting function. Deflationary pressure applied through burns.</p>
            </motion.div>

            {/* Card 2: Taxes */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white/5 border border-white/10 p-10 backdrop-blur-md text-center group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <ShieldCheck className="text-gold" size={32} />
              </div>
              <h4 className="text-4xl font-serif text-white mb-2">0% / 0%</h4>
              <p className="text-gold text-xs uppercase tracking-widest mb-4">Buy & Sell Tax</p>
              <p className="text-cream/40 text-sm font-light">We do not tax our community. You keep what you trade. Pure freedom.</p>
            </motion.div>

            {/* Card 3: Liquidity */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white/5 border border-white/10 p-10 backdrop-blur-md text-center group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <Rocket className="text-gold" size={32} />
              </div>
              <h4 className="text-4xl font-serif text-white mb-2">Burned</h4>
              <p className="text-gold text-xs uppercase tracking-widest mb-4">Liquidity Pool</p>
              <p className="text-cream/40 text-sm font-light">100% of LP tokens burned at launch. Rug-proof. Unruggable. Eternal.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 5. ROADMAP --- */}
      <section id="roadmap" className="py-32 px-6 bg-cream-dark relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">The Dynasty</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-charcoal">Path to the Throne</h3>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold before:to-transparent">
            {[
              { phase: "Phase I", title: "The Awakening", items: ["Website Reveal", "Community Formation", "Fair Launch"] },
              { phase: "Phase II", title: "Expansion", items: ["CoinGecko Listing", "Influencer Campaign", "1,000 Holders"] },
              { phase: "Phase III", title: "Dominance", items: ["CEX Listings", "Global Marketing", "Merch Collection"] },
              { phase: "Phase IV", title: "Legacy", items: ["Tier 1 Exchange", "DAO Governance", "The Moon"] },
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white z-10">
                  <Crown size={14} />
                </div>
                
                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-none border border-charcoal/5 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{item.phase}</span>
                  </div>
                  <h4 className="text-2xl font-serif text-charcoal mb-4">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.items.map((sub, j) => (
                      <li key={j} className="text-charcoal/60 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {sub}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER (UPDATED SOCIALS) --- */}
      <footer className="bg-charcoal text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <Crown className="text-gold mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Rule?</h2>
          <p className="text-cream/50 max-w-xl mb-10 text-lg font-light">
            The throne is waiting. Join the most exclusive community in crypto.
          </p>
          
          <div className="flex gap-6 mb-16">
             <a href="https://x.com/Kitsucatonsol" target="_blank" rel="noopener noreferrer">
                <button className="bg-gold text-charcoal px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Twitter / X
                </button>
             </a>
             <a href="https://t.me/Kitsucatonsol" target="_blank" rel="noopener noreferrer">
                <button className="border border-white/20 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-all">
                    Telegram
                </button>
             </a>
          </div>

          <div className="w-full h-px bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between w-full text-xs text-charcoal/50 uppercase tracking-widest gap-4">
            <p className="text-cream/30">© 2024 $KITSU. All Rights Reserved.</p>
            <p className="text-cream/30">Designed for Luxury.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}