// ==============================================
// Datos estáticos: Especificaciones técnicas
// ==============================================

export const PRODUCT_DETAILS = {
  // --- CABLES ---
  cab001: {
    specs: [
      { label: 'Sección', value: '1×6 mm²' },
      { label: 'Tensión nominal', value: '0,6/1 kV' },
      { label: 'Aislamiento', value: 'Polietileno reticulado (XLPE)' },
      { label: 'Cubierta', value: 'Poliolefina libre de halógenos' },
      { label: 'Norma', value: 'UNE-EN 50618' },
      { label: 'Temperatura máx.', value: '90 °C' },
      { label: 'Longitud del rollo', value: '100 m' },
      { label: 'Color', value: 'Negro' },
    ],
    disclaimer: 'Cable solar homologado para instalaciones fotovoltaicas. Requiere conectores MC4 y portafusibles adecuados. La instalación debe realizarse por electricista autorizado.',
  },
  cab002: {
    specs: [
      { label: 'Sección', value: '1×2,5 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Aislamiento', value: 'PVC termoplástico' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Norma', value: 'UNE 21031' },
      { label: 'Temperatura máx.', value: '70 °C' },
      { label: 'Color', value: 'Azul (neutro)' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
  },
  cab003: {
    specs: [
      { label: 'Sección', value: '1×2,5 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Aislamiento', value: 'PVC termoplástico' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Norma', value: 'UNE 21031' },
      { label: 'Temperatura máx.', value: '70 °C' },
      { label: 'Color', value: 'Marrón (fase)' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
  },
  cab006: {
    specs: [
      { label: 'Sección', value: '3×1,5 mm²' },
      { label: 'Tensión nominal', value: '0,6/1 kV' },
      { label: 'Aislamiento', value: 'PVC sobre cada conductor' },
      { label: 'Cubierta exterior', value: 'PVC negro' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Norma', value: 'UNE 21123-4' },
      { label: 'Temperatura máx.', value: '70 °C' },
    ],
    compatibles: [
      { nombre: 'Tubo corrugado ø20 mm', motivo: 'Protección en montaje superficial/empotrado' },
      { nombre: 'Canaleta PVC 40×25 mm', motivo: 'Canalización en bandeja' },
    ],
  },
  cab009: {
    specs: [
      { label: 'Sección', value: '3×6 mm²' },
      { label: 'Tensión nominal', value: '0,6/1 kV' },
      { label: 'Aislamiento', value: 'Polietileno reticulado (XLPE)' },
      { label: 'Cubierta', value: 'Poliolefina libre de halógenos' },
      { label: 'Capacidad de corriente', value: '≈ 44 A (bandeja al aire)' },
      { label: 'Norma', value: 'UNE-EN 50618 / IEC 62930' },
      { label: 'Temperatura máx.', value: '90 °C' },
    ],
  },

  // --- ENERGÍA RENOVABLE ---
  sol001: {
    specs: [
      { label: 'Potencia pico', value: '400 Wp' },
      { label: 'Eficiencia', value: '≥ 20,5 %' },
      { label: 'Voc', value: '49,5 V' },
      { label: 'Isc', value: '10,2 A' },
      { label: 'Vmpp', value: '41,8 V' },
      { label: 'Dimensiones', value: '1.722 × 1.134 × 35 mm' },
      { label: 'Peso', value: '21,5 kg' },
      { label: 'Garantía producto', value: '12 años' },
      { label: 'Garantía rendimiento', value: '25 años (≥80%)' },
      { label: 'Grado de protección', value: 'IP68 caja de conexiones' },
      { label: 'Células', value: 'Monocristalinas PERC 182 mm' },
    ],
    disclaimer: 'Para que el panel funcione correctamente se necesitan: inversor o regulador MPPT compatible, estructura de montaje homologada, cable solar RZ1-K, protecciones (fusibles DC, seccionador) y un instalador autorizado. En autoconsumo conectado a red es obligatorio el permiso de conexión.',
    compatibles: [
      { nombre: 'Inversor Híbrido 5 kW (INV-HYB-5KW)', motivo: 'Conversión DC→AC y gestión de red' },
      { nombre: 'Regulador MPPT 40 A (MPPT-40A)', motivo: 'Para sistemas isla sin inversor' },
      { nombre: 'Estructura coplanar aluminio (EST-2P-ALU)', motivo: 'Soporte y fijación sobre cubierta' },
      { nombre: 'Cable RZ1-K solar 6 mm² (RZ1K-1x6-100)', motivo: 'Cableado DC entre paneles e inversor' },
      { nombre: 'Batería LiFePO4 100 Ah 48 V (BAT-LFP-100-48)', motivo: 'Almacenamiento de energía (sistema híbrido)' },
    ],
  },
  sol002: {
    specs: [
      { label: 'Potencia pico', value: '550 Wp' },
      { label: 'Eficiencia', value: '≥ 21,3 %' },
      { label: 'Voc', value: '50,1 V' },
      { label: 'Isc', value: '13,8 A' },
      { label: 'Vmpp', value: '42,3 V' },
      { label: 'Dimensiones', value: '2.278 × 1.134 × 35 mm' },
      { label: 'Peso', value: '27,5 kg' },
      { label: 'Garantía rendimiento', value: '25 años (≥80%)' },
      { label: 'Células', value: 'Monocristalinas M10 PERC' },
      { label: 'Grado IP (j.c.)', value: 'IP68' },
    ],
    disclaimer: 'Panel de gran formato. Requiere estructura reforzada apta para paneles de 550 W, inversor con entrada MPP de alto voltaje, y técnico cualificado para la instalación. Verificar la resistencia de la cubierta (≥ 1,4 kPa viento / 2,4 kPa nieve).',
    compatibles: [
      { nombre: 'Inversor Híbrido 10 kW (INV-HYB-10KW)', motivo: 'Recomendado para strings de múltiples paneles' },
      { nombre: 'Estructura coplanar aluminio (EST-2P-ALU)', motivo: 'Soporte y fijación sobre cubierta' },
      { nombre: 'Cable RZ1-K solar 6 mm² (RZ1K-1x6-100)', motivo: 'Cableado DC entre paneles e inversor' },
    ],
  },
  sol003: {
    specs: [
      { label: 'Potencia nominal AC', value: '5 kW' },
      { label: 'Tensión batería', value: '48 V' },
      { label: 'Conexión red', value: 'Monofásica 230 V / 50 Hz' },
      { label: 'Rango MPP', value: '80 – 450 V' },
      { label: 'Corriente MPP máx.', value: '2×11 A (2 trackers)' },
      { label: 'Cargador batería', value: '60 A máx.' },
      { label: 'Eficiencia máx.', value: '97,6 %' },
      { label: 'Protección', value: 'IP65' },
      { label: 'Temperatura operación', value: '-25 a +60 °C' },
      { label: 'Comunicación', value: 'WiFi + RS485' },
      { label: 'Garantía', value: '5 años (ampliable)' },
    ],
    disclaimer: 'El inversor híbrido requiere baterías de litio o AGM compatibles (48 V). Para uso en autoconsumo con vertido cero es necesario el kit de monitorización y contadore bidireccional homologado. La puesta en marcha debe realizarla un instalador certificado.',
    compatibles: [
      { nombre: 'Panel Solar 400 W (PAN-MONO-400)', motivo: 'Generación solar DC' },
      { nombre: 'Batería LiFePO4 100 Ah (BAT-LFP-100-48)', motivo: 'Almacenamiento de energía' },
      { nombre: 'Cable RZ1-K solar 6 mm² (RZ1K-1x6-100)', motivo: 'Conexión DC paneles–inversor' },
    ],
  },
  sol005: {
    specs: [
      { label: 'Tipo', value: 'MPPT' },
      { label: 'Corriente máx.', value: '40 A' },
      { label: 'Tensión sistema', value: '12/24/48 V (auto)' },
      { label: 'Voc paneles máx.', value: '150 V' },
      { label: 'Potencia máx. FV @ 12V', value: '520 W' },
      { label: 'Potencia máx. FV @ 48V', value: '2.080 W' },
      { label: 'Eficiencia conversión', value: '98 %' },
      { label: 'Comunicación', value: 'RS485 / Bluetooth (opcional)' },
      { label: 'Protección', value: 'IP32' },
    ],
    disclaimer: 'Solo para sistemas isla (off-grid). No conectar a red. Compatible con baterías AGM, Gel, LiFePO4 y Li-Ion. Asegúrate de que la potencia de los paneles no supere el máximo admitido para el voltaje de batería elegido.',
    compatibles: [
      { nombre: 'Panel Solar 400 W (PAN-MONO-400)', motivo: 'Generación solar DC' },
      { nombre: 'Batería LiFePO4 100 Ah (BAT-LFP-100-48)', motivo: 'Banco de baterías del sistema' },
    ],
  },
  sol006: {
    specs: [
      { label: 'Material', value: 'Aluminio anodizado' },
      { label: 'Capacidad', value: '2 paneles (hasta 550 W)' },
      { label: 'Inclinación', value: 'Coplanar (paralelo a cubierta)' },
      { label: 'Carga viento admitida', value: '1,4 kPa' },
      { label: 'Carga nieve admitida', value: '2,4 kPa' },
      { label: 'Compatibilidad', value: 'Paneles de marco estándar 35 mm' },
      { label: 'Incluye', value: 'Tornillería en acero inoxidable A2' },
      { label: 'Montaje', value: 'Cubierta inclinada teja/chapa' },
    ],
    disclaimer: 'Verificar la resistencia de la cubierta antes de la instalación. Para cubiertas planas o grandes instalaciones consultar soluciones de ballast o anclaje específico. La instalación requiere acceso seguro a cubierta con EPI.',
    compatibles: [
      { nombre: 'Panel Solar 400 W (PAN-MONO-400)', motivo: 'Compatible directamente' },
      { nombre: 'Panel Solar 550 W (PAN-MONO-550)', motivo: 'Compatible directamente' },
    ],
  },
  sol007: {
    specs: [
      { label: 'Capacidad ACS', value: '200 L' },
      { label: 'Tipo', value: 'Monobloc (unidad exterior+depósito)' },
      { label: 'Potencia absorbida', value: '0,55 kW' },
      { label: 'COP', value: '3,5 (A7/W15)' },
      { label: 'Temperatura agua máx.', value: '75 °C' },
      { label: 'Fluido refrigerante', value: 'R290 (natural)' },
      { label: 'Ruido', value: '42 dB(A)' },
      { label: 'Clase energética', value: 'A++' },
      { label: 'Alimentación', value: '230 V / 50 Hz / 1F' },
      { label: 'Peso', value: '75 kg' },
    ],
    disclaimer: 'La aerotermia requiere una conexión hidráulica con el depósito de ACS y conexión eléctrica monofásica (16 A mín.). La instalación debe realizarla un técnico habilitado (RITE). Puede acogerse a subvenciones MOVES III / PERTE-ERHA. Se recomienda instalar diferencial tipo A.',
    compatibles: [
      { nombre: 'Diferencial 2P 25 A Tipo A (DIF-2P-25A-A)', motivo: 'Protección obligatoria para bomba de calor' },
      { nombre: 'Magnetotérmico 1P+N 20 A (MAG-1PN-20A-C)', motivo: 'Protección del circuito eléctrico' },
    ],
  },

  // --- ILUMINACIÓN ---
  ilu001: {
    specs: [
      { label: 'Casquillo', value: 'E27' },
      { label: 'Potencia', value: '10 W' },
      { label: 'Flujo luminoso', value: '806 lm' },
      { label: 'Eficacia', value: '80,6 lm/W' },
      { label: 'Temperatura de color', value: '2.700 K (cálida)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Vida útil', value: '25.000 h' },
      { label: 'Equivalente incandescente', value: '60 W' },
      { label: 'Ángulo de apertura', value: '220°' },
      { label: 'Clase energética', value: 'F (UE 2021)' },
    ],
  },
  ilu003: {
    specs: [
      { label: 'Potencia', value: '18 W' },
      { label: 'Flujo luminoso', value: '1.620 lm' },
      { label: 'Eficacia', value: '90 lm/W' },
      { label: 'Temperatura de color', value: '4.000 K (neutro)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Diámetro corte', value: 'Ø 175 mm' },
      { label: 'Diámetro total', value: 'Ø 205 mm' },
      { label: 'Vida útil', value: '30.000 h' },
      { label: 'Driver incluido', value: 'Sí (no regulable)' },
      { label: 'Grado IP', value: 'IP44' },
    ],
    compatibles: [
      { nombre: 'Dimmer Rotativo LED 5-150 W (DIM-LED-150W)', motivo: 'Regulación de intensidad (requiere driver dimmable)' },
    ],
  },
  ilu005: {
    specs: [
      { label: 'Potencia', value: '40 W' },
      { label: 'Dimensiones', value: '595 × 595 mm' },
      { label: 'Flujo luminoso', value: '3.600 lm' },
      { label: 'Eficacia', value: '90 lm/W' },
      { label: 'Temperatura de color', value: '4.000 K (neutro)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Vida útil', value: '50.000 h' },
      { label: 'UGR', value: '< 19 (antieslumbramiento)' },
      { label: 'Driver', value: 'Incluido, conmutable 3CCT (3000/4000/6000K)' },
      { label: 'Grado IP', value: 'IP40' },
      { label: 'Clase energética', value: 'C' },
    ],
    disclaimer: 'Para montaje en techo de escayola o modular estándar 600×600 mm. Para techo suspendido con colgante se necesita kit de anclaje adicional. No exponer a ambientes húmedos (IP40).',
  },
  ilu007: {
    specs: [
      { label: 'Potencia', value: '50 W' },
      { label: 'Flujo luminoso', value: '5.000 lm' },
      { label: 'Temperatura de color', value: '4.000 K' },
      { label: 'IRC (Ra)', value: '≥ 70' },
      { label: 'Ángulo apertura', value: '120°' },
      { label: 'Grado protección', value: 'IP65 / IK08' },
      { label: 'Temperatura operación', value: '-40 a +50 °C' },
      { label: 'Material', value: 'Fundición aluminio + vidrio templado' },
      { label: 'Vida útil', value: '50.000 h' },
    ],
    disclaimer: 'Para exteriores. No sumergir. Verificar que el soporte/poste es compatible con el peso del proyector. Requiere manguera de exterior RV-K o RZ1-K para la acometida.',
    compatibles: [
      { nombre: 'Manguera RV-K 3×1,5 mm² (RVK-3x1.5)', motivo: 'Acometida exterior hasta el proyector' },
      { nombre: 'Detector de Movimiento PIR 360° (DET-PIR-360)', motivo: 'Encendido automático por presencia' },
    ],
  },
  ilu010: {
    specs: [
      { label: 'Potencia', value: '6 W' },
      { label: 'Flujo de emergencia', value: '≥ 180 lm' },
      { label: 'Autonomía', value: '1 hora (CTE DB-SI)' },
      { label: 'Batería', value: 'NiMH recargable integrada' },
      { label: 'Tiempo de carga', value: '24 h' },
      { label: 'Modo de funcionamiento', value: 'Permanente / no permanente' },
      { label: 'Grado IP', value: 'IP42 / IK04' },
      { label: 'Clase', value: 'II (doble aislamiento)' },
    ],
    disclaimer: 'Obligatoria en vías de evacuación, escaleras y salidas de emergencia según CTE DB-SI y REBT. Localización y fotometría deben verificarse con el proyecto de instalación contra incendios.',
  },

  // --- APARAMENTA ---
  apa001: {
    specs: [
      { label: 'Polos', value: '1P+N' },
      { label: 'Intensidad nominal', value: '16 A' },
      { label: 'Curva de disparo', value: 'C (3–5 In)' },
      { label: 'Poder de corte', value: '6 kA (IEC 60898-1)' },
      { label: 'Tensión nominal', value: '230 V AC' },
      { label: 'Módulos DIN', value: '2 módulos (36 mm)' },
      { label: 'Norma', value: 'IEC 60898-1 / EN 60898-1' },
      { label: 'Temperatura operación', value: '-25 a +70 °C' },
    ],
    disclaimer: 'Para protección de circuitos de alumbrado y pequeñas cargas. Para cargas con motores o picos de arranque elevados, usar curva D. Instalar siempre junto con un diferencial para protección contra contactos indirectos.',
    compatibles: [
      { nombre: 'Diferencial 2P 25 A Tipo A (DIF-2P-25A-A)', motivo: 'Protección contra contactos indirectos y fugas' },
      { nombre: 'Caja distribución superficie 18 módulos (CAJA-SUP-18M)', motivo: 'Alojamiento en cuadro' },
    ],
  },
  apa004: {
    specs: [
      { label: 'Polos', value: '2P' },
      { label: 'Intensidad nominal', value: '25 A' },
      { label: 'Sensibilidad', value: '30 mA' },
      { label: 'Tipo', value: 'A (detecta corriente senoidal y pulsante)' },
      { label: 'Tensión nominal', value: '230 V AC' },
      { label: 'Función de disparo', value: 'Sin retardo (instantáneo)' },
      { label: 'Módulos DIN', value: '2 módulos' },
      { label: 'Norma', value: 'IEC 61008-1' },
    ],
    disclaimer: 'Tipo A recomendado para circuitos con electrónica (variadores, cargadores de VE, equipos informáticos). Para bombas de calor o aerotermia es OBLIGATORIO el tipo A o F según fabricante.',
  },
  apa006: {
    specs: [
      { label: 'Polos', value: '4P' },
      { label: 'Intensidad nominal', value: '32 A' },
      { label: 'Curva de disparo', value: 'C' },
      { label: 'Poder de corte', value: '10 kA' },
      { label: 'Tensión nominal', value: '400 V AC (trifásico)' },
      { label: 'Módulos DIN', value: '4 módulos' },
      { label: 'Norma', value: 'IEC 60947-2' },
    ],
    disclaimer: 'Para uso en instalaciones trifásicas (230/400 V). Requiere cuadro con espacio suficiente para 4 módulos. Combinar con diferencial 4P para protección completa de la instalación.',
    compatibles: [
      { nombre: 'Armario Metálico IP65 (ARM-IP65-300)', motivo: 'Alojamiento en exterior o zonas húmedas' },
    ],
  },

  // --- ARMARIOS ---
  arm003: {
    specs: [
      { label: 'Tipo de montaje', value: 'Empotrado' },
      { label: 'Capacidad', value: '36 módulos DIN (3 filas × 12)' },
      { label: 'Material', value: 'ABS autoextinguible' },
      { label: 'Incluye', value: 'Puerta opaca + cerradero con llave' },
      { label: 'Grado IP (interior)', value: 'IP40' },
      { label: 'Norma', value: 'IEC 60670' },
    ],
    compatibles: [
      { nombre: 'Magnetotérmico 1P+N 16 A (MAG-1PN-16A-C)', motivo: 'Protección circuitos individuales' },
      { nombre: 'Diferencial 2P 40 A (DIF-2P-40A-AC)', motivo: 'Protección general del cuadro' },
      { nombre: 'Peines de fase combinado 1P+N (PEINE-1PN-12)', motivo: 'Interconexión eficiente de fases' },
    ],
  },
  arm004: {
    specs: [
      { label: 'Dimensiones int.', value: '300×400×200 mm (H×W×D)' },
      { label: 'Material', value: 'Acero laminado en frío' },
      { label: 'Tratamiento', value: 'Galvanizado + pintura epoxi RAL 7035' },
      { label: 'Grado protección', value: 'IP65 / IK10' },
      { label: 'Cierre', value: 'Cerradura de cuarto de vuelta' },
      { label: 'Incluye', value: 'Placa de montaje DIN + pasacables' },
    ],
    disclaimer: 'Para instalación en exterior u zonas con ambiente húmedo. Verificar que el prensaestopas usado mantiene el grado IP65. El peso máximo de equipos a instalar no debe superar 15 kg.',
  },

  // --- TELECOMUNICACIONES ---
  tel001: {
    specs: [
      { label: 'Pantalla', value: '7" color táctil' },
      { label: 'Conectividad', value: 'WiFi 2,4 GHz + App móvil' },
      { label: 'Resolución cámara', value: '720p HD' },
      { label: 'Ángulo de visión', value: '120°' },
      { label: 'Alimentación monitor', value: '100-240 V AC' },
      { label: 'Alimentación placa', value: 'PoE o 12 V DC' },
      { label: 'Apertura puerta', value: 'Relé integrado (12 V)' },
      { label: 'Norma', value: 'IP54 (placa exterior)' },
    ],
    disclaimer: 'Requiere placa de calle compatible (VP-PLC-1P). La instalación WiFi requiere enrutador a menos de 15 m. Para instalación en red IP estructurada, usar cable FTP Cat.6. Verificar compatibilidad con cerradura eléctrica.',
    compatibles: [
      { nombre: 'Placa Calle Videoportero 1P (VP-PLC-1P)', motivo: 'Unidad exterior obligatoria' },
      { nombre: 'Cable FTP Cat6 LSZH (UTP-CAT6-LSZH)', motivo: 'Cableado estructurado entre placa y monitor' },
    ],
  },
  tel007: {
    specs: [
      { label: 'Puertos', value: '8× RJ45 Gigabit PoE + 2 uplink SFP' },
      { label: 'PoE estándar', value: 'IEEE 802.3af/at (PoE+)' },
      { label: 'Potencia total PoE', value: '120 W' },
      { label: 'Velocidad conmutación', value: '20 Gbps' },
      { label: 'Gestión', value: 'Web-managed' },
      { label: 'Alimentación', value: '100-240 V AC' },
      { label: 'Montaje', value: 'Rack 1U o sobremesa' },
      { label: 'Grado IP', value: 'IP20' },
    ],
    disclaimer: 'Para instalación en rack de telecomunicaciones (1,75" de altura). Requiere ventilación adecuada. La suma de potencias PoE de los dispositivos conectados no debe superar 120 W.',
    compatibles: [
      { nombre: 'Cable FTP Cat6 LSZH (UTP-CAT6-LSZH)', motivo: 'Cableado estructurado categoría 6' },
      { nombre: 'Conector RJ45 Cat6 (RJ45-C6-100)', motivo: 'Terminaciones de cable en paneles o rosetas' },
      { nombre: 'Armario Metálico IP65 (ARM-IP65-300)', motivo: 'Alojamiento del switch en exterior' },
    ],
  },

  // --- BATERÍAS ---
  bat001: {
    specs: [
      { label: 'Tecnología', value: 'LiFePO4 (litio-hierro-fosfato)' },
      { label: 'Capacidad', value: '100 Ah' },
      { label: 'Tensión nominal', value: '48 V' },
      { label: 'Energía almacenada', value: '4,8 kWh' },
      { label: 'Ciclos de vida (80% DoD)', value: '> 4.000 ciclos' },
      { label: 'BMS integrado', value: 'Sí (protección sobrecarga/descarga/temp.)' },
      { label: 'Corriente máx. descarga', value: '100 A' },
      { label: 'Temperatura operación', value: '0 a +45 °C' },
      { label: 'Comunicación', value: 'RS485 / CAN bus' },
      { label: 'Garantía', value: '10 años / 4.000 ciclos' },
    ],
    disclaimer: 'Para instalación en sistemas fotovoltaicos off-grid o híbridos. Debe utilizarse junto a un inversor o regulador compatible con baterías LiFePO4. La instalación requiere electricista cualificado. No instalar en temperatura inferior a 0 °C. Mantener lejos de material inflamable.',
    compatibles: [
      { nombre: 'Inversor Híbrido 5 kW (INV-HYB-5KW)', motivo: 'Gestión de carga y descarga de la batería' },
      { nombre: 'Panel Solar 400 W (PAN-MONO-400)', motivo: 'Fuente de energía para la carga' },
    ],
  },
  bat003: {
    specs: [
      { label: 'Potencia nominal', value: '1.000 VA / 900 W' },
      { label: 'Topología', value: 'Online doble conversión' },
      { label: 'Tiempo de conmutación', value: '0 ms (online)' },
      { label: 'Autonomía carga plena', value: '8 min aprox.' },
      { label: 'Batería', value: 'Sellada VRLA 12 V / 9 Ah ×2' },
      { label: 'Factor de potencia salida', value: '0,9' },
      { label: 'Forma de onda salida', value: 'Senoidal pura' },
      { label: 'Montaje', value: 'Rack 1U o torre' },
      { label: 'Comunicación', value: 'USB + RS232 + SNMP opcional' },
      { label: 'Norma', value: 'IEC 62040-1 / IEC 62040-2' },
    ],
    disclaimer: 'Para protección de servidores, equipos de red y sistemas de control críticos. Senoidal pura: compatible con fuentes de alimentación con corrección de factor de potencia (PFC). Localizar en lugar ventilado. La sustitución de baterías la puede realizar el usuario.',
  },
  bat005: {
    specs: [
      { label: 'Zonas', value: '32 zonas cableadas + inalámbricas' },
      { label: 'Comunicación', value: 'WiFi + GSM 2G/4G + Ethernet' },
      { label: 'App móvil', value: 'iOS y Android' },
      { label: 'Alimentación', value: '230 V AC (batería backup 12 V / 7 Ah)' },
      { label: 'Salidas sirena', value: '2 (interior + exterior)' },
      { label: 'Grado de seguridad', value: 'Grado 2 (EN 50131)' },
      { label: 'Certificación', value: 'EN 50131 / PD6662' },
    ],
    disclaimer: 'Instalación y configuración recomendadas por empresa instaladora de seguridad homologada. Para espacios comerciales puede ser obligatoria la instalación con Central Receptora de Alarmas (CRA). Verificar cobertura GSM en la ubicación.',
    compatibles: [
      { nombre: 'Detector de Humos 9V (DET-HUM-9V)', motivo: 'Detección de incendio integrada' },
      { nombre: 'Sirena Exterior IP34 (SIR-EXT-IP34)', motivo: 'Alarma acústica y luminosa exterior' },
      { nombre: 'Detector PIR 360° Techo (DET-PIR-360)', motivo: 'Detección de movimiento por infrarrojos' },
    ],
  },

  // --- MECANISMOS ---
  mec009: {
    specs: [
      { label: 'Protocolo', value: 'KNX (TP)' },
      { label: 'Interfaz PC', value: 'USB (ETS5/ETS6)' },
      { label: 'Velocidad bus', value: '9.600 bps' },
      { label: 'Alimentación', value: 'Bus KNX (SELV)' },
      { label: 'Norma', value: 'EN 50090 / ISO/IEC 14543' },
    ],
    disclaimer: 'Para programar instalaciones KNX se requiere licencia ETS (Engineering Tool Software) y formación acreditada KNX. El gateway es necesario para configurar todos los dispositivos del bus. Consultar con integrador certificado KNX.',
    compatibles: [
      { nombre: 'Interruptores serie Elegance (INT-SIM-ELG-BL)', motivo: 'Mecanismos del sistema domótico' },
      { nombre: 'Dimmer Rotativo LED (DIM-LED-150W)', motivo: 'Control de iluminación KNX' },
    ],
  },

  // --- MEDIDA ---
  med001: {
    specs: [
      { label: 'Medición', value: 'Trifásica 3/4 hilos' },
      { label: 'Tensión entrada', value: '3×57,7/100 V – 3×230/400 V' },
      { label: 'Corriente', value: 'Via TC externo (1/5 A)' },
      { label: 'Parámetros medidos', value: 'V, I, P, Q, S, FP, f, THD, energía' },
      { label: 'Pantalla', value: 'LCD retroiluminado 4 dígitos' },
      { label: 'Salidas', value: 'RS485 Modbus RTU + 2 salidas pulso' },
      { label: 'Montaje', value: 'DIN 96×96 mm (empotrado cuadro)' },
      { label: 'Precisión', value: 'Clase 1 (IEC 61557-12)' },
    ],
    disclaimer: 'Requiere transformadores de corriente (TC) externos, calibrados según la sección del cable a medir. No incluye TC en este precio. Para medición fiscal consultar modelos con homologación metrológica.',
  },

  // --- HERRAMIENTAS ---
  her008: {
    specs: [
      { label: 'Categoría de medición', value: 'CAT III 600 V / CAT II 1000 V' },
      { label: 'Tensión DC', value: 'hasta 1.000 V' },
      { label: 'Tensión AC', value: 'hasta 750 V (RMS vera)' },
      { label: 'Corriente DC/AC', value: 'hasta 10 A' },
      { label: 'Resistencia', value: 'hasta 40 MΩ' },
      { label: 'Frecuencia', value: '10 Hz – 10 MHz' },
      { label: 'Pantalla', value: 'LCD 4.000 cuentas retroiluminada' },
      { label: 'Funciones extra', value: 'NCV, diodo, continuidad, temperatura (con sonda)' },
    ],
  },

  // --- DYSON ---
  dys001: {
    specs: [
      { label: 'Modelo', value: 'Dyson V15 Detect Absolute' },
      { label: 'Autonomía', value: 'hasta 60 min (modo eco)' },
      { label: 'Succión', value: '230 AW' },
      { label: 'Filtración', value: 'HEPA completo (captura 99,97% partículas 0,3 μm)' },
      { label: 'Sensor láser', value: 'Sí (detecta polvo fino en suelos duros)' },
      { label: 'Pantalla LCD', value: 'Tiempo restante y tamaño de partículas' },
      { label: 'Peso', value: '3,1 kg' },
      { label: 'Carga', value: '4,5 h (base de carga incluida)' },
    ],
  },
  dys003: {
    specs: [
      { label: 'Modelo', value: 'Dyson Purifier Cool TP09' },
      { label: 'Proyección de aire', value: '77 litros/segundo (modo ventilador)' },
      { label: 'Partículas capturadas', value: '99,97% ≥ 0,1 μm (HEPA H13)' },
      { label: 'Gases capturados', value: 'VOC, NOx, H2S (carbón activado)' },
      { label: 'Cobertura', value: 'hasta 85 m²' },
      { label: 'Conectividad', value: 'WiFi + App MyDyson + Alexa/Google' },
      { label: 'Modos', value: 'Purificación automática, difuso, noche, oscilación 350°' },
      { label: 'Ruido en modo noche', value: '< 44 dB(A)' },
    ],
  },

  // --- WIZARD ---
  wiz001: {
    specs: [
      { label: 'Longitud', value: '5 m (ampliable hasta 10 m)' },
      { label: 'Tipo LED', value: 'SMD 5050 RGB+W' },
      { label: 'Tensión', value: '24 V DC' },
      { label: 'Potencia', value: '14,4 W/m (total: 72 W)' },
      { label: 'Flujo luminoso', value: '600 lm/m' },
      { label: 'Grado IP', value: 'IP44 (apta para exteriores cubiertos)' },
      { label: 'Control', value: 'WiFi + App WiZ + Alexa/Google Home' },
      { label: 'Temperatura color blanco', value: '2.200 – 6.500 K (ajustable)' },
    ],
    disclaimer: 'Requiere fuente de alimentación de 24 V DC (no incluida). Calcular el amperaje según la longitud total instalada. No instalar en superficies inflamables. Para exteriores cubrir empalmes con silicona transparente.',
    compatibles: [
      { nombre: 'Bombilla Inteligente WiZ E27 (WIZ-BULB-E27)', motivo: 'Compatible con la misma app WiZ' },
    ],
  },

  // --- CABLES (restantes) ---
  cab004: {
    specs: [
      { label: 'Sección', value: '1×2,5 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Aislamiento', value: 'PVC termoplástico' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Color', value: 'Amarillo/Verde (tierra)' },
      { label: 'Norma', value: 'UNE 21031' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
    disclaimer: 'Este conductor es exclusivo para conexión a tierra (PE). NUNCA usarlo como conductor de fase o neutro según REBT.',
  },
  cab005: {
    specs: [
      { label: 'Sección', value: '1×4 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Aislamiento', value: 'PVC termoplástico' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Color', value: 'Negro (fase)' },
      { label: 'Temperatura máx.', value: '70 °C' },
      { label: 'Intensidad admisible', value: '≈ 32 A (tubo empotrado)' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
  },
  cab007: {
    specs: [
      { label: 'Sección', value: '3×2,5 mm²' },
      { label: 'Tensión nominal', value: '0,6/1 kV' },
      { label: 'Aislamiento', value: 'PVC sobre cada conductor' },
      { label: 'Cubierta exterior', value: 'PVC negro' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Intensidad admisible', value: '≈ 22 A (al aire)' },
      { label: 'Norma', value: 'UNE 21123-4' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
    compatibles: [
      { nombre: 'Tubo corrugado ø25 mm', motivo: 'Protección mecánica en montaje empotrado' },
    ],
  },
  cab008: {
    specs: [
      { label: 'Sección', value: '5×6 mm²' },
      { label: 'Tensión nominal', value: '0,6/1 kV' },
      { label: 'Aislamiento', value: 'PVC' },
      { label: 'Cubierta exterior', value: 'PVC negro' },
      { label: 'Conductor', value: 'Cu flexible clase 5' },
      { label: 'Intensidad admisible', value: '≈ 40 A (al aire)' },
      { label: 'Norma', value: 'UNE 21123-4' },
      { label: 'Aplicación típica', value: 'Líneas trifásicas, maquinaria' },
    ],
  },
  cab010: {
    specs: [
      { label: 'Sección', value: '16 mm²' },
      { label: 'Material conductor', value: 'Cobre desnudo recocido' },
      { label: 'Construcción', value: 'Trenzado flexible clase 5' },
      { label: 'Norma', value: 'UNE-EN 50290 / IEC 60228' },
      { label: 'Aplicación', value: 'Conductores de tierra en instalaciones eléctricas' },
      { label: 'Venta por', value: 'Metro lineal' },
    ],
    disclaimer: 'Conductor exclusivo para toma de tierra. Debe conectarse siempre a la barra de tierra del cuadro y a las masas metálicas de la instalación. La resistencia de tierra debe medirse tras la instalación.',
  },

  // --- ENERGÍA RENOVABLE (restantes) ---
  sol004: {
    specs: [
      { label: 'Potencia nominal AC', value: '10 kW' },
      { label: 'Tensión batería', value: '48 V' },
      { label: 'Conexión red', value: 'Trifásica 400 V / 50 Hz' },
      { label: 'Rango MPP', value: '120 – 800 V (3 trackers)' },
      { label: 'Corriente MPP máx.', value: '3×15 A' },
      { label: 'Cargador batería', value: '100 A máx.' },
      { label: 'Eficiencia máx.', value: '98,2 %' },
      { label: 'Protección', value: 'IP65' },
      { label: 'Comunicación', value: 'WiFi + Ethernet + RS485' },
      { label: 'Garantía', value: '5 años (ampliable a 10)' },
    ],
    disclaimer: 'Requiere conexión trifásica y legalización como instalación de autoconsumo (RD 244/2019). La puesta en marcha debe hacerla un instalador eléctrico autorizado con número CUPS de la instalación.',
    compatibles: [
      { nombre: 'Panel Solar 550 W (PAN-MONO-550)', motivo: 'Generación solar en strings trifásicos' },
      { nombre: 'Batería LiFePO4 200 Ah (BAT-LFP-200-48)', motivo: 'Almacenamiento de alta capacidad' },
    ],
  },

  // --- ILUMINACIÓN (restantes) ---
  ilu002: {
    specs: [
      { label: 'Casquillo', value: 'E27' },
      { label: 'Potencia', value: '10 W' },
      { label: 'Flujo luminoso', value: '806 lm' },
      { label: 'Eficacia', value: '80,6 lm/W' },
      { label: 'Temperatura de color', value: '6.500 K (fría / luz de día)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Vida útil', value: '25.000 h' },
      { label: 'Ángulo de apertura', value: '220°' },
      { label: 'Clase energética', value: 'F (UE 2021)' },
    ],
  },
  ilu004: {
    specs: [
      { label: 'Potencia', value: '24 W' },
      { label: 'Flujo luminoso', value: '2.160 lm' },
      { label: 'Eficacia', value: '90 lm/W' },
      { label: 'Temperatura de color', value: '4.000 K (neutro)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Diámetro corte', value: 'Ø 200 mm' },
      { label: 'Diámetro total', value: 'Ø 230 mm' },
      { label: 'Vida útil', value: '30.000 h' },
      { label: 'Grado IP', value: 'IP44' },
    ],
  },
  ilu006: {
    specs: [
      { label: 'Longitud', value: '5 m' },
      { label: 'Tipo LED', value: 'SMD 5050 RGB' },
      { label: 'Potencia', value: '14,4 W/m (total: 72 W)' },
      { label: 'Tensión', value: '12 V DC' },
      { label: 'Grado IP', value: 'IP65 (apta para exteriores cubiertos y cocinas)' },
      { label: 'Colores', value: 'RGB (16 millones de colores)' },
      { label: 'Control', value: 'Controlador RF o WiFi (no incluido)' },
      { label: 'Densidad LEDs', value: '60 LEDs/m' },
    ],
    disclaimer: 'Requiere fuente de alimentación 12 V DC y controlador RGB (no incluidos). Calcular la potencia total según la longitud instalada. No cortar en lugares no señalizados.',
    compatibles: [
      { nombre: 'Foco LED Carril 30 W (FOC-CARRIL-30W)', motivo: 'Combinable en instalaciones decorativas' },
    ],
  },
  ilu008: {
    specs: [
      { label: 'Potencia', value: '30 W' },
      { label: 'Tensión', value: 'Monofásica 230 V' },
      { label: 'Flujo luminoso', value: '2.700 lm' },
      { label: 'Temperatura de color', value: '4.000 K (neutro)' },
      { label: 'IRC (Ra)', value: '≥ 80' },
      { label: 'Ángulo apertura', value: '36° (ajustable ±30°)' },
      { label: 'Tipo carril', value: 'Monofásico estándar (universal)' },
      { label: 'Grado IP', value: 'IP20 (interior)' },
    ],
    compatibles: [
      { nombre: 'Dimmer Rotativo LED (DIM-LED-150W)', motivo: 'Regulación (requiere modelo regulable)' },
    ],
  },
  ilu009: {
    specs: [
      { label: 'Potencia', value: '100 W' },
      { label: 'Flujo luminoso', value: '12.000 lm' },
      { label: 'Temperatura de color', value: '5.000 K (luz de día)' },
      { label: 'IRC (Ra)', value: '≥ 70' },
      { label: 'Grado protección', value: 'IP66 / IK09' },
      { label: 'Temperatura operación', value: '-40 a +50 °C' },
      { label: 'Vida útil', value: '100.000 h' },
      { label: 'Certificación', value: 'CE, ENEC, IK09' },
    ],
    disclaimer: 'Requiere soporte de poste o brazo mural homologado. La instalación de alumbrado público debe cumplir el REBT ITC-BT-09 y el Reglamento de Eficiencia Energética en instalaciones de alumbrado exterior (REEIAE).',
    compatibles: [
      { nombre: 'Manguera RV-K 3×2,5 mm² (RVK-3x2.5)', motivo: 'Acometida desde cuadro de mando' },
      { nombre: 'Contador Energía Digital (CONT-ENE-1F)', motivo: 'Medición del consumo del alumbrado' },
    ],
  },

  // --- APARAMENTA (restantes) ---
  apa002: {
    specs: [
      { label: 'Polos', value: '1P+N' },
      { label: 'Intensidad nominal', value: '20 A' },
      { label: 'Curva de disparo', value: 'C (3–5 In)' },
      { label: 'Poder de corte', value: '6 kA' },
      { label: 'Tensión nominal', value: '230 V AC' },
      { label: 'Módulos DIN', value: '2 módulos (36 mm)' },
      { label: 'Norma', value: 'IEC 60898-1' },
    ],
    disclaimer: 'Para protección de circuitos de tomas de corriente (16–20 A). Instalar siempre junto a un diferencial para protección completa.',
    compatibles: [
      { nombre: 'Diferencial 2P 25 A Tipo A (DIF-2P-25A-A)', motivo: 'Protección contra fugas y contactos indirectos' },
    ],
  },
  apa003: {
    specs: [
      { label: 'Polos', value: '2P (bipolar)' },
      { label: 'Intensidad nominal', value: '25 A' },
      { label: 'Curva de disparo', value: 'C' },
      { label: 'Poder de corte', value: '6 kA' },
      { label: 'Tensión nominal', value: '230/400 V AC' },
      { label: 'Módulos DIN', value: '2 módulos' },
      { label: 'Norma', value: 'IEC 60898-1' },
    ],
    compatibles: [
      { nombre: 'Cuadro Empotrado 36 módulos (CUA-EMP-36M)', motivo: 'Alojamiento en cuadro de distribución' },
    ],
  },
  apa005: {
    specs: [
      { label: 'Polos', value: '2P' },
      { label: 'Intensidad nominal', value: '40 A' },
      { label: 'Sensibilidad', value: '30 mA' },
      { label: 'Tipo', value: 'AC (corriente senoidal)' },
      { label: 'Tensión nominal', value: '230 V AC' },
      { label: 'Módulos DIN', value: '2 módulos' },
      { label: 'Norma', value: 'IEC 61008-1' },
    ],
    disclaimer: 'Tipo AC para circuitos convencionales sin electrónica. Para circuitos con variadores, cargadores o bombas de calor usar Tipo A obligatoriamente.',
  },
  apa007: {
    specs: [
      { label: 'Polos', value: '3P (trifásico)' },
      { label: 'Intensidad nominal', value: '25 A' },
      { label: 'Tensión bobina', value: '230 V AC' },
      { label: 'Tensión de trabajo', value: '400 V AC (3F)' },
      { label: 'Categoría utilización', value: 'AC-3 (motores jaula de ardilla)' },
      { label: 'Módulos DIN', value: '3 módulos' },
      { label: 'Contactos aux.', value: '1NA + 1NC (opcionales)' },
      { label: 'Norma', value: 'IEC 60947-4-1' },
    ],
    disclaimer: 'Para maniobra de motores trifásicos. El contactor no protege contra cortocircuito: combinar siempre con guardamotor o magnetotérmico tetraipolar adecuado a la carga.',
    compatibles: [
      { nombre: 'PIA 4P 32 A Curva C (PIA-4P-32A-C)', motivo: 'Protección contra cortocircuitos del contactor' },
    ],
  },
  apa008: {
    specs: [
      { label: 'Polos', value: '4P (trifásico+neutro)' },
      { label: 'Intensidad nominal', value: '63 A' },
      { label: 'Sensibilidad', value: '30 mA' },
      { label: 'Tipo', value: 'A (senoidal + pulsante)' },
      { label: 'Función', value: 'Diferencial puro (sin magnetotérmico)' },
      { label: 'Módulos DIN', value: '4 módulos' },
      { label: 'Norma', value: 'IEC 61008-1' },
    ],
    disclaimer: 'Para uso trifásico. Debe combinarse con PIA 4P para protección completa. Usar Tipo A para instalaciones con equipos electrónicos, variadores o cargadores de VE.',
    compatibles: [
      { nombre: 'PIA 4P 32 A Curva C (PIA-4P-32A-C)', motivo: 'Protección contra cortocircuitos asociada' },
    ],
  },

  // --- ARMARIOS (restantes) ---
  arm001: {
    specs: [
      { label: 'Tipo', value: 'ICP (Interruptor Control Potencia)' },
      { label: 'Capacidad', value: '2 módulos DIN' },
      { label: 'Montaje', value: 'Superficie' },
      { label: 'Material', value: 'ABS autoextinguible' },
      { label: 'Grado IP', value: 'IP40' },
      { label: 'Color', value: 'Blanco RAL 9010' },
    ],
    disclaimer: 'Para alojamiento de ICP en instalaciones monofásicas. El ICP (magnetotérmico de corte en carga) es suministrado por la compañía eléctrica y no se incluye en esta caja.',
  },
  arm002: {
    specs: [
      { label: 'Capacidad', value: '18 módulos DIN (1 fila)' },
      { label: 'Montaje', value: 'Superficie' },
      { label: 'Material', value: 'ABS autoextinguible' },
      { label: 'Grado IP', value: 'IP40' },
      { label: 'Puerta', value: 'Transparente (abatible)' },
      { label: 'Norma', value: 'IEC 60670' },
    ],
    compatibles: [
      { nombre: 'Magnetotérmico 1P+N 16 A (MAG-1PN-16A-C)', motivo: 'Protección de circuitos individuales' },
      { nombre: 'Diferencial 2P 25 A (DIF-2P-25A-A)', motivo: 'Protección diferencial de la instalación' },
      { nombre: 'Peines de fase 1P+N (PEINE-1PN-12)', motivo: 'Distribución de fase sin cableado individual' },
    ],
  },
  arm005: {
    specs: [
      { label: 'Dimensiones', value: '150×110×70 mm' },
      { label: 'Material', value: 'Policarbonato IP55' },
      { label: 'Grado IP', value: 'IP55 / IK07' },
      { label: 'Entradas', value: '4 prensaestopas M16 precortadas' },
      { label: 'Color', value: 'Gris RAL 7035' },
      { label: 'Uso', value: 'Conexiones interiores/exteriores, derivaciones' },
    ],
  },
  arm006: {
    specs: [
      { label: 'Tipo', value: 'Peine combinado de fases 1P+N' },
      { label: 'Número de salidas', value: '12 posiciones' },
      { label: 'Compatibilidad', value: 'Magnetotérmicos 1P+N paso 1 módulo' },
      { label: 'Corriente nominal', value: '63 A' },
      { label: 'Tensión nominal', value: '230 V AC' },
      { label: 'Material', value: 'Cobre estañado + aislante PA' },
    ],
  },

  // --- TELECOMUNICACIONES (restantes) ---
  tel002: {
    specs: [
      { label: 'Compatibilidad', value: 'Sistemas videoportero monohilo y 2 hilos' },
      { label: 'Cámara', value: 'Gran angular 120° color' },
      { label: 'Iluminación nocturna', value: 'IR automático' },
      { label: 'Material', value: 'Aluminio anodizado + policarbonato' },
      { label: 'Grado IP', value: 'IP54 / IK08' },
      { label: 'Pulsadores', value: '1 (ampliable a 2 con módulo adicional)' },
    ],
    disclaimer: 'Verificar compatibilidad con el monitor interior antes de comprar. La instalación requiere cableado específico según el protocolo del sistema (2 hilos, IP, analógico).',
    compatibles: [
      { nombre: 'Videoportero 7" WiFi (VP-7-WIFI)', motivo: 'Monitor interior compatible' },
      { nombre: 'Cable FTP Cat6 (UTP-CAT6-LSZH)', motivo: 'Para sistemas IP (2 hilos o IP)' },
    ],
  },
  tel003: {
    specs: [
      { label: 'Categoría', value: 'Cat.6 (250 MHz)' },
      { label: 'Tipo', value: 'FTP (apantallado individual)' },
      { label: 'Cubierta', value: 'LSZH (libre de halógenos)' },
      { label: 'Conductor', value: '4 pares AWG 23 (Cu sólido)' },
      { label: 'Diámetro exterior', value: 'Ø 6,2 mm' },
      { label: 'Norma', value: 'ISO/IEC 11801 Cat.6 / EN 50173' },
      { label: 'Temperatura instalación', value: '-20 a +60 °C' },
    ],
    compatibles: [
      { nombre: 'Conector RJ45 Cat6 (RJ45-C6-100)', motivo: 'Terminación del cable en rosetas y paneles' },
      { nombre: 'Switch PoE 8P Gigabit (SW-POE-8P)', motivo: 'Conexión a infraestructura de red' },
    ],
  },
  tel004: {
    specs: [
      { label: 'Categoría', value: 'Cat.6' },
      { label: 'Tipo', value: 'Macho RJ45, cuerpo ABS' },
      { label: 'Contactos', value: '8P8C, dorado 3 μm' },
      { label: 'Diámetro cable admitido', value: '5,5 – 8,5 mm' },
      { label: 'Norma', value: 'TIA/EIA-568-C.2 Cat.6' },
      { label: 'Contenido', value: '100 unidades/bolsa' },
    ],
  },
  tel005: {
    specs: [
      { label: 'Tipo', value: 'Roseta TV/SAT/R (triple servicio)' },
      { label: 'Conectores', value: '2 salidas F hembra' },
      { label: 'Pérdida de retorno', value: '≥ 10 dB (5–2.150 MHz)' },
      { label: 'Derivación', value: '2 salidas con atenuación equilibrada' },
      { label: 'Compatibilidad', value: 'Mecanismo Elegance / estándar' },
    ],
    compatibles: [
      { nombre: 'Amplificador TV (AMP-1E-2S)', motivo: 'Para compensar pérdidas de distribución' },
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared' },
    ],
  },
  tel006: {
    specs: [
      { label: 'Entradas', value: '1 (terrestre + SAT)' },
      { label: 'Salidas', value: '2' },
      { label: 'Ganancia', value: '20 dB (terrestre) / 18 dB (SAT)' },
      { label: 'Rango frecuencia', value: '5 – 2.150 MHz' },
      { label: 'Alimentación', value: '230 V AC (alimentador incluido)' },
      { label: 'Pérdida retorno', value: '≥ 10 dB' },
    ],
  },

  // --- MEDIDA & CONTROL (restantes) ---
  med002: {
    specs: [
      { label: 'Tipo', value: 'PIR pasivo infrarrojo' },
      { label: 'Cobertura', value: '360° horizontal (techo)' },
      { label: 'Radio de detección', value: 'Ø 8 m (montado a 3 m)' },
      { label: 'Montaje', value: 'Techo (empotrado o superficie)' },
      { label: 'Tensión', value: '230 V AC' },
      { label: 'Carga máxima', value: '1.200 W (incandescente) / 300 W LED' },
      { label: 'Tiempo de retención', value: '10 s – 10 min (ajustable)' },
      { label: 'Grado IP', value: 'IP44' },
    ],
  },
  med003: {
    specs: [
      { label: 'Tipo', value: 'PIR pasivo infrarrojo' },
      { label: 'Ángulo detección', value: '180° (corredor)' },
      { label: 'Alcance', value: '12 m' },
      { label: 'Montaje', value: 'Pared (techo o esquina)' },
      { label: 'Tensión', value: '230 V AC' },
      { label: 'Carga máxima', value: '1.000 W / 200 W LED' },
      { label: 'Grado IP', value: 'IP44' },
      { label: 'Tiempo retención', value: 'Ajustable 10 s – 15 min' },
    ],
  },
  med004: {
    specs: [
      { label: 'Tipo', value: 'Temporizador de escalera electrónico' },
      { label: 'Corriente nominal', value: '2 A (resistiva)' },
      { label: 'Tiempo ajustable', value: '30 s – 10 min' },
      { label: 'Tensión', value: '230 V AC' },
      { label: 'Módulos DIN', value: '1 módulo' },
      { label: 'Función', value: 'Retardo a la desconexión con aviso luminoso' },
    ],
    compatibles: [
      { nombre: 'Pulsador Timbre Elegance (PUL-TIM-ELG)', motivo: 'Pulsador de llamada para escalera' },
    ],
  },
  med005: {
    specs: [
      { label: 'Tipo', value: 'Contador de energía digital monofásico' },
      { label: 'Clase de precisión', value: 'Clase 1 (IEC 62053-21)' },
      { label: 'Corriente nominal', value: '5(80) A' },
      { label: 'Tensión', value: '230 V, 50 Hz' },
      { label: 'Pantalla', value: 'LCD 7 dígitos (kWh)' },
      { label: 'Salida pulso', value: '1.000 imp/kWh' },
      { label: 'Montaje', value: 'Carril DIN 2 módulos' },
    ],
    disclaimer: 'Para medición indicativa, no fiscal. Para medición oficial (facturación) se requiere contador homologado MID y legalización ante la autoridad de metrología.',
  },
  med006: {
    specs: [
      { label: 'Tipo', value: 'Digital programable 7 días' },
      { label: 'Programas', value: '6 programas/día (42 semanales)' },
      { label: 'Temperatura rango', value: '5 – 35 °C (ajustable ±0,5 °C)' },
      { label: 'Alimentación', value: '230 V AC' },
      { label: 'Relé salida', value: '5 A (caldera/bomba)' },
      { label: 'Pantalla', value: 'LCD retroiluminada' },
      { label: 'Instalación', value: 'Pared (caja universal 86×86 mm)' },
    ],
    compatibles: [
      { nombre: 'Aerotermia ACS 200 L (AERO-200L)', motivo: 'Control de temperatura del ACS' },
    ],
  },

  // --- MECANISMOS (restantes) ---
  mec001: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Tipo', value: 'Interruptor simple unipolar' },
      { label: 'Corriente nominal', value: '10 A / 250 V AC' },
      { label: 'Color', value: 'Blanco RAL 9010' },
      { label: 'Material', value: 'ABS autoextinguible V0' },
      { label: 'Instalación', value: 'Caja empotrada 58 mm (estándar universal)' },
    ],
    compatibles: [
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared necesario' },
    ],
  },
  mec002: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Tipo', value: 'Base de enchufe Schuko 2P+T' },
      { label: 'Corriente nominal', value: '16 A / 250 V AC' },
      { label: 'Categoria', value: 'Schuko (IEC 60083)' },
      { label: 'Tapa ciega', value: 'No incluida (opcional)' },
      { label: 'Color', value: 'Blanco RAL 9010' },
    ],
    compatibles: [
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared necesario' },
      { nombre: 'Magnetotérmico 1P+N 20 A (MAG-1PN-20A-C)', motivo: 'Protección del circuito de enchufes' },
    ],
  },
  mec003: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Tipo', value: 'Conmutador (two way switch)' },
      { label: 'Corriente nominal', value: '10 A / 250 V AC' },
      { label: 'Uso', value: 'Control de luz desde 2 puntos distintos' },
      { label: 'Color', value: 'Blanco RAL 9010' },
    ],
    disclaimer: 'Para controlar la misma luz desde dos puntos distintos son necesarios 2 conmutadores. Para 3 o más puntos añadir cruzamientos.',
    compatibles: [
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared necesario' },
    ],
  },
  mec004: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Capacidad', value: '1 elemento' },
      { label: 'Material', value: 'ABS UL94 V0' },
      { label: 'Color', value: 'Blanco RAL 9010' },
      { label: 'Compatibilidad', value: 'Todos los mecanismos serie Elegance' },
    ],
  },
  mec005: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Capacidad', value: '2 elementos (horizontal o vertical)' },
      { label: 'Material', value: 'ABS UL94 V0' },
      { label: 'Color', value: 'Blanco RAL 9010' },
      { label: 'Compatibilidad', value: 'Todos los mecanismos serie Elegance' },
    ],
  },
  mec006: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Tipo', value: 'Toma TV + SAT + R (triple derivación)' },
      { label: 'Conector', value: 'IEC 169-2 hembra' },
      { label: 'Banda de frecuencia', value: '5 – 2.150 MHz' },
      { label: 'Pérdida de inserción TV', value: '≤ 1,5 dB' },
    ],
    compatibles: [
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared' },
      { nombre: 'Amplificador TV (AMP-1E-2S)', motivo: 'Para compensar atenuación de la señal' },
    ],
  },
  mec007: {
    specs: [
      { label: 'Tipo', value: 'Dimmer rotativo con pulsador ON/OFF' },
      { label: 'Potencia regulable', value: '5 – 150 W (LED/CFL/incandescente)' },
      { label: 'Tensión', value: '230 V AC 50 Hz' },
      { label: 'Compatible con', value: 'Drivers LED regulables (TRIAC/Fase)' },
      { label: 'Color', value: 'Blanco' },
    ],
    disclaimer: 'Verificar que las bombillas/luminarias a regular son compatibles con dimmer tipo TRIAC. No todos los LEDs son regulables; comprobar el marcado del fabricante.',
  },
  mec008: {
    specs: [
      { label: 'Serie', value: 'Elegance' },
      { label: 'Tipo', value: 'Pulsador NA (normalmente abierto)' },
      { label: 'Corriente nominal', value: '10 A / 250 V AC' },
      { label: 'Color', value: 'Blanco RAL 9010' },
      { label: 'Uso típico', value: 'Timbre, temporizado escalera' },
    ],
    compatibles: [
      { nombre: 'Marco 1 Elemento Elegance (MRC-1E-ELG)', motivo: 'Embellecedor de pared' },
      { nombre: 'Temporizador Escalera 2 A (TEMP-ESC-2A)', motivo: 'Control de iluminación de escalera' },
    ],
  },

  // --- DYSON (restantes) ---
  dys002: {
    specs: [
      { label: 'Modelo', value: 'Dyson V8 Absolute (2ª gen.)' },
      { label: 'Autonomía', value: 'hasta 40 min (modo eco)' },
      { label: 'Succión', value: '115 AW' },
      { label: 'Filtración', value: 'HEPA completo' },
      { label: 'Capacidad depósito', value: '0,54 L' },
      { label: 'Peso', value: '2,61 kg' },
      { label: 'Accesorios incluidos', value: '7 cabezales y herramientas' },
    ],
  },
  dys004: {
    specs: [
      { label: 'Modelo', value: 'Dyson Hot+Cool HP09' },
      { label: 'Funciones', value: 'Purificador + ventilador + calefactor' },
      { label: 'Potencia calefactor', value: '1.400 W (termostato automático)' },
      { label: 'Proyección aire', value: '77 L/s' },
      { label: 'Filtración HEPA', value: 'H13 – captura 99,97% ≥ 0,1 μm' },
      { label: 'Calefacción', value: 'Resistiva de alto voltaje (calor uniforme)' },
      { label: 'Cobertura', value: 'hasta 85 m²' },
      { label: 'Control', value: 'App MyDyson + Alexa + Google' },
    ],
  },

  // --- WIZARD (restantes) ---
  wiz002: {
    specs: [
      { label: 'Casquillo', value: 'E27' },
      { label: 'Potencia', value: '9 W' },
      { label: 'Flujo luminoso', value: '806 lm' },
      { label: 'Temperatura color', value: '2.200 – 6.500 K + RGB (ajustable)' },
      { label: 'Protocolo', value: 'WiFi 2,4 GHz (WiZ protocol)' },
      { label: 'Control', value: 'App WiZ / Alexa / Google Home / Apple HomeKit' },
      { label: 'Vida útil', value: '25.000 h' },
    ],
    compatibles: [
      { nombre: 'Tira LED WiZ RGB+W (WIZ-TIRA-5M)', motivo: 'Compatible en la misma app WiZ' },
    ],
  },
  wiz003: {
    specs: [
      { label: 'Casquillo', value: 'GU10' },
      { label: 'Potencia', value: '5 W' },
      { label: 'Flujo luminoso', value: '340 lm' },
      { label: 'Temperatura color', value: 'RGB + blanco tuneable 2.200–6.500 K' },
      { label: 'Protocolo', value: 'WiFi 2,4 GHz (WiZ)' },
      { label: 'Control', value: 'App WiZ / Alexa / Google Home' },
      { label: 'Ángulo apertura', value: '36°' },
    ],
  },
  wiz004: {
    specs: [
      { label: 'Enchufes', value: '3 schuko + 2 USB-A' },
      { label: 'Corriente máx.', value: '16 A / 3.500 W' },
      { label: 'Protocolo', value: 'WiFi 2,4 GHz (WiZ)' },
      { label: 'Control individual', value: 'Sí, enchufe a enchufe por app' },
      { label: 'Monitorización', value: 'Consumo energético en tiempo real' },
      { label: 'Protección', value: 'Fusible térmico + sobretensión' },
    ],
    disclaimer: 'La suma de potencias de todos los aparatos conectados no debe superar 3.500 W. No conectar calefactores ni aparatos de alta potencia continua.',
  },

  // --- HERRAMIENTAS (restantes) ---
  her001: {
    specs: [
      { label: 'Sección pelado', value: '0,2 – 6 mm²' },
      { label: 'Tipo', value: 'Automático (presión constante)' },
      { label: 'Longitud pelado', value: 'Ajustable 10 – 25 mm' },
      { label: 'Material', value: 'Acero + mango bicomponente ergonómico' },
      { label: 'Norma', value: 'TÜV / GS' },
    ],
  },
  her002: {
    specs: [
      { label: 'Longitud total', value: '200 mm' },
      { label: 'Funciones', value: 'Corte, pelado, crimpadode de terminales' },
      { label: 'Material', value: 'Acero al cromo-vanadio' },
      { label: 'Aislamiento', value: 'No aislado (uso en instalaciones sin tensión)' },
      { label: 'Norma', value: 'DIN ISO 5745' },
    ],
    disclaimer: 'Este alicate NO está aislado para trabajos en tensión. Para trabajos en instalaciones activas usar herramientas con aislamiento VDE 1.000 V.',
  },
  her003: {
    specs: [
      { label: 'Piezas incluidas', value: '5 destornilladores aislados' },
      { label: 'Composición', value: '2 planos (3,5 / 6,5 mm) + 3 Philips (PH0/1/2)' },
      { label: 'Aislamiento', value: 'VDE 1.000 V CA / 1.500 V CC' },
      { label: 'Norma', value: 'IEC 60900 / EN 60900' },
      { label: 'Material mango', value: 'Bicomponente ergonómico, antideslizante' },
    ],
    disclaimer: 'Herramientas certificadas para trabajos en baja tensión. Inspeccionar antes de cada uso: no usar si el aislamiento está dañado.',
  },
  her004: {
    specs: [
      { label: 'Ancho × Largo', value: '3,5 × 200 mm' },
      { label: 'Material', value: 'Poliamida 6.6 (nylon)' },
      { label: 'Color', value: 'Negro (resistente a UV)' },
      { label: 'Temperatura operación', value: '-40 a +85 °C' },
      { label: 'Resistencia a la tracción', value: '18 kg' },
      { label: 'Contenido', value: '100 unidades/bolsa' },
    ],
  },
  her005: {
    specs: [
      { label: 'Material', value: 'PVC plastificado' },
      { label: 'Longitud por bobina', value: '20 m' },
      { label: 'Ancho', value: '19 mm' },
      { label: 'Grosor', value: '0,13 mm' },
      { label: 'Temperatura operación', value: '-10 a +85 °C' },
      { label: 'Tensión dieléctrica', value: '5 kV' },
      { label: 'Color', value: 'Negro' },
      { label: 'Norma', value: 'IEC 60454-3-1' },
    ],
  },
  her006: {
    specs: [
      { label: 'Contenido', value: '400 ml' },
      { label: 'Funciones', value: 'Desengrasante, anticorrosivo, lubricante, protector' },
      { label: 'Temperatura de uso', value: '-50 a +300 °C' },
      { label: 'Propulsor', value: 'Sin CFC (respetuoso con la capa de ozono)' },
      { label: 'Aplicaciones', value: 'Contactos eléctricos, tornillería, mecanismos' },
    ],
    disclaimer: 'No usar en sistemas de frenos o embragues. No inhalar. Ventilación adecuada durante uso. Alejar de llamas y fuentes de calor.',
  },
  her007: {
    specs: [
      { label: 'Rango de tensión', value: '12 – 1.000 V CA' },
      { label: 'Tipo', value: 'Sin contacto (inductivo / NCV)' },
      { label: 'Detección', value: 'Señal acústica + LED rojo' },
      { label: 'Sensibilidad ajustable', value: 'Alta / Baja' },
      { label: 'Alimentación', value: '2× pilas AAA (incluidas)' },
      { label: 'Norma', value: 'CE / CAT IV 1.000 V' },
    ],
    disclaimer: 'Herramienta de detección indicativa. Confirmar siempre la ausencia de tensión con multímetro calibrado antes de manipular conductores. Tensiones muy bajas (<12 V) pueden no ser detectadas.',
  },

  // --- BATERÍAS Y ALARMAS (restantes) ---
  bat002: {
    specs: [
      { label: 'Tecnología', value: 'LiFePO4 (litio-hierro-fosfato)' },
      { label: 'Capacidad', value: '200 Ah' },
      { label: 'Tensión nominal', value: '48 V' },
      { label: 'Energía almacenada', value: '9,6 kWh' },
      { label: 'Ciclos de vida (80% DoD)', value: '> 4.000 ciclos' },
      { label: 'BMS integrado', value: 'Sí (protección completa)' },
      { label: 'Corriente máx. descarga', value: '200 A' },
      { label: 'Comunicación', value: 'RS485 / CAN bus' },
      { label: 'Garantía', value: '10 años / 4.000 ciclos' },
    ],
    disclaimer: 'Para sistemas fotovoltaicos de alta capacidad. Instalar en lugar ventilado y alejado de materiales inflamables. Requiere inversor/cargador compatible con LiFePO4.',
    compatibles: [
      { nombre: 'Inversor Híbrido 10 kW (INV-HYB-10KW)', motivo: 'Gestión de carga y descarga' },
    ],
  },
  bat004: {
    specs: [
      { label: 'Potencia nominal', value: '2.000 VA / 1.800 W' },
      { label: 'Topología', value: 'Online doble conversión' },
      { label: 'Tiempo de conmutación', value: '0 ms (online)' },
      { label: 'Autonomía carga plena', value: '5 min aprox.' },
      { label: 'Batería interna', value: 'VRLA 12 V / 9 Ah × 2' },
      { label: 'Factor de potencia salida', value: '0,9' },
      { label: 'Forma de onda salida', value: 'Senoidal pura' },
      { label: 'Formato', value: 'Torre (vertical)' },
      { label: 'Comunicación', value: 'USB + RS232 + SNMP' },
    ],
    disclaimer: 'Para servidores, NAS, equipos de red críticos y sistemas de control. Senoidal pura: compatible con fuentes PFC activo. Localizar en lugar ventilado. La sustitución de baterías la puede realizar el usuario.',
  },
  bat006: {
    specs: [
      { label: 'Tipo de sensor', value: 'Fotoeléctrico + ionización (doble tecnología)' },
      { label: 'Alimentación', value: 'Batería 9 V (incluida)' },
      { label: 'Alarma sonora', value: '≥ 85 dB @ 3 m' },
      { label: 'Test manual', value: 'Sí (pulsador)' },
      { label: 'Señal batería baja', value: 'Pitido periódico' },
      { label: 'Norma', value: 'EN 14604' },
      { label: 'Vida útil sensor', value: '10 años' },
    ],
    disclaimer: 'Instalar en los techos de dormitorios, pasillos y cocinas. Cambiar la batería anualmente. Comprobar el funcionamiento mensualmente con el pulsador de test. No instalar cerca de fogones o estufas.',
    compatibles: [
      { nombre: 'Central Alarma WiFi+GSM (ALARM-32Z-GW)', motivo: 'Integración en sistema de alarma' },
    ],
  },
  bat007: {
    specs: [
      { label: 'Tipo', value: 'Sirena piezoeléctrica + estroboscópica' },
      { label: 'Nivel sonoro', value: '110 dB @ 1 m' },
      { label: 'Alimentación', value: '12 V DC (desde central de alarma)' },
      { label: 'Batería de sabotaje', value: 'Backup interno 12 V / 1,2 Ah' },
      { label: 'Grado IP', value: 'IP34 (exterior cubierto)' },
      { label: 'Flash estroboscópico', value: 'Blanco / Azul (configurable)' },
      { label: 'Grado de seguridad', value: 'Grado 2 (EN 50131-4)' },
    ],
    compatibles: [
      { nombre: 'Central Alarma WiFi+GSM (ALARM-32Z-GW)', motivo: 'Conexión y control desde la central' },
    ],
  },
};

// =============================================
// ICONOS SVG por tipo de imagen de producto
// =============================================
