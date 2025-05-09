import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, FileCode2, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">QUBE DESIGN</h2>
            <p className="text-gray-300 mb-6">
              Transforming spaces into extraordinary experiences through innovative design 
              and meticulous execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block text-gray-300 hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-gray-300 hover:text-accent transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-gray-300 hover:text-accent transition">
                <FileCode2 className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block text-gray-300 hover:text-accent transition">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#projects">
                  <a className="text-gray-300 hover:text-accent transition">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-300 hover:text-accent transition">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="text-gray-300 hover:text-accent transition">About</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-gray-300 hover:text-accent transition">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/#waitlist">
                  <a className="text-gray-300 hover:text-accent transition">Join Waitlist</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition">Architecture</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition">Interior Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition">3D Visualization</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition">Turnkey Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition">Consulting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-accent" />
                <span className="text-gray-300">123 Design Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3 text-accent" />
                <span className="text-gray-300">+1 (212) 555-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-accent" />
                <span className="text-gray-300">info@qubedesign.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3 text-accent" />
                <span className="text-gray-300">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} QUBE DESIGN. All rights reserved. | 
            <a href="#" className="hover:text-accent transition ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
