import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern architecture building" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Transform spaces into extraordinary experiences
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 font-light"
            variants={fadeInUp}
          >
            Innovative architectural solutions that redefine modern living and working environments
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeInUp}
          >
            <Link href="#projects">
              <a className="bg-white text-primary px-8 py-3 rounded-sm font-display font-medium transition hover:bg-opacity-90 text-center">
                Explore Projects
              </a>
            </Link>
            <Link href="#contact">
              <a className="bg-white text-primary px-8 py-3 rounded-sm font-display font-medium transition hover:bg-opacity-90 text-center">
                Get a Quote
              </a>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
