import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    quote: "Qube Design transformed our vision into reality with exceptional attention to detail. Their ability to understand our needs and translate them into functional, beautiful spaces exceeded our expectations.",
    name: "Sarah Johnson",
    title: "Residential Client",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    quote: "Working with Qube Design on our corporate headquarters was a seamless experience from start to finish. Their team's creativity, professionalism, and technological expertise delivered an office space that truly represents our brand identity.",
    name: "Michael Chen",
    title: "CEO, TechVentures",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The 3D visualizations provided by Qube Design were instrumental in helping us secure funding for our development project. Their attention to sustainability while maintaining aesthetic excellence is unmatched in the industry.",
    name: "Amanda Rodriguez",
    title: "Development Director, Urban Spaces",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Client Testimonials</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Hear what our clients have to say about their experience working with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 shadow-sm"
              variants={fadeIn}
              custom={index * 0.2}
            >
              <div className="text-accent mb-6">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
              <p className="text-gray-600 mb-8 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} portrait`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
