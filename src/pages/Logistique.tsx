import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, X, Truck, Package, Wrench, CheckCircle, Construction } from 'lucide-react';

const advantages = [
  "Expertise reconnue dans le secteur BTP",
  "Flotte moderne et entretenue",
  "Réactivité et flexibilité",
  "Suivi digitalisé des opérations",
  "Équipe dédiée et expérimentée",
];

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

const Logistique = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const equipment: Equipment[] = [
    {
      id: 1,
      category: 'beton',
      title: 'Bétonnière à Tambour Basculant',
      description: 'Bétonnière robuste avec système de basculement pour un déversement facile du béton',
      mainImage: 'Betonniere a Tambour Basculant de type, renforce Capacite 350 Litres BÉTONNIÈRES ET DAME SAUTEUSE.png',
      specifications: [
        'Capacité: 350 litres',
        'Moteur électrique 220V/380V',
        'Tambour basculant manuel',
        'Structure renforcée',
        'Vitesse de rotation: 25 tr/min'
      ],
      capacity: '350 litres',
      status: 'Disponible'
    },
    {
      id: 2,
      category: 'beton',
      title: 'Bétonnière RICHER',
      description: 'Bétonnière professionnelle de grande capacité pour chantiers importants',
      mainImage: 'Betonniere RICHER capacite 600 BÉTONNIÈRES ET DAME SAUTEUSE.png',
      specifications: [
        'Capacité: 600 litres',
        'Moteur thermique essence/diesel',
        'Châssis robuste avec roues de transport',
        'Système de mélange homogène',
        'Goulotte de déversement réglable'
      ],
      capacity: '600 litres',
      status: 'Disponible'
    },
    {
      id: 3,
      category: 'beton',
      title: 'Bétonnière TOUPI SIORI DB 180',
      description: 'Bétonnière compacte et maniable pour petits chantiers',
      mainImage: 'Betonniere TOUPI SIORI DB 180 BÉTONNIÈRES ET DAME SAUTEUSE.png',
      specifications: [
        'Capacité: 180 litres',
        'Moteur électrique 220V',
        'Design compact et léger',
        'Idéal pour petits travaux',
        'Facile à transporter et manipuler'
      ],
      capacity: '180 litres',
      status: 'Disponible'
    },
    {
      id: 4,
      category: 'beton',
      title: 'Bétonnière à Élévateur ASSY R BULLY',
      description: 'Bétonnière avec système élévateur intégré pour déversement précis',
      mainImage: 'Betonnieres elevateurs ASSY R BULLY capacite 500 Litres BÉTONNIÈRES ET DAME SAUTEUSE.png',
      specifications: [
        'Capacité: 500 litres',
        'Système élévateur hydraulique',
        'Hauteur de déversement réglable',
        'Commande manuelle ou automatique',
        'Structure anti-vibration'
      ],
      capacity: '500 litres',
      status: 'Disponible'
    },
    {
      id: 5,
      category: 'transport-beton',
      title: 'Camion Malaxeur 6m³',
      description: 'Camion malaxeur pour le transport et le mélange du béton prêt à l\'emploi',
      mainImage: 'Camion de bétonnière monté sur engin de construction 6m3 materiel de transport du beton.png',
      specifications: [
        'Capacité: 6 m³',
        'Système de malaxage continu',
        'Cuve en acier résistant',
        'Débit de coulage réglable',
        'Autonomie de malaxage'
      ],
      capacity: '6 m³',
      status: 'Disponible'
    },
    {
      id: 6,
      category: 'transport-beton',
      title: 'Camion Malaxeur Mercedes-Benz Actros',
      description: 'Camion malaxeur haut de gamme pour grands chantiers',
      mainImage: 'camion malaxeur à béton  Mercedes-Benz Actros 3235 materiel de transport du beton.png',
      specifications: [
        'Capacité: 10 m³',
        'Châssis Mercedes-Benz Actros',
        'Moteur diesel 3235 (320 ch)',
        'Système de nettoyage automatique',
        'Contrôle électronique de rotation'
      ],
      capacity: '10 m³',
      status: 'Disponible'
    },
    {
      id: 7,
      category: 'transport-personnel',
      title: 'Camion Isuzu Série F',
      description: 'Véhicule utilitaire pour le transport du personnel sur chantier',
      mainImage: 'camion de la Série F d\'Isuzu materiels de transport du personnel.png',
      specifications: [
        'Capacité: 15 personnes',
        'Moteur diesel 4 cylindres',
        'Transmission 4x4 optionnelle',
        'Cabine climatisée',
        'Sièges ergonomiques'
      ],
      capacity: '15 personnes',
      status: 'Disponible'
    },
    {
      id: 8,
      category: 'transport-personnel',
      title: 'Camion Mercedes-Benz SK',
      description: 'Camion benne pour transport de personnel et matériel',
      mainImage: 'camion Mercedes-Benz SK materiel de transport du personnel.png',
      specifications: [
        'Capacité: 12 personnes + matériel',
        'Plateau utilitaire aménagé',
        'Moteur diesel performant',
        'Suspension renforcée',
        'Protections anti-intempéries'
      ],
      capacity: '12 personnes',
      status: 'Disponible'
    },
    {
      id: 9,
      category: 'transport-personnel',
      title: 'Toyota Hilux',
      description: 'Pick-up robuste pour le transport de personnel et petit matériel',
      mainImage: 'Toyota Hilux materiels de transport du personnel.png',
      specifications: [
        'Capacité: 5 personnes',
        'Moteur diesel 2.8L',
        'Transmission 4x4',
        'Plateau de chargement',
        'Haute fiabilité tout-terrain'
      ],
      capacity: '5 personnes',
      status: 'Disponible'
    },
    {
      id: 10,
      category: 'approvisionnement',
      title: 'Camion Mercedes-Benz Série LK',
      description: 'Camion de charge moyenne pour approvisionnement de chantier',
      mainImage: 'camion Mercedes-Benz série LK materiels d\'approvissionnement.png',
      specifications: [
        'Charge utile: 5 tonnes',
        'Moteur diesel économique',
        'Hayon élévateur optionnel',
        'Volume utile: 20 m³',
        'Accès facile pour chargement'
      ],
      capacity: '5 tonnes',
      status: 'Disponible'
    },
    {
      id: 11,
      category: 'approvisionnement',
      title: 'Camion Mercedes-Benz Actros',
      description: 'Camion lourd pour approvisionnement de grands chantiers',
      mainImage: 'Camions Mercedes-Benz Actros materiels d\'approvisionnement.png',
      specifications: [
        'Charge utile: 15 tonnes',
        'Moteur diesel haute performance',
        'Système de chargement rapide',
        'Suspension pneumatique',
        'Cabine confortable avec couchage'
      ],
      capacity: '15 tonnes',
      status: 'Disponible'
    },
    {
      id: 12,
      category: 'ferraillage',
      title: 'Cintreuse à Barres d\'Armature',
      description: 'Machine professionnelle pour cintrage des barres d\'acier',
      mainImage: 'cintreuse à barres d\'armature materiel de ferraille.png',
      specifications: [
        'Capacité: barres jusqu\'à 40 mm',
        'Moteur hydraulique 5.5 kW',
        'Angle de cintrage: 0-180°',
        'Commandes numériques',
        'Précision de cintrage: ±1°'
      ],
      capacity: 'Barres 40 mm',
      status: 'Disponible'
    },
    {
      id: 13,
      category: 'compactage',
      title: 'Dame-Sauteuse PLANT',
      description: 'Compacteur à plaque vibrante pour sols granulaires',
      mainImage: 'Dames-sauteuse marque PLANT BÉTONNIÈRES ET DAME SAUTEUSE.png',
      specifications: [
        'Force centrifuge: 15 kN',
        'Moteur essence 4 temps',
        'Largeur de plaque: 450 mm',
        'Vitesse de déplacement: 20 m/min',
        'Système d\'arrosage intégré'
      ],
      status: 'Disponible'
    },
    {
      id: 14,
      category: 'compactage',
      title: 'Plaque Vibrante',
      description: 'Compacteur vibrant pour asphalte et matériaux cohésifs',
      mainImage: 'Plaque vibrante VIBREURS ET MOTO-POMPE.png',
      specifications: [
        'Force centrifuge: 20 kN',
        'Moteur diesel refroidi par air',
        'Largeur de plaque: 500 mm',
        'Fréquence de vibration: 6000 vpm',
        'Capacité de compactage: 350 m²/h'
      ],
      status: 'Disponible'
    },
    {
      id: 15,
      category: 'transport-beton',
      title: 'Dumper de Chantier',
      description: 'Engin de transport de matériaux pour chantiers difficiles',
      mainImage: 'dumper de chantier materiel de transport du beton.png',
      specifications: [
        'Capacité: 1.5 tonnes',
        'Moteur diesel 10 ch',
        'Transmission 4x4',
        'Benne basculante hydraulique',
        'Pneus tout-terrain larges'
      ],
      capacity: '1.5 tonnes',
      status: 'Disponible'
    },
    {
      id: 16,
      category: 'securite',
      title: 'Filets de Protection',
      description: 'Filets de sécurité pour protection chute de hauteur et débris',
      mainImage: 'Filets de protection.png',
      specifications: [
        'Matériau: polyéthylène haute densité',
        'Mailles: 8x8 mm',
        'Résistance: 1500 kg/m²',
        'UV résistant',
        'Dimensions standards: 5x10 m'
      ],
      status: 'Disponible'
    },
    {
      id: 17,
      category: 'topographie',
      title: 'Niveau Optique Automatique AL24',
      description: 'Instrument de nivellement de précision pour travaux topographiques',
      mainImage: 'niveau optique automatique AL24 materiel topographe.png',
      specifications: [
        'Précision: ±2 mm/km',
        'Grossissement: 24x',
        'Compensation automatique',
        'Autonomie: 2000 mesures',
        'Plage de travail: 60 m'
      ],
      status: 'Disponible'
    },
    {
      id: 18,
      category: 'topographie',
      title: 'Niveau Optique Bosch Professional GOL 32 D',
      description: 'Niveau optique numérique pour mesures précises',
      mainImage: 'niveau optique Bosch Professional GOL 32 D materiel de topographique.png',
      specifications: [
        'Précision: ±1.5 mm/km',
        'Grossissement: 32x',
        'Affichage numérique',
        'Mise au point automatique',
        'Mémorisation des mesures'
      ],
      status: 'Disponible'
    },
    {
      id: 19,
      category: 'topographie',
      title: 'Prisme de Topographie',
      description: 'Accessoire de précision pour mesures électroniques de distance',
      mainImage: 'prisme de topographie materiel topographique.png',
      specifications: [
        'Précision angulaire: ±1"',
        'Monture universelle',
        'Réglage micrométrique',
        'Compatible avec toutes stations',
        'Portée: jusqu\'à 3000 m'
      ],
      status: 'Disponible'
    },
    {
      id: 20,
      category: 'topographie',
      title: 'Station Totale',
      description: 'Station totale robotisée pour mesures topographiques précises',
      mainImage: 'station totale materiel  topographique.png',
      specifications: [
        'Précision angulaire: ±1"',
        'Précision distance: ±2 mm + 2 ppm',
        'Mesure sans prisme: 500 m',
        'Connexion Bluetooth',
        'Logiciel intégré de calcul'
      ],
      status: 'Disponible'
    },
    {
      id: 21,
      category: 'echafaudage',
      title: 'Échafaudage',
      description: 'Structure modulaire pour travaux en hauteur',
      mainImage: 'Échafaudage.png',
      specifications: [
        'Hauteur maximale: 30 m',
        'Charge admissible: 200 kg/m²',
        'Système de verrouillage rapide',
        'Plateformes antidérapantes',
        'Normes de sécurité européennes'
      ],
      status: 'Disponible'
    },
    {
      id: 22,
      category: 'vibration',
      title: 'Vibreurs à Béton Robin',
      description: 'Vibreurs électriques pour la compaction du béton',
      mainImage: 'Vibreurs de marque Robin VIBREURS ET MOTO-POMPE.png',
      specifications: [
        'Diamètre d\'aiguille: 35-50 mm',
        'Longueur: 3-6 m',
        'Fréquence: 10000-15000 tr/min',
        'Moteur électrique 1.5 kW',
        'Flexible haute résistance'
      ],
      status: 'Disponible'
    },
    {
      id: 23,
      category: 'laboratoire',
      title: 'Presse Hydraulique de Compression',
      description: 'Équipement de laboratoire pour essais sur béton et matériaux',
      mainImage: 'presse hydraulique de compression materiel de laboratoire.png',
      specifications: [
        'Capacité: 2000 kN',
        'Commande numérique',
        'Capteurs de pression haute précision',
        'Enregistrement automatique des données',
        'Logiciel d\'analyse intégré'
      ],
      capacity: '2000 kN',
      status: 'Disponible'
    },
    {
      id: 24,
      category: 'terrassement',
      title: 'Bulldozer Caterpillar D6R',
      description: 'Engin de terrassement puissant pour travaux lourds',
      mainImage: 'MATERIELS DE TERRASSEMENT vBulldozer D6R.png',
      specifications: [
        'Puissance: 165 ch',
        'Poids: 18 tonnes',
        'Largeur de lame: 3,5 m',
        'Capacité de poussée: 6,5 m³',
        'Transmission powershift'
      ],
      status: 'Disponible'
    },
    {
      id: 25,
      category: 'terrassement',
      title: 'Bulldozer Caterpillar D7G',
      description: 'Bulldozer grande capacité pour grands chantiers',
      mainImage: 'MATERIELS DE TERRASSEMENTBulldozer D7GCESE 715 AC.png',
      specifications: [
        'Puissance: 200 ch',
        'Poids: 24 tonnes',
        'Largeur de lame: 4,2 m',
        'Capacité de poussée: 9 m³',
        'Système GPS intégré'
      ],
      status: 'Disponible'
    },
    {
      id: 26,
      category: 'terrassement',
      title: 'Pelle Chargeuse 962G Série II',
      description: 'Chargeuse sur pneus polyvalente pour extraction et chargement',
      mainImage: 'PELLE CHARGEUSE 962G SERIE II Materiels de Terrassement .png',
      specifications: [
        'Capacité godet: 3,5 m³',
        'Puissance: 250 ch',
        'Portée: 7,2 m',
        'Hauteur de levage: 6,8 m',
        'Poids: 28 tonnes'
      ],
      capacity: '3.5 m³',
      status: 'Disponible'
    },
    {
      id: 27,
      category: 'terrassement',
      title: 'Pelle Excavatrice 325C avec Brise-Roches',
      description: 'Pelle hydraulique équipée pour travaux de démolition et excavation',
      mainImage: 'PELLE EXCATRICE 325 C AVEC DEUX BRISES ROCHES materiels de terrassement.png',
      specifications: [
        'Poids: 25 tonnes',
        'Puissance: 180 ch',
        'Profondeur d\'excavation: 7,5 m',
        'Force de rupture: 1000 joules',
        'Double circuit hydraulique'
      ],
      status: 'Disponible'
    },
    {
      id: 28,
      category: 'terrassement',
      title: 'Tractopelle Caterpillar CESE 369',
      description: 'Chargeuse-pelleteuse polyvalente pour tous types de travaux',
      mainImage: 'MATERIELS DE TERRASSEMENT Tractopelle CESE 369 AC (01).png',
      specifications: [
        'Puissance: 95 ch',
        'Capacité chargeuse: 1,8 m³',
        'Profondeur excavation: 5,2 m',
        'Poids: 8,5 tonnes',
        '4x4 avec verrouillage différentiel'
      ],
      status: 'Disponible'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tous nos équipements', icon: <Truck className="h-4 w-4" /> },
    { id: 'beton', name: 'Bétonnières', icon: <Construction className="h-4 w-4" /> },
    { id: 'transport-beton', name: 'Transport Béton', icon: <Truck className="h-4 w-4" /> },
    { id: 'transport-personnel', name: 'Transport Personnel', icon: <Truck className="h-4 w-4" /> },
    { id: 'approvisionnement', name: 'Approvisionnement', icon: <Package className="h-4 w-4" /> },
    { id: 'terrassement', name: 'Terrassement', icon: <Construction className="h-4 w-4" /> },
    { id: 'ferraillage', name: 'Ferraillage', icon: <Wrench className="h-4 w-4" /> },
    { id: 'compactage', name: 'Compactage', icon: <Construction className="h-4 w-4" /> },
    { id: 'vibration', name: 'Vibration', icon: <Wrench className="h-4 w-4" /> },
    { id: 'topographie', name: 'Topographie', icon: <Wrench className="h-4 w-4" /> },
    { id: 'echafaudage', name: 'Échafaudage', icon: <Construction className="h-4 w-4" /> },
    { id: 'securite', name: 'Sécurité', icon: <Wrench className="h-4 w-4" /> },
    { id: 'laboratoire', name: 'Laboratoire', icon: <Wrench className="h-4 w-4" /> }
  ];

  const filteredEquipment = activeFilter === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Nos Réalisations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Notre Parc Matériel et Logistique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre flotte d'équipements modernes et performants pour répondre à tous vos besoins logistiques
            </p>
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
                    src={`/images/${item.mainImage}`} 
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
                    src={`/images/${selectedEquipment.mainImage}`} 
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
    </motion.div>
  );
};

export default Logistique;