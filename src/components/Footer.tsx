import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight, HardHat } from 'lucide-react';

const Footer: React.FC = () => {
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
              offrant des services professionnels de haute qualité.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange-500 transition-colors duration-300 p-2 rounded-full">
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
              {['Accueil', 'À propos', 'Services', 'Réalisations', 'Équipe', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </a>
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
              {[
                'Génie Civil', 
                'Maintenance Industrielle', 
                'BTP', 
                'Échafaudage',
                'Transport & Logistique',
                'Commerce Général'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </a>
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
              <li>123 Avenue Centrale, Ville, Pays</li>
              <li>contact@leaderservice.com</li>
              <li>+123 456 7890</li>
              <li>Lun - Ven: 8h00 - 18h00</li>
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