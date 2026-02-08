"use client";
import React from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-slate-300 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I’m always open to discussing new ideas, creative work, or
            opportunities.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span className="text-slate-300">yourmail@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <span className="text-slate-300">+91 00000 00000</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span className="text-slate-300">Maharashtra, India</span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 pt-6">
            <a
              href="#"
              className="p-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 transition"
            >
              <Github />
            </a>

            <a
              href="#"
              className="p-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 transition"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-slate-700"
        >
          <form className="space-y-5">
            <div>
              <label className="text-sm text-slate-300">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-xl font-semibold shadow-lg"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
