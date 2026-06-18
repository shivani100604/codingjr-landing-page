"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  Code2,
  Brain,
  Smartphone,
  ArrowRight,
  Sparkles,
  Database,
  Layers
} from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Connecting to secure server...');
    
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage('✨ Welcome! Your email is safely secured in MongoDB.');
        setEmail('');
      } else {
        setMessage(data.error || 'Connection refused by database.');
      }
    } catch (error) {
      setMessage('Network error. Database is unreachable.');
    } finally {
      setLoading(false);
    }
  };

  const programs = [
    {
      title: "Full Stack Development",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      desc: "Architect modern web architecture using React, Next.js, and robust REST/GraphQL APIs.",
      tag: "Most Popular"
    },
    {
      title: "AI & Automation",
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      desc: "Integrate large language models, clean custom neural nodes, and automate real workflows.",
      tag: "Trending"
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      desc: "Compile cross-platform natively optimized mobile layouts with highly fluid and polished design.",
      tag: "New"
    },
  ];

  const projects = [
    { title: "Expense Tracker", tech: "React + Firebase", type: "FinTech" },
    { title: "AI Resume Analyzer", tech: "Next.js + OpenAI", type: "AI/ML" },
    { title: "Portfolio Website", tech: "Next.js + Tailwind", type: "UI/UX" },
    { title: "Task Manager App", tech: "MongoDB + Express", type: "Full Stack" },
  ];

  const stories = [
    {
      name: "Riya Gangwar",
      role: "Frontend Engineer Intern",
      text: "The structural absolute focus on projects rather than syntax boilerplate helped me build concrete confidence."
    },
    {
      name: "Aditya Singh",
      role: "Junior Developer",
      text: "Breaking free from the tutorial purgatory loop and deploying commercial production code changed everything."
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Associate",
      text: "The database mapping and serverless api logic flow gave me the technical edge during standard engineering interviews."
    },
  ];

  return (
    <main className="bg-[#030712] text-slate-100 overflow-x-hidden min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ADVANCED GLOW BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_50%)]" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-[#030712]/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-black text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              C
            </div>
            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              codingjr
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {["about", "programs", "projects", "stories"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-cyan-400 transition-colors duration-300 relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a href="#join-section" className="hidden md:flex items-center gap-1.5 px-4 py-2 border border-slate-800 rounded-full text-xs font-semibold bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 group">
            Join Sandbox
            <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden px-6 pb-6 flex flex-col gap-4 text-slate-400 text-sm bg-[#030712] border-b border-slate-900">
            {["about", "programs", "projects", "stories"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="capitalize font-medium py-1">{item}</a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 pt-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Hero Box */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.03)] animate-pulse">
              <Sparkles size={12} /> Full Stack Architecture Optimized
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Syntax is Cheap. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                Production is Absolute.
              </span>
            </h1>

            <p className="text-slate-400 mt-6 text-base leading-relaxed max-w-lg">
              Escape code loops. Learn schema mapping, environment scaling, asynchronous serverless runtime handlers, and cloud system deployment.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#join-section" className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(34,211,238,0.2)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.35)] transition-all transform hover:-translate-y-0.5">
                Initialize App
              </a>
              <a href="#programs" className="px-6 py-3.5 rounded-full border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900/50 hover:border-slate-700 transition-all text-center">
                Review Schema
              </a>
            </div>

            {/* Micro Stats Counter */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-900">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">10K+</h2>
                <p className="text-slate-500 text-xs mt-1">Active Sandbox</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">50+</h2>
                <p className="text-slate-500 text-xs mt-1">Cloud Mentors</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">100+</h2>
                <p className="text-slate-500 text-xs mt-1">System Repos</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Box (Fixed Image Source) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-3xl blur-xl -z-10" />
            <div className="border border-slate-800 p-2 rounded-3xl bg-slate-900/30 backdrop-blur-md shadow-2xl overflow-hidden">
              <Image
               src="https://unsplash.com"
               alt="students collaborating"
               width={700}
               height={500}
               priority
               className="object-cover rounded-2xl w-full h-auto opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-28 border-t border-slate-900">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">Core Paradigm</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Why Tutorial Loops Fail.</h2>
                    </div> {/* md:col-span-1 */}
          
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm">
              <div className="text-cyan-400 mb-4"><Database size={20} /></div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">01 / Complex Ecosystem Matrix</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Don't just write templates. Learn connection pool handlers, schema caching, and asynchronous server states right inside clean code branches.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm">
              <div className="text-purple-400 mb-4"><Layers size={20} /></div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">02 / Automated Pipelines</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every feature engineered gets immediately routed via production grade Git commits directly to serverless Vercel host infrastructures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS TRACK SECTION */}
      <section id="programs" className="max-w-6xl mx-auto px-6 py-24 relative">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">Architecture Matrix</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Immersive Technical Tracks</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">Production scale frameworks structured specifically to phase junior engineers out of static syntax boilerplate loops into fully integrated system layouts.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -6, borderColor: "rgba(34,211,238,0.2)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border border-slate-800 p-8 rounded-2xl bg-gradient-to-b from-slate-900/40 to-transparent backdrop-blur-md relative group transition-all duration-300"
            >
              <span className="absolute top-4 right-4 bg-slate-900 text-slate-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-800">
                {p.tag}
              </span>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-purple-400 text-xs font-mono tracking-widest uppercase mb-3">Production Shipped</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Engineered Systems Repository</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-slate-800 p-6 rounded-2xl bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all group duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors mt-1" />
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800/60">
                  {p.type}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1 text-slate-200 group-hover:text-white transition-colors">{p.title}</h3>
              <p className="text-cyan-400/90 text-xs font-mono tracking-wider">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES ALUMNI SECTION */}
      <section id="stories" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 relative">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">System Logs</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Alumni Sandbox Node Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="border border-slate-800 p-8 rounded-2xl bg-gradient-to-br from-slate-900/30 to-transparent italic text-slate-300 relative flex flex-col justify-between">
              <span className="text-6xl text-white/[0.02] font-serif absolute top-2 left-2 pointer-events-none">“</span>
              <p className="mb-6 text-sm leading-relaxed relative z-10 text-slate-400">"{s.text}"</p>
              
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-900 not-italic">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-cyan-400">
                  {s.name}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-200 tracking-wide">{s.name}</p>
                  <p className="text-[10px] text-slate-500 font-mono tracking-tight mt-0.5">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MERN DB REGISTRATION & PROFESSIONAL ECOSYSTEM FOOTER */}
      <section id="join-section" className="w-full py-28 border-t border-slate-900 bg-gradient-to-b from-transparent to-black/40 relative">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">Advance Beyond Manual Boilerplates.</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-md mx-auto">Commit production code schemas under cloud-native industrial parameters. Connect sandbox systems instantly.</p>
          
          {}
          <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto w-full">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your professional email" 
              className="w-full sm:flex-1 p-3.5 px-6 rounded-full bg-[#090d16] text-white border border-slate-800 outline-none text-xs font-semibold focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600 text-center sm:text-left"
              required 
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "Syncing..." : "Join Sandbox"}
            </button>
          </form>
          
          {message && (
            <motion.p 
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs mt-4 text-cyan-400 font-mono tracking-wide px-4 py-2 bg-cyan-950/20 rounded-lg inline-block border border-cyan-900/30"
            >
              {message}
            </motion.p>
          )}

          {}
          <div className="mt-28 pt-12 border-t border-slate-800/60 bg-gradient-to-b from-transparent to-[#080d1a] rounded-3xl p-8 border border-white/[0.01] shadow-[0_-15px_40px_rgba(34,211,238,0.01)]">
            <h3 className="text-base font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 mb-2">
              Connect With The Architect
            </h3>
            <p className="text-slate-400 text-[11px] max-w-xs mx-auto mb-8 leading-relaxed">
              Review my open-source architectural frameworks, live ecosystem matrix, or stream workflows across corporate channels.
            </p>

            {}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-sm mx-auto">
              <a 
                href="https://github.com/shivani100604" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold rounded-full shadow-[0_4px_15px_rgba(34,211,238,0.15)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.3)] hover:scale-[1.03] transition-all duration-300 text-[11px] uppercase tracking-widest text-center"
              >
                GitHub Profile
                              </a>
              <a 
                href="https://linkedin.com/in/shivani-gangwar-3b15b7327" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 border border-slate-800 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 bg-slate-900/40 rounded-full hover:scale-[1.03] transition-all duration-300 text-[11px] uppercase tracking-widest text-center"
              >
                LinkedIn Matrix
              </a>
            </div>

            {}
            <div className="mt-10 pt-6 border-t border-slate-900 max-w-xs mx-auto flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Shivani Gangwar</span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">
                Full-Stack MERN Architect
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="text-center py-8 text-[10px] text-slate-600 border-t border-slate-900 bg-[#02040a] tracking-widest font-mono">
        codingjr © 2026 | Encapsulated via <span className="text-cyan-500/60 font-medium">Next.js 15</span> • <span className="text-blue-500/60 font-medium">TypeScript</span> • <span className="text-emerald-500/60 font-medium">MongoDB Atlas</span>
      </footer>

    </main>
  );
}

