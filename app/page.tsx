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
} from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Processing...');
    
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage('Success! Saved to MongoDB.');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Server connection error.');
    }
  };

  const programs = [
    {
      title: "Full Stack Development",
      icon: <Code2 size={24} />,
      desc: "Learn React, Next.js, APIs and build real-world web apps.",
    },
    {
      title: "AI & Automation",
      icon: <Brain size={24} />,
      desc: "Understand how AI tools work and build practical projects.",
    },
    {
      title: "App Development",
      icon: <Smartphone size={24} />,
      desc: "Create mobile apps with clean UI and modern features.",
    },
  ];

  const projects = [
    {
      title: "Expense Tracker",
      tech: "React + Firebase",
    },
    {
      title: "AI Resume Analyzer",
      tech: "Next.js + OpenAI",
    },
    {
      title: "Portfolio Website",
      tech: "Next.js + Tailwind",
    },
    {
      title: "Task Manager App",
      tech: "MongoDB + Express",
    },
  ];

  const stories = [
    {
      name: "Riya",
      text: "I started with basic HTML and now I can build complete frontend projects.",
    },
    {
      name: "Aditya",
      text: "The practical approach helped me understand development much better.",
    },
    {
      name: "Priya",
      text: "Building projects gave me confidence to apply for internships.",
    },
  ];

  return (
    <main className="bg-[#0b1120] text-white overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_35%)]"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b1120]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-wide">codingjr</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-all duration-300">About</a>
            <a href="#programs" className="hover:text-cyan-400 transition-all duration-300">Programs</a>
            <a href="#projects" className="hover:text-cyan-400 transition-all duration-300">Projects</a>
            <a href="#stories" className="hover:text-cyan-400 transition-all duration-300">Students</a>
          </div>

          <a href="#join-section" className="hidden md:block border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all duration-300">
            Join Community
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-slate-300 text-sm bg-[#0b1120]">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#programs" onClick={() => setOpen(false)}>Programs</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#stories" onClick={() => setOpen(false)}>Students</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-cyan-400 text-sm mb-4">Practical learning for students</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Learning to code is hard.<br />We try to make it practical.
            </h1>
            <p className="text-slate-400 mt-6 leading-7 max-w-lg">
              Instead of only watching tutorials, students work on projects, collaborate, and learn how development actually works in real life.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#join-section" className="bg-cyan-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all duration-300 inline-block text-center">
                Start Learning
              </a>
              <a href="#programs" className="border border-white/10 px-6 py-3 rounded-full text-sm hover:bg-white/5 transition-all duration-300 inline-block text-center">
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 flex-wrap">
              <div><h2 className="text-2xl font-semibold">10K+</h2><p className="text-slate-500 text-sm">students</p></div>
              <div><h2 className="text-2xl font-semibold">50+</h2><p className="text-slate-500 text-sm">mentors</p></div>
              <div><h2 className="text-2xl font-semibold">100+</h2><p className="text-slate-500 text-sm">projects</p></div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="border border-white/10 rounded-3xl shadow-xl overflow-hidden">
              <Image
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
               alt="students"
               width={700}
               height={500}
               priority
               style={{ width: "100%", height: "auto" }}
               className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-cyan-400 text-sm mb-3">Why we started</p>
          <h2 className="text-3xl font-semibold mb-6">Most students learn theory.<br />Very few actually build things.</h2>
          <p className="text-slate-400 leading-8">
            We noticed that many students complete courses but still struggle to create projects on their own. CodingJR focuses more on practical learning, collaboration, and project-based development.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-12">What students learn</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-2xl bg-white/5">
              <div className="text-cyan-400 mb-4">{p.icon}</div>
              <h3 className="text-xl font-medium mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-6">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-12">What students are building</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-white/5 p-6 rounded-2xl bg-white/[0.02]">
              <h3 className="font-medium text-lg mb-2">{p.title}</h3>
              <p className="text-cyan-400 text-xs font-mono">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-12">Student stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-2xl bg-white/5 italic text-slate-300">
              <p className="mb-4">"{s.text}"</p>
              <p className="text-cyan-400 text-sm font-medium not-italic">— {s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MERN INPUT SECTION */}
      <section id="join-section" className="w-full py-16 border-t border-white/10 bg-black/40">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Start building projects instead of just collecting certificates.</h2>
          <p className="text-slate-400 text-sm mb-6">Learn by building real things with mentorship and practical guidance.</p>
          
          {/* MERN MongoDB Form Input */}
          <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
                            className="w-full sm:w-64 p-3 rounded-full text-black border-none outline-none text-sm font-medium"
              required 
            />
            <button type="submit" className="w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-[1.03] transition-all">
              Join Now
            </button>
          </form>
          {message && <p className="text-xs mt-3 text-cyan-400 font-mono">{message}</p>}

          {/* प्रोफेशनल डेवलपर यूआई एलिमेंट (सभी जॉब्स के लिए सामान्यीकृत) */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-xs uppercase tracking-wider"
            >
              View GitHub Profile
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white/20 text-white font-bold rounded-full shadow-lg hover:bg-white/10 transition-all duration-300 text-xs uppercase tracking-wider"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="text-slate-500 text-xs mt-4 space-y-1">
            <p><strong>Developed By:</strong> Shivani Gangwar</p>
            <p><strong>Role:</strong> Full-Stack MERN Developer</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-xs text-slate-600 border-t border-white/5 bg-[#0b1120]">
        codingjr © 2026 | Built using Next.js, TypeScript, and MongoDB.
      </footer>

    </main>
  );
}
