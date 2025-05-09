import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/image_1743072969381.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex items-center p-1 bg-black rounded">
              <img 
                src={logoImage} 
                alt="Qube Design Studio Architect Logo" 
                className="h-12 w-auto mr-1"
              />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight ml-2">QUBE DESIGN STUDIO</span>
          </a>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#projects">
            <a className="text-primary hover:text-accent font-medium transition">Projects</a>
          </Link>
          <Link href="/#services">
            <a className="text-primary hover:text-accent font-medium transition">Services</a>
          </Link>
          <Link href="/#about">
            <a className="text-primary hover:text-accent font-medium transition">About</a>
          </Link>
          <Link href="/#contact">
            <a className="text-primary hover:text-accent font-medium transition">Contact</a>
          </Link>
          <Link href="/#contact">
            <a className="bg-accent text-white px-5 py-2 rounded-sm font-medium transition hover:bg-opacity-90">
              Get a Quote
            </a>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white absolute w-full py-4 shadow-md"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link href="/#projects">
                <a 
                  className="text-primary hover:text-accent font-medium transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </Link>
              <Link href="/#services">
                <a 
                  className="text-primary hover:text-accent font-medium transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </Link>
              <Link href="/#about">
                <a 
                  className="text-primary hover:text-accent font-medium transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </Link>
              <Link href="/#contact">
                <a 
                  className="text-primary hover:text-accent font-medium transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </Link>
              <Link href="/#contact">
                <a 
                  className="bg-accent text-white px-5 py-2 rounded-sm font-medium transition hover:bg-opacity-90 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
