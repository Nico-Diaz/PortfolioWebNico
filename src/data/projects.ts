import type { Lang } from '../i18n/ui';

type Localized<T> = Record<Lang, T>;

export interface Project {
  slug: string;
  name: string;
  category: 'landing' | 'software';
  featured?: boolean;
  thesis?: boolean;
  repo: string;
  repoPrivate?: boolean;
  demo?: string;
  image: string;
  gallery?: { src: string; height: number; alt: Localized<string> }[];
  stack: string[];
  summary: Localized<string>;
  description: Localized<string[]>;
  highlights: Localized<string[]>;
  imageAlt: Localized<string>;
}

export const projects: Project[] = [
  {
    slug: 'neon-menu-hub',
    name: 'Neon Menu Hub',
    category: 'software',
    featured: true,
    repo: 'https://github.com/Nico-Diaz/neon-menu-hub',
    repoPrivate: true,
    image: '/projects/neon.webp',
    gallery: [
      {
        src: '/projects/neon-features.webp', height: 920,
        alt: {
          es: 'Sección de funcionalidades: editor visual, generador de QR, reseñas, cartas multilingües, oferta del día y estilos',
          en: 'Features section: visual editor, QR generator, reviews, multilingual menus, daily offer and styles',
        },
      },
      {
        src: '/projects/neon-agency.webp', height: 600,
        alt: {
          es: 'Panel multi-local para agencias con varios restaurantes activos',
          en: 'Multi-tenant agency dashboard with several active restaurants',
        },
      },
      {
        src: '/projects/neon-pricing.webp', height: 920,
        alt: {
          es: 'Planes Starter, Pro y Agency con precios mensuales',
          en: 'Starter, Pro and Agency plans with monthly prices',
        },
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Stripe'],
    summary: {
      es: 'SaaS para que restaurantes y agencias creen cartas digitales QR interactivas, con seis estilos de menú, analíticas y suscripciones con Stripe.',
      en: 'A SaaS where restaurants and agencies build interactive QR menus, with six menu styles, analytics and Stripe subscriptions.',
    },
    description: {
      es: [
        'Neon Menu Hub es una plataforma de menús digitales para hostelería. El cliente escanea un QR y ve la carta en el estilo que eligió el local: lista, bento, grilla, minimalista, fine dining o un modo historia a pantalla completa, como en Instagram.',
        'Del otro lado, el panel de administración permite editar categorías y platos, ajustar colores y tipografías, generar el QR con la marca del local y ver qué platos reciben más clics. Las agencias gestionan varios restaurantes desde un único portal y en marca blanca.',
        'Es el proyecto más completo que construí: base de datos con seguridad por fila, funciones serverless y un flujo de suscripciones con Stripe sincronizado mediante webhooks.',
      ],
      en: [
        'Neon Menu Hub is a digital menu platform for hospitality. Guests scan a QR code and see the menu in the style the venue picked: list, bento, grid, minimal, fine dining, or a full-screen story mode like Instagram.',
        'Behind it, the admin dashboard lets owners edit categories and dishes, tweak colors and typefaces, generate a branded QR code, and see which dishes get the most clicks. Agencies manage several restaurants from a single white-label portal.',
        "It's the most complete project I've built: a database with row-level security, serverless functions, and a Stripe subscription flow kept in sync through webhooks.",
      ],
    },
    highlights: {
      es: [
        'Seis estilos de carta, incluido un modo historia que se navega tocando los laterales',
        'Editor visual de platos, temas y QR personalizado con la marca del local',
        'Planes Free, Pro y Agency con Stripe Checkout, portal de cliente y webhooks',
        'Supabase con políticas RLS para que cada negocio solo vea sus datos',
        'Analíticas de clics por plato y cartas en varios idiomas',
      ],
      en: [
        'Six menu styles, including a story mode you navigate by tapping the sides',
        'Visual editor for dishes, themes and a QR code in the venue’s branding',
        'Free, Pro and Agency plans with Stripe Checkout, customer portal and webhooks',
        'Supabase with RLS policies so each business only sees its own data',
        'Per-dish click analytics and menus in several languages',
      ],
    },
    imageAlt: {
      es: 'Portada de Neon Menu Hub: “Crea menús digitales QR interactivos” junto a un móvil con la carta de Neon Burger Club',
      en: 'Neon Menu Hub homepage: “Create interactive QR digital menus” next to a phone showing the Neon Burger Club menu',
    },
  },
  {
    slug: 'modula-acuario',
    name: 'ModulaAcuario',
    category: 'landing',
    thesis: true,
    repo: 'https://github.com/Nico-Diaz/ModulaAcuario',
    demo: 'https://modulacuario.vercel.app',
    image: '/projects/modulacuario.webp',
    stack: ['React', 'JavaScript', 'Framer Motion', 'Vite'],
    summary: {
      es: 'Landing inmersiva para Mobula, una experiencia de realidad virtual submarina. Bajás por la página como si te sumergieras.',
      en: 'An immersive landing page for Mobula, an underwater virtual reality experience. Scrolling feels like diving.',
    },
    description: {
      es: [
        'Proyecto de tesis de una compañera. Mobula es una experiencia de realidad virtual en la que nadás junto a mantas gigantes y arrecifes de coral sin salir de la ciudad, y la landing tenía que transmitir esa sensación antes de comprar la entrada.',
        'La página funciona como una inmersión: un medidor de profundidad acompaña el scroll, los peces cruzan la pantalla y la luz cambia a medida que bajás. Mobi, el asistente, ayuda a resolver dudas.',
      ],
      en: [
        'A classmate’s thesis project. Mobula is a virtual reality experience where you swim next to giant manta rays and coral reefs without leaving the city, and the landing page had to convey that feeling before anyone bought a ticket.',
        'The page works like a dive: a depth gauge follows the scroll, fish swim across the screen, and the light shifts as you go deeper. Mobi, the assistant, answers questions along the way.',
      ],
    },
    highlights: {
      es: [
        'Medidor de profundidad ligado al scroll',
        'Animaciones ambientales de peces y burbujas',
        'Asistente “Mobi” para dudas frecuentes',
        'Flujo de compra de entradas y experiencias',
      ],
      en: [
        'Depth gauge tied to the scroll',
        'Ambient fish and bubble animations',
        '“Mobi” assistant for common questions',
        'Ticket and experience purchase flow',
      ],
    },
    imageAlt: {
      es: 'Portada de Mobula: “Sumérgete sin mojarte” sobre un fondo azul submarino con peces',
      en: 'Mobula homepage: “Dive in without getting wet” over an underwater blue background with fish',
    },
  },
  {
    slug: 'almacen-creativo',
    name: 'Almacen Creativo',
    category: 'landing',
    repo: 'https://github.com/Nico-Diaz/AlmacenCreativoEstudio',
    demo: 'https://almacencreativoestudio.vercel.app',
    image: '/projects/almacen.webp',
    stack: ['Astro', 'React', 'TypeScript', 'CSS'],
    summary: {
      es: 'Landing para un estudio de diseño de interiores de Mendoza, con anotaciones dibujadas a mano sobre sus propios espacios.',
      en: 'A landing page for an interior design studio in Mendoza, with hand-drawn annotations over their own spaces.',
    },
    description: {
      es: [
        'Almacen Creativo son tres diseñadoras que trabajan en casas, locales, vidrieras y eventos, partiendo de lo que el cliente ya tiene. La página tenía que mostrar quiénes son, cómo trabajan y llevar a la visita a escribirles.',
        'Los dibujos (anotaciones, íconos, marcos y el camino del proceso) son SVG escritos a mano en el código. El pedido se arma en un pequeño formulario de React que genera el mail o el mensaje de WhatsApp.',
      ],
      en: [
        'Almacen Creativo is three designers working on homes, shops, window displays and events, starting from what the client already owns. The page had to show who they are and how they work, and lead visitors to get in touch.',
        'Every drawing (annotations, icons, frames and the process path) is hand-written SVG. Requests are put together in a small React form that builds the email or WhatsApp message.',
      ],
    },
    highlights: {
      es: [
        'Anotaciones dibujadas en SVG sobre las fotos',
        'Animaciones ligadas al scroll sin librerías',
        'Formulario de pedido que arma mail o WhatsApp',
        'Imágenes optimizadas con astro:assets',
      ],
      en: [
        'Hand-drawn SVG annotations over the photos',
        'Scroll-driven animations with no libraries',
        'Request form that builds an email or WhatsApp message',
        'Optimized images with astro:assets',
      ],
    },
    imageAlt: {
      es: 'Portada de Almacen Creativo: “Interiores con lo que ya tenés” sobre una foto de estanterías con objetos antiguos y anotaciones dibujadas',
      en: 'Almacen Creativo homepage: “Interiors with what you already have” over a photo of shelves with antiques and drawn annotations',
    },
  },
  {
    slug: 'antip',
    name: 'Antip',
    category: 'software',
    repo: 'https://github.com/Nico-Diaz/antip',
    image: '/projects/antip.webp',
    stack: ['Astro', 'TypeScript', 'Supabase', 'Tailwind'],
    summary: {
      es: 'Plataforma de cursos de finanzas en video para el Instituto Antipobreza Argentina, con acceso privado para alumnos y panel de administración.',
      en: 'A video course platform on personal finance for Instituto Antipobreza Argentina, with private student access and an admin panel.',
    },
    description: {
      es: [
        'Antip es la plataforma interna del Instituto Antipobreza Argentina para sus cursos de finanzas. Cada alumno entra con su cuenta y ve los videos de los cursos a los que tiene acceso.',
        'El equipo del instituto gestiona alumnos y contenidos desde un panel de administración. Está construido con Astro en modo servidor y Supabase para la autenticación y los datos.',
      ],
      en: [
        'Antip is the internal platform of Instituto Antipobreza Argentina for its finance courses. Each student signs in and watches the videos for the courses they have access to.',
        'The institute’s team manages students and content from an admin panel. It runs on Astro in server mode, with Supabase for authentication and data.',
      ],
    },
    highlights: {
      es: [
        'Acceso con cuenta para cada alumno',
        'Biblioteca de cursos en video',
        'Panel de administración de alumnos y contenidos',
        'Astro SSR con Supabase',
      ],
      en: [
        'Account-based access for each student',
        'Video course library',
        'Admin panel for students and content',
        'Astro SSR with Supabase',
      ],
    },
    imageAlt: {
      es: 'Pantalla de inicio de sesión del Instituto Antipobreza Argentina',
      en: 'Instituto Antipobreza Argentina sign-in screen',
    },
  },
  {
    slug: 'barberia-marin',
    name: 'Barbería Marin',
    category: 'software',
    repo: 'https://github.com/Nico-Diaz/barberia-marin',
    demo: 'https://barberia-marin.vercel.app',
    image: '/projects/barberia.webp',
    stack: ['Astro', 'TypeScript', 'CSS'],
    summary: {
      es: 'Turnero simple y personalizado para una barbería: elegís servicio, día y horario, y el turno queda reservado.',
      en: 'A simple, custom booking system for a barbershop: pick a service, a day and a time slot, and the appointment is booked.',
    },
    description: {
      es: [
        'Un turnero hecho a la medida de la Barbería Ezequiel Marin. Nada de plataformas genéricas: una sola pantalla con la identidad del local donde el cliente elige el servicio, deja sus datos y reserva.',
        'Los horarios disponibles dependen de la fecha elegida, así que no se pueden pedir turnos que no existen.',
      ],
      en: [
        'A booking system made to measure for Barbería Ezequiel Marin. No generic platform: a single screen in the shop’s own identity where clients pick a service, leave their details and book.',
        'Available time slots depend on the chosen date, so nobody can request an appointment that doesn’t exist.',
      ],
    },
    highlights: {
      es: [
        'Selección de servicio con precio',
        'Horarios que dependen de la fecha',
        'Contacto por WhatsApp del cliente',
        'Identidad visual propia de la barbería',
      ],
      en: [
        'Service selection with prices',
        'Time slots that depend on the date',
        'Client contact through WhatsApp',
        'The barbershop’s own visual identity',
      ],
    },
    imageAlt: {
      es: 'Formulario de reserva de la Barbería Ezequiel Marin con servicios, datos, fecha y horario',
      en: 'Booking form for Barbería Ezequiel Marin with services, details, date and time',
    },
  },
];

export const featured = projects.find((p) => p.featured)!;
export const landings = projects.filter((p) => p.category === 'landing');
export const software = projects.filter((p) => p.category === 'software' && !p.featured);
