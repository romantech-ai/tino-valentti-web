export const clinic = {
  // === IDENTIDAD ===
  name: "Tino Valentti",
  tagline: "Peluquería y Estética en Ciudad Real",
  description: "Tino Valentti es una peluquería y centro de estética de referencia en Ciudad Real. Especialistas en cortes, coloración, peinados para eventos, tratamientos capilares Dermapen y asesoramiento de imagen personalizado. Más de 25 años embelleciendo a nuestros clientes.",

  // === PALETA (Elegante Dorado/Negro - Art Deco) ===
  colors: {
    primary: "#C9A227",      // Dorado elegante
    secondary: "#1A1A1A",    // Negro profundo
    accent: "#D4AF37",       // Oro champán
    neutral: "#FAF9F6",      // Blanco marfil
  },

  // === CONTACTO ===
  phone: "926 22 35 43",
  whatsapp: null as string | null,
  whatsappMessage: null as string | null,
  email: "tinovalentti@gmail.com",

  // === UBICACIÓN ===
  address: {
    street: "Av. la Mancha, 12",
    city: "Ciudad Real",
    province: "Ciudad Real",
    postalCode: "13001",
    country: "España",
  },
  googleMapsUrl: "https://maps.google.com/?q=Av.+la+Mancha+12+Ciudad+Real",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5!2d-3.93098!3d38.981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d1f1a8a8a8a8a%3A0x0!2sAv.+la+Mancha%2C+12%2C+13001+Ciudad+Real!5e0!3m2!1ses!2ses!4v1",
  coordinates: { lat: 38.981, lng: -3.93098 },

  // === HORARIOS ===
  schedule: [
    { days: "Lunes - Viernes", hours: "09:30 - 17:00" },
    { days: "Sábado", hours: "09:00 - 14:00" },
    { days: "Domingo", hours: "Cerrado" },
  ],

  // === REDES SOCIALES ===
  social: {
    instagram: "https://www.instagram.com/tinovalentti5/",
    facebook: "https://www.facebook.com/TinoValenttipeluqueriayestetica",
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  // === RESEÑAS GOOGLE ===
  reviews: {
    rating: 4.7,
    count: 179,
    url: "https://g.page/tinovalentti/review",
    featured: [
      {
        author: "A R",
        rating: 5,
        text: "Fuimos 4 amigas a hacernos el peinado para una boda y la verdad es que nos dejaron estupendas. Peinado impecable y el trato muy profesional.",
        date: "hace 2 semanas",
      },
      {
        author: "Sara Rodríguez",
        rating: 5,
        text: "El tratamiento DERMAPEN me dejó el pelo más fuerte que nunca. Noté los resultados desde la primera sesión. Muy recomendable.",
        date: "hace 1 mes",
      },
      {
        author: "Tere Bellon",
        rating: 5,
        text: "Dermapen capilar increíble. Profesionales estupendas que te asesoran en todo momento. Volveré sin duda.",
        date: "hace 1 mes",
      },
      {
        author: "Ana Isabel Payo",
        rating: 5,
        text: "Vengo desde Toledo expresamente. El buen asesoramiento y la calidad de los servicios merecen el viaje. Son los mejores.",
        date: "hace 2 meses",
      },
      {
        author: "Marta RV",
        rating: 5,
        text: "Muy profesionales. Se adaptan a todo lo que les pidas y siempre aciertan con el resultado. Llevo años viniendo.",
        date: "hace 3 meses",
      },
    ],
  },

  // === SERVICIOS ===
  services: [
    {
      id: "corte-cabello",
      name: "Corte de Cabello",
      description: "Cortes modernos y clásicos para todos los estilos. Nuestros estilistas analizan tu rostro y personalidad para crear el look perfecto.",
      benefits: ["Diseño personalizado", "Técnicas actuales", "Acabado impecable"],
      icon: "Scissors",
    },
    {
      id: "coloracion",
      name: "Coloración",
      description: "Tintes, mechas, balayage y las técnicas de color más innovadoras. Trabajamos con productos de primera calidad para un color vibrante y duradero.",
      benefits: ["Productos premium", "Color duradero", "Cuidado del cabello"],
      icon: "Palette",
    },
    {
      id: "peinados",
      name: "Peinados",
      description: "Peinados para bodas, comuniones, eventos especiales y cualquier ocasión. Creamos looks únicos que destacan tu belleza natural.",
      benefits: ["Diseños exclusivos", "Larga duración", "Prueba previa"],
      icon: "Gem",
    },
    {
      id: "dermapen-capilar",
      name: "Tratamiento Dermapen",
      description: "Tratamiento capilar avanzado que fortalece el folículo piloso y previene la caída del cabello. Resultados visibles desde las primeras sesiones.",
      benefits: ["Fortalece el cabello", "Previene caída", "Estimula crecimiento"],
      icon: "Sparkles",
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel. Limpieza profunda, hidratación y rejuvenecimiento para un rostro radiante.",
      benefits: ["Piel rejuvenecida", "Hidratación profunda", "Luminosidad"],
      icon: "Flower2",
    },
    {
      id: "asesoramiento-imagen",
      name: "Asesoramiento de Imagen",
      description: "Consejo personalizado de nuestros estilistas expertos. Analizamos tu estilo, facciones y preferencias para encontrar tu mejor versión.",
      benefits: ["Análisis completo", "Recomendaciones personalizadas", "Cambio de imagen"],
      icon: "UserCheck",
    },
  ],

  // === PROCESO ===
  process: [
    {
      step: 1,
      title: "Reserva",
      description: "Llámanos para reservar tu cita en el horario que mejor te convenga",
    },
    {
      step: 2,
      title: "Consulta",
      description: "Analizamos tu estilo y necesidades para diseñar el look perfecto",
    },
    {
      step: 3,
      title: "Servicio",
      description: "Nuestros profesionales trabajan con las mejores técnicas y productos",
    },
    {
      step: 4,
      title: "Resultado",
      description: "Sales con un look renovado que refleja tu personalidad",
    },
  ],

  // === POR QUÉ ELEGIRNOS ===
  whyUs: [
    {
      title: "Más de 25 Años de Experiencia",
      description: "Una trayectoria consolidada en Ciudad Real nos avala como referentes en peluquería y estética",
      icon: "Award",
    },
    {
      title: "Especialistas en Dermapen",
      description: "Tratamientos capilares avanzados que fortalecen y regeneran tu cabello desde la raíz",
      icon: "Sparkles",
    },
    {
      title: "Asesoramiento Personalizado",
      description: "Cada cliente es único. Analizamos tu estilo para encontrar el look que mejor te representa",
      icon: "UserCheck",
    },
    {
      title: "Valoración 4.7 Estrellas",
      description: "179 clientes satisfechos nos avalan con excelentes valoraciones en Google",
      icon: "Star",
    },
  ],

  // === EQUIPO ===
  team: [
    {
      name: "Equipo Tino Valentti",
      role: "Estilistas Profesionales",
      image: "/images/team/placeholder.jpg",
      bio: "Un equipo apasionado por la belleza y el cuidado personal. Con décadas de experiencia combinada, nos dedicamos a realzar la belleza natural de cada cliente con las técnicas más innovadoras y un trato cercano.",
    },
  ],

  // === GALERÍA ===
  gallery: [
    { src: "/images/gallery/local-fuera.webp", alt: "Fachada de Tino Valentti Peluquería" },
    { src: "/images/gallery/local-dentro.webp", alt: "Interior del salón - Recepción" },
    { src: "/images/gallery/clinica-dentro1.webp", alt: "Zona de trabajo y estilismo" },
  ],

  // === FAQ ===
  faq: [
    {
      question: "¿Necesito cita previa?",
      answer: "Sí, recomendamos siempre reservar cita previa llamando al 926 22 35 43 para garantizar disponibilidad y poder dedicarte el tiempo que mereces.",
    },
    {
      question: "¿Qué es el tratamiento Dermapen capilar?",
      answer: "Es un tratamiento avanzado que utiliza microagujas para estimular la regeneración capilar. Fortalece el folículo piloso, previene la caída y favorece el crecimiento de cabello nuevo. Los resultados son visibles desde las primeras sesiones.",
    },
    {
      question: "¿Cuánto dura un peinado para evento?",
      answer: "Nuestros peinados están diseñados para durar todo el evento, desde la mañana hasta la noche. Usamos productos fijadores de calidad que garantizan que tu look se mantenga impecable.",
    },
    {
      question: "¿Hacéis pruebas de peinado para novias?",
      answer: "Por supuesto. Ofrecemos sesiones de prueba donde diseñamos y probamos diferentes opciones hasta encontrar el peinado perfecto para tu gran día.",
    },
    {
      question: "¿Qué productos utilizáis para la coloración?",
      answer: "Trabajamos con marcas profesionales de primera calidad que cuidan tu cabello mientras aportan un color vibrante y duradero. Siempre asesoramos sobre el mejor tratamiento post-color.",
    },
    {
      question: "¿Atendéis a hombres también?",
      answer: "Sí, ofrecemos servicios de corte y arreglo de barba para hombres. Nuestros estilistas están formados en las últimas tendencias masculinas.",
    },
    {
      question: "¿Cuántas sesiones de Dermapen necesito?",
      answer: "Depende de cada caso, pero generalmente recomendamos entre 4 y 6 sesiones espaciadas cada 3-4 semanas para obtener resultados óptimos. En la primera consulta evaluamos tu situación.",
    },
    {
      question: "¿Tenéis servicio de parking?",
      answer: "Estamos ubicados en Av. la Mancha, una zona con facilidad para aparcar. Hay parking público muy cerca del salón.",
    },
  ],

  // === SEO ===
  seo: {
    titleTemplate: "%s | Tino Valentti - Peluquería en Ciudad Real",
    defaultTitle: "Tino Valentti | Peluquería y Estética en Ciudad Real",
    defaultDescription: "Peluquería y centro de estética en Ciudad Real. Especialistas en cortes, coloración, peinados para eventos y tratamiento Dermapen capilar. +25 años de experiencia. Cita: 926 22 35 43.",
    keywords: [
      "peluquería Ciudad Real",
      "estética Ciudad Real",
      "corte de pelo Ciudad Real",
      "coloración cabello Ciudad Real",
      "mechas balayage Ciudad Real",
      "peinados bodas Ciudad Real",
      "Dermapen capilar Ciudad Real",
      "tratamiento caída cabello",
      "peluquería eventos",
      "Tino Valentti",
      "mejor peluquería Ciudad Real",
      "estilistas profesionales",
    ],
    ogImage: "/og-image.jpg",
  },

  // === LEGAL ===
  legal: {
    companyName: "Tino Valentti Peluquería y Estética",
    cif: "",
    registeredAddress: "Av. la Mancha, 12, 13001 Ciudad Real",
  },
}

export type Clinic = typeof clinic
