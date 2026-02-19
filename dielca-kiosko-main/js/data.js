// =============================================
// DIELCA KIOSCO - Datos de Producto
// Fuente: dielca.com (scraping 2026-02)
// =============================================

const CATEGORIAS = [
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
const PRODUCTOS = {

  cables: [
    { id: 'cab001', nombre: 'Cable RZ1-K 1x6mm² Negro (rollo 100m)', precio: 68.50, unidad: 'rollo', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'RZ1K-1x6-100', stock: true },
    { id: 'cab002', nombre: 'Cable H07V-K 1x2.5mm² Azul (m)', precio: 0.38, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'H07V-2.5-AZ', stock: true },
    { id: 'cab003', nombre: 'Cable H07V-K 1x2.5mm² Marrón (m)', precio: 0.38, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'H07V-2.5-MR', stock: true },
    { id: 'cab004', nombre: 'Cable H07V-K 1x2.5mm² Amarillo/Verde (m)', precio: 0.38, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'H07V-2.5-AV', stock: true },
    { id: 'cab005', nombre: 'Cable H07V-K 1x4mm² Negro (m)', precio: 0.56, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'H07V-4-NG', stock: true },
    { id: 'cab006', nombre: 'Manguera RV-K 3x1.5mm² (m)', precio: 0.72, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'manguera', referencia: 'RVK-3x1.5', stock: true },
    { id: 'cab007', nombre: 'Manguera RV-K 3x2.5mm² (m)', precio: 1.05, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'manguera', referencia: 'RVK-3x2.5', stock: true },
    { id: 'cab008', nombre: 'Manguera RV-K 5x6mm² (m)', precio: 3.40, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'manguera', referencia: 'RVK-5x6', stock: true },
    { id: 'cab009', nombre: 'Cable RZ1-K 3x6mm² (m)', precio: 2.20, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'RZ1K-3x6', stock: true },
    { id: 'cab010', nombre: 'Cable Tierra de Cobre Desnudo 16mm² (m)', precio: 1.80, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'cable', referencia: 'TIE-CU-16', stock: false },
  ],

  energia_renovable: [
    { id: 'sol001', nombre: 'Panel Solar Monocristalino 400W', precio: 185.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'panel_solar', referencia: 'PAN-MONO-400', stock: true },
    { id: 'sol002', nombre: 'Panel Solar Monocristalino 550W', precio: 245.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'panel_solar', referencia: 'PAN-MONO-550', stock: true },
    { id: 'sol003', nombre: 'Inversor Híbrido 5kW 48V', precio: 890.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'inversor', referencia: 'INV-HYB-5KW', stock: true },
    { id: 'sol004', nombre: 'Inversor Híbrido 10kW 48V', precio: 1450.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'inversor', referencia: 'INV-HYB-10KW', stock: false },
    { id: 'sol005', nombre: 'Regulador MPPT 40A 12/24/48V', precio: 89.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'MPPT-40A', stock: true },
    { id: 'sol006', nombre: 'Estructura Coplanar Aluminio 2 Paneles', precio: 65.00, unidad: 'ud', undMin: 1, undStep: 2, imagen: 'estructura', referencia: 'EST-2P-ALU', stock: true },
    { id: 'sol007', nombre: 'Aerotermia ACS 200L Monobloc', precio: 1290.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'inversor', referencia: 'AERO-200L', stock: false },
  ],

  iluminacion: [
    { id: 'ilu001', nombre: 'Bombilla LED E27 10W 806lm Cálida', precio: 4.90, unidad: 'ud', undMin: 1, undStep: 10, imagen: 'bombilla', referencia: 'LED-E27-10W-C', stock: true },
    { id: 'ilu002', nombre: 'Bombilla LED E27 10W 806lm Fría', precio: 4.90, unidad: 'ud', undMin: 1, undStep: 10, imagen: 'bombilla', referencia: 'LED-E27-10W-F', stock: true },
    { id: 'ilu003', nombre: 'Downlight LED Empotrable 18W 4000K', precio: 14.90, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'downlight', referencia: 'DWL-18W-4K', stock: true },
    { id: 'ilu004', nombre: 'Downlight LED Empotrable 24W 4000K', precio: 19.90, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'downlight', referencia: 'DWL-24W-4K', stock: true },
    { id: 'ilu005', nombre: 'Panel LED 60x60cm 40W Neutro', precio: 29.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'panel', referencia: 'PAN-LED-60-40W', stock: true },
    { id: 'ilu006', nombre: 'Tira LED RGB 5m 14.4W/m IP65', precio: 38.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'tira', referencia: 'TIRA-RGB-5M', stock: true },
    { id: 'ilu007', nombre: 'Proyector LED Exterior 50W 4000K IP65', precio: 32.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'proyector', referencia: 'PRY-50W-EXT', stock: true },
    { id: 'ilu008', nombre: 'Foco LED Carril Monofásico 30W 4000K', precio: 24.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'foco', referencia: 'FOC-CARRIL-30W', stock: true },
    { id: 'ilu009', nombre: 'Farola LED Vial 100W 5000K IP66', precio: 189.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'proyector', referencia: 'FAR-VIAL-100W', stock: false },
    { id: 'ilu010', nombre: 'Luminaria Emergencia LED 6W 1h', precio: 18.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'panel', referencia: 'EMG-LED-6W', stock: true },
  ],

  aparamenta: [
    { id: 'apa001', nombre: 'Magnetotérmico 1P+N 16A Curva C', precio: 8.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'magnetotermico', referencia: 'MAG-1PN-16A-C', stock: true },
    { id: 'apa002', nombre: 'Magnetotérmico 1P+N 20A Curva C', precio: 9.20, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'magnetotermico', referencia: 'MAG-1PN-20A-C', stock: true },
    { id: 'apa003', nombre: 'Magnetotérmico 2P 25A Curva C', precio: 14.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'magnetotermico', referencia: 'MAG-2P-25A-C', stock: true },
    { id: 'apa004', nombre: 'Diferencial 2P 25A 30mA Tipo A', precio: 24.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'diferencial', referencia: 'DIF-2P-25A-A', stock: true },
    { id: 'apa005', nombre: 'Diferencial 2P 40A 30mA Tipo AC', precio: 29.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'diferencial', referencia: 'DIF-2P-40A-AC', stock: true },
    { id: 'apa006', nombre: 'PIA 4P 32A Curva C', precio: 38.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'pia', referencia: 'PIA-4P-32A-C', stock: true },
    { id: 'apa007', nombre: 'Contactor 3P 25A 230V AC', precio: 29.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'contactor', referencia: 'CONT-3P-25A', stock: true },
    { id: 'apa008', nombre: 'Rele diferencial 4P 63A 30mA', precio: 89.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'diferencial', referencia: 'REL-DIF-4P-63A', stock: false },
  ],

  armarios: [
    { id: 'arm001', nombre: 'Caja ICP Superficie 1F 2 Módulos', precio: 8.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja', referencia: 'ICP-SUP-2M', stock: true },
    { id: 'arm002', nombre: 'Caja Distribución Superficie 18 Módulos', precio: 22.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja', referencia: 'CAJA-SUP-18M', stock: true },
    { id: 'arm003', nombre: 'Cuadro Empotrado 36 Módulos con Puerta', precio: 38.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja', referencia: 'CUA-EMP-36M', stock: true },
    { id: 'arm004', nombre: 'Armario Metálico IP65 300x400x200mm', precio: 125.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja_estanca', referencia: 'ARM-IP65-300', stock: false },
    { id: 'arm005', nombre: 'Caja Estanca IP55 150x110mm', precio: 8.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja_estanca', referencia: 'CE-IP55-150', stock: true },
    { id: 'arm006', nombre: 'Peines de Fase Combinado 1P+N (12u)', precio: 12.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'caja', referencia: 'PEINE-1PN-12', stock: true },
  ],

  telecomunicaciones: [
    { id: 'tel001', nombre: 'Videoportero Color 7" WiFi', precio: 145.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'videoportero', referencia: 'VP-7-WIFI', stock: true },
    { id: 'tel002', nombre: 'Placa de Calle Videoportero 1 Pulsador', precio: 89.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'videoportero', referencia: 'VP-PLC-1P', stock: true },
    { id: 'tel003', nombre: 'Cable FTP Cat6 LSZH (m)', precio: 0.55, unidad: 'metro', undMin: 1, undStep: 1, imagen: 'rj45', referencia: 'UTP-CAT6-LSZH', stock: true },
    { id: 'tel004', nombre: 'Conector RJ45 Cat6 (100u)', precio: 12.90, unidad: 'bolsa', undMin: 1, undStep: 1, imagen: 'rj45', referencia: 'RJ45-C6-100', stock: true },
    { id: 'tel005', nombre: 'Roseta TV/SAT/R Derivación 2 salidas', precio: 5.80, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'roseta', referencia: 'ROS-TV-2S', stock: true },
    { id: 'tel006', nombre: 'Amplificador TV 1 Entrada 2 Salidas', precio: 34.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'amplificador', referencia: 'AMP-1E-2S', stock: true },
    { id: 'tel007', nombre: 'Switch PoE 8 Puertos Gigabit', precio: 89.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'rj45', referencia: 'SW-POE-8P', stock: false },
  ],

  medida_control: [
    { id: 'med001', nombre: 'Analizador de Redes Trifásico LCD', precio: 189.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'ANL-RED-TRI', stock: true },
    { id: 'med002', nombre: 'Detector de Movimiento PIR 360° Techo', precio: 19.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'DET-PIR-360', stock: true },
    { id: 'med003', nombre: 'Sensor Presencia Corredor 180° IP44', precio: 24.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'SENS-PRES-180', stock: true },
    { id: 'med004', nombre: 'Temporizador Escalera 2A', precio: 8.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'magnetotermico', referencia: 'TEMP-ESC-2A', stock: true },
    { id: 'med005', nombre: 'Contador Energía Digital Monofásico', precio: 45.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'CONT-ENE-1F', stock: false },
    { id: 'med006', nombre: 'Termostato Digital Programable 7 días', precio: 34.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'TERM-DIG-7D', stock: true },
  ],

  mecanismos: [
    { id: 'mec001', nombre: 'Interruptor Simple Serie Elegance Blanco', precio: 3.20, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'interruptor', referencia: 'INT-SIM-ELG-BL', stock: true },
    { id: 'mec002', nombre: 'Base Enchufe Schuko 16A Elegance Blanco', precio: 4.10, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'enchufe', referencia: 'BS-16A-ELG-BL', stock: true },
    { id: 'mec003', nombre: 'Conmutador Simple Elegance Blanco', precio: 3.90, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'interruptor', referencia: 'CONM-ELG-BL', stock: true },
    { id: 'mec004', nombre: 'Marco 1 Elemento Serie Elegance', precio: 2.80, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'marco', referencia: 'MRC-1E-ELG', stock: true },
    { id: 'mec005', nombre: 'Marco 2 Elementos Serie Elegance', precio: 3.50, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'marco', referencia: 'MRC-2E-ELG', stock: true },
    { id: 'mec006', nombre: 'Toma TV-SAT-R Elegance', precio: 6.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'toma', referencia: 'TV-SAT-ELG', stock: true },
    { id: 'mec007', nombre: 'Dimmer Rotativo LED 5-150W', precio: 18.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'dimmer', referencia: 'DIM-LED-150W', stock: true },
    { id: 'mec008', nombre: 'Pulsador Timbre Elegance Blanco', precio: 3.50, unidad: 'ud', undMin: 1, undStep: 5, imagen: 'interruptor', referencia: 'PUL-TIM-ELG', stock: true },
    { id: 'mec009', nombre: 'Gateway Domótica KNX USB', precio: 289.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'dimmer', referencia: 'KNX-GW-USB', stock: false },
  ],

  dyson: [
    { id: 'dys001', nombre: 'Dyson V15 Detect Aspirador Inalámbrico', precio: 699.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'DYS-V15-DET', stock: true },
    { id: 'dys002', nombre: 'Dyson V8 Aspirador Inalámbrico', precio: 399.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'DYS-V8', stock: true },
    { id: 'dys003', nombre: 'Dyson Purifier Cool TP09 Purificador+Ventilador', precio: 649.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'DYS-TP09', stock: true },
    { id: 'dys004', nombre: 'Dyson Hot+Cool HP09 Purificador+Calefactor', precio: 749.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'DYS-HP09', stock: false },
  ],

  wizard: [
    { id: 'wiz001', nombre: 'Tira LED Wizard RGB+W 5m 24V IP44', precio: 49.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'tira', referencia: 'WIZ-TIRA-5M', stock: true },
    { id: 'wiz002', nombre: 'Bombilla Inteligente Wizard E27 9W WiFi', precio: 14.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'bombilla', referencia: 'WIZ-BULB-E27', stock: true },
    { id: 'wiz003', nombre: 'Foco GU10 LED Wizard 5W WiFi RGB', precio: 18.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'foco', referencia: 'WIZ-GU10-5W', stock: true },
    { id: 'wiz004', nombre: 'Regleta Wizard 3 Enchufes + USB WiFi', precio: 39.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'enchufe', referencia: 'WIZ-REGL-3E', stock: false },
  ],

  herramientas: [
    { id: 'her001', nombre: 'Pelacables Automático 0.2-6mm²', precio: 24.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'pelacables', referencia: 'PELA-AUTO-6', stock: true },
    { id: 'her002', nombre: 'Alicate Electricista Universal 200mm', precio: 18.50, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'alicate', referencia: 'ALIC-UNI-200', stock: true },
    { id: 'her003', nombre: 'Destornillador Aislado VDE 1000V Set 5pz', precio: 32.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'destornillador', referencia: 'DST-VDE-5', stock: true },
    { id: 'her004', nombre: 'Brida Nylon 3.5×200mm (bolsa 100u)', precio: 5.90, unidad: 'bolsa', undMin: 1, undStep: 1, imagen: 'brida', referencia: 'BRD-200-100', stock: true },
    { id: 'her005', nombre: 'Cinta Aislante PVC 20m Negro', precio: 1.20, unidad: 'ud', undMin: 1, undStep: 10, imagen: 'cinta', referencia: 'CINT-PVC-20N', stock: true },
    { id: 'her006', nombre: 'Lubricante Spray WD-40 400ml', precio: 6.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'LUB-WD40-400', stock: true },
    { id: 'her007', nombre: 'Detector de Tensión sin Contacto 12-1000V', precio: 12.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'DET-TEN-1000', stock: true },
    { id: 'her008', nombre: 'Multímetro Digital Profesional CATIII', precio: 49.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'regulador', referencia: 'MULT-DIG-C3', stock: true },
  ],

  baterias_alarmas: [
    { id: 'bat001', nombre: 'Batería LiFePO4 100Ah 48V', precio: 750.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'bateria', referencia: 'BAT-LFP-100-48', stock: true },
    { id: 'bat002', nombre: 'Batería LiFePO4 200Ah 48V', precio: 1350.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'bateria', referencia: 'BAT-LFP-200-48', stock: false },
    { id: 'bat003', nombre: 'SAI/UPS Online 1000VA 900W Rack', precio: 289.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'bateria', referencia: 'UPS-1000VA-R', stock: true },
    { id: 'bat004', nombre: 'SAI/UPS Online 2000VA 1800W Torre', precio: 489.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'bateria', referencia: 'UPS-2000VA-T', stock: true },
    { id: 'bat005', nombre: 'Central Alarma WiFi+GSM 32 Zonas', precio: 189.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'ALARM-32Z-GW', stock: true },
    { id: 'bat006', nombre: 'Detector de Humos Alarma 9V', precio: 18.90, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'DET-HUM-9V', stock: true },
    { id: 'bat007', nombre: 'Sirena Exterior Alarma IP34', precio: 45.00, unidad: 'ud', undMin: 1, undStep: 1, imagen: 'default', referencia: 'SIR-EXT-IP34', stock: true },
  ],

};

// =============================================
// ICONOS SVG por tipo de imagen de producto
// =============================================
const PRODUCTO_ICONS = {
  cable: `<svg viewBox="0 0 60 60" fill="none"><path d="M5 30 Q15 15 30 30 Q45 45 55 30" stroke="#f0c040" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="5" cy="30" r="4" fill="#999"/><circle cx="55" cy="30" r="4" fill="#999"/></svg>`,
  manguera: `<svg viewBox="0 0 60 60" fill="none"><path d="M5 30 Q15 15 30 30 Q45 45 55 30" stroke="#3ae0a0" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M5 36 Q15 21 30 36 Q45 51 55 36" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/><circle cx="5" cy="30" r="5" fill="#999"/></svg>`,
  bombilla: `<svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="26" r="14" fill="#f5e642" opacity="0.9"/><path d="M30 40 L27 50 L33 50 Z" fill="#ccc"/><rect x="25" y="49" width="10" height="3" rx="1" fill="#aaa"/></svg>`,
  downlight: `<svg viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="18" rx="18" ry="6" fill="#ddd"/><path d="M12 18 L20 50 L40 50 L48 18 Z" fill="#e0e0e0"/><ellipse cx="30" cy="48" rx="12" ry="4" fill="#f5e642" opacity="0.8"/></svg>`,
  panel: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="15" width="44" height="30" rx="2" fill="#ffffffcc" stroke="#aaa"/><line x1="8" y1="25" x2="52" y2="25" stroke="#aaa" stroke-width="1"/><line x1="8" y1="35" x2="52" y2="35" stroke="#aaa" stroke-width="1"/><line x1="22" y1="15" x2="22" y2="45" stroke="#aaa" stroke-width="1"/><line x1="38" y1="15" x2="38" y2="45" stroke="#aaa" stroke-width="1"/></svg>`,
  foco: `<svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="22" r="12" fill="#f5e642" opacity="0.9"/><rect x="24" y="34" width="12" height="6" rx="2" fill="#999"/></svg>`,
  tira: `<svg viewBox="0 0 60 60" fill="none"><rect x="5" y="26" width="50" height="8" rx="2" fill="#222"/><circle cx="15" cy="30" r="4" fill="#ff6b6b"/><circle cx="25" cy="30" r="4" fill="#6bff6b"/><circle cx="35" cy="30" r="4" fill="#6b6bff"/><circle cx="45" cy="30" r="4" fill="#fff"/></svg>`,
  proyector: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="20" width="24" height="20" rx="3" fill="#555"/><path d="M32 24 L52 16 L52 44 L32 36 Z" fill="#888"/><ellipse cx="52" cy="30" rx="4" ry="10" fill="#f5e642" opacity="0.5"/></svg>`,
  panel_solar: `<svg viewBox="0 0 60 60" fill="none"><rect x="5" y="20" width="50" height="30" rx="3" fill="#1a56a0"/><line x1="5" y1="30" x2="55" y2="30" stroke="#3ae0a0" stroke-width="1"/><line x1="5" y1="40" x2="55" y2="40" stroke="#3ae0a0" stroke-width="1"/><line x1="20" y1="20" x2="20" y2="50" stroke="#3ae0a0" stroke-width="1"/><line x1="40" y1="20" x2="40" y2="50" stroke="#3ae0a0" stroke-width="1"/></svg>`,
  inversor: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="12" width="36" height="36" rx="4" fill="#2c3e50"/><rect x="16" y="16" width="28" height="14" rx="2" fill="#1abc9c" opacity="0.4"/><circle cx="22" cy="38" r="4" fill="#e74c3c"/><circle cx="38" cy="38" r="4" fill="#27ae60"/></svg>`,
  bateria: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="16" width="44" height="28" rx="4" fill="#2c3e50" stroke="#2ecc71" stroke-width="2"/><rect x="10" y="18" width="20" height="24" rx="2" fill="#2ecc71" opacity="0.6"/><rect x="50" y="24" width="6" height="12" rx="2" fill="#555"/></svg>`,
  regulador: `<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="15" width="40" height="30" rx="4" fill="#34495e"/><circle cx="30" cy="30" r="10" fill="none" stroke="#3498db" stroke-width="3"/><line x1="30" y1="22" x2="30" y2="26" stroke="#3498db" stroke-width="2"/><line x1="30" y1="30" x2="36" y2="30" stroke="#e74c3c" stroke-width="2"/></svg>`,
  estructura: `<svg viewBox="0 0 60 60" fill="none"><line x1="10" y1="50" x2="50" y2="50" stroke="#888" stroke-width="3"/><line x1="10" y1="50" x2="25" y2="25" stroke="#888" stroke-width="3"/><line x1="50" y1="50" x2="35" y2="25" stroke="#888" stroke-width="3"/><line x1="15" y1="25" x2="45" y2="25" stroke="#555" stroke-width="4"/></svg>`,
  interruptor: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="15" width="36" height="30" rx="4" fill="#eee" stroke="#ccc" stroke-width="1"/><circle cx="30" cy="30" r="8" fill="#3498db"/><circle cx="30" cy="30" r="4" fill="#fff"/></svg>`,
  enchufe: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="15" width="36" height="30" rx="4" fill="#eee" stroke="#ccc"/><circle cx="25" cy="28" r="3" fill="#333"/><circle cx="35" cy="28" r="3" fill="#333"/><rect x="24" y="34" width="12" height="3" rx="1" fill="#333"/></svg>`,
  toma: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="15" width="36" height="30" rx="4" fill="#eee" stroke="#ccc"/><circle cx="22" cy="28" r="6" fill="#3498db" opacity="0.7"/><circle cx="38" cy="28" r="6" fill="#e74c3c" opacity="0.7"/><rect x="24" y="38" width="12" height="3" rx="1" fill="#555"/></svg>`,
  marco: `<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="12" width="40" height="36" rx="3" fill="#f5f5f5" stroke="#ccc" stroke-width="2"/><rect x="16" y="18" width="28" height="24" rx="2" fill="none" stroke="#aaa" stroke-width="1.5"/></svg>`,
  dimmer: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="15" width="36" height="30" rx="4" fill="#eee" stroke="#ccc"/><circle cx="30" cy="30" r="10" fill="none" stroke="#555" stroke-width="3"/><path d="M30 20 L30 24" stroke="#555" stroke-width="2"/><path d="M30 30 L35 27" stroke="#e74c3c" stroke-width="2"/></svg>`,
  pelacables: `<svg viewBox="0 0 60 60" fill="none"><path d="M10 30 L35 20 L50 30 L35 40 Z" fill="#888"/><rect x="35" y="25" width="15" height="10" rx="2" fill="#e67e22"/></svg>`,
  alicate: `<svg viewBox="0 0 60 60" fill="none"><path d="M15 40 L28 28 L32 32 L19 44 Z" fill="#e74c3c"/><path d="M28 28 L45 12 L48 15 L31 31 Z" fill="#888"/><path d="M38 18 L44 12 L48 16 L42 22 Z" fill="#555"/></svg>`,
  destornillador: `<svg viewBox="0 0 60 60" fill="none"><path d="M15 50 L40 25 L45 30 L20 55 Z" fill="#e74c3c"/><rect x="38" y="10" width="8" height="20" rx="2" transform="rotate(45 42 20)" fill="#888"/></svg>`,
  brida: `<svg viewBox="0 0 60 60" fill="none"><path d="M20 20 Q30 10 40 20 L40 40 Q30 50 20 40 Z" fill="none" stroke="#fff" stroke-width="3"/><rect x="38" y="27" width="15" height="6" rx="2" fill="#ccc"/></svg>`,
  cinta: `<svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="20" fill="none" stroke="#111" stroke-width="10"/><circle cx="30" cy="30" r="8" fill="#444"/></svg>`,
  magnetotermico: `<svg viewBox="0 0 60 60" fill="none"><rect x="20" y="8" width="20" height="44" rx="4" fill="#2c3e50"/><rect x="23" y="12" width="14" height="8" rx="2" fill="#e74c3c"/><rect x="25" y="28" width="10" height="16" rx="2" fill="#3498db" opacity="0.5"/><circle cx="30" cy="43" r="3" fill="#f39c12"/></svg>`,
  diferencial: `<svg viewBox="0 0 60 60" fill="none"><rect x="18" y="8" width="24" height="44" rx="4" fill="#2c3e50"/><rect x="21" y="12" width="18" height="8" rx="2" fill="#27ae60"/><rect x="23" y="28" width="14" height="16" rx="2" fill="#1abc9c" opacity="0.4"/><circle cx="30" cy="43" r="3" fill="#f39c12"/></svg>`,
  pia: `<svg viewBox="0 0 60 60" fill="none"><rect x="15" y="8" width="30" height="44" rx="4" fill="#34495e"/><rect x="18" y="12" width="24" height="8" rx="2" fill="#3498db"/><rect x="20" y="28" width="20" height="16" rx="2" fill="#3498db" opacity="0.3"/><circle cx="30" cy="43" r="4" fill="#f39c12"/></svg>`,
  contactor: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="12" width="36" height="36" rx="4" fill="#2c3e50"/><rect x="16" y="16" width="10" height="28" rx="2" fill="#e74c3c" opacity="0.7"/><rect x="30" y="16" width="10" height="28" rx="2" fill="#27ae60" opacity="0.7"/><rect x="22" y="24" width="16" height="12" rx="2" fill="#1abc9c" opacity="0.5"/></svg>`,
  caja: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="12" width="44" height="36" rx="3" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/><rect x="12" y="16" width="10" height="8" rx="1" fill="#3498db" opacity="0.5"/><rect x="25" y="16" width="10" height="8" rx="1" fill="#e74c3c" opacity="0.5"/><rect x="38" y="16" width="10" height="8" rx="1" fill="#27ae60" opacity="0.5"/></svg>`,
  caja_estanca: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="14" width="44" height="32" rx="4" fill="#f0f0f0" stroke="#95a5a6" stroke-width="2"/><rect x="12" y="18" width="36" height="24" rx="2" fill="none" stroke="#bdc3c7" stroke-width="1"/><circle cx="30" cy="30" r="4" fill="#27ae60"/></svg>`,
  tubo: `<svg viewBox="0 0 60 60" fill="none"><ellipse cx="12" cy="30" rx="7" ry="12" fill="none" stroke="#e67e22" stroke-width="3"/><rect x="12" y="18" width="36" height="24" fill="none" stroke="#e67e22" stroke-width="3"/><ellipse cx="48" cy="30" rx="7" ry="12" fill="none" stroke="#e67e22" stroke-width="3"/></svg>`,
  canaleta: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="32" width="44" height="18" rx="2" fill="#95a5a6"/><rect x="8" y="28" width="44" height="6" rx="1" fill="#bdc3c7"/></svg>`,
  grapa: `<svg viewBox="0 0 60 60" fill="none"><path d="M20 40 L20 25 Q20 15 30 15 Q40 15 40 25 L40 40" fill="none" stroke="#888" stroke-width="4"/><rect x="15" y="38" width="30" height="8" rx="2" fill="#aaa"/></svg>`,
  videoportero: `<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="8" width="40" height="44" rx="4" fill="#2c3e50"/><rect x="14" y="12" width="32" height="22" rx="2" fill="#1a56a0"/><circle cx="30" cy="42" r="5" fill="#7f8c8d"/></svg>`,
  rj45: `<svg viewBox="0 0 60 60" fill="none"><rect x="20" y="15" width="20" height="30" rx="2" fill="#f39c12"/><rect x="22" y="38" width="16" height="6" rx="1" fill="#e67e22"/><line x1="24" y1="20" x2="24" y2="36" stroke="#fff" stroke-width="1.5"/><line x1="28" y1="20" x2="28" y2="36" stroke="#fff" stroke-width="1.5"/><line x1="32" y1="20" x2="32" y2="36" stroke="#fff" stroke-width="1.5"/><line x1="36" y1="20" x2="36" y2="36" stroke="#fff" stroke-width="1.5"/></svg>`,
  roseta: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="12" width="36" height="36" rx="3" fill="#f5f5f5" stroke="#ccc"/><circle cx="22" cy="27" r="6" fill="#3498db" opacity="0.6"/><circle cx="38" cy="27" r="6" fill="#e74c3c" opacity="0.6"/><rect x="18" y="38" width="24" height="3" rx="1" fill="#555"/></svg>`,
  amplificador: `<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="18" width="40" height="24" rx="3" fill="#34495e"/><path d="M16 30 L28 22 L28 38 Z" fill="#3498db"/><circle cx="38" cy="30" r="6" fill="#1abc9c" opacity="0.6"/><circle cx="38" cy="30" r="2" fill="#fff"/></svg>`,
  default: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="12" width="36" height="36" rx="4" fill="#2c3e50"/><circle cx="30" cy="30" r="10" fill="#3498db" opacity="0.7"/></svg>`,
};
