import React, { useState } from 'react';
import { ExternalLink, Plus, X, Download } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  mainImage: string;
  secondaryImages: string[];
  fullDescription?: string;
  client?: string;
  location?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAdmin] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      category: 'genie-civil',
      title: 'CONSTRUCTION DU CLINKER STORAGE CBMICIMAF AU PAD DOUALA',
      description: 'Construction d\'un espace de stockage spécialisé pour le clinker',
      mainImage: '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 1.jpg',
      secondaryImages: [
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 2.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 3.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 4.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 5.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 6.jpg'
      ],
      fullDescription: 'Construction d\'un espace de stockage spécialisé pour le clinker au port autonome de Douala, avec des solutions techniques adaptées aux contraintes portuaires.',
      client: 'CIMAF',
      location: 'Port Autonome de Douala, Cameroun'
    },
    {
      id: 2,
      category: 'genie-civil',
      title: 'CONSTRUCTION D\'UN MAGASIN DE 5000M² POUR LA STE BFREST AU PAD DOUALA',
      description: 'Construction d\'un grand espace de stockage portuaire',
      mainImage: '/images/MAGASIN DE 5000M² POUR LA STE BFREST 2.jpg',
      secondaryImages: [
        '/images/MAGASIN DE 5000M² POUR LA STE BFREST 1.jpg',
        '/images/MAGASIN DE 5000M² POUR LA STE BFREST 3.jpg',
        '/images/MAGASIN DE 5000M² POUR LA STE BFREST 4.jpg',
        '/images/MAGASIN DE 5000M² POUR LA STE BFREST 5.jpg',
        '/images/MAGASIN DE 5000M² POUR LA STE BFREST 6.jpg'
      ],
      fullDescription: 'Réalisation d\'un magasin de stockage de 5000m² dans la zone portuaire de Douala, avec des caractéristiques techniques adaptées aux besoins logistiques du client.',
      client: 'BFREST',
      location: 'Port Autonome de Douala, Cameroun'
    },
    {
      id: 3,
      category: 'genie-civil',
      title: 'TRAVAUX D\'EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI',
      description: 'Extension des capacités de production de l\'usine',
      mainImage: '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI 1.jpg',
      secondaryImages: [
        '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI  3.jpg',
        '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI 1.jpg',
        '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI 4.jpg',
        '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI 5.jpg',
        '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI 6.jpg',
      ],
      fullDescription: 'Extension des installations de l\'usine Cimencam à Figuil en collaboration avec CBMI, comprenant de nouvelles lignes de production et infrastructures annexes.',
      client: 'Cimencam / CBMI',
      location: 'Figuil, Cameroun'
    },
    {
      id: 4,
      category: 'genie-civil',
      title: 'TRAVAUX DE TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT',
      description: 'Préparation du terrain pour construction industrielle',
      mainImage: '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 2.jpg',
      secondaryImages: [
        '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 1.jpg',
        '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 3.jpg',
        '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 4.jpg',
        '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 5.jpg',
        '/images/TERRASSEMENT DU SITE UCB SITE KSA POUR STE BNT ET FILS CAMBUILT 6.jpg'
      ],
      fullDescription: 'Travaux de terrassement complet du site industriel KSA pour BNT et Fils Cambuilt, incluant le nivellement et la préparation des sols pour construction.',
      client: 'BNT et Fils Cambuilt',
      location: 'Site KSA, Cameroun'
    },
    {
      id: 5,
      category: 'btp',
      title: 'CONSTRUCTION D\'UN HANGAR METALLIQUE POUR STOCKAGE DES TRANSFORMATEURS AU PCB A LA CENTRALE THERMIQUE DE LOGBABA',
      description: 'Hangar technique pour équipements électriques',
      mainImage: '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 1.jpg',
      secondaryImages: [
        '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 2.jpg',
        '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 3.jpg',
        '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 4.jpg',
        '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 5.jpg',
        '/images/HANGAR METALLIQUE POUR STOCKAGE DES TRANSFPRMATEUR AU PCB A LA CENTRALE THERMIQUE 6.jpg'
      ],
      fullDescription: 'Construction d\'un hangar métallique spécialisé pour le stockage des transformateurs au PCB à la centrale thermique de Logbaba, avec des caractéristiques techniques spécifiques.',
      client: 'ENEO',
      location: 'Centrale Thermique de Logbaba, Douala'
    },
    {
      id: 6,
      category: 'genie-civil',
      title: 'EXÉCUTION DE LA DEUXIÈME PHASE DES TRAVAUX D\'AMÉNAGEMENT DANS LA ZONE INDUSTRIELLE DE KOUMÉ-BONIS À BERTOUA',
      description: 'Aménagement de zone industrielle',
      mainImage: '/images/PHASE DES TRAVAUX D\'AMÉNAGEMENT DANS LA ZONE .jpg',
      secondaryImages: [
        '/images/PHASE DES TRAVAUX D\'AMÉNAGEMENT DANS LA ZONE 2.jpg',
        '/images/PHASE DES TRAVAUX D\'AMÉNAGEMENT DANS LA ZONE 3.jpg'
      ],
      fullDescription: 'Deuxième phase des travaux d\'aménagement de la zone industrielle de Koumé-Bonis à Bertoua, comprenant les voiries et réseaux divers.',
      client: 'Commune de Bertoua',
      location: 'Koumé-Bonis, Bertoua, Cameroun'
    },
    {
      id: 7,
      category: 'btp',
      title: 'TRAVAUX DE DÉBOISEMENT ET DES PISTES D\'ACCÈS DE LA LIGNE 90KV LOM PANGAR BERTOUA (CAMEROUN)',
      description: 'Préparation des accès pour ligne électrique',
      mainImage: '/images/DEBOISEMENT ET DES PISTES D\'ACCES DE LA LIGNE 90-30KV CEGELEC 1.jpg',
      secondaryImages: [
        '/images/DEBOISEMENT ET DES PISTES D\'ACCES DE LA LIGNE 90-30KV CEGELEC 2.jpg',
        '/images/DEBOISEMENT ET DES PISTES D\'ACCES DE LA LIGNE 90-30KV CEGELEC 3.jpg',
        '/images/DEBOISEMENT ET DES PISTES D\'ACCES DE LA LIGNE 90-30KV CEGELEC 4.jpg',
        '/images/DEBOISEMENT ET DES PISTES D\'ACCES DE LA LIGNE 90-30KV CEGELEC 5.jpg'
      ],
      fullDescription: 'Travaux de déboisement et création des pistes d\'accès pour la ligne électrique 90KV Lom Pangar - Bertoua, dans le cadre du projet hydroélectrique.',
      client: 'ENEO / CEGELEC',
      location: 'Lom Pangar - Bertoua, Cameroun'
    },
    {
      id: 8,
      category: 'btp',
      title: 'PROJET DE FABRICATION ET FOURNITURE DES POTEAUX EN BETON ARME (ENEO) YAOUNDE-EKOUNOU',
      description: 'Production et installation de poteaux électriques',
      mainImage: '/images/FABRICATION ET FOURNITURE DES POTEAUX EN BÉTON ARMÉ (ENEO) 1.png',
      secondaryImages: [
        '/images/FABRICATION ET FOURNITURE DES POTEAUX EN BÉTON ARMÉ (ENEO) 2.jpg',
        '/images/FABRICATION ET FOURNITURE DES POTEAUX EN BÉTON ARMÉ (ENEO) 3.jpg',
        '/images/FABRICATION ET FOURNITURE DES POTEAUX EN BÉTON ARMÉ (ENEO) 4.jpg',
        '/images/PROJET DE FABRICATION ET FOURNITURE DES POTEAUX EN BÉTON ARMÉ (ENEO) .png'
      ],
      fullDescription: 'Fabrication et fourniture de poteaux en béton armé pour le réseau électrique ENEO dans la zone de Yaoundé-Ekounou, selon les normes techniques requises.',
      client: 'ENEO',
      location: 'Yaoundé-Ekounou, Cameroun'
    },
    {
      id: 9,
      category: 'genie-civil',
      title: 'TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION)',
      description: 'Travaux de fondation pour l\'usine Cimencam',
      mainImage: '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 1.jpg',
      secondaryImages: [
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 2.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 3.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 4.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 5.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM (FONDATION DU CLINKER STORAGE ET MAIN SUB STATION) 6.jpg'
      ],
      fullDescription: 'Réalisation des travaux de fondation pour le clinker storage et la main sub station de l\'usine Cimencam, avec des solutions techniques adaptées aux contraintes du site.',
      client: 'Cimencam',
      location: 'Nomayos,Cameroun'
    },
    {
      id: 10,
      category: 'genie-civil',
      title: 'TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO)',
      description: 'Travaux de ferraillage pour l\'usine',
      mainImage: '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO) 1.jpg',
      secondaryImages: [
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO) 2.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO) 3.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO) 4.jpg',
        '/images/TRAVAUX DE CONSTRUCTION DE L\'USINE CIMENCAM(IMPLIMENTATION DU FERRAILLAGE DU CIMENT MILL ET DU CIMENT SILO) 5.jpg'
      ],
      fullDescription: 'Mise en place du ferraillage pour le ciment mill et le ciment silo de l\'usine Cimencam, selon les plans techniques et les normes de construction.',
      client: 'Cimencam',
      location: 'Nomayos,Cameroun'
    },
    {
      id: 11,
      category: 'genie-civil',
      title: 'Construction du Clinker Storage CBMICIMAF au PAD Douala',
      description: 'Construction d\'un espace de stockage spécialisé pour le clinker au port de Douala',
      mainImage: '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 1.jpg',
      secondaryImages: [
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 2.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 3.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 4.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 5.jpg',
        '/images/CLINKER STORAGE CBMICIMAF AU PAD DOUALA 6.jpg'
      ],
      fullDescription: 'Construction d\'un magasin dédié au stockage du clinker, matériau essentiel dans la production de ciment. Le projet a nécessité des solutions techniques adaptées à la nature corrosive du produit et aux conditions portuaires.',
      client: 'CIMAF',
      location: 'Port de Douala, Cameroun'
    },
    {
      id: 12,
      category: 'genie-civil',
      title: 'Construction de l\'agence ENEO de Kribi',
      description: 'Construction du bâtiment abritant l\'agence ENEO de Kribi',
      mainImage: '/images/Eneo-kribi.png',
      secondaryImages: [
        '/images/CONSTRUCTION DE L\'AGENCE ENEO DE KRIBI 2.jpg',
        '/images/CONSTRUCTION DE L\'AGENCE ENEO DE KRIBI 4.jpg',
        '/images/CONSTRUCTION DE L\'AGENCE ENEO DE KRIBI 5.jpg'
      ],
      fullDescription: 'Construction complète de l\'agence ENEO de Kribi comprenant les bureaux administratifs et les espaces techniques. Le bâtiment intègre des solutions énergétiques modernes et durables.',
      client: 'ENEO',
      location: 'Kribi, Cameroun'
    },
    {
      id: 13,
      category: 'genie-civil',
      title: 'Construction de l\'Hôtel de Ville de Bassamba',
      description: 'Édifice municipal abritant les services administratifs de la commune',
      mainImage: '/images/RENDU FINAL DE L’HÔTEL DE VILLE DE BASSAMBA.jpg',
      secondaryImages: [
        '/images/CONSTRUCTION DE L’HOTEL DE VILLE DE BASSAMBA 2.jpg',
        '/images/CONSTRUCTION DE L’HOTEL DE VILLE DE BASSAMBA 3.jpg',
        
      ],
      fullDescription: 'Construction complète de l\'Hôtel de Ville de Bassamba, un bâtiment administratif moderne intégrant des espaces publics, des bureaux administratifs et une salle de conseil municipal.',
      client: 'Commune de Bassamba',
      location: 'Bassamba, Cameroun'
    },
    {
      id: 14,
      category: 'btp',
      title: 'Construction des mats d\'éclairage à Yaoundé',
      description: 'Installation d\'éclairage public à la Poste Centrale et Nlongkak',
      mainImage: '/images/CONSTRUCTION DES MATS D’ÉCLAIRAGE À LA POSTE CENTRALE ET AU ROND- POINT NLONGKAK À YAOUNDÉ.jpg',
      secondaryImages: [
        '/images/CONSTRUCTION DES MATS D’ÉCLAIRAGE À LA POSTE CENTRALE ET AU ROND- POINT NLONGKAK À YAOUNDÉ 2.jpg',
        '/images/CONSTRUCTION DES MATS D’ÉCLAIRAGE À LA POSTE CENTRALE ET AU ROND- POINT NLONGKAK À YAOUNDÉ 3.jpg',
        '/images/CONSTRUCTION DES MATS D’ÉCLAIRAGE À LA POSTE CENTRALE ET AU ROND- POINT NLONGKAK À YAOUNDÉ 4.jpg'
        
      ],
      fullDescription: 'Installation de systèmes d\'éclairage  moderne aux points stratégiques de Yaoundé, améliorant la sécurité et le cadre de vie nocturne.',
      client: 'Communauté Urbaine de Yaoundé',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 15,
      category: 'btp',
      title: 'Construction du Centre Sous-Régional de Maintenance des Télécommunications',
      description: 'Infrastructure technique pour la maintenance des équipements de télécommunication',
      mainImage: '/images/CONSTRUCTION DU CENTRE SOUS REGIONAL DE MAINTENANCE DES TELECOMMUNICATIONS AINTENANCE DES TELECOMMUNICATIONS 1.jpg',
      secondaryImages: [
        '/images/CONSTRUCTION DU CENTRE SOUS REGIONAL DE MAINTENANCE DES TELECOMMUNICATIONS AINTENANCE DES TELECOMMUNICATIONS 2.jpg',
        '/images/CONSTRUCTION DU CENTRE SOUS REGIONAL DE MAINTENANCE DES TELECOMMUNICATIONS AINTENANCE DES TELECOMMUNICATIONS 3.jpg',
        '/images/CONSTRUCTION DU CENTRE SOUS REGIONAL DE MAINTENANCE DES TELECOMMUNICATIONS AINTENANCE DES TELECOMMUNICATIONS 4.jpg',
        '/images/CONSTRUCTION DU CENTRE SOUS REGIONAL DE MAINTENANCE DES TELECOMMUNICATIONS AINTENANCE DES TELECOMMUNICATIONS 5.jpg'
      ],
      fullDescription: 'Construction d\'un centre technique dédié à la maintenance des équipements de télécommunication pour toute la sous-région, comprenant des ateliers spécialisés et des espaces de stockage.',
      client: 'Camtel',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 16,
      category: 'maintenance',
      title: 'Travaux de réfection du MINATD',
      description: 'Rénovation complète du bâtiment ministériel',
      mainImage: '/images/RENDU FINAL DU BÂTIMENT CENTRAL DU MINATD APRÈS TRAVAUX DE RÉFECTION.jpg',
      secondaryImages: [
        '/images/TRAVAUX DE RÉFECTION DU MINATD 1.jpg',
        '/images/TRAVAUX DE RÉFECTION DU MINATD 2.jpg',
        '/images/TRAVAUX DE RÉFECTION DU MINATD 3.jpg',
        '/images/TRAVAUX DE RÉFECTION DU MINATD Embellissement des faux plafonds du Bâtiment Central du MINATD 1.jpg',
        '/images/TRAVAUX DE RÉFECTION DU MINATD Embellissement des faux plafonds du Bâtiment Central du MINATD 2.jpg'
      ],
      fullDescription: 'Réfection complète du bâtiment central du Ministère de l\'Administration Territoriale comprenant la rénovation des façades, des espaces intérieurs et des installations techniques.',
      client: 'MINATD',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 17,
      category: 'transport',
      title: 'Installation d\'échafaudage en haute mer',
      description: 'Mise à disposition et installation d\'échafaudages pour travaux offshore',
      mainImage: '/images/MISE À DISPOSITION ET INSTALLATION SUR SITE OFFSHORE DE PLUSIEURS M3 D’ÉCHAFAUDAGE EN HAUTE MER 5.jpg',
      secondaryImages: [
        '/images/MISE À DISPOSITION ET INSTALLATION SUR SITE OFFSHORE DE PLUSIEURS M3 D’ÉCHAFAUDAGE EN HAUTE MER 6.jpg',
        '/images/MISE À DISPOSITION ET INSTALLATION SUR SITE OFFSHORE DE PLUSIEURS M3 D’ÉCHAFAUDAGE EN HAUTE MER 4.jpg',
        '/images/MISE À DISPOSITION ET INSTALLATION SUR SITE OFFSHORE DE PLUSIEURS M3 D’ÉCHAFAUDAGE EN HAUTE MER 1.jpg',
        '/images/MISE À DISPOSITION ET INSTALLATION SUR SITE OFFSHORE DE PLUSIEURS M3 D’ÉCHAFAUDAGE EN HAUTE MER 2.jpg'
        
      ],
      fullDescription: 'Opération complexe de mise à disposition et d\'installation d\'importants volumes d\'échafaudage en milieu marin pour des travaux de maintenance sur des installations offshore.',
      client: 'Société Pétrolière',
      location: 'Zone offshore, Cameroun'
    },
    {
      id: 18,
      category: 'genie-civil',
      title: 'Extension de l\'usine Cimencam Figuil',
      description: 'Extension des capacités de production de l\'usine Cimencam de Figuil',
      mainImage: '/images/EXTENSION DE L’USINE CIMENCAM FIGUIL AVEC STE CBMI  3.jpg',
      secondaryImages: [
        '/images/EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI 2.jpg',
        '/images/EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI 3.jpg',
        '/images/EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI 4.jpg',
        '/images/EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI 5.jpg',
        '/images/EXTENSION DE L\'USINE CIMENCAM FIGUIL AVEC STE CBMI 6.jpg'
      ],
      fullDescription: 'Projet d\'agrandissement des installations existantes de l\'usine Cimencam à Figuil, comprenant de nouvelles lignes de production et des infrastructures annexes pour augmenter la capacité de production de ciment dans la région du Nord.',
      client: 'Cimencam',
      location: 'Figuil, Cameroun'
    },
    {
      id: 19,
      category: 'genie-civil',
      title: 'Construction de l\'amphithéâtre de l\'ENSPT',
      description: 'Amphithéâtre de 700 places à l\'École Nationale Supérieure des Postes et Télécommunications',
      mainImage: '/images/TRAVAUX DE CONSTRUCTION DE L\'AMPHITHEATRE DE 700 PLACES À L\'ECOLE NATIONALE SUPÉRIEURE DES POSTES ET TÉLÉCOMMUNICATIONS DE YAOUNDÉ (ENSPT) 1.jpg',
      secondaryImages: [
        '/images/TRAVAUX DE CONSTRUCTION DE L\'AMPHITHEATRE DE 700 PLACES À L\'ECOLE NATIONALE SUPÉRIEURE DES POSTES ET TÉLÉCOMMUNICATIONS DE YAOUNDÉ (ENSPT) 2.jpg'
      ],
      fullDescription: 'Construction d\'un amphithéâtre moderne de 700 places équipé des dernières technologies audiovisuelles pour l\'École Nationale Supérieure des Postes et Télécommunications de Yaoundé.',
      client: 'Ministère des Postes et Télécommunications',
      location: 'Yaoundé, Cameroun'
    },
    {
      id: 20,
      category: 'genie-civil',
      title: 'Construction d\'un immeuble R+4 à l\'ENAM',
      description: 'Immeuble à usage académique et administratif pour l\'École Nationale d\'Administration et de Magistrature',
      mainImage: '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 6.jpg',
      secondaryImages: [
        '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 5.jpg',
        '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 3.jpg',
        '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 2.jpg',
        '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 1.jpg',
        '/images/TRAVAUX DE CONSTRUCTION D’UN IMMEUBLE R + 4 A USAGE ACADEMIQUE ET ADMINISTRATIF A L’ENAM 4.jpg'
      ],
      fullDescription: 'Construction d\'un immeuble de quatre étages plus rez-de-chaussée abritant des salles de cours, des bureaux administratifs et des espaces de travail pour les enseignants et étudiants de l\'ENAM.',
      client: 'ENAM',
      location: 'Yaoundé, Cameroun'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tous nos Projets' },
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
            Découvrez nos projets récents et nos réalisations exceptionnelles
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Pour découvrir toutes nos activités en détail, n'hésitez pas à consulter notre plaquette commerciale.
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
          {isAdmin && (
            <button className="btn-primary flex items-center mx-auto mt-4">
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
                  src={project.mainImage} 
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
                  src={selectedImage || selectedProject.mainImage} 
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <strong className="text-primary block mb-1">Client:</strong>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <strong className="text-primary block mb-1">Localisation:</strong>
                    <p>{selectedProject.location}</p>
                  </div>
                </div>

                {/* Main project image */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Image principale</h4>
                  <img 
                    src={selectedProject.mainImage} 
                    alt="Main project" 
                    className="w-full h-48 object-cover rounded cursor-pointer"
                    onClick={() => setSelectedImage(selectedProject.mainImage)}
                  />
                </div>

                {/* Secondary images */}
                {selectedProject.secondaryImages.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Autres images du projet</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedProject.secondaryImages.map((image, index) => (
                        <img 
                          key={index}
                          src={image}
                          alt={`Project detail ${index + 1}`}
                          className="w-full h-24 object-cover rounded cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
    
    </section>
  );
};

export default Projects;