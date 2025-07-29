import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight, HardHat, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/projects' },
    { name: 'Équipe', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesList = [
    'Génie Civil',
    'Maintenance Industrielle',
    'Bâtiment & Travaux Publics',
    'Échafaudage',
    'Transport & Logistique',
    'Fourniture de Matériaux'
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <HardHat className="h-8 w-8 text-orange-500" />
              <h2 className="text-xl font-bold ml-2">LEADER SERVICE</h2>
            </div>
            <p className="mb-4 text-gray-300">
              Votre partenaire de confiance dans le secteur du BTP et du génie civil, 
              offrant des services professionnels de haute qualité au Cameroun.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/leaderservicebtp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/leaderservicebtp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/leaderservicebtp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/leaderservicebtp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-500">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center w-full text-left"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-500">
              Nos Services
            </h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center w-full text-left"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-500">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:leaderservicebtpcm@gmail.com" className="hover:text-orange-500">
                  leaderservicebtpcm@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+237699567730" className="hover:text-orange-500 block">+237 699 567 730</a>
                  <a href="tel:+237673737242" className="hover:text-orange-500 block">+237 673 737 242</a>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Lun - Ven: 8h00 - 18h00<br />Samedi: 9h00 - 13h00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-6" />
        
        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LEADER SERVICE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;