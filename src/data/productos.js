// ==============================================
// Datos estáticos: Productos por categoría
// ==============================================

export const PRODUCTOS = {

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
// SPECS, DISCLAIMERS Y PRODUCTOS RELACIONADOS
// =============================================
