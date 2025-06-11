export interface Specification {
  feature: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface HourlyPrice {
  hours: number;
  price: string; // e.g., "17,000"
  currency: string; // e.g., "MXN"
}

// Define a type for icon names based on keys of an icon map (which will be in presentacion.tsx)
// This provides a placeholder for type-safety; actual keys would be from the map.
export type IconName =
  | 'SnowflakeIcon'
  | 'SpeakerWaveIcon'
  | 'TvIcon'
  | 'FireIcon'
  | 'LifebuoyIcon'
  | 'ComputerDesktopIcon'
  | 'GiftIcon'
  | 'SparklesIcon'
  | 'PuzzlePieceIcon'
  | 'MapPinIcon'
  | 'CogIcon'
  | 'CurrencyDollarIcon'
  | 'ChatIcon'
  | 'BluetoothIcon'
  | 'UsersIcon'
  | 'ShieldCheckIcon'
  | 'CalendarDaysIcon'
  | 'SunIcon'
  | 'CheckCircleIcon'
  | 'CalendarIcon';

export interface HighlightedItem {
  text: string;
  iconName: IconName;
}

export interface YachtDetail {
  id: string;
  name: string;
  tagline: string;
  mainImage: string;
  description: string;
  specifications: Specification[];
  locationInfo: string;
  gallery: GalleryImage[];
  pricePerDay?: string;
  hourlyPricing?: HourlyPrice[];
  location: 'Cancun' | 'Puerto Aventuras' | 'Los Cabos' | 'Riviera Maya';
  featureVideoUrl?: string;
  highlightedAmenities?: HighlightedItem[];
  courtesyItems?: HighlightedItem[];
}

const PLACEHOLDER_IMG_LUXURY =
  'https://images.pexels.com/photos/163270/yacht-boat-ship-water-163270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_SAIL =
  'https://images.pexels.com/photos/286593/pexels-photo-286593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_INTERIOR =
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_DECK =
  'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_FLYBRIDGE =
  'https://images.pexels.com/photos/7005436/pexels-photo-7005436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_CATAMARAN_WIDE =
  'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const PLACEHOLDER_IMG_SUNDANCER_PROFILE =
  'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export const yachtDetailsData: YachtDetail[] = [
  {
    id: 'serenity-cruiser',
    name: 'Serenity Cruiser (2024)',
    tagline: 'Tu Santuario Flotante para el Bienestar y la Conexión.',
    mainImage:
      'https://images.pexels.com/photos/164556/pexels-photo-164556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'El Serenity Cruiser es una obra maestra de diseño y tranquilidad. Concebido para aquellos que buscan una escapada rejuvenecedora, este yate combina interiores minimalistas y elegantes con amplias cubiertas abiertas, perfectas para la meditación al amanecer o cenas bajo las estrellas. Sus estabilizadores de última generación aseguran una navegación suave, permitiéndote desconectar y reconectar con la naturaleza en un entorno de lujo discreto y servicio intuitivo. Disfruta de sus espaciosos camarotes, cada uno un refugio privado, y de las áreas comunes diseñadas para fomentar la convivencia y la relajación. La cocina gourmet a bordo, preparada por nuestro chef, utiliza ingredientes frescos y locales para deleitar tu paladar, complementando la experiencia holística que este yate promete.',
    specifications: [
      { feature: 'Eslora', value: '28m (92 pies)' },
      { feature: 'Manga', value: '6.5m (21 pies)' },
      { feature: 'Calado', value: '1.8m (6 pies)' },
      { feature: 'Constructor', value: 'Ocean Spirit Yachts' },
      { feature: 'Año', value: '2024' },
      { feature: 'Camarotes', value: '4 (para 8 huéspedes)' },
      { feature: 'Tripulación', value: '4 miembros' },
      { feature: 'Velocidad de Crucero', value: '12 nudos' },
      { feature: 'Velocidad Máxima', value: '18 nudos' },
      {
        feature: 'Material',
        value: 'Casco de Aluminio, Superestructura de Compuesto',
      },
    ],
    locationInfo:
      'Principalmente en el Caribe Mexicano (Riviera Maya), disponible para traslados al Mediterráneo en temporada.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior Lujoso del Serenity Cruiser con sofas blancos',
      },
      {
        src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta de popa del Serenity Cruiser con cojines y vistas al mar',
      },
      {
        src: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Detalle de un camarote espacioso y elegante en el Serenity Cruiser',
      },
      {
        src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
        alt: 'Salón principal del Serenity Cruiser con diseño moderno y luminoso',
      },
      {
        src: 'https://images.pexels.com/photos/37347/yacht-luxury-vacation-sea.jpg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Jacuzzi en la cubierta del Serenity Cruiser al atardecer',
      },
    ],
    pricePerDay: '$15,000',
    location: 'Cancun',
  },
  {
    id: 'apex-explorer',
    name: 'Apex Explorer (2023)',
    tagline: 'Aventura y Descubrimiento en Cada Horizonte.',
    mainImage:
      'https://images.pexels.com/photos/241360/pexels-photo-241360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'El Apex Explorer está construido para la aventura sin sacrificar el lujo. Con un casco robusto y tecnología de navegación de vanguardia, es capaz de alcanzar calas remotas y ofrecer experiencias de exploración únicas. Equipado con una completa gama de juguetes acuáticos, desde motos de agua hasta equipos de buceo profesional, este yate es la plataforma perfecta para los amantes de la adrenalina y la exploración marina. Sus interiores son modernos, funcionales y confortables, diseñados para relajarse después de un día de emociones. Sus amplias cubiertas ofrecen vistas panorámicas ininterrumpidas, mientras que el beach club a nivel del mar te acerca a las olas. La tripulación experta, incluyendo guías de aventura, está lista para llevarte a descubrir tesoros escondidos.',
    specifications: [
      { feature: 'Eslora', value: '35m (115 pies)' },
      { feature: 'Manga', value: '7.2m (23.6 pies)' },
      { feature: 'Calado', value: '2.2m (7.2 pies)' },
      { feature: 'Constructor', value: 'Horizon Yachts' },
      { feature: 'Año', value: '2023' },
      { feature: 'Camarotes', value: '5 (para 10 huéspedes)' },
      { feature: 'Tripulación', value: '5 miembros' },
      { feature: 'Velocidad de Crucero', value: '14 nudos' },
      { feature: 'Velocidad Máxima', value: '20 nudos' },
      {
        feature: 'Características Especiales',
        value:
          'Plataforma de baño hidráulica, Garaje para tenders y juguetes, Estabilizadores Zero-Speed',
      },
    ],
    locationInfo:
      'Disponible para charters en el Mar de Cortés y la costa del Pacífico Mexicano, con capacidad para expediciones a Alaska.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1179000/pexels-photo-1179000.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Apex Explorer navegando a velocidad mostrando su perfil robusto',
      },
      {
        src: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Juguetes acuáticos como jet skis listos en el Apex Explorer',
      },
      {
        src: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior de un camarote moderno y confortable del Apex Explorer',
      },
      {
        src: 'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
        alt: 'Puente de mando del Apex Explorer con tecnología avanzada',
      },
      {
        src: 'https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Personas disfrutando del sol en la cubierta del Apex Explorer',
      },
    ],
    pricePerDay: '$18,000',
    location: 'Puerto Aventuras',
  },
  {
    id: 'grand-sovereign',
    name: 'Grand Sovereign (2025)',
    tagline: 'Opulencia y Celebración sin Comparación.',
    mainImage:
      'https://images.pexels.com/photos/290394/pexels-photo-290394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'El Grand Sovereign es la personificación del lujo y la grandeza. Diseñado para eventos exclusivos, celebraciones memorables o simplemente para aquellos que no aceptan menos que la opulencia absoluta. Con múltiples cubiertas, un jacuzzi panorámico, cine privado y un equipo de servicio que incluye chef gourmet y mayordomo, cada detalle está pensado para impresionar. Sus amplios salones y comedores pueden acomodar reuniones íntimas o grandes fiestas, siempre con un estilo impecable y una atención al detalle que redefine la experiencia de súper yate. Desde su beach club totalmente equipado hasta su spa y helipuerto, el Grand Sovereign es un palacio flotante.',
    specifications: [
      { feature: 'Eslora', value: '55m (180 pies)' },
      { feature: 'Manga', value: '10m (33 pies)' },
      { feature: 'Calado', value: '3m (9.8 pies)' },
      { feature: 'Constructor', value: 'Lürssen (Concepto)' },
      { feature: 'Año', value: 'Previsto 2025' },
      { feature: 'Camarotes', value: '6 suites (para 12 huéspedes)' },
      { feature: 'Tripulación', value: '12 miembros' },
      { feature: 'Velocidad de Crucero', value: '15 nudos' },
      {
        feature: 'Características Destacadas',
        value:
          'Helipuerto (Touch-and-go), Beach club, Spa completo, Bodega de vinos',
      },
    ],
    locationInfo:
      'Posicionamiento global según solicitud, ideal para el Mediterráneo, Caribe y destinos exóticos.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Salón principal majestuoso y elegante del Grand Sovereign',
      },
      {
        src: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Suite principal opulenta del Grand Sovereign con vistas al mar',
      },
      {
        src: 'https://images.pexels.com/photos/37347/yacht-luxury-vacation-sea.jpg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta espaciosa con jacuzzi y área de lounge en el Grand Sovereign',
      },
      {
        src: 'https://images.pexels.com/photos/6587900/pexels-photo-6587900.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
        alt: 'Comedor formal y sofisticado del Grand Sovereign para cenas elegantes',
      },
      {
        src: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Escalera de lujo interior del Grand Sovereign',
      },
    ],
    pricePerDay: '$25,000',
    location: 'Los Cabos',
  },
  {
    id: 'vela-odyssey',
    name: 'Vela Odyssey (2022)',
    tagline: 'La Elegancia Silenciosa de la Navegación a Vela.',
    mainImage: PLACEHOLDER_IMG_SAIL,
    description:
      'Para los puristas y amantes del mar, el Vela Odyssey ofrece una experiencia de navegación auténtica combinada con el confort moderno. Este elegante velero ketch está diseñado para un rendimiento excepcional y una navegación suave. Disfruta del sonido del viento en las velas y la conexión directa con el océano. Sus interiores son cálidos y acogedores, con maderas nobles y una atención artesanal al detalle. Perfecto para quienes buscan una aventura más íntima y sostenible, explorando costas escarpadas o islas remotas con la gracia y la potencia del viento. Cuenta con amplias cubiertas para tomar el sol y un cockpit protegido para cenas al aire libre.',
    specifications: [
      { feature: 'Eslora', value: '30m (98 pies)' },
      { feature: 'Manga', value: '6.8m (22 pies)' },
      { feature: 'Calado', value: '3.2m (10.5 pies)' },
      { feature: 'Constructor', value: 'Nautor Swan (Concepto)' },
      { feature: 'Año', value: '2022' },
      { feature: 'Camarotes', value: '3 (para 6 huéspedes)' },
      { feature: 'Tripulación', value: '3 miembros' },
      { feature: 'Tipo de Vela', value: 'Ketch' },
      { feature: 'Área Vélica', value: '450 m²' },
    ],
    locationInfo:
      'Cruceros por las Islas Griegas, Costa Dálmata y fiordos noruegos.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/930498/pexels-photo-930498.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Vela Odyssey navegando con velas desplegadas en mar abierto',
      },
      {
        src: 'https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta del Vela Odyssey con detalles en teca y vistas panorámicas',
      },
      {
        src: 'https://images.pexels.com/photos/163078/luxury-yacht-yacht-sailing-yacht-163078.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior acogedor y elegante del Vela Odyssey con acabados en madera',
      },
      {
        src: 'https://images.pexels.com/photos/3355737/pexels-photo-3355737.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
        alt: 'Timón y bañera del Vela Odyssey, centro de mando y relax',
      },
      {
        src: 'https://images.pexels.com/photos/460466/pexels-photo-460466.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Detalle de las velas y mástiles del Vela Odyssey',
      },
    ],
    pricePerDay: '$12,000',
    location: 'Cancun',
  },
  {
    id: 'catalyst-explorer',
    name: 'Catalyst Explorer (2023)',
    tagline: 'Estabilidad, Espacio y Eficiencia en Dos Cascos.',
    mainImage: PLACEHOLDER_IMG_CATAMARAN_WIDE,
    description:
      'El Catalyst Explorer es un catamarán de lujo que redefine el espacio y la estabilidad en el mar. Con sus dos cascos, ofrece una plataforma increíblemente amplia y estable, ideal para familias o grupos que valoran el confort y las vistas panorámicas. Sus grandes ventanales inundan de luz los interiores modernos y bien equipados. La eficiencia de navegación y el bajo calado permiten explorar aguas poco profundas y anclar cerca de playas vírgenes. Disfruta de su flybridge expansivo, perfecto para tomar el sol o disfrutar de cócteles al atardecer, y de sus redes de proa, el lugar ideal para relajarse sobre el agua.',
    specifications: [
      { feature: 'Eslora', value: '24m (78 pies)' },
      { feature: 'Manga', value: '11m (36 pies)' },
      { feature: 'Calado', value: '1.5m (5 pies)' },
      { feature: 'Constructor', value: 'Sunreef Yachts' },
      { feature: 'Año', value: '2023' },
      { feature: 'Camarotes', value: '4 (para 8-10 huéspedes)' },
      { feature: 'Tripulación', value: '4 miembros' },
      { feature: 'Motorización', value: '2 x Volvo Penta D6-480' },
      {
        feature: 'Características',
        value:
          'Amplia red de proa, flybridge espacioso, gran eficiencia de combustible.',
      },
    ],
    locationInfo:
      'Perfecto para las Bahamas, las Islas Vírgenes y el sudeste asiático.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/4069854/pexels-photo-4069854.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Catalyst Explorer Catamarán anclado en aguas turquesas',
      },
      {
        src: 'https://images.pexels.com/photos/7005436/pexels-photo-7005436.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Flybridge del Catalyst Explorer con área de lounge y vistas',
      },
      {
        src: 'https://images.pexels.com/photos/5674092/pexels-photo-5674092.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior espacioso y luminoso del salón del Catalyst Explorer',
      },
      {
        src: 'https://images.pexels.com/photos/6678419/pexels-photo-6678419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
        alt: 'Camarote moderno y confortable en el Catalyst Explorer',
      },
      {
        src: 'https://images.pexels.com/photos/7893804/pexels-photo-7893804.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Red de proa del Catalyst Explorer, ideal para relajarse sobre el agua',
      },
    ],
    pricePerDay: '$16,500',
    location: 'Puerto Aventuras',
  },
  {
    id: 'seanorita-sundancer-2005',
    name: 'Seañorita (Sea Ray Sundancer 2005)',
    tagline: 'Elegancia y Performance en 45 Pies para tu día perfecto.',
    mainImage: 'https://imagizer.imageshack.com/img923/8405/BHB7Ab.jpg',
    description:
      'Disfruta del lujo y rendimiento del Sea Ray Sundancer 45 pies (2005) "Seañorita". Ideal para experiencias náuticas memorables en la Riviera Maya, esta express cruiser combina diseño sofisticado con confort superior. Ofrece un camarote elegante, un baño completo, una sala interior acogedora, y una cocineta bien equipada. Sus amplios espacios exteriores incluyen un asoleadero en proa para disfrutar del sol caribeño y una sala exterior con sombra para relajarse con la brisa marina. Equipada con potentes motores para una navegación suave y emocionante, sistema de sonido Clarion Marine con conexión Bluetooth, y todas las comodidades para un día perfecto explorando las aguas turquesas, visitando Isla Mujeres o haciendo snorkel en los coloridos arrecifes.',
    featureVideoUrl:
      'https://videos.pexels.com/video-files/32408455/32408455-hd_1280_720_25fps.mp4',
    highlightedAmenities: [
      { text: 'Aire Acondicionado y Calefacción', iconName: 'SnowflakeIcon' },
      { text: 'Sistema de Sonido Clarion Marine', iconName: 'SpeakerWaveIcon' },
      { text: 'TVs de Pantalla Plana', iconName: 'TvIcon' },
      { text: 'Cocina Completa (Microondas, Nevera)', iconName: 'FireIcon' },
      {
        text: 'Plataforma de Baño Extendida y Ducha',
        iconName: 'LifebuoyIcon',
      },
      {
        text: 'Electrónica de Navegación Completa (GPS, Radar)',
        iconName: 'ComputerDesktopIcon',
      },
      { text: 'Conexión Bluetooth', iconName: 'BluetoothIcon' },
      { text: 'Amplio Asoleadero en Proa', iconName: 'SunIcon' },
      { text: 'Sala Exterior con Sombra', iconName: 'UsersIcon' },
    ],
    courtesyItems: [
      { text: 'Hielera con 3 Bolsas de Hielo', iconName: 'GiftIcon' },
      { text: '24 Cervezas', iconName: 'GiftIcon' },
      { text: '24 Refrescos', iconName: 'GiftIcon' },
      { text: '24 Aguas Naturales', iconName: 'GiftIcon' },
      { text: 'Equipos de Snorkel', iconName: 'SparklesIcon' },
      { text: 'Chalecos Salvavidas', iconName: 'ShieldCheckIcon' },
      { text: '1 Paddle Board', iconName: 'PuzzlePieceIcon' },
      { text: '2 Cisnes Flotantes', iconName: 'SparklesIcon' },
      { text: '1 Alfombra Flotadora', iconName: 'PuzzlePieceIcon' },
    ],
    specifications: [
      { feature: 'Eslora', value: '45 pies (aprox. 13.7m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Año', value: '2005' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Baños', value: '1' },
      { feature: 'Sala Interior', value: 'Sí' },
      { feature: 'Cocineta', value: 'Sí' },
      { feature: 'Asoleadero', value: 'Sí, en proa' },
      { feature: 'Sala Exterior', value: 'Sí, con sombra' },
      { feature: 'Conexión Bluetooth', value: 'Sí' },
      {
        feature: 'Capacidad Recomendada',
        value: 'Hasta 10-12 pasajeros (consultar)',
      },
    ],
    locationInfo:
      'Disponible en la Riviera Maya. Ideal para paseos por la costa, Isla Mujeres y snorkel en arrecifes.',
    gallery: [
      {
        src: 'https://imagizer.imageshack.com/img923/3029/9lPFz5.jpg',
        alt: 'Sala exterior con sombra del Seañorita Sundancer y mesa',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/3616/Oe0WxO.jpg',
        alt: 'Interior del Seañorita Sundancer mostrando la sala y acceso al camarote',
      },
      {
        src: 'https://imagizer.imageshack.com/img924/7076/YNIWp0.jpg',
        alt: 'Vista lateral del Seañorita Sundancer en el agua cristalina',
      },
      {
        src: 'https://imagizer.imageshack.com/img923/7521/cw5mCJ.jpg',
        alt: 'Cocineta y área de estar interior del Seañorita, bien equipada',
      },
      {
        src: 'https://imagizer.imageshack.com/img924/4285/YgWrf7.jpg',
        alt: 'Puesto de mando moderno del Seañorita Sundancer',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/8519/nCvqgl.jpg',
        alt: 'Asoleadero en la proa del Seañorita con colchonetas amplias',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '17,000', currency: 'MXN' },
      { hours: 6, price: '19,000', currency: 'MXN' },
      { hours: 8, price: '23,000', currency: 'MXN' },
    ],
    location: 'Cancun',
  },
  {
    id: 'seariously-sundancer-2004',
    name: 'SeaRiously (Sea Ray Sundancer 2004)',
    tagline: 'Diseño Elegante y Confort para tu Aventura Náutica en Cancún.',
    mainImage: PLACEHOLDER_IMG_SUNDANCER_PROFILE,
    description:
      'Descubre el Sea Ray Sundancer 45 pies (2004) "SeaRiously", un yate que combina un diseño elegante y moderno con una cabina espaciosa y sumamente confortable, ideal para el entretenimiento y la relajación en las aguas de Cancún y la Riviera Maya. Sus interiores lujosos incluyen una cocina completa y eficiente, un camarote bien equipado para el descanso, y un amplio salón que acomoda con estilo a tus invitados. Equipado con potentes motores diésel, ofrece un rendimiento suave y eficiente. Entre sus características se incluyen aire acondicionado para un confort óptimo, generador a bordo, detalles en teca en cubierta, completa instrumentación de navegación, y conexión Bluetooth para tu entretenimiento. Disfruta de su asoleadero en proa y una cómoda sala exterior con sombra, perfecta para admirar el paisaje.',
    featureVideoUrl:
      'https://videos.pexels.com/video-files/32408384/32408384-hd_1280_720_25fps.mp4',
    highlightedAmenities: [
      { text: '1 Camarote Principal', iconName: 'UsersIcon' },
      { text: 'Sala Interior Confortable', iconName: 'UsersIcon' },
      { text: 'Cosineta Equipada', iconName: 'FireIcon' },
      { text: 'Amplio Asoleadero en Proa', iconName: 'SunIcon' },
      { text: 'Sala Exterior con Sombra', iconName: 'UsersIcon' },
      { text: 'Conexión Bluetooth', iconName: 'BluetoothIcon' },
      { text: 'Aire Acondicionado', iconName: 'SnowflakeIcon' },
      { text: 'Generador a Bordo', iconName: 'CogIcon' },
      { text: 'Cubierta de Teca (Detalles)', iconName: 'PuzzlePieceIcon' },
      {
        text: 'Sistema de Navegación Completo',
        iconName: 'ComputerDesktopIcon',
      },
    ],
    courtesyItems: [
      { text: 'Hielera con 3 Bolsas de Hielo', iconName: 'GiftIcon' },
      { text: '24 Cervezas', iconName: 'GiftIcon' },
      { text: '24 Refrescos', iconName: 'GiftIcon' },
      { text: '24 Aguas Naturales', iconName: 'GiftIcon' },
      { text: 'Equipos de Snorkel', iconName: 'SparklesIcon' },
      { text: 'Chalecos Salvavidas', iconName: 'ShieldCheckIcon' },
    ],
    specifications: [
      { feature: 'Eslora', value: '45 pies (aprox. 13.7m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Año', value: '2004' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Baños', value: '1' },
      { feature: 'Sala Interior', value: 'Sí' },
      { feature: 'Cosineta', value: 'Sí' },
      { feature: 'Asoleadero', value: 'Sí, en proa' },
      { feature: 'Sala Exterior', value: 'Sí, con sombra' },
      { feature: 'Conexión Bluetooth', value: 'Sí' },
      {
        feature: 'Motores',
        value: 'Diésel (ej. Cummins V-drives / Mercruiser)',
      },
      {
        feature: 'Capacidad Recomendada',
        value: 'Hasta 10-12 pasajeros (consultar)',
      },
    ],
    locationInfo:
      'Disponible en la Riviera Maya. Perfecto para excursiones costeras, Isla Mujeres y actividades de snorkel.',
    gallery: [
      {
        src: 'https://imagizer.imageshack.com/img923/8405/BHB7Ab.jpg',
        alt: 'Sea Ray Sundancer 45 pies en el agua azul',
      },
      {
        src: 'https://imagizer.imageshack.com/img923/3029/9lPFz5.jpg',
        alt: 'Cubierta espaciosa del Sea Ray Sundancer',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/3616/Oe0WxO.jpg',
        alt: 'Interior lujoso y confortable del Sea Ray Sundancer',
      },
      {
        src: 'https://imagizer.imageshack.com/img924/7076/YNIWp0.jpg',
        alt: 'Vista lateral elegante del Sea Ray Sundancer navegando',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/8519/nCvqgl.jpg',
        alt: 'Asoleadero en proa del Sea Ray Sundancer, ideal para relajarse',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '16,000', currency: 'MXN' },
      { hours: 6, price: '18,000', currency: 'MXN' },
      { hours: 8, price: '22,000', currency: 'MXN' },
    ],
    location: 'Cancun',
  },
  {
    id: 'searay-flybridge-42ft',
    name: 'Searay Flybridge 42 FT (Aventura Cozumel)',
    tagline:
      'Aventura en Cozumel con todo incluido y vistas panorámicas desde el flybridge.',
    mainImage: PLACEHOLDER_IMG_FLYBRIDGE,
    description:
      'Disfruta de una experiencia inolvidable a bordo del Searay Flybridge de 42 pies. Este yate es perfecto para explorar la belleza de la Riviera Maya, con una ruta especial desde Puerto Aventuras hasta El Cielo en Cozumel. Su diseño flybridge ofrece vistas panorámicas incomparables, ideal para avistar vida marina o simplemente disfrutar del sol y la brisa. Con capacidad para 10 personas, es perfecto para grupos que buscan un día completo de diversión, snorkel y relajación. Incluye una amplia gama de bebidas, ceviche fresco, guacamole, fruta y hamburguesas preparadas a bordo. Nota: Costo de muelle de $20 USD por persona es adicional.',
    specifications: [
      { feature: 'Eslora', value: '42 pies (aprox. 12.8m)' },
      { feature: 'Tipo', value: 'Flybridge Cruiser' },
      { feature: 'Capacidad', value: '10 personas' },
      { feature: 'Duración Charter', value: '8 horas' },
      { feature: 'Ruta Típica', value: 'Puerto Aventuras a El Cielo, Cozumel' },
      { feature: 'Horarios Sugeridos', value: '11am-7pm o 12pm-8pm' },
      { feature: 'Flybridge', value: 'Sí, con área de estar' },
      { feature: 'Cabinas', value: 'Consultar (típicamente 2)' },
    ],
    locationInfo:
      'Salidas desde Puerto Aventuras hacia El Cielo, Cozumel. Ideal para snorkel y disfrutar de aguas cristalinas.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/7005436/pexels-photo-7005436.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Flybridge espacioso del Searay 42FT con vistas al mar',
      },
      {
        src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta de popa del Searay Flybridge, ideal para socializar',
      },
      {
        src: 'https://images.pexels.com/photos/163270/yacht-boat-ship-water-163270.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Searay Flybridge 42FT navegando en aguas turquesas',
      },
      {
        src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior confortable del Searay Flybridge 42FT',
      },
    ],
    hourlyPricing: [{ hours: 8, price: '4900', currency: 'USD' }],
    location: 'Puerto Aventuras',
    highlightedAmenities: [
      { text: 'Travesía a El Cielo, Cozumel', iconName: 'MapPinIcon' },
      { text: 'Ideal para grupos de 10', iconName: 'UsersIcon' },
      { text: 'Vistas panorámicas desde Flybridge', iconName: 'SunIcon' },
    ],
    courtesyItems: [
      { text: 'Agua, refrescos y cervezas', iconName: 'GiftIcon' },
      { text: 'Ceviche de camarón fresco', iconName: 'SparklesIcon' },
      { text: 'Guacamole y salsa casera', iconName: 'SparklesIcon' },
      { text: 'Fruta fresca de temporada', iconName: 'SparklesIcon' },
      { text: 'Hamburguesas preparadas a bordo', iconName: 'SparklesIcon' },
    ],
  },
  {
    id: 'yate-casanova-sundancer-48ft',
    name: "Yate Casanova (Sea Ray Sundancer '48 FT)",
    tagline:
      'Lujo y Confort Espacioso con Múltiples Amenidades y Estilo Italiano.',
    mainImage:
      'https://images.pexels.com/photos/164556/pexels-photo-164556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Yate Casanova, un impresionante Sea Ray Sundancer de 48 pies, redefine el lujo y la comodidad en el mar. Con un diseño elegante y espacioso, este yate está equipado con tres aires acondicionados para asegurar el confort en cualquier clima. Dispone de dos camarotes privados, dos baños completos, dos salas de estar (interior y exterior) y una cocina completa con estufa, refrigerador, microondas y licuadora. Disfruta de su amplio asoleadero en popa, y para los amantes de la parrilla, ofrece la opción de asador (con cobro extra). Perfecto para un día inolvidable en Cancún o la Riviera Maya, el Casanova cuenta con todas las comodidades modernas, incluyendo conexión Bluetooth, internet y servicio de toallas para todos los invitados.',
    specifications: [
      { feature: 'Eslora', value: '48 pies (aprox. 14.6m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Aires Acondicionados', value: '3 unidades' },
      { feature: 'Camarotes', value: '2' },
      { feature: 'Baños', value: '2' },
      { feature: 'Salas', value: '2 (interior y exterior)' },
      {
        feature: 'Cocina Equipada',
        value: 'Sí (Estufa, Refrigerador, Microondas, Licuadora)',
      },
      { feature: 'Neveras Exteriores', value: 'Sí' },
      { feature: 'Comedor', value: 'Sí' },
      { feature: 'Asoleadero', value: 'En popa, espacioso' },
      { feature: 'Asador', value: 'Sí (con cobro extra)' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya, ideal para day charters de lujo.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior lujoso del Yate Casanova',
      },
      {
        src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta de popa del Yate Casanova con asientos',
      },
      {
        src: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Salón principal del Yate Casanova',
      },
      {
        src: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Camarote elegante del Yate Casanova',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '22,000', currency: 'MXN' },
      { hours: 6, price: '28,000', currency: 'MXN' },
      { hours: 8, price: '32,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: '3 Aires Acondicionados potentes', iconName: 'SnowflakeIcon' },
      {
        text: '2 Camarotes privados, 2 Baños completos',
        iconName: 'UsersIcon',
      },
      { text: 'Cocina Completa y bien equipada', iconName: 'FireIcon' },
      {
        text: 'Conexión Bluetooth e Internet a bordo',
        iconName: 'BluetoothIcon',
      },
      { text: 'Servicio de Toallas incluido', iconName: 'GiftIcon' },
      { text: 'Amplio asoleadero en popa', iconName: 'SunIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas frías', iconName: 'GiftIcon' },
      { text: '24 Refrescos variados', iconName: 'GiftIcon' },
      { text: '24 Botellas de Agua', iconName: 'GiftIcon' },
      { text: '5 Bolsas de Hielo', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel de calidad', iconName: 'SparklesIcon' },
      {
        text: 'Cañas de Pesca (avisar con tiempo)',
        iconName: 'PuzzlePieceIcon',
      },
      { text: 'Alfombra Marina para flotar', iconName: 'PuzzlePieceIcon' },
    ],
  },
  {
    id: 'sea-ray-red-fire-sundancer-46ft',
    name: 'Sea Ray "Red Fire" (Sundancer 46 pies)',
    tagline: 'Confort, Diversión y Estilo con Plataforma Flotante.',
    mainImage:
      'https://images.pexels.com/photos/241360/pexels-photo-241360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Red Fire" Sundancer de 46 pies es tu opción ideal para un día espectacular en el mar Caribe. Este yate combina un diseño deportivo con interiores confortables, incluyendo un camarote privado y una sala interior con aire acondicionado para escapar del calor. La amplia sala exterior con sombra es perfecta para socializar, mientras que el asoleadero en proa invita a tomar el sol. Disfruta de tu música favorita vía Bluetooth y sumérgete en la diversión con el equipo de snorkel y la popular plataforma flotante. La experiencia es completada por un capitán experto y un marinero atento a tus necesidades.',
    specifications: [
      { feature: 'Eslora', value: '46 pies (aprox. 14m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Sala Interior', value: 'Con Aire Acondicionado' },
      { feature: 'Sala Exterior', value: 'Amplia con sombra' },
      { feature: 'Asoleadero', value: 'Sí, en proa' },
      { feature: 'Tripulación', value: 'Capitán y Marinero' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya, perfecto para day charters.',
    gallery: [
      {
        src: PLACEHOLDER_IMG_SUNDANCER_PROFILE,
        alt: 'Sea Ray Red Fire navegando',
      },
      { src: PLACEHOLDER_IMG_DECK, alt: 'Cubierta del Red Fire con asientos' },
      {
        src: PLACEHOLDER_IMG_INTERIOR,
        alt: 'Interior confortable del Red Fire',
      },
      {
        src: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Plataforma flotante y equipo de snorkel',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '14,000', currency: 'MXN' },
      { hours: 6, price: '18,000', currency: 'MXN' },
      { hours: 8, price: '22,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: 'Aire Acondicionado (Sala Interior)', iconName: 'SnowflakeIcon' },
      { text: 'Amplia Sala Exterior con Sombra', iconName: 'UsersIcon' },
      { text: 'Asoleadero en proa', iconName: 'SunIcon' },
      { text: 'Música por Bluetooth', iconName: 'BluetoothIcon' },
      { text: 'Plataforma Flotante incluida', iconName: 'PuzzlePieceIcon' },
      { text: 'Capitán y Marinero Incluidos', iconName: 'UsersIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas', iconName: 'GiftIcon' },
      { text: '24 Aguas', iconName: 'GiftIcon' },
      { text: '24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel', iconName: 'SparklesIcon' },
    ],
  },
  {
    id: 'sea-ray-oceani-sundancer-44ft',
    name: 'Sea Ray "Oceani" (Sundancer 44 pies)',
    tagline: 'Tu Escapada Marítima Confortable y Bien Equipada.',
    mainImage:
      'https://images.pexels.com/photos/163078/luxury-yacht-yacht-sailing-yacht-163078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Oceani" Sundancer de 44 pies te espera para una jornada de relax y diversión en las aguas turquesas. Este yate ofrece un camarote acogedor, una sala interior con aire acondicionado para máximo confort, y una espaciosa sala exterior con sombra, además de un asoleadero para los amantes del sol. La música por Bluetooth, el equipo de snorkel y una plataforma flotante aseguran entretenimiento para todos. Un capitán y marineros profesionales están a tu servicio para garantizar una navegación segura y placentera.',
    specifications: [
      { feature: 'Eslora', value: '44 pies (aprox. 13.4m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Sala Interior', value: 'Con Aire Acondicionado' },
      { feature: 'Sala Exterior', value: 'Amplia con sombra' },
      { feature: 'Asoleadero', value: 'Sí' },
      { feature: 'Tripulación', value: 'Capitán y Marineros' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya, ideal para explorar la costa.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/930498/pexels-photo-930498.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Sea Ray Oceani Sundancer navegando plácidamente',
      },
      {
        src: 'https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Cubierta del Oceani con cómodos asientos',
      },
      {
        src: 'https://images.pexels.com/photos/3355737/pexels-photo-3355737.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Interior del Oceani mostrando su confort',
      },
      { src: PLACEHOLDER_IMG_DECK, alt: 'Detalle del asoleadero del Oceani' },
    ],
    hourlyPricing: [
      { hours: 4, price: '14,000', currency: 'MXN' },
      { hours: 6, price: '16,000', currency: 'MXN' },
      { hours: 8, price: '18,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: 'Aire Acondicionado (Sala Interior)', iconName: 'SnowflakeIcon' },
      {
        text: 'Música por Bluetooth para ambientar',
        iconName: 'BluetoothIcon',
      },
      {
        text: 'Plataforma Flotante para diversión',
        iconName: 'PuzzlePieceIcon',
      },
      { text: 'Capitán y Marineros expertos', iconName: 'UsersIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas', iconName: 'GiftIcon' },
      { text: '24 Aguas', iconName: 'GiftIcon' },
      { text: '24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel', iconName: 'SparklesIcon' },
    ],
  },
  {
    id: 'sea-ray-intrepido-sundancer-46ft',
    name: 'Sea Ray "Intrepido" (Sundancer 46 pies)',
    tagline: 'Aventura y Confort Intrépido en el Mar Caribe.',
    mainImage:
      'https://images.pexels.com/photos/286593/pexels-photo-286593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Intrepido" Sundancer de 46 pies es la embarcación perfecta para quienes buscan una combinación de aventura y confort. Dispone de un camarote privado, una sala interior con aire acondicionado para momentos de relax, y una espaciosa sala exterior con sombra, además de un generoso asoleadero en proa. Equipado con música por Bluetooth para que pongas tu banda sonora, equipo de snorkel para explorar los arrecifes y una plataforma flotante para disfrutar del agua. La tripulación, compuesta por capitán y marineros, se encargará de todos los detalles de tu travesía.',
    specifications: [
      { feature: 'Eslora', value: '46 pies (aprox. 14m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Aire Acondicionado', value: 'Sí, en sala interior' },
      { feature: 'Sala Exterior', value: 'Con Sombra y Asoleadero' },
      { feature: 'Tripulación', value: 'Capitán y Marineros' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya. Ideal para excursiones a Isla Mujeres.',
    gallery: [
      { src: PLACEHOLDER_IMG_LUXURY, alt: 'Sea Ray Intrepido en el mar' },
      {
        src: PLACEHOLDER_IMG_DECK,
        alt: 'Cubierta del Intrepido con espacio para relajarse',
      },
      { src: PLACEHOLDER_IMG_INTERIOR, alt: 'Salón interior del Intrepido' },
      {
        src: 'https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Personas disfrutando en el asoleadero del Intrepido',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '14,000', currency: 'MXN' },
      { hours: 6, price: '16,000', currency: 'MXN' },
      { hours: 8, price: '18,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: 'Aire Acondicionado (Sala Interior)', iconName: 'SnowflakeIcon' },
      { text: 'Música por Bluetooth a bordo', iconName: 'BluetoothIcon' },
      {
        text: 'Plataforma Flotante para disfrutar del agua',
        iconName: 'PuzzlePieceIcon',
      },
      { text: 'Asoleadero amplio en proa', iconName: 'SunIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas', iconName: 'GiftIcon' },
      { text: '24 Aguas', iconName: 'GiftIcon' },
      { text: '24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel', iconName: 'SparklesIcon' },
      { text: 'Capitán y Marineros', iconName: 'UsersIcon' },
    ],
  },
  {
    id: 'sea-castle-fly-bridge-50ft',
    name: 'Sea Castle (Sea Ray Fly Bridge 50 FT)',
    tagline:
      'Lujo Espacioso con Múltiples Camarotes y Comodidades Premium en un Castillo Flotante.',
    mainImage:
      'https://images.pexels.com/photos/1179000/pexels-photo-1179000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Castle es un imponente Sea Ray Fly Bridge de 50 pies, un verdadero castillo flotante diseñado para el máximo confort y entretenimiento. Ofrece tres aires acondicionados, tres camarotes elegantes, dos baños completos, y dos amplias salas de estar. El entretenimiento está garantizado con un televisor con internet. La cocina está totalmente equipada con estufa, microondas, licuadora, cafetera, servicio de vajillas, vasos, tenedores, dos refrigeradores y dos neveras. Disfruta del sol en el asoleadero de popa, o solicita el asador para una parrillada en el mar (con cobro extra). Conexión Bluetooth, internet, equipo de snorkel, cañas de pesca (avisar con tiempo), una divertida alfombra marina, un inflable de Cisne flotante y servicio de toallas completan la experiencia de lujo.',
    specifications: [
      { feature: 'Eslora', value: '50 pies (aprox. 15.2m)' },
      { feature: 'Modelo', value: 'Sea Ray Fly Bridge' },
      { feature: 'Aires Acondicionados', value: '3 unidades' },
      { feature: 'Camarotes', value: '3' },
      { feature: 'Baños', value: '2' },
      { feature: 'Salas', value: '2' },
      { feature: 'Cocina Completa', value: 'Sí, muy equipada' },
      { feature: 'Asador', value: 'Sí (con cobro extra)' },
      { feature: 'TV con Internet', value: 'Sí' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya, perfecto para grupos grandes o familias.',
    gallery: [
      {
        src: PLACEHOLDER_IMG_FLYBRIDGE,
        alt: 'Flybridge del Sea Castle con vistas panorámicas',
      },
      {
        src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Salón interior espacioso del Sea Castle',
      },
      {
        src: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Uno de los camarotes lujosos del Sea Castle',
      },
      {
        src: 'https://images.pexels.com/photos/6587900/pexels-photo-6587900.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Comedor elegante del Sea Castle',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '24,000', currency: 'MXN' },
      { hours: 6, price: '30,000', currency: 'MXN' },
      { hours: 8, price: '34,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: '3 Camarotes espaciosos, 2 Baños', iconName: 'UsersIcon' },
      { text: 'Cocina Super Equipada para gourmets', iconName: 'FireIcon' },
      { text: 'TV con Internet para entretenimiento', iconName: 'TvIcon' },
      { text: 'Conexión Bluetooth e Internet', iconName: 'BluetoothIcon' },
      { text: 'Alfombra Marina y Cisne Flotante', iconName: 'SparklesIcon' },
      { text: 'Flybridge con vistas espectaculares', iconName: 'SunIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas, 24 Refrescos, 24 Aguas', iconName: 'GiftIcon' },
      { text: '5 Bolsas de Hielo', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel', iconName: 'SparklesIcon' },
      {
        text: 'Cañas de Pesca (avisar con anticipación)',
        iconName: 'PuzzlePieceIcon',
      },
      { text: 'Servicio de Toallas de lujo', iconName: 'GiftIcon' },
    ],
  },
  {
    id: 'sea-ray-azul-sundancer-46ft',
    name: 'Sea Ray "Azul" (Sundancer 46 pies)',
    tagline: 'Elegancia Azul para tu Día Inolvidable en el Mar Caribeño.',
    mainImage:
      'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Azul" Sundancer de 46 pies es una joya de elegancia y confort. Este yate cuenta con un camarote privado, una sala interior con aire acondicionado para un ambiente fresco, una espaciosa sala exterior con sombra para disfrutar de la brisa, y un asoleadero perfecto para broncearse. Está equipado con música por Bluetooth para crear el ambiente perfecto, equipo de snorkel para explorar las maravillas submarinas y una plataforma flotante para mayor diversión en el agua. Un capitán experto y marineros atentos completan la tripulación para asegurar una experiencia excepcional.',
    specifications: [
      { feature: 'Eslora', value: '46 pies (aprox. 14m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Aire Acondicionado', value: 'Sí, en sala interior' },
      { feature: 'Plataforma Flotante', value: 'Sí' },
      { feature: 'Tripulación', value: 'Capitán y Marineros' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya. Excelente para day charters y paseos costeros.',
    gallery: [
      {
        src: PLACEHOLDER_IMG_SUNDANCER_PROFILE,
        alt: 'Sea Ray Azul navegando en aguas azules',
      },
      {
        src: PLACEHOLDER_IMG_DECK,
        alt: 'Cubierta del Sea Ray Azul con cómodos asientos',
      },
      {
        src: PLACEHOLDER_IMG_INTERIOR,
        alt: 'Interior elegante del Sea Ray Azul',
      },
      {
        src: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Camarote del Sea Ray Azul',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '14,000', currency: 'MXN' },
      { hours: 6, price: '17,000', currency: 'MXN' },
      { hours: 8, price: '21,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      {
        text: 'Aire Acondicionado en sala interior',
        iconName: 'SnowflakeIcon',
      },
      {
        text: 'Música por Bluetooth para tu playlist',
        iconName: 'BluetoothIcon',
      },
      {
        text: 'Plataforma Flotante para diversión acuática',
        iconName: 'PuzzlePieceIcon',
      },
      {
        text: 'Amplio asoleadero y sala exterior con sombra',
        iconName: 'SunIcon',
      },
    ],
    courtesyItems: [
      { text: '24 Cervezas, 24 Aguas, 24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel de calidad', iconName: 'SparklesIcon' },
      { text: 'Capitán y Marineros profesionales', iconName: 'UsersIcon' },
    ],
  },
  {
    id: 'sea-ray-atenea-sundancer-46ft',
    name: 'Sea Ray "Atenea" (Sundancer 46 pies)',
    tagline: 'Confort Divino y Sabiduría Náutica en el Caribe Mexicano.',
    mainImage:
      'https://images.pexels.com/photos/290394/pexels-photo-290394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Atenea" Sundancer de 46 pies te invita a una experiencia de navegación divina. Ofrece un camarote confortable, una sala interior con aire acondicionado para un ambiente siempre agradable, y una amplia sala exterior con sombra, complementada por un asoleadero para disfrutar del sol. Incluye música por Bluetooth para tus momentos de relax, equipo de snorkel para explorar la vida marina y una plataforma flotante para zambullidas y diversión. Con un capitán experto y un marinero dedicado, tu día en el mar será inolvidable.',
    specifications: [
      { feature: 'Eslora', value: '46 pies (aprox. 14m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Aire Acondicionado', value: 'En sala interior' },
      { feature: 'Equipo de Snorkel', value: 'Incluido' },
      { feature: 'Tripulación', value: 'Capitán y Marinero' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya. Perfecto para explorar la costa con estilo.',
    gallery: [
      {
        src: 'https://imagizer.imageshack.com/img923/8405/BHB7Ab.jpg',
        alt: 'Sea Ray Atenea surcando las olas',
      },
      {
        src: 'https://imagizer.imageshack.com/img923/3029/9lPFz5.jpg',
        alt: 'Zona de estar en cubierta del Atenea',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/3616/Oe0WxO.jpg',
        alt: 'Interior confortable del Atenea',
      },
      {
        src: 'https://imagizer.imageshack.com/img922/8519/nCvqgl.jpg',
        alt: 'Asoleadero en proa del Atenea',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '14,000', currency: 'MXN' },
      { hours: 6, price: '18,000', currency: 'MXN' },
      { hours: 8, price: '22,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: 'A/C en Sala Interior para confort', iconName: 'SnowflakeIcon' },
      {
        text: 'Música Bluetooth para el ambiente ideal',
        iconName: 'BluetoothIcon',
      },
      {
        text: 'Plataforma Flotante para disfrutar el mar',
        iconName: 'PuzzlePieceIcon',
      },
      { text: 'Sala exterior con sombra y asoleadero', iconName: 'UsersIcon' },
    ],
    courtesyItems: [
      { text: '24 Cervezas, 24 Aguas, 24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel incluido', iconName: 'SparklesIcon' },
      { text: 'Capitán y Marinero a tu servicio', iconName: 'UsersIcon' },
    ],
  },
  {
    id: 'sea-ray-agora-sundancer-46ft',
    name: 'Sea Ray "Agora" (Sundancer 46 pies)',
    tagline: 'Tu Punto de Encuentro para la Diversión Marina y el Relax.',
    mainImage:
      'https://images.pexels.com/photos/164556/pexels-photo-164556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
    description:
      'El Sea Ray "Agora" Sundancer de 46 pies está listo para ser tu ágora personal en el mar, un punto de encuentro para la diversión y el relax. Cuenta con un camarote acogedor, una sala interior climatizada para máximo confort, una sala exterior con amplia sombra para socializar, y un asoleadero para los que buscan el bronceado perfecto. La música por Bluetooth, el equipo de snorkel y una gran plataforma flotante garantizan entretenimiento sin fin. Incluye capitán y marineros experimentados para una navegación segura y placentera.',
    specifications: [
      { feature: 'Eslora', value: '46 pies (aprox. 14m)' },
      { feature: 'Modelo', value: 'Sea Ray Sundancer' },
      { feature: 'Camarotes', value: '1' },
      { feature: 'Sala Interior', value: 'Climatizada (A/C)' },
      { feature: 'Plataforma Flotante', value: 'Grande, incluida' },
      { feature: 'Tripulación', value: 'Capitán y Marineros' },
    ],
    locationInfo:
      'Disponible en Cancún y Riviera Maya. Ideal para grupos y familias.',
    gallery: [
      {
        src: PLACEHOLDER_IMG_SUNDANCER_PROFILE,
        alt: 'Sea Ray Agora en el mar Caribe',
      },
      {
        src: PLACEHOLDER_IMG_DECK,
        alt: 'Cubierta del Agora, ideal para socializar',
      },
      {
        src: PLACEHOLDER_IMG_INTERIOR,
        alt: 'Salón interior climatizado del Agora',
      },
      {
        src: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Diversión con la plataforma flotante del Agora',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '15,000', currency: 'MXN' },
      { hours: 6, price: '17,000', currency: 'MXN' },
      { hours: 8, price: '21,000', currency: 'MXN' },
    ],
    location: 'Cancun',
    highlightedAmenities: [
      { text: 'Sala Interior con A/C confortable', iconName: 'SnowflakeIcon' },
      { text: 'Conexión Bluetooth para tu música', iconName: 'BluetoothIcon' },
      {
        text: 'Plataforma Flotante Grande para diversión',
        iconName: 'PuzzlePieceIcon',
      },
      {
        text: 'Asoleadero y amplia sala exterior con sombra',
        iconName: 'SunIcon',
      },
    ],
    courtesyItems: [
      { text: '24 Cervezas, 24 Aguas, 24 Refrescos', iconName: 'GiftIcon' },
      { text: 'Equipo de Snorkel de calidad', iconName: 'SparklesIcon' },
      { text: 'Capitán y Marineros experimentados', iconName: 'UsersIcon' },
    ],
  },
  {
    id: 'cabo-double-rose-31ft',
    name: 'Double Rose (Cabo 31 pies)',
    tagline: 'Pesca Deportiva y Placer Auténtico en el Mar de Los Cabos.',
    mainImage:
      'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder for fishing boat
    description:
      'La Embarcación Cabo "Double Rose" de 31 pies es tu aliada perfecta para la pesca deportiva de clase mundial y paseos inolvidables en las ricas aguas de Los Cabos. Conocida por su robustez y diseño optimizado para la pesca, esta embarcación ofrece una experiencia auténtica. Ofrece diferentes paquetes que incluyen bebidas refrescantes, snacks como guacamole fresco y fruta de temporada, equipo de pesca profesional y equipo de snorkel para explorar la vida marina. Para una experiencia superior, consulta nuestro paquete Gourmet con chef a bordo y comidas de seis tiempos.\n\n**Paquete Gourmet (Precios en MXN Adicionales):**\n- 4 Horas: $95,000 pesos\n- 6 Horas: $125,000 pesos\n*Incluye: Cocina y chef a bordo, comidas a 6 tiempos gourmet, botanas premium, open bar, paddle board, snorkeling. ¡Todo de Lujo!*',
    specifications: [
      { feature: 'Eslora', value: '31 pies (aprox. 9.4m)' },
      { feature: 'Tipo', value: 'Embarcación Cabo (Pesca Deportiva)' },
      { feature: 'Ideal para', value: 'Pesca, Snorkel, Paseos Costeros' },
      { feature: 'Base', value: 'Los Cabos, Baja California Sur' },
      {
        feature: 'Equipamiento de Pesca',
        value: 'Profesional (consultar detalles)',
      },
    ],
    locationInfo:
      'Los Cabos, Baja California Sur. Ofrece paquetes estándar y un paquete gourmet de lujo opcional.',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/691620/pexels-photo-691620.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Barco de pesca tipo Cabo en acción',
      },
      {
        src: 'https://images.pexels.com/photos/5046508/pexels-photo-5046508.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Pescadores disfrutando en la cubierta del Double Rose',
      },
      {
        src: 'https://images.pexels.com/photos/19213656/pexels-photo-19213656.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Vistas de la costa de Los Cabos desde el Double Rose',
      },
      {
        src: 'https://images.pexels.com/photos/7893804/pexels-photo-7893804.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Snacks y bebidas a bordo del Double Rose',
      },
    ],
    hourlyPricing: [
      { hours: 4, price: '1450', currency: 'USD' },
      { hours: 6, price: '2500', currency: 'USD' },
      { hours: 8, price: '3100', currency: 'USD' },
    ],
    location: 'Los Cabos',
    highlightedAmenities: [
      {
        text: 'Equipo de Pesca Profesional completo',
        iconName: 'PuzzlePieceIcon',
      },
      {
        text: 'Paquete Gourmet Opcional con Chef Privado',
        iconName: 'FireIcon',
      },
      {
        text: 'Ideal para explorar los puntos de pesca de Los Cabos',
        iconName: 'MapPinIcon',
      },
    ],
    courtesyItems: [
      {
        text: 'Aguas, Cervezas, Refrescos (Varía por paquete/duración)',
        iconName: 'GiftIcon',
      },
      { text: 'Hielo abundante', iconName: 'GiftIcon' },
      {
        text: 'Guacamole fresco y Fruta (Incluido en paquetes USD)',
        iconName: 'SparklesIcon',
      },
      {
        text: 'Lunch y Ceviche (Incluido en paquete USD de 8hrs)',
        iconName: 'SparklesIcon',
      },
      { text: 'Equipo de Snorkel', iconName: 'SparklesIcon' },
    ],
  },
];
