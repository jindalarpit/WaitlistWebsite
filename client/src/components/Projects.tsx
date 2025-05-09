import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";
import ProjectLightbox from "./ProjectLightbox";

const projects = [
  {
    id: "1",
    title: "Geometric Haven",
    description: "Contemporary residential complex",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    year: "2023",
    client: "Urban Development Corp.",
    location: "New York, USA",
    size: "4,500 sq. m",
    fullDescription: "A landmark residential complex that seamlessly blends geometric precision with natural elements. The design prioritizes sustainability without compromising on luxury and comfort, creating a haven for modern living.",
  },
  {
    id: "2",
    title: "Urban Sanctuary",
    description: "Minimalist interior concept",
    category: "interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    year: "2022",
    client: "Private Residence",
    location: "San Francisco, USA",
    size: "320 sq. m",
    fullDescription: "This minimalist interior transformation focuses on creating a calm, rejuvenating space within the urban chaos. Clean lines, neutral tones, and carefully selected materials come together to form a cohesive sanctuary.",
  },
  {
    id: "3",
    title: "Skyline View",
    description: "Conceptual urban development",
    category: "visualization",
    image: "https://images.unsplash.com/photo-1545043066-e4aff792c347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2023",
    client: "City Planning Commission",
    location: "Chicago, USA",
    size: "12,000 sq. m",
    fullDescription: "An innovative visualization of a proposed urban development that transforms an underutilized district into a vibrant, mixed-use community. The project emphasizes public spaces, connectivity, and sustainable architecture.",
  },
  {
    id: "4",
    title: "Glass Pavilion",
    description: "Public space redevelopment",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2021",
    client: "Metropolitan Museum",
    location: "Boston, USA",
    size: "1,800 sq. m",
    fullDescription: "A striking glass pavilion that serves as both an art exhibition space and a community gathering point. The transparent structure creates a dialogue between indoor and outdoor spaces, inviting interaction with the surrounding park.",
  },
  {
    id: "5",
    title: "Serene Loft",
    description: "Luxury residential redesign",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    year: "2022",
    client: "Private Client",
    location: "Seattle, USA", 
    size: "250 sq. m",
    fullDescription: "A complete transformation of a former industrial loft into a serene luxury residence. The design preserves the raw character of the space while introducing elegant materials and custom furnishings for a sophisticated living experience.",
  },
  {
    id: "6",
    title: "Horizon Tower",
    description: "Commercial office complex",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2021",
    client: "Horizon Enterprises",
    location: "Miami, USA",
    size: "28,000 sq. m",
    fullDescription: "A forward-thinking commercial tower designed for the evolving workplace. The architecture emphasizes flexibility, collaborative spaces, and connection to nature through cascading terraces and abundant natural light.",
  },
  {
    id: "7",
    title: "Coastal Retreat",
    description: "Modern beach house",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2022",
    client: "Private Client",
    location: "Malibu, USA",
    size: "650 sq. m",
    fullDescription: "A modern interpretation of coastal living, this residence balances openness with privacy. Floor-to-ceiling glass captures panoramic ocean views while strategic screening elements provide shelter from the elements and neighboring properties.",
  },
  {
    id: "8",
    title: "Creative Studio",
    description: "Adaptive reuse project",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2023",
    client: "Design Collective",
    location: "Portland, USA",
    size: "420 sq. m",
    fullDescription: "Transforming a historic warehouse into a vibrant creative studio that honors the building's industrial past while accommodating modern work patterns. The design features flexible workspaces, material honesty, and strategic interventions.",
  },
  {
    id: "9",
    title: "Verdant Quarters",
    description: "Eco-friendly apartment complex",
    category: "visualization",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2023",
    client: "Green Development LLC",
    location: "Austin, USA",
    size: "15,000 sq. m",
    fullDescription: "A visualization for a proposed eco-friendly apartment complex integrating extensive vertical gardens, solar harvesting, and community spaces. The design demonstrates how urban density can coexist with abundant natural elements.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const handleOpenLightbox = (project: any) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-light">
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our portfolio showcases a diverse range of architectural endeavors, from residential 
            masterpieces to commercial landmarks.
          </p>
        </motion.div>

        {/* Portfolio filter */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-3"
          variants={fadeInUp}
        >
          <button 
            className={`px-4 py-2 hover:bg-secondary transition rounded-sm font-medium ${
              filter === "all" ? "bg-secondary" : "bg-white"
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 hover:bg-secondary transition rounded-sm font-medium ${
              filter === "architecture" ? "bg-secondary" : "bg-white"
            }`}
            onClick={() => setFilter("architecture")}
          >
            Architecture
          </button>
          <button 
            className={`px-4 py-2 hover:bg-secondary transition rounded-sm font-medium ${
              filter === "interior" ? "bg-secondary" : "bg-white"
            }`}
            onClick={() => setFilter("interior")}
          >
            Interior Design
          </button>
          <button 
            className={`px-4 py-2 hover:bg-secondary transition rounded-sm font-medium ${
              filter === "visualization" ? "bg-secondary" : "bg-white"
            }`}
            onClick={() => setFilter("visualization")}
          >
            3D Visualization
          </button>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item overflow-hidden group"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition duration-800 ease group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className="bg-white text-primary px-6 py-2 rounded-sm font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    onClick={() => handleOpenLightbox(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-serif font-medium mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <a className="inline-flex items-center font-medium text-accent hover:text-primary transition">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div>
      </motion.div>

      {/* Project Lightbox */}
      {isLightboxOpen && selectedProject && (
        <ProjectLightbox 
          project={selectedProject} 
          onClose={handleCloseLightbox} 
        />
      )}
    </section>
  );
};

export default Projects;
