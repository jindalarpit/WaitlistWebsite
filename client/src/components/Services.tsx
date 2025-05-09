import { motion } from "framer-motion";
import { Building, Sofa, Box, Home } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const services = [
  {
    icon: <Building className="h-10 w-10" />,
    title: "Architecture",
    description: "Innovative architectural solutions for residential, commercial, and public buildings that balance aesthetics, functionality, and sustainability.",
  },
  {
    icon: <Sofa className="h-10 w-10" />,
    title: "Interior Design",
    description: "Thoughtfully crafted interior spaces that reflect your personality and lifestyle while optimizing functionality and comfort.",
  },
  {
    icon: <Box className="h-10 w-10" />,
    title: "3D Visualization",
    description: "Photorealistic 3D renderings and animations that bring your project to life before construction begins, allowing for better decision-making.",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Turnkey Solutions",
    description: "Comprehensive project management from concept to completion, ensuring a seamless experience and exceptional results.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <motion.div 
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We offer comprehensive architectural and design solutions tailored to your specific needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-light p-8 transition-all duration-300 hover:shadow-md"
              variants={fadeInUp}
              custom={index * 0.2}
            >
              <div className="text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="text-accent font-medium hover:text-primary transition flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
