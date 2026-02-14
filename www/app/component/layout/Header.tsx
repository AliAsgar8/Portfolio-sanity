"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type NavigationItem = {
  _key: string;
  label: string;
  href: {
    href: string;
  };
};

export default function Header({
  logo,
  navigation,
}: {
  logo: string;
  navigation: NavigationItem[];
}) {
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHamburger(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* NORMAL HEADER */}
      <header className={`transition-all duration-300 `}>
        <nav className="flex justify-between items-center pt-5 mx-6 md:mx-20 pb-4 font-serif border-b border-dashed">
          <Image src={logo} width={50} height={20} alt="logo" />

          <div className="hidden md:flex gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item._key}
                href={item.href}
                className="relative text-sm uppercase tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* FLOATING HAMBURGER */}
      <AnimatePresence>
        {showHamburger && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(true)}
            className="fixed top-10 right-16 z-50 w-14 h-14 rounded-full bg-white shadow-xl border border-black/20 flex flex-col justify-center items-center gap-2"
          >
            <span className="w-7 h-1 bg-black rounded" />
            <span className="w-7 h-1 bg-black rounded" />
            <span className="w-7 h-1 bg-black rounded" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FULL SCREEN OVERLAY + CENTER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* DARK BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* CENTER ROUNDED PANEL */}
            <motion.div
              initial={{
                clipPath: "circle(0% at 100% 0%)",
              }}
              animate={{
                clipPath: "circle(53% at 100% 50%)",
              }}
              exit={{
                clipPath: "circle(0% at 100% 5%)",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="fixed inset-0 z-50 bg-[#1e1e1e] text-white p-16 flex justify-end"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 text-2xl"
              >
                ✕
              </button>

              {/* LEFT NAV ITEMS */}
              <div className="flex flex-col justify-center gap-10 ">
                {navigation.map((item) => (
                  <Link
                    key={item._key}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-6xl font-semibold hover:opacity-60 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center">
                <div className="bg-white text-black rounded-3xl p-10 w-[320px]">
                  <p className="text-lg mb-4">👋 Nice to see you!</p>
                  <p className="text-sm opacity-70">
                    I m Ansari Ali, Full Stack Developer based in India.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
