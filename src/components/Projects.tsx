import React, { useState } from 'react';
import { ExternalLink, Plus, X } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  date?: string;
  client?: string;
  location?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdmin] = useState(false); // This should be controlled by your auth system

  const projects: Project[] = [
    {
      id: 1,
      category: 'genie-civil',
      title: 'Construction de Pont',
      description: 'Conception et construction d\'un pont à haubans de 120 mètres.',
      image: 'https://images.pexels.com/photos/1838349/pexels-photo-1838349.jpeg',
      fullDescription: 'Ce projet majeur de génie civil comprend la conception et la réalisation d\'un pont à haubans de 120 mètres. La structure innovante utilise les dernières technologies en matière de construction durable.',
      date: '2023',
      client: 'Ministère des Infrastructures',
      location: 'Douala, Cameroun'
    },
    {
      id: 2,
      category: 'btp',
      title: 'Immeuble Commercial',
      description: 'Construction d\'un immeuble commercial de 12 étages au centre-ville.',
      image: 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg',
      fullDescription: 'Construction d\'un complexe commercial moderne de 12 étages intégrant des espaces de bureaux, des commerces et un parking souterrain sur 3 niveaux.',
      date: '2022',
      client: 'Groupe Commercial International',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 3,
      category: 'genie-civil',
      title: 'Barrage Hydroélectrique',
      description: 'Réalisation d\'un barrage hydroélectrique avec une capacité de 50MW.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      fullDescription: 'Construction d\'un barrage hydroélectrique majeur avec une capacité de production de 50MW, incluant des systèmes de contrôle automatisés et des mesures de protection environnementale.',
      date: '2021',
      client: 'Agence Nationale d\'Électricité',
      location: 'Nord Cameroun'
    },
    {
      id: 4,
      category: 'maintenance',
      title: 'Usine de Production',
      description: 'Maintenance complète des équipements d\'une usine de production industrielle.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      fullDescription: 'Programme complet de maintenance préventive et corrective pour une usine de production majeure, incluant la mise à niveau des systèmes de contrôle et l\'optimisation des processus.',
      date: '2023',
      client: 'Industries Modernes SA',
      location: 'Douala, Cameroun'
    },
    {
      id: 5,
      category: 'btp',
      title: 'Complexe Résidentiel',
      description: 'Construction d\'un complexe résidentiel moderne de 50 appartements.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      fullDescription: 'Développement d\'un complexe résidentiel haut de gamme comprenant 50 appartements, des espaces verts, une piscine et des installations sportives.',
      date: '2022',
      client: 'Groupe Immobilier Elite',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 6,
      category: 'transport',
      title: 'Logistique de Chantier',
      description: 'Gestion logistique complète d\'un chantier majeur de construction.',
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      fullDescription: 'Mise en place et gestion d\'un système logistique complet pour un chantier majeur, incluant le transport de matériaux, la gestion des stocks et la coordination des livraisons.',
      date: '2023',
      client: 'Construction Plus SARL',
      location: 'Douala, Cameroun'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tous' },
    { id: 'genie-civil', name: 'Génie Civil' },
    { id: 'btp', name: 'BTP' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'transport', name: 'Transport' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-subtitle">
            Découvrez quelques-uns de nos projets récents et nos réalisations exceptionnelles
          </p>
          {isAdmin && (
            <button
              className="btn-primary flex items-center mx-auto mt-4"
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter une réalisation
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="card group overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300">
                    <ExternalLink className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-dark">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.fullDescription}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-primary">Date:</strong>
                    <p>{selectedProject.date}</p>
                  </div>
                  <div>
                    <strong className="text-primary">Client:</strong>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <strong className="text-primary">Localisation:</strong>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div>
                    <strong className="text-primary">Catégorie:</strong>
                    <p>{filters.find(f => f.id === selectedProject.category)?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;