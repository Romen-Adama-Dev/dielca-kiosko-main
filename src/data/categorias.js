// ==============================================
// Datos estáticos: Categorías
// ==============================================

export const CATEGORIAS = [
  {
    id: 'cables',
    nombre: 'Cables & Conductores',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#f0c040" stroke-width="2"/>
      <path d="M15 40 Q25 25 40 40 Q55 55 65 40" stroke="#f0c040" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M15 48 Q25 33 40 48 Q55 63 65 48" stroke="#e74c3c" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M15 32 Q25 17 40 32 Q55 47 65 32" stroke="#3ae0a0" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="15" cy="40" r="4" fill="#ccc"/>
      <circle cx="65" cy="40" r="4" fill="#ccc"/>
    </svg>`,
    color: '#f0c040',
    descripcion: 'Cables eléctricos, conductores y mangueras de energía'
  },
  {
    id: 'energia_renovable',
    nombre: 'Energía Renovable',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#27ae60" stroke-width="2"/>
      <rect x="18" y="30" width="44" height="28" rx="3" fill="#1a56a0"/>
      <line x1="18" y1="37" x2="62" y2="37" stroke="#3ae0a0" stroke-width="1"/>
      <line x1="18" y1="44" x2="62" y2="44" stroke="#3ae0a0" stroke-width="1"/>
      <line x1="18" y1="51" x2="62" y2="51" stroke="#3ae0a0" stroke-width="1"/>
      <line x1="32" y1="30" x2="32" y2="58" stroke="#3ae0a0" stroke-width="1"/>
      <line x1="47" y1="30" x2="47" y2="58" stroke="#3ae0a0" stroke-width="1"/>
      <circle cx="58" cy="22" r="9" fill="#f5e642" opacity="0.9"/>
      <line x1="58" y1="10" x2="58" y2="7" stroke="#f5e642" stroke-width="2"/>
      <line x1="70" y1="22" x2="73" y2="22" stroke="#f5e642" stroke-width="2"/>
    </svg>`,
    color: '#27ae60',
    descripcion: 'Paneles solares, inversores, aerotermia y energías limpias'
  },
  {
    id: 'iluminacion',
    nombre: 'Iluminación',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#f5a623" stroke-width="2"/>
      <circle cx="40" cy="34" r="14" fill="#f5e642" opacity="0.9"/>
      <path d="M40 48 L37 58 L43 58 Z" fill="#ccc"/>
      <rect x="35" y="57" width="10" height="3" rx="1" fill="#aaa"/>
      <line x1="40" y1="15" x2="40" y2="10" stroke="#f5e642" stroke-width="2"/>
      <line x1="20" y1="25" x2="15" y2="20" stroke="#f5e642" stroke-width="2"/>
      <line x1="60" y1="25" x2="65" y2="20" stroke="#f5e642" stroke-width="2"/>
    </svg>`,
    color: '#f5a623',
    descripcion: 'Iluminación autónoma, decorativa, general y profesional LED'
  },
  {
    id: 'aparamenta',
    nombre: 'Aparamenta & Protección',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#1abc9c" stroke-width="2"/>
      <rect x="28" y="18" width="24" height="44" rx="3" fill="#2c3e50"/>
      <rect x="32" y="22" width="16" height="10" rx="2" fill="#e74c3c"/>
      <rect x="34" y="38" width="12" height="16" rx="2" fill="#1abc9c" opacity="0.5"/>
      <circle cx="40" cy="53" r="3" fill="#f39c12"/>
    </svg>`,
    color: '#1abc9c',
    descripcion: 'Magnetotérmicos, diferenciales, PIAs y protecciones modulares'
  },
  {
    id: 'armarios',
    nombre: 'Armarios & Envolventes',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#7f8c8d" stroke-width="2"/>
      <rect x="18" y="20" width="44" height="40" rx="3" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/>
      <rect x="24" y="26" width="14" height="10" rx="1" fill="#3498db" opacity="0.5"/>
      <rect x="42" y="26" width="14" height="10" rx="1" fill="#e74c3c" opacity="0.5"/>
      <circle cx="40" cy="44" r="4" fill="#7f8c8d"/>
    </svg>`,
    color: '#95a5a6',
    descripcion: 'Armarios, cajas de distribución y envolventes industriales'
  },
  {
    id: 'telecomunicaciones',
    nombre: 'Telecomunicaciones',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#3498db" stroke-width="2"/>
      <rect x="22" y="28" width="36" height="24" rx="3" fill="#2c3e50"/>
      <rect x="26" y="32" width="28" height="16" rx="2" fill="#1a56a0"/>
      <circle cx="40" cy="55" r="3" fill="#7f8c8d"/>
      <path d="M30 22 Q40 15 50 22" stroke="#3498db" stroke-width="2" fill="none"/>
      <path d="M24 18 Q40 8 56 18" stroke="#3498db" stroke-width="1.5" fill="none" opacity="0.6"/>
    </svg>`,
    color: '#3498db',
    descripcion: 'Voz, datos, imagen, sonido, videoporteros y redes'
  },
  {
    id: 'medida_control',
    nombre: 'Medida & Control',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#e74c3c" stroke-width="2"/>
      <circle cx="40" cy="38" r="18" fill="none" stroke="#ecf0f1" stroke-width="3"/>
      <line x1="40" y1="22" x2="40" y2="28" stroke="#ecf0f1" stroke-width="2"/>
      <line x1="40" y1="46" x2="40" y2="52" stroke="#ecf0f1" stroke-width="2"/>
      <line x1="24" y1="38" x2="30" y2="38" stroke="#ecf0f1" stroke-width="2"/>
      <line x1="50" y1="38" x2="56" y2="38" stroke="#ecf0f1" stroke-width="2"/>
      <path d="M40 38 L50 30" stroke="#e74c3c" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    color: '#e74c3c',
    descripcion: 'Analizadores, contadores, detectores y sistemas de control'
  },
  {
    id: 'mecanismos',
    nombre: 'Mecanismos & Domótica',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#9b59b6" stroke-width="2"/>
      <rect x="22" y="25" width="36" height="30" rx="4" fill="#eee" stroke="#ccc"/>
      <circle cx="30" cy="37" r="5" fill="#3498db"/>
      <circle cx="30" cy="37" r="2" fill="#fff"/>
      <circle cx="50" cy="37" r="5" fill="#9b59b6"/>
      <circle cx="50" cy="37" r="2" fill="#fff"/>
      <rect x="30" y="47" width="20" height="4" rx="2" fill="#aaa"/>
    </svg>`,
    color: '#9b59b6',
    descripcion: 'Enchufes, interruptores, mecanismos y sistemas domóticos'
  },
  {
    id: 'dyson',
    nombre: 'DYSON',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a1a2e" stroke="#c0392b" stroke-width="2"/>
      <circle cx="40" cy="40" r="16" fill="none" stroke="#ecf0f1" stroke-width="6"/>
      <circle cx="40" cy="40" r="6" fill="#c0392b"/>
      <path d="M40 18 L40 10" stroke="#ecf0f1" stroke-width="3"/>
      <path d="M40 62 L40 70" stroke="#ecf0f1" stroke-width="3"/>
      <path d="M18 40 L10 40" stroke="#ecf0f1" stroke-width="3"/>
      <path d="M62 40 L70 40" stroke="#ecf0f1" stroke-width="3"/>
    </svg>`,
    color: '#c0392b',
    descripcion: 'Ventiladores, purificadores y aspiradores Dyson'
  },
  {
    id: 'wizard',
    nombre: 'WIZARD',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a1a2e" stroke="#8e44ad" stroke-width="2"/>
      <polygon points="40,15 50,35 72,38 56,54 60,75 40,64 20,75 24,54 8,38 30,35" fill="#8e44ad" opacity="0.8"/>
      <circle cx="40" cy="45" r="10" fill="#f5e642" opacity="0.9"/>
    </svg>`,
    color: '#8e44ad',
    descripcion: 'Productos exclusivos de la marca Wizard'
  },
  {
    id: 'herramientas',
    nombre: 'Herramientas & Lubricantes',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#e67e22" stroke-width="2"/>
      <path d="M25 55 L48 32 L52 28 C55 25 60 26 62 30 C63 33 61 36 58 38 L54 40 L31 55 Z" fill="#e67e22"/>
      <rect x="20" y="50" width="14" height="8" rx="2" transform="rotate(-45 27 54)" fill="#c0392b"/>
    </svg>`,
    color: '#e67e22',
    descripcion: 'Herramientas eléctricas, de instalación y lubricantes'
  },
  {
    id: 'baterias_alarmas',
    nombre: 'Baterías, Alarmas & UPS',
    icono: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a3a6b" stroke="#2ecc71" stroke-width="2"/>
      <rect x="14" y="28" width="46" height="24" rx="4" fill="#2c3e50" stroke="#2ecc71" stroke-width="2"/>
      <rect x="18" y="32" width="20" height="16" rx="2" fill="#2ecc71" opacity="0.7"/>
      <rect x="58" y="34" width="6" height="12" rx="2" fill="#555"/>
      <path d="M36 38 L42 30 L42 38 L48 38 L42 46 L42 38 Z" fill="#f5e642"/>
    </svg>`,
    color: '#2ecc71',
    descripcion: 'Baterías fotovoltaicas, sistemas de alarma y SAIs/UPS'
  },
];

// =============================================
// PRODUCTOS por categoría
// =============================================
