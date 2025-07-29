import React, { useState } from 'react';
import { ExternalLink, Plus, X } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
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
      title: 'Construction de l\'Usine de Cimencam Nomayos-Yaoundé',
      description: 'Projet majeur de construction de l\'usine Cimencam incluant la clôture et les infrastructures associées',
      image: 'src/assets/images/Cimencam-1024x683.jpg',
      fullDescription: 'Réalisation complète de l\'usine Cimencam à Nomayos-Yaoundé comprenant les bâtiments principaux, les infrastructures techniques et la clôture de sécurité. Le projet a nécessité une expertise pointue en génie civil pour répondre aux normes industrielles strictes.',
      client: 'Cimencam',
      location: 'Nomayos-Yaoundé, Cameroun'
    },
    {
      id: 2,
      category: 'genie-civil',
      title: 'Construction du magasin de clinker pour CIMAF',
      description: 'Construction d\'un espace de stockage spécialisé pour le clinker au port de Douala',
      image: 'src/assets/images/WhatsApp Image 2025-07-29 à 01.40.39_e022a522.jpg',
      fullDescription: 'Construction d\'un magasin dédié au stockage du clinker, matériau essentiel dans la production de ciment. Le projet a nécessité des solutions techniques adaptées à la nature corrosive du produit et aux conditions portuaires.',
      client: 'CIMAF',
      location: 'Port de Douala, Cameroun'
    },
    {
      id: 3,
      category: 'genie-civil',
      title: 'Travaux d\'extension Cimencam Figuil',
      description: 'Extension des capacités de production de l\'usine Cimencam de Figuil',
      image: 'src/assets/images/WhatsApp Image 2024-11-19 à 16.05.30_2535e324.jpg',
      fullDescription: 'Projet d\'agrandissement des installations existantes de l\'usine Cimencam à Figuil, comprenant de nouvelles lignes de production et des infrastructures annexes pour augmenter la capacité de production de ciment dans la région du Nord.',
      client: 'Cimencam',
      location: 'Figuil, Cameroun'
    },
    {
      id: 4,
      category: 'genie-civil',
      title: 'Travaux de terrassement et construction au port de Douala',
      description: 'Terrassement et construction d\'un magasin de 5000m2 au port de Douala',
      image: 'src/assets/images/WhatsApp Image 2025-07-29 à 01.36.44_0c7bc154.jpg',
      fullDescription: 'Réalisation de travaux de terrassement avec remblai à la pouzzolane et construction d\'un vaste magasin de stockage de 5000m2 dans la zone portuaire de Douala, nécessitant des solutions techniques adaptées au sol marécageux.',
      client: 'Port Autonome de Douala',
      location: 'Douala, Cameroun'
    },
    {
      id: 5,
      category: 'btp',
      title: 'Construction du siège régional ENEO Sanaga Océan (SANO)',
      description: 'Bâtiment abritant le siège régional ENEO et l\'agence de Kribi',
      image: 'src/assets/images/Eneo-kribi.png',
      fullDescription: 'Construction du siège régional d\'ENEO pour la zone Sanaga Océan comprenant les bureaux administratifs, les espaces techniques et l\'agence commerciale de Kribi. Le bâtiment intègre des solutions énergétiques modernes et durables.',
      client: 'ENEO',
      location: 'Kribi, Cameroun'
    },
    {
      id: 6,
      category: 'btp',
      title: 'Construction de l\'Hôtel de Ville de Bassamba',
      description: 'Édifice municipal abritant les services administratifs de la commune',
      image: 'src/assets/images/hotel1.jpg',
      fullDescription: 'Construction complète de l\'Hôtel de Ville de Bassamba, un bâtiment administratif moderne intégrant des espaces publics, des bureaux administratifs et une salle de conseil municipal. L\'architecture allie tradition et modernité.',
      client: 'Commune de Bassamba',
      location: 'Bassamba, Cameroun'
    },
    {
      id: 7,
      category: 'maintenance',
      title: 'Travaux de réfection du bâtiment central du MINATD',
      description: 'Rénovation complète du bâtiment ministériel',
      image: 'src/assets/images/refection1.jpg',
      fullDescription: 'Réfection complète du bâtiment central du Ministère de l\'Administration Territoriale comprenant la rénovation des façades, des espaces intérieurs et des installations techniques. Le projet a respecté les contraintes d\'un bâtiment occupé.',
      client: 'MINATD',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 8,
      category: 'maintenance',
      title: 'Ravalement des peintures extérieures de la SIC',
      description: 'Rénovation des façades des immeubles de la Société Immobilière du Cameroun',
      image: 'src/assets/images/SIC.jpg',
      fullDescription: 'Programme de ravalement des peintures extérieures de plusieurs immeubles du patrimoine de la SIC à Yaoundé et Douala, incluant la préparation des supports, l\'application de produits spécifiques et la finition architecturale.',
      client: 'Société Immobilière du Cameroun (SIC)',
      location: 'Yaoundé et Douala, Cameroun'
    },
    {
      id: 9,
      category: 'transport',
      title: 'Transport de granulats pour Cimencam Nomayos',
      description: 'Logistique et transport des matériaux pour la construction de l\'usine',
      image: 'src/assets/images/cimencam.jpg',
      fullDescription: 'Gestion complète de la chaîne logistique pour le transport des granulats nécessaires à la construction de l\'usine Cimencam de Nomayos, incluant la planification, le transport et la livraison sur site des matériaux.',
      client: 'Cimencam',
      location: 'Nomayos-Yaoundé, Cameroun'
    },
    {
      id: 10,
      category: 'transport',
      title: 'Installation d\'échafaudage en haute mer',
      description: 'Mise à disposition et installation d\'échafaudages pour travaux offshore',
      image: 'src/assets/images/mer.jpg',
      fullDescription: 'Opération complexe de mise à disposition et d\'installation d\'importants volumes d\'échafaudage en milieu marin pour des travaux de maintenance sur des installations offshore. Le projet a nécessité une logistique maritime spécifique et des équipements adaptés aux conditions difficiles.',
      client: 'Société Pétrolière',
      location: 'Zone offshore, Cameroun'
    }
  ];

  const filters = [
    { id: 'all', name: 'Nos Projets' },
    { id: 'genie-civil', name: 'Génie Civil' },
    { id: 'btp', name: 'Bâtiment et Travaux Publics' },
    { id: 'maintenance', name: 'Maintenance et Rénovation' },
    { id: 'transport', name: 'Transport et Logistique' }
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
            Découvrez nos projets récents et nos réalisations exceptionnelles à travers le Cameroun
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
                <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-sm rounded-full mb-2">
                  {filters.find(f => f.id === project.category)?.name}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-dark mb-3">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-3">{project.location}</span>
                  <span>{project.client}</span>
                </div>
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
                <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-sm rounded-full mb-4">
                  {filters.find(f => f.id === selectedProject.category)?.name}
                </span>
                <h3 className="text-2xl font-semibold text-primary mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.fullDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-primary block mb-1">Client:</strong>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <strong className="text-primary block mb-1">Localisation:</strong>
                    <p>{selectedProject.location}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projects
                    .filter(p => p.id !== selectedProject.id && p.category === selectedProject.category)
                    .slice(0, 3)
                    .map(related => (
                      <div 
                        key={related.id}
                        className="cursor-pointer"
                        onClick={() => setSelectedProject(related)}
                      >
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-24 object-cover rounded"
                        />
                        <p className="text-xs mt-1 line-clamp-1">{related.title}</p>
                      </div>
                    ))}
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