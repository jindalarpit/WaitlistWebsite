import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, MapPin, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

// This would be fetched from API in a real app
const projects = [
  {
    id: "1",
    title: "Geometric Haven",
    description: "Contemporary residential complex",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    year: "2023",
    client: "Urban Development Corp.",
    location: "New York, USA",
    size: "4,500 sq. m",
    fullDescription: "A landmark residential complex that seamlessly blends geometric precision with natural elements. The design prioritizes sustainability without compromising on luxury and comfort, creating a haven for modern living. The project features innovative use of materials, energy-efficient systems, and thoughtfully designed communal spaces that foster community while respecting privacy. Each unit offers panoramic views and abundant natural light, with flexible floor plans that adapt to diverse lifestyles. The façade's rhythmic pattern creates a distinctive visual identity while optimizing solar exposure throughout the seasons.",
  },
  {
    id: "2",
    title: "Urban Sanctuary",
    description: "Minimalist interior concept",
    category: "interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    year: "2022",
    client: "Private Residence",
    location: "San Francisco, USA",
    size: "320 sq. m",
    fullDescription: "This minimalist interior transformation focuses on creating a calm, rejuvenating space within the urban chaos. Clean lines, neutral tones, and carefully selected materials come together to form a cohesive sanctuary. The design prioritizes multifunctional spaces and thoughtful storage solutions that maintain the minimalist aesthetic while accommodating the practical needs of daily life. Natural light is maximized through strategic window treatments, while a curated lighting plan ensures the space remains inviting at all hours. Handcrafted furniture pieces serve as functional art, adding warmth and personality to the restrained palette.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Simulate API fetch
    const fetchProject = () => {
      setLoading(true);
      const foundProject = projects.find(p => p.id === id);
      
      if (foundProject) {
        setProject(foundProject);
      }
      
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">The project you are looking for does not exist or has been removed.</p>
        <Button onClick={() => setLocation("/")} variant="default">
          Return to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="font-sans text-primary bg-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 pb-20">
        <motion.div 
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-8">
            <Button 
              onClick={() => setLocation("/#projects")} 
              variant="outline" 
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </div>

          <motion.h1 
            className="text-3xl md:text-5xl font-serif font-semibold mb-4"
            variants={fadeInUp}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-10"
            variants={fadeInUp}
          >
            <span className="bg-secondary px-3 py-1 text-sm rounded-sm">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="lg:col-span-2"
              variants={fadeIn}
              custom={0.1}
            >
              <div className="mb-4">
                <img 
                  src={project.images[selectedImage]} 
                  alt={project.title} 
                  className="w-full h-auto rounded-sm object-cover"
                  style={{ maxHeight: '600px' }}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer overflow-hidden rounded-sm border-2 ${
                      selectedImage === index ? 'border-accent' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - view ${index + 1}`} 
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              custom={0.3}
            >
              <div className="bg-light p-6 rounded-sm mb-8">
                <h2 className="text-xl font-medium mb-4 font-serif">Project Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <h3 className="text-sm text-gray-500">Year</h3>
                      <p>{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <h3 className="text-sm text-gray-500">Client</h3>
                      <p>{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <h3 className="text-sm text-gray-500">Location</h3>
                      <p>{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <h3 className="text-sm text-gray-500">Size</h3>
                      <p>{project.size}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setLocation("/#contact")} 
                className="w-full bg-accent hover:bg-opacity-90"
              >
                Inquire About This Project
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeInUp}
            custom={0.5}
          >
            <h2 className="text-2xl font-serif font-semibold mb-6">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.fullDescription}
            </p>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
