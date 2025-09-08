import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, X, Truck, Package, Wrench, Crane } from 'lucide-react';

interface Equipment {
  id: number;
  category: string;
  title: string;
  description: string;
  mainImage: string;
  specifications: string[];
  capacity?: string;
  status: string;
}

const LogistiqueMateriel = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const equipment: Equipment[] = [
    {
      id: 1,
      category: 'transport',
      title: 'Camions Benne 10 Roues',
      description: 'Camions robustes pour le transport de matériaux en vrac et de construction',
      mainImage: '/images/camions-benne.jpg',
      specifications: [
        'Capacité de charge: 20 tonnes',
        'Moteur Diesel 400 chevaux',
        'Benne basculante hydraulique',
        'GPS de suivi intégré'
      ],
      capacity: '20 tonnes',
      status: 'Disponible'
    },
    {
      id: 2,
      category: 'transport',
      title: 'Semi-remorques Plateaux',
      description: 'Pour le transport d\'équipements lourds et de matériaux de grande dimension',
      mainImage: '/images/semi-remorques.jpg',
      specifications: [
        'Longueur plateau: 13 mètres',
        'Capacité: 30 tonnes',
        'Rampe de chargement intégrée',
        'Système de sécurisation renforcé'
      ],
      capacity: '30 tonnes',
      status: 'Disponible'
    },
    {
      id: 3,
      category: 'manutention',
      title: 'Chariots Élévateurs',
      description: 'Pour la manutention et le stockage des matériaux sur les chantiers',
      mainImage: '/images/chariots-elevateurs.jpg',
      specifications: [
        'Capacité de levage: 3 à 5 tonnes',
        'Hauteur de levage: 6 mètres',
        'Moteur diesel/électrique',
        'Fourches ajustables'
      ],
      capacity: '5 tonnes',
      status: 'Disponible'
    },
    {
      id: 4,
      category: 'manutention',
      title: 'Grues Mobiles',
      description: 'Pour le levage et le placement de charges lourdes sur les chantiers',
      mainImage: '/images/grues-mobiles.jpg',
      specifications: [
        'Capacité de levage: 25 à 50 tonnes',
        'Portée maximale: 30 mètres',
        'Stabilisateurs hydrauliques',
        'Contrôle de charge électronique'
      ],
      capacity: '50 tonnes',
      status: 'Disponible'
    },
    {
      id: 5,
      category: 'stockage',
      title: 'Conteneurs de Stockage',
      description: 'Solutions de stockage sécurisé pour matériaux et équipements',
      mainImage: '/images/conteneurs-stockage.jpg',
      specifications: [
        'Dimensions: 20 et 40 pieds',
        'Isolation thermique optionnelle',
        'Système de verrouillage renforcé',
        'Ventilation intégrée'
      ],
      capacity: '28 m³',
      status: 'Disponible'
    },
    {
      id: 6,
      category: 'entretien',
      title: 'Atelier Mobile de Maintenance',
      description: 'Unité mobile pour l\'entretien et la réparation des équipements sur site',
      mainImage: '/images/atelier-mobile.jpg',
      specifications: [
        'Équipement de soudage et de coupage',
        'Compresseur d\'air intégré',
        'Générateur électrique 10kVA',
        'Outillage complet'
      ],
      status: 'Disponible'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tous nos équipements', icon: <Truck className="h-4 w-4" /> },
    { id: 'transport', name: 'Transport', icon: <Truck className="h-4 w-4" /> },
    { id: 'manutention', name: 'Manutention', icon: <Crane className="h-4 w-4" /> },
    { id: 'stockage', name: 'Stockage', icon: <Package className="h-4 w-4" /> },
    { id: 'entretien', name: 'Entretien', icon: <Wrench className="h-4 w-4" /> }
  ];

  const filteredEquipment = activeFilter === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Notre Parc Matériel et Logistique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre flotte d'équipements modernes et performants pour répondre à tous vos besoins logistiques
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto mt-4">
            Pour découvrir toutes nos capacités en détail, n'hésitez pas à consulter notre plaquette commerciale.
          </p>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/PRESENTATION LEADER SERVICE 2024 final LATESTE .pdf';
              link.download = 'PRESENTATION LEADER SERVICE 2024 final LATESTE .pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors mb-6"
          >
            <Download className="h-5 w-5" />
            Télécharger notre plaquette commerciale
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.icon}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map(item => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedEquipment(item)}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Disponible' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <img 
                  src={item.mainImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300">
                    <ExternalLink className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-sm rounded-full mb-3">
                  {filters.find(f => f.id === item.category)?.name}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-gray-dark">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.capacity && (
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>Capacité: {item.capacity}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Detail Modal */}
        {selectedEquipment && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedEquipment.mainImage} 
                  alt={selectedEquipment.title}
                  className="w-full h-72 object-cover"
                />
                <button 
                  onClick={() => setSelectedEquipment(null)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-sm rounded-full mb-4">
                  {filters.find(f => f.id === selectedEquipment.category)?.name}
                </span>
                <h3 className="text-2xl font-semibold text-gray-dark mb-4">{selectedEquipment.title}</h3>
                <p className="text-gray-600 mb-6">{selectedEquipment.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Spécifications techniques</h4>
                    <ul className="space-y-2">
                      {selectedEquipment.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-3">Informations complémentaires</h4>
                    <div className="space-y-3">
                      {selectedEquipment.capacity && (
                        <div>
                          <strong className="text-gray-700">Capacité:</strong>
                          <p>{selectedEquipment.capacity}</p>
                        </div>
                      )}
                      <div>
                        <strong className="text-gray-700">Disponibilité:</strong>
                        <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                          selectedEquipment.status === 'Disponible' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {selectedEquipment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                    Demander cet équipement
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LogistiqueMateriel;