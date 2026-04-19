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
  FlaskConical,
  Microscope,
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // WhatsApp Modal State
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [waForm, setWaForm] = useState({ name: '', phone: '', message: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Website Inquiry*\n\n*Name:* ${waForm.name}\n*Phone:* ${waForm.phone}\n*Message:* ${waForm.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919415667380?text=${encodedText}`, '_blank');
    setIsWhatsAppModalOpen(false);
    setWaForm({ name: '', phone: '', message: '' });
  };

  // Active Category State
  const [activeCategory, setActiveCategory] = useState('All');

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
      category: "Pain Management",
      composition: "Aceclofenac 100mg + Paracetamol 325mg",
      description: "Potent & trusted formulation for synergistic action against sprains, arthritis, ENT inflammation, and post-operative pain. Lower risk of GI bleeding.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-MF",
      category: "Pain Management",
      composition: "Paracetamol 250mg + Mefenamic Acid 100mg",
      description: "Fast onset and long duration (up to 8 hrs) control of pain and fever. Safe and effective, particularly suited for pediatric patients.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-SP",
      category: "Pain Management",
      composition: "Aceclofenac + Paracetamol + Serratiopeptidase",
      description: "Reduces swelling and improves microcirculation with anti-oedemic and fibrinolytic activity. Ideal for rheumatoid arthritis and sports injuries.",
      icon: <Pill className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-TH",
      category: "Muscle & Spasm",
      composition: "Aceclofenac 100mg + Thiocolchicoside 4mg",
      description: "Provides enhanced, faster mobility in muscular spasms, acute low back pain, and neuromuscular conditions with a wide safety margin.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "AVAFEN-DV",
      category: "Muscle & Spasm",
      composition: "Aceclofenac 100mg + Drotaverine 80mg",
      description: "Perfect for spasmodic pain, renal colic, and spasmodic dysmenorrhea. Accelerates relief smoothly with better GI tolerability.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "MONTIRISE-L",
      category: "Respiratory & Allergy",
      composition: "Levocetirizine HCL + Montelukast",
      description: "Rapid onset relief over 24 hours against seasonal allergic rhinitis and asthma-associated allergies. Exerts 20x better receptor affinity.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "GAELICTUS-LS",
      category: "Respiratory & Allergy",
      composition: "Levosalbutamol + Ambroxol + Guaiphenesin",
      description: "Trusted bronchodilator, mucolytic, and expectorant to combat heavy chest congestion, bronchitis, wheezing, and COPD.",
      icon: <FlaskConical className="w-8 h-8 text-brand" />
    },
    {
      title: "AVALIV-DS",
      category: "Gastro & Hepato",
      composition: "Silymarin + Picorrhiza Kurroa + Natural Extracts",
      description: "Regenerator and protectant against hepatotoxins. Effectively treats acute hepatitis, fatty liver, jaundice, and drug-induced toxicity.",
      icon: <ShieldCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "MYLYCO-GOLD",
      category: "Vitamins & Nutrition",
      composition: "Lycopene, Multivitamins, L-Lysine & Minerals",
      description: "Overcomes oxidative stress, scavenges free radicals, boosts the immune system, and minimizes risks of post-surgery infections.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "MYLYCO-Q10",
      category: "Cardiovascular",
      composition: "CoQ10 + Selenium + L-Carnitine + Lycopene",
      description: "Nurture's treatment for reducing the risk of pre-eclampsia by nearly 50%. Improves lipid profiles, microcirculation, and heart health.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "CORBIFER-XT",
      category: "Vitamins & Nutrition",
      composition: "Ferrous Ascorbate + Folic Acid + Vit B12 + L-Lysine",
      description: "Advanced supplement for treating and preventing iron deficiency anemia, malnutrition, and general post-illness debility.",
      icon: <Pill className="w-8 h-8 text-brand" />
    },
    {
      title: "LEVORISE-OZ",
      category: "Anti-Infective",
      composition: "Levofloxacin 125mg + Ornidazole 125mg",
      description: "A powerful, speedy combination acting effectively against mixed infections, amoebic dysentery, and infectious diarrhoea.",
      icon: <FlaskConical className="w-8 h-8 text-brand" />
    },
    {
      title: "AVARAB-DSR",
      category: "Gastro & Hepato",
      composition: "Rabeprazole (EC) 20mg + Domperidone (SR) 30mg",
      description: "Rapid first-day control of acidity. Superior prokinetic & antiemetic functioning for GERD, nausea, and reflux esophagitis.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "APTIROZ",
      category: "Vitamins & Nutrition",
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
      category: "Anti-Infective",
      composition: "Carica Papaya + Giloye + Vitamin E + Goat Milk",
      description: "Stimulates platelet production and combats oxidative damage. The perfect natural defender against Dengue, Malaria, and viral fevers.",
      icon: <Pill className="w-8 h-8 text-brand" />
    }
  ];

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink scroll-smooth selection:bg-brand selection:text-white pt-[36px]">
      
      {/* Eyebrow / Top Bar */}
      <div className="fixed top-0 w-full h-[36px] bg-ink text-white z-[60] flex items-center justify-between px-6 lg:px-12 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-2">
            <ShieldCheck className="w-3 h-3 text-brand" /> ISO 9001:2015 Certified
          </span>
          <span className="sm:border-l border-white/20 sm:pl-4 inline-flex items-center gap-2 text-white/80">
            <MapPin className="w-3 h-3 text-brand" /> Serving Uttar Pradesh
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="mailto:avarise.lifesciences@gmail.com" className="hover:text-brand transition-colors inline-flex items-center gap-2">
            <Mail className="w-3 h-3" /> avarise.lifesciences@gmail.com
          </a>
          <a href="tel:+919415667380" className="hover:text-brand transition-colors inline-flex items-center gap-2 text-brand">
            <Phone className="w-3 h-3" /> +91 94156 67380
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[36px] w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-transparent py-4 shadow-xl shadow-stone/20' : 'bg-white/95 backdrop-blur-md py-6 border-b border-stone/50'}`}>
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
                className="bg-ink text-white hover:bg-brand px-7 py-3 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
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

      {/* Why Choose Us & Quality Assurance Section */}
      <section className="py-24 bg-white border-b border-stone relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-light border-l border-stone opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Quality Assurance Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 flex flex-col md:flex-row items-center border border-stone bg-ink overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12 lg:p-16 flex-1 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-brand" />
                <span className="text-[11px] uppercase tracking-[3px] font-bold text-white/80">Compliance & Trust</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Assuring Quality at <br className="hidden md:block"/> Every Lifecycle Stage.</h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                Strict adherence to WHO & GMP compliance guidelines. Our facilities enforce rigorous testing and multi-stage inspections, guaranteeing maximum efficacy and patient safety across all 16 registered formulations.
              </p>
              
              <ul className="space-y-3">
                {['WHO-GMP Compliant Facilities', 'Stringent Quality Control (QC)', 'Temperature-Controlled Logistics', 'Batch-to-Batch Consistency'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    <span className="text-sm font-medium text-white/90 tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block w-2/5 aspect-square relative border-l border-white/10 shrink-0 right-0">
               <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" 
                  alt="Quality Lab Focus" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/30"></div>
            </div>
          </motion.div>

          {/* Why Choose Us Pillars */}
          <div className="text-center md:text-left mb-16">
            <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-4">
              Our Pillars
            </span>
            <h2 className="font-serif text-4xl font-bold text-ink tracking-tight">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-paper border border-stone p-10 hover:border-brand transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-white border border-stone flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-4">Quality Assurance</h3>
              <p className="text-[14px] text-muted leading-relaxed">
                We refuse to compromise on health. Every product released by Avarise passes comprehensive analytical and microbiological testing to exceed industry benchmarks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-paper border border-stone p-10 hover:border-brand transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-white border border-stone flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                <Microscope className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-4">Research & Development</h3>
              <p className="text-[14px] text-muted leading-relaxed">
                Driven by continuous innovation, our R&D focus is optimizing existing formulas, like our potent Aceclofenac blends, to elevate patient outcomes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-paper border border-stone p-10 hover:border-brand transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-white border border-stone flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                <Users className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-4">Customer Centricity</h3>
              <p className="text-[14px] text-muted leading-relaxed">
                Our operations align purely with distributor and clinical requirements. We prioritize swift supply chains and constant, transparent communication.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 bg-paper border-b border-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16">
            <div className="shrink-0">
              <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-4">
                Our Portfolio
              </span>
              <h2 className="font-serif text-4xl font-bold text-ink tracking-tight">Medical Focus Areas</h2>
            </div>
            
            {/* Interactive Product Filters */}
            <div className="flex flex-wrap gap-2 xl:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[1px] transition-all duration-300 border focus:outline-none ${
                    activeCategory === category 
                      ? 'bg-ink text-white border-ink shadow-sm' 
                      : 'bg-white text-muted border-stone hover:border-brand hover:text-brand hover:shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-stone p-8 flex flex-col items-start hover:border-brand transition-colors duration-300 group"
                >
                  <div className="mb-8 p-3 border border-stone bg-paper text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    {product.icon}
                  </div>
                  <div className="w-full">
                    <div className="text-[10px] text-muted uppercase tracking-[1px] mb-2 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {idx < 9 ? `0${idx + 1}` : idx + 1} // {product.category}
                    </div>
                    <h3 className="font-serif text-[22px] font-bold text-ink mb-1">{product.title}</h3>
                    <p className="text-[11px] font-semibold text-brand mb-3 uppercase tracking-wide leading-snug">{product.composition}</p>
                    <p className="text-[13px] text-muted leading-[1.6]">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Partnership & Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Become a Partner Callout */}
          <div className="mb-20 bg-ink text-white pr-0 lg:pr-12 border border-ink flex flex-col lg:flex-row shadow-2xl relative overflow-hidden group">
            {/* Background design artifact */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors duration-700 pointer-events-none"></div>
            
            <div className="p-10 sm:p-14 lg:p-16 flex-1 relative z-10">
              <span className="inline-block px-3 py-1 bg-white/10 text-white border border-white/20 text-[10px] uppercase tracking-[3px] font-bold mb-6">
                B2B Distribution
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Become a Partner
              </h2>
              <p className="text-white/70 text-[15px] sm:text-[18px] mb-8 leading-[1.7] max-w-xl">
                Avarise Lifescience operates a trusted B2B pharmaceutical distribution network across Uttar Pradesh. We supply our 16 highly-specialized medical products directly to vetted healthcare channels.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand">
                    <FlaskConical className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-[14px] font-bold tracking-wide mt-2">Chemists & Retail</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed uppercase tracking-wider">Direct supply chains</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-[14px] font-bold tracking-wide mt-2">Clinics & Hospitals</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed uppercase tracking-wider">Clinical formulations</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand">
                    <HeartHandshake className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-[14px] font-bold tracking-wide mt-2">Stockists/Distributors</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed uppercase tracking-wider">Wholesale networks</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-end flex-none w-1/4 relative z-10 shrink-0">
               <ArrowRight className="w-24 h-24 text-white/10 group-hover:text-brand/40 group-hover:-translate-x-4 transition-all duration-500" />
            </div>
          </div>

          <div className="border border-stone flex flex-col lg:flex-row bg-paper">
            
            <div className="p-10 sm:p-16 lg:p-20 flex-1 border-b lg:border-b-0 lg:border-r border-stone bg-light">
              <span className="block text-[11px] uppercase tracking-[3px] text-brand font-bold mb-6">
                Connect Directly
              </span>
              <h2 className="font-serif text-4xl sm:text-[48px] font-bold text-ink tracking-tight mb-6">Get in Touch</h2>
              <p className="text-muted text-[16px] mb-12 leading-[1.6] max-w-md">
                Have questions about our portfolio or want to inquire about B2B distribution? Our professional team is ready to assist you.
              </p>
              
              <div className="space-y-8">
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-3">Direct Line</h4>
                  <div className="text-[16px] text-ink font-medium space-y-3">
                    <a href="tel:+919415667380" className="group flex items-center gap-3 w-fit hover:text-brand transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-white border border-stone flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shadow-sm">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">+91 94156 67380</span>
                    </a>
                    <a href="tel:+919918881816" className="group flex items-center gap-3 w-fit hover:text-brand transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-white border border-stone flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shadow-sm">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">+91 99188 81816</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-3">Email Support</h4>
                  <div className="text-[16px] text-ink font-medium">
                    <a href="mailto:avarise.lifesciences@gmail.com" className="group flex items-center gap-3 w-fit hover:text-brand transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-white border border-stone flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 shadow-sm">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">avarise.lifesciences@gmail.com</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-[2px] text-muted font-bold mb-3">Corporate Office</h4>
                  <div className="group flex items-center gap-3 w-fit">
                    <div className="w-10 h-10 rounded-full bg-white border border-stone flex items-center justify-center shadow-sm">
                      <MapPin className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-[16px] text-ink font-medium">Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10 sm:p-16 flex-1 flex flex-col justify-center bg-white">
              <form className="w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <h3 className="font-serif text-2xl font-bold text-ink mb-10 pb-4 border-b border-stone">Partnership Inquiry</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Full Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[14px]" placeholder="John Doe" />
                    </div>
                    <div>
                       <label htmlFor="business" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Business Type</label>
                       <select id="business" className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[14px] text-ink appearance-none">
                         <option>Chemist / Pharmacy</option>
                         <option>Clinic / Hospital</option>
                         <option>Distributor</option>
                         <option>Other</option>
                       </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Email or Phone</label>
                    <input type="text" id="contact_method" className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all text-[14px]" placeholder="Contact details" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-paper border border-stone focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none text-[14px]" placeholder="Tell us about your distribution needs..."></textarea>
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-4 sm:left-8 z-50 flex flex-col gap-4">
        {/* Floating Call Button */}
        <a
          href="tel:+919415667380"
          className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand/90 transition-all duration-300 group outline-none border-none cursor-pointer"
          aria-label="Call Directly"
        >
          <Phone className="w-7 h-7" />
          <span className="absolute left-full ml-4 bg-ink text-white text-[11px] font-bold uppercase tracking-widest py-3 px-5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            Direct Line: 9415667380
          </span>
        </a>
      </div>

      <div className="fixed bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-4">
        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setIsWhatsAppModalOpen(true)}
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 group outline-none border-none cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
          <span className="absolute right-full mr-4 bg-ink text-white text-[11px] font-bold uppercase tracking-widest py-3 px-5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            Direct Support line
          </span>
        </button>
      </div>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isWhatsAppModalOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-4 sm:right-8 z-[60] w-[calc(100vw-32px)] sm:w-[360px] bg-white rounded-3xl shadow-[0_12px_48px_-12px_rgba(0,0,0,0.25)] overflow-hidden font-sans border border-gray-100"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-br from-[#128C7E] to-[#25D366] p-6 pb-8 text-white relative">
              <button 
                onClick={() => setIsWhatsAppModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner shrink-0">
                  <FaWhatsapp size={32} className="text-white drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-tight mb-1.5">Avarise Lifescience</h3>
                  <div className="flex items-center gap-2 opacity-95">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-100 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-50 shadow-sm"></span>
                    </span>
                    <p className="text-[12px] font-medium tracking-wide">Typically replies instantly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-[#FAFAFA] relative">
              {/* Overlapping wave/curve aesthetic */}
              <div className="absolute top-[-16px] left-0 w-full h-4 bg-[#FAFAFA] rounded-t-2xl"></div>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={waForm.name}
                    onChange={(e) => setWaForm({...waForm, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 outline-none transition-all text-sm bg-white shadow-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={waForm.phone}
                    onChange={(e) => setWaForm({...waForm, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 outline-none transition-all text-sm bg-white shadow-sm"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Your Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    value={waForm.message}
                    onChange={(e) => setWaForm({...waForm, message: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 outline-none transition-all resize-none text-sm bg-white shadow-sm h-24"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#25D366] text-white text-[14px] font-bold rounded-xl hover:bg-[#128C7E] transition-all duration-300 flex justify-center items-center gap-2 shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Start Chat <span className="ml-1">💬</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

