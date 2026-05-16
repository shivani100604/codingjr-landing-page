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

          <h1 className="text-lg font-medium tracking-wide">
            codingjr
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">

            <a
              href="#about"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#programs"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Programs
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Projects
            </a>

            <a
              href="#stories"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Students
            </a>

          </div>

          <button className="hidden md:block border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all duration-300">
            Join Community
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-slate-300 text-sm bg-[#0b1120]">

            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#projects">Projects</a>
            <a href="#stories">Students</a>

          </div>
        )}

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-28">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <p className="text-cyan-400 text-sm mb-4">
              Practical learning for students
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">

              Learning to code is hard.
              <br />
              We try to make it practical.

            </h1>

            <p className="text-slate-400 mt-6 leading-7 max-w-lg">

              Instead of only watching tutorials, students work on projects,
              collaborate, and learn how development actually works in real life.

            </p>

            <div className="flex gap-4 mt-8 flex-wrap">

              <button className="bg-cyan-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all duration-300">
                Start Learning
              </button>

              <button className="border border-white/10 px-6 py-3 rounded-full text-sm hover:bg-white/5 transition-all duration-300">
                Explore Programs
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 flex-wrap">

              <div>
                <h2 className="text-2xl font-semibold">10K+</h2>
                <p className="text-slate-500 text-sm">
                  students
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">50+</h2>
                <p className="text-slate-500 text-sm">
                  mentors
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">100+</h2>
                <p className="text-slate-500 text-sm">
                  projects
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >


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
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <div className="max-w-3xl">

          <p className="text-cyan-400 text-sm mb-3">
            Why we started
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            Most students learn theory.
            <br />
            Very few actually build things.
          </h2>

          <p className="text-slate-400 leading-8">

            We noticed that many students complete courses but still struggle
            to create projects on their own. CodingJR focuses more on practical
            learning, collaboration, and project-based development.

          </p>

        </div>

      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="max-w-6xl mx-auto px-6 py-16"
      >

        <h2 className="text-3xl font-semibold mb-12">
          What students learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {programs.map((program, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >

              <div className="text-cyan-400 mb-4">
                {program.icon}
              </div>

              <h3 className="text-lg font-medium mb-2">
                {program.title}
              </h3>

              <p className="text-slate-400 text-sm leading-6">
                {program.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-3xl font-semibold mb-10">
          What students are building
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="border border-white/10 rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-300"
            >

              <h3 className="text-lg font-medium">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                {project.tech}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* STORIES */}
      <section
        id="stories"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-3xl font-semibold mb-10">
          Student stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {stories.map((story, index) => (

            <div
              key={index}
              className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >

              <p className="text-slate-300 leading-7 text-sm">
                "{story.text}"
              </p>

              <p className="text-cyan-400 text-sm mt-5">
                — {story.name}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="border border-white/10 rounded-3xl p-10 md:p-14 bg-white/[0.03]">

          <h2 className="text-3xl font-semibold max-w-2xl leading-tight">
            Start building projects instead of just collecting certificates.
          </h2>

          <p className="text-slate-400 mt-5 max-w-xl leading-7">
            Learn by building real things with mentorship and practical guidance.
          </p>

          <button className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all duration-300">
            Join Now
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-sm text-slate-500">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">

          <p>
            codingjr © 2026
          </p>

          <p>
            Built using Next.js and Tailwind CSS.
          </p>

        </div>

      </footer>

    </main>
  );
}