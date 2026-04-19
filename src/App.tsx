import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Pill, 
  Activity, 
  ShieldCheck, 
  HeartHandshake,
  Menu,
  X,
  ArrowRight,
  FlaskConical
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    {
      title: "AVAFEN-P",
      category: "Analgesic & Anti-inflammatory",
      composition: "Aceclofenac 100mg + Paracetamol 325mg",
      description: "Potent & trusted formulation for synergistic action against sprains, arthritis, ENT inflammation, and post-operative pain. Lower risk of GI bleeding.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-MF",
      category: "Safe Antipyretic",
      composition: "Paracetamol 250mg + Mefenamic Acid 100mg",
      description: "Fast onset and long duration (up to 8 hrs) control of pain and fever. Safe and effective, particularly suited for pediatric patients.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-SP",
      category: "Healing & Recovery",
      composition: "Aceclofenac + Paracetamol + Serratiopeptidase",
      description: "Reduces swelling and improves microcirculation with anti-oedemic and fibrinolytic activity. Ideal for rheumatoid arthritis and sports injuries.",
      icon: <Pill className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-TH",
      category: "Muscle Relaxant",
      composition: "Aceclofenac 100mg + Thiocolchicoside 4mg",
      description: "Provides enhanced, faster mobility in muscular spasms, acute low back pain, and neuromuscular conditions with a wide safety margin.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-DV",
      category: "Anti-Spasmodic",
      composition: "Aceclofenac 100mg + Drotaverine 80mg",
      description: "Perfect for spasmodic pain, renal colic, and spasmodic dysmenorrhea. Accelerates relief smoothly with better GI tolerability.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "MONTIRISE-L",
      category: "Anti-Allergic",
      composition: "Levocetirizine HCL + Montelukast",
      description: "Rapid onset relief over 24 hours against seasonal allergic rhinitis and asthma-associated allergies. Exerts 20x better receptor affinity.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "GAELICTUS-LS",
      category: "Respiratory & Cough",
      composition: "Levosalbutamol + Ambroxol + Guaiphenesin",
      description: "Trusted bronchodilator, mucolytic, and expectorant to combat heavy chest congestion, bronchitis, wheezing, and COPD.",
      icon: <FlaskConical className="w-8 h-8 text-brand" />
    },
    {
      title: "AVALIV-DS",
      category: "Hepato-Protective",
      composition: "Silymarin + Picorrhiza Kurroa + Natural Extracts",
      description: "Regenerator and protectant against hepatotoxins. Effectively treats acute hepatitis, fatty liver, jaundice, and drug-induced toxicity.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "MYLYCO-GOLD",
      category: "Vitality & Antioxidant",
      composition: "Lycopene, Multivitamins, L-Lysine & Minerals",
      description: "Overcomes oxidative stress, scavenges free radicals, boosts the immune system, and minimizes risks of post-surgery infections.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "MYLYCO-Q10",
      category: "Cardiovascular Support",
      composition: "CoQ10 + Selenium + L-Carnitine + Lycopene",
      description: "Nurture's treatment for reducing the risk of pre-eclampsia by nearly 50%. Improves lipid profiles, microcirculation, and heart health.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "CORBIFER-XT",
      category: "Haematinic",
      composition: "Ferrous Ascorbate + Folic Acid + Vit B12 + L-Lysine",
      description: "Advanced supplement for treating and preventing iron deficiency anemia, malnutrition, and general post-illness debility.",
      icon: <Pill className="w-8 h-8 text-brand" />
    },
    {
      title: "LEVORISE-OZ",
      category: "Antibiotic",
      composition: "Levofloxacin 125mg + Ornidazole 125mg",
      description: "A powerful, speedy combination acting effectively against mixed infections, amoebic dysentery, and infectious diarrhoea.",
      icon: <FlaskConical className="w-8 h-8 text-brand" />
    },
    {
      title: "AVARAB-DSR",
      category: "Gastro Care",
      composition: "Rabeprazole (EC) 20mg + Domperidone (SR) 30mg",
      description: "Rapid first-day control of acidity. Superior prokinetic & antiemetic functioning for GERD, nausea, and reflux esophagitis.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "APTIROZ",
      category: "Appetite Stimulant",
      composition: "Cyproheptadine + Multivitamins + Zinc",
      description: "Evokes appetite, supports metabolism, and boosts healthy weight gain. Tailored for anorexia and post-illness convalescence.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "SHERISE-DS",
      category: "Women's Health",
      composition: "Ashoka + Dasmool + Lodhra & Herbal Extracts",
      description: "A comprehensive beauty restorative and uterine tonic. Corrects irregular cycles, leucorrhea, and secondary sterility.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "APLATIRISE",
      category: "Immune Booster",
      composition: "Carica Papaya + Giloye + Vitamin E + Goat Milk",
      description: "Stimulates platelet production and combats oxidative damage. The perfect natural defender against Dengue, Malaria, and viral fevers.",
      icon: <Pill className="w-8 h-8 text-brand" />
    }
  ];

  return (
    <div className="min-h-screen bg-paper font-sans text-ink scroll-smooth selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-stone py-4' : 'bg-paper/95 backdrop-blur-sm py-6 border-b border-stone/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-3">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tighter text-brand uppercase">
                Avarise Lifescience
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] font-semibold text-ink uppercase tracking-widest hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="border border-stone hover:border-brand text-ink hover:text-brand px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition-colors bg-white shadow-sm hover:shadow-none"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-ink border border-stone bg-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone overflow-hidden"
            >
              <div className="px-6 py-6 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[12px] font-semibold text-ink uppercase tracking-widest hover:text-brand"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper border-b border-stone overflow-hidden">
        {/* Subtle background split block for editorial depth */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-light border-l border-stone hidden lg:block z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl py-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-brand"></div>
                <span className="text-[10px] uppercase tracking-[4px] text-brand font-bold">
                  Healthcare Excellence
                </span>
              </div>
              
              <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[76px] font-bold text-ink leading-[1] tracking-[-2px] mb-8">
                Precision in <br />
                <span className="italic text-brand font-normal leading-[1.1]">Every Formula.</span>
              </h1>
              
              <p className="text-base sm:text-[18px] text-muted mb-12 max-w-lg leading-[1.7]">
                Avarise Lifescience PVT LTD is dedicated to enhancing human health through high-efficacy pharmaceutical solutions. We specialize in pain management, nutrition, and gastrointestinal care.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <a 
                  href="#products" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white bg-ink hover:bg-brand transition-colors duration-300 border border-ink hover:border-brand"
                >
                  Explore Products 
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-3 text-[12px] font-medium text-muted">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-stone bg-white shadow-sm">
                    <Activity className="w-4 h-4 text-brand" />
                  </div>
                  <span>16+ Premium<br/>Formulations</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content / Aesthetic Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden md:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-md ml-auto border border-stone bg-white p-2 shadow-2xl z-10 rotate-1 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Pharmaceutical precision" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Stats Overlay - Editorial touch */}
                <div className="absolute top-8 -left-8 bg-ink border border-stone p-5 text-white shadow-xl shadow-ink/10">
                    <p className="text-[10px] uppercase tracking-[2px] opacity-70 mb-1">Quality Assured</p>
                    <p className="font-serif text-3xl font-bold">100%</p>
                </div>
              </div>

              {/* Floating Strategic Focus Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 left-4 lg:-left-12 bg-white border border-stone shadow-xl p-5 sm:p-6 z-20 max-w-sm flex items-start gap-5 group hover:border-brand transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-paper border border-stone flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-1">Primary Strategic Focus</h4>
                  <p className="text-[20px] font-serif font-bold text-ink leading-tight mb-2">Uttar Pradesh, India</p>
                  <p className="text-[12px] text-muted leading-snug">Delivering reliable healthcare where it matters most.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white border-b border-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] border border-stone p-2 bg-paper">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern laboratory" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pt-8"
            >
              <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-6">
                Corporate Overview
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-8">About Avarise Lifescience</h2>
              <div className="space-y-6 text-[16px] text-muted leading-[1.6]">
                <p>
                  At <strong className="text-ink font-semibold">Avarise Lifescience PVT LTD.</strong>, we are committed to improving health outcomes by providing top-tier pharmaceutical products. 
                </p>
                <p>
                  With a strong strategic focus on the vibrant state of Uttar Pradesh, India, our goal is to bridge the gap between quality healthcare and accessibility. From vital iron supplements to effective pain management solutions, our diverse portfolio is manufactured under stringent quality standards.
                </p>
                <p>
                  Whether you are a healthcare professional seeking reliable treatments for your patients, or an individual looking for dependable health solutions, Avarise Lifescience stands by your side.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone pt-8">
                <div>
                  <h4 className="font-serif text-5xl font-bold text-brand tracking-tighter mb-2">100+</h4>
                  <p className="text-muted font-bold text-[10px] uppercase tracking-[2px]">Healthcare Partners</p>
                </div>
                <div>
                  <h4 className="font-serif text-5xl font-bold text-brand tracking-tighter mb-2">100%</h4>
                  <p className="text-muted font-bold text-[10px] uppercase tracking-[2px]">Quality Assured</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 bg-paper border-b border-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-4">
              Our Portfolio
            </span>
            <h2 className="font-serif text-4xl font-bold text-ink tracking-tight">Medical Focus Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
                className="bg-white border border-stone p-8 flex flex-col items-start hover:border-brand transition-colors duration-300 group"
              >
                <div className="mb-8 p-3 border border-stone bg-paper text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  {product.icon}
                </div>
                <div className="w-full">
                  <div className="text-[10px] text-muted uppercase tracking-[1px] mb-2 font-bold">{idx < 9 ? `0${idx + 1}` : idx + 1} // {product.category}</div>
                  <h3 className="font-serif text-[22px] font-bold text-ink mb-1">{product.title}</h3>
                  <p className="text-[11px] font-semibold text-brand mb-3 uppercase tracking-wide leading-snug">{product.composition}</p>
                  <p className="text-[13px] text-muted leading-[1.6]">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border border-stone flex flex-col lg:flex-row bg-paper">
            
            <div className="p-10 sm:p-16 lg:p-20 flex-1 border-b lg:border-b-0 lg:border-r border-stone bg-light">
              <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-6">
                Connect Directly
              </span>
              <h2 className="font-serif text-4xl sm:text-[48px] font-bold text-ink tracking-tight mb-6">Get in Touch</h2>
              <p className="text-muted text-[16px] mb-12 leading-[1.6] max-w-md">
                Have questions about our products or want to partner with us? Our professional team is ready to assist you.
              </p>
              
              <div className="space-y-10">
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-2">Direct Line</h4>
                  <div className="text-[16px] text-ink font-medium space-y-2">
                    <a href="tel:+919415667380" className="hover:text-brand transition-colors block">+91 94156 67380</a>
                    <a href="tel:+919918881816" className="hover:text-brand transition-colors block">+91 99188 81816</a>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-2">Email Support</h4>
                  <p className="text-[16px] text-ink font-medium">
                    <a href="mailto:avarise.lifesciences@gmail.com" className="hover:text-brand transition-colors">
                      avarise.lifesciences@gmail.com
                    </a>
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-2">Corporate Office</h4>
                  <p className="text-[16px] text-ink font-medium">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="p-10 sm:p-16 flex-1 flex flex-col justify-center bg-white">
              <form className="w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <h3 className="font-serif text-2xl font-bold text-ink mb-10 pb-4 border-b border-stone">Send a Message</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[14px]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[14px]" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none text-[14px]" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-ink hover:bg-brand text-white font-bold text-[11px] uppercase tracking-widest transition-colors mt-4">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink pt-16 pb-8 text-white border-t border-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="font-serif font-bold text-[24px] tracking-tight text-white uppercase">
                  Avarise Lifescience
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6 text-[14px] leading-[1.6]">
                Dedicated to improving quality of life through innovative, safe, and effective pharmaceutical solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[2px] mb-6">Directory</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-[13px] hover:text-white text-gray-300 transition-colors">The Science</a></li>
                <li><a href="#about" className="text-[13px] hover:text-white text-gray-300 transition-colors">Our Ethos</a></li>
                <li><a href="#products" className="text-[13px] hover:text-white text-gray-300 transition-colors">Formulations</a></li>
                <li><a href="#contact" className="text-[13px] hover:text-white text-gray-300 transition-colors">Professionals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[2px] mb-6">Legal Focus</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] hover:text-white text-gray-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[13px] hover:text-white text-gray-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[13px] hover:text-white text-gray-300 transition-colors">Regulatory Framework</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] uppercase tracking-wider text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} AVARISE LIFESCIENCE PVT LTD. All rights reserved.
            </p>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 text-center md:text-right">
              Registered in Uttar Pradesh.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919415667380"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
        <span className="absolute right-full mr-4 bg-ink text-white text-[11px] font-bold uppercase tracking-widest py-3 px-5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
          Direct Support line
        </span>
      </a>
    </div>
  );
}

