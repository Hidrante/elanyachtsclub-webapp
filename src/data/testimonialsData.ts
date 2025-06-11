export interface Testimonial {
  id: string;
  author: string;
  locationDate: string; // e.g., "Cancún, Julio 2024"
  rating: number; // 1-5
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'Familia López',
    locationDate: 'Cancún, Agosto 2024',
    rating: 5,
    text: "¡Una experiencia inolvidable! El 'Serenity Cruiser' superó todas nuestras expectativas. La tripulación fue increíblemente atenta y la comida deliciosa. Los niños amaron el snorkel en El Cielo.",
  },
  {
    id: 'testimonial-2',
    author: 'Ana G. & Marco P.',
    locationDate: 'Riviera Maya, Julio 2024',
    rating: 5,
    text: "Celebramos nuestro aniversario a bordo y fue mágico. La planificación del concierge fue impecable, cada detalle cuidado. El atardecer en el 'Apex Explorer' fue de ensueño.",
  },
  {
    id: 'testimonial-3',
    author: 'Carlos S.',
    locationDate: 'Los Cabos, Junio 2024',
    rating: 4,
    text: "Gran día de pesca en el 'Double Rose'. La tripulación conocía los mejores puntos. Aunque no pescamos el marlín gigante, la atención y el servicio fueron excelentes. El guacamole, ¡top!",
  },
  {
    id: 'testimonial-4',
    author: 'Sophia Müller',
    locationDate: 'Isla Mujeres, Septiembre 2024',
    rating: 5,
    text: "El viaje a Isla Mujeres en el 'Seañorita' fue perfecto. El yate es muy cómodo y el capitán nos llevó a lugares preciosos para nadar. El ceviche a bordo, una delicia.",
  },
  {
    id: 'testimonial-5',
    author: 'David Chen',
    locationDate: 'Puerto Aventuras, Agosto 2024',
    rating: 5,
    text: "Alquilamos el 'Catalyst Explorer' y la estabilidad del catamarán es impresionante. Ideal para nuestra familia con niños pequeños. El espacio es increíble y el flybridge tiene vistas espectaculares.",
  },
  {
    id: 'testimonial-6',
    author: 'Grupo Empresarial Alfa',
    locationDate: 'Cancún, Mayo 2024',
    rating: 5,
    text: "Organizamos un evento corporativo en el 'Grand Sovereign'. El lujo, el espacio y el servicio fueron de primer nivel. Nuestros clientes quedaron fascinados. Un éxito total.",
  },
  {
    id: 'testimonial-7',
    author: 'Laura V.',
    locationDate: 'Cozumel, Julio 2024',
    rating: 5,
    text: 'El buceo en Cozumel fue una de las mejores experiencias de mi vida. La tripulación del yate que nos llevó fue muy profesional y conocedora de los arrecifes. ¡Totalmente recomendado!',
  },
  {
    id: 'testimonial-8',
    author: 'Roberto Jiménez',
    locationDate: 'Cancún, Agosto 2024',
    rating: 4,
    text: "El 'SeaRiously' es un yate muy bien mantenido y cómodo. Pasamos un día excelente. El único detalle fue que el paddle board era un poco viejo, pero el resto, perfecto.",
  },
  {
    id: 'testimonial-9',
    author: 'Isabelle Dubois',
    locationDate: 'Los Cabos, Septiembre 2024',
    rating: 5,
    text: "La atención personalizada desde el primer contacto fue lo que nos convenció. El equipo de elanyachts.club realmente se esfuerza por entender tus necesidades. El 'Sea Castle' fue impresionante.",
  },
  {
    id: 'testimonial-10',
    author: 'Familia Rodríguez',
    locationDate: 'Riviera Maya, Junio 2024',
    rating: 5,
    text: "Increíblemente profesionales y amables. El yate 'Atenea' estaba impecable y el servicio del capitán y marinero fue excepcional. Hicieron nuestro día familiar muy especial.",
  },
  {
    id: 'testimonial-11',
    author: 'Miguel Ángel Torres',
    locationDate: 'Cancún, Julio 2024',
    rating: 5,
    text: "La transparencia en los precios fue algo que valoramos mucho. Sin sorpresas. El 'Agora' es un yate fantástico para grupos, muy espacioso y la plataforma flotante es un plus.",
  },
  {
    id: 'testimonial-12',
    author: 'Emily White',
    locationDate: 'Los Cabos, Agosto 2024',
    rating: 5,
    text: "El chef a bordo del 'Double Rose' (paquete gourmet) nos preparó una comida espectacular. Ver el atardecer mientras cenábamos en el mar de Cortés fue mágico. Vale cada centavo.",
  },
  {
    id: 'testimonial-13',
    author: 'Javier Fernández',
    locationDate: 'Puerto Aventuras, Mayo 2024',
    rating: 4,
    text: 'Buena experiencia en el Searay Flybridge 42ft. El Cielo es un paraíso. El costo del muelle por persona debería estar más claro desde el inicio, pero el viaje en sí fue genial.',
  },
  {
    id: 'testimonial-14',
    author: 'Chloe Kim',
    locationDate: 'Cancún, Septiembre 2024',
    rating: 5,
    text: 'El Yate Casanova es puro lujo. Los dos camarotes y múltiples áreas de estar lo hacen muy cómodo. La atención del personal de elanyachts.club fue excelente en todo momento.',
  },
  {
    id: 'testimonial-15',
    author: 'Mateo Vargas',
    locationDate: 'Riviera Maya, Agosto 2024',
    rating: 5,
    text: "El 'Red Fire' es un yate muy divertido. La música sonaba genial y la plataforma flotante fue el éxito con mis amigos. El capitán fue muy complaciente con nuestras peticiones de ruta.",
  },
  {
    id: 'testimonial-16',
    author: 'Olivia Brown',
    locationDate: 'Cancún, Julio 2024',
    rating: 5,
    text: "El servicio de concierge 24/7 es un verdadero diferenciador. Nos ayudaron con reservas para cenar después de nuestro día en el 'Oceani'. Muy recomendable.",
  },
  {
    id: 'testimonial-17',
    author: 'Liam Wilson',
    locationDate: 'Los Cabos, Junio 2024',
    rating: 4,
    text: "El 'Intrepido' es un buen yate, cómodo y con todo lo necesario. La tripulación fue amable. Quizás un poco más de variedad en las bebidas de cortesía sería bueno.",
  },
  {
    id: 'testimonial-18',
    author: 'Daniela Morales',
    locationDate: 'Cancún, Agosto 2024',
    rating: 5,
    text: "El 'Sea Castle' es perfecto para familias grandes. Los 3 camarotes nos dieron mucha privacidad y comodidad. Los niños disfrutaron mucho el inflable del cisne.",
  },
  {
    id: 'testimonial-19',
    author: 'Kenji Tanaka',
    locationDate: 'Riviera Maya, Septiembre 2024',
    rating: 5,
    text: "Elegimos el 'Azul' por su elegancia y no nos decepcionó. Un día perfecto, aguas cristalinas y un servicio de primera. Volveremos a contactar a elanyachts.club.",
  },
  {
    id: 'testimonial-20',
    author: 'Sofia Petrova',
    locationDate: 'Cancún, Julio 2024',
    rating: 5,
    text: 'La calidad de los yates es excelente, pero lo que realmente destaca es el profesionalismo y calidez del equipo, tanto en la planificación como a bordo. ¡Gracias por una experiencia maravillosa!',
  },
];
