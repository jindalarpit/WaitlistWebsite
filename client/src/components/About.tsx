import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-light">
      <motion.div 
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            custom={0.1}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Architecture office environment" 
                className="w-full h-auto rounded-sm"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Team collaboration" 
                  className="w-48 h-48 object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">About Qube Design</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a forward-thinking architecture and design studio dedicated to creating spaces 
                that inspire, function flawlessly, and stand the test of time.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2010, our team combines decades of expertise with innovative approaches to address 
                the evolving needs of our clients and communities. We believe that exceptional design emerges 
                from a deep understanding of context, purpose, and human experience.
              </p>
              <p className="text-gray-600">
                Our collaborative process ensures that each project receives the attention, creativity, and 
                technical excellence it deserves. From initial concept to final execution, we work closely 
                with our clients to transform their vision into reality.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
              variants={fadeInUp}
              custom={0.4}
            >
              <div className="text-center">
                <div className="text-accent font-serif text-4xl font-bold mb-2">100+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-accent font-serif text-4xl font-bold mb-2">15</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-accent font-serif text-4xl font-bold mb-2">25</div>
                <p className="text-gray-600">Design Awards</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
