import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "wouter";

interface ProjectLightboxProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    fullDescription: string;
    client: string;
    year: string;
    location: string;
    size: string;
  };
  onClose: () => void;
}

const ProjectLightbox = ({ project, onClose }: ProjectLightboxProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-primary bg-opacity-90 z-50 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        <motion.div 
          className="max-w-6xl w-full mx-4 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <button 
              className="absolute right-4 top-4 z-10 text-white hover:text-accent transition"
              onClick={onClose}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-96 md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                  {project.title}
                </h2>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </p>
                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h3 className="font-medium mb-2">Client</h3>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Year</h3>
                    <p className="text-gray-600">{project.year}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Size</h3>
                    <p className="text-gray-600">{project.size}</p>
                  </div>
                </div>
                <Link href="#contact">
                  <a 
                    className="bg-accent text-white px-8 py-3 rounded-sm font-display font-medium transition hover:bg-opacity-90 inline-block"
                    onClick={onClose}
                  >
                    Get in Touch
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectLightbox;
