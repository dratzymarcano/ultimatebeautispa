/**
 * Ultimate Beauty Spa — Complete Service Menu
 * Prices in XAF (Central African CFA Franc), Douala, Cameroon
 * Phone: +(237) 697 113 339
 */

export interface SubService {
  id: string;
  name: { en: string; fr: string };
  price: string;
  duration?: string;
  gender?: 'men' | 'women' | 'all';
  bestSeller?: boolean;
  description?: { en: string; fr: string };
}

export interface ServiceCategory {
  id: string;
  name: { en: string; fr: string };
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  longDescription: { en: string; fr: string };
  icon: string;
  image: string;
  featured: boolean;
  duration: string;
  startingPrice: string;
  subServices: SubService[];
  features: { en: string[]; fr: string[] };
}

export const services: ServiceCategory[] = [
  // ═══════════════════════════════════════════════════════
  // 1. MASSAGE & RELAXATION
  // ═══════════════════════════════════════════════════════
  {
    id: 'massage',
    name: {
      en: 'Massage & Relaxation',
      fr: 'Massage & Relaxation',
    },
    tagline: {
      en: 'Relax · Unwind · Restore',
      fr: 'Détendez-vous · Décompressez · Récupérez',
    },
    description: {
      en: 'From classic relaxation to deep tissue and hot stone therapy — release tension and restore balance in our private treatment rooms.',
      fr: 'Du massage classique de relaxation au massage des tissus profonds et aux pierres chaudes — libérez les tensions et retrouvez l\'équilibre dans nos cabines privées.',
    },
    longDescription: {
      en: 'Our licensed massage therapists bring years of experience to every session. Whether you need a classic relaxation massage to unwind, deep tissue work to release chronic tension, aromatherapy for a sensory journey, a sportive hot stone treatment for total indulgence, or a targeted back and leg session — we customize each treatment to your specific needs. All sessions use premium essential oils and take place in our serene private treatment rooms.',
      fr: 'Nos massothérapeutes certifiés apportent des années d\'expérience à chaque séance. Que vous ayez besoin d\'un massage de relaxation classique pour décompresser, d\'un travail en profondeur pour relâcher les tensions chroniques, d\'une aromathérapie pour un voyage sensoriel, d\'un soin sportif aux pierres chaudes pour un plaisir total, ou d\'une séance ciblée dos et jambes — nous personnalisons chaque traitement selon vos besoins. Toutes les séances utilisent des huiles essentielles premium et se déroulent dans nos cabines privées.',
    },
    icon: 'lucide:heart-handshake',
    image: '/images/services/massage.webp',
    featured: true,
    duration: '30–90 min',
    startingPrice: 'À partir de XAF 10,000',
    subServices: [
      { id: 'ms-relax-60', name: { en: 'Classic Relaxation Massage — 60 min', fr: 'Massage Relaxation Classique — 60 min' }, price: 'XAF 20,000', duration: '60 min', gender: 'all' },
      { id: 'ms-relax-90', name: { en: 'Classic Relaxation Massage — 90 min', fr: 'Massage Relaxation Classique — 90 min' }, price: 'XAF 30,000', duration: '90 min', gender: 'all' },
      { id: 'ms-deep-60', name: { en: 'Deep Tissue Massage — 60 min', fr: 'Massage Tissus Profonds — 60 min' }, price: 'XAF 25,000', duration: '60 min', gender: 'all', bestSeller: true },
      { id: 'ms-deep-90', name: { en: 'Deep Tissue Massage — 90 min', fr: 'Massage Tissus Profonds — 90 min' }, price: 'XAF 35,000', duration: '90 min', gender: 'all', bestSeller: true },
      { id: 'ms-aroma-60', name: { en: 'Aromatherapy Massage — 60 min', fr: 'Massage Aromathérapie — 60 min' }, price: 'XAF 20,000', duration: '60 min', gender: 'all' },
      { id: 'ms-aroma-90', name: { en: 'Aromatherapy Massage — 90 min', fr: 'Massage Aromathérapie — 90 min' }, price: 'XAF 30,000', duration: '90 min', gender: 'all' },
      { id: 'ms-hotstone-60', name: { en: 'Sportive / Hot Stone Massage — 60 min', fr: 'Massage Sportif / Pierres Chaudes — 60 min' }, price: 'XAF 30,000', duration: '60 min', gender: 'all' },
      { id: 'ms-hotstone-90', name: { en: 'Sportive / Hot Stone Massage — 90 min', fr: 'Massage Sportif / Pierres Chaudes — 90 min' }, price: 'XAF 40,000', duration: '90 min', gender: 'all' },
      { id: 'ms-back-30', name: { en: 'Back / Leg Massage — 30 min', fr: 'Massage Dos / Jambes — 30 min' }, price: 'XAF 10,000', duration: '30 min', gender: 'all' },
      { id: 'ms-back-60', name: { en: 'Back / Leg Massage — 60 min', fr: 'Massage Dos / Jambes — 60 min' }, price: 'XAF 15,000', duration: '60 min', gender: 'all' },
    ],
    features: {
      en: ['Licensed therapists', 'Premium essential oils', 'Private treatment rooms', 'Personalized sessions'],
      fr: ['Thérapeutes certifiés', 'Huiles essentielles premium', 'Cabines privées', 'Séances personnalisées'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 2. WET SPA & HYDROTHERAPY
  // ═══════════════════════════════════════════════════════
  {
    id: 'wet-spa',
    name: {
      en: 'Wet Spa & Hydrotherapy',
      fr: 'Spa Humide & Hydrothérapie',
    },
    tagline: {
      en: 'Soak · Steam · Surrender',
      fr: 'Bain · Vapeur · Abandon',
    },
    description: {
      en: 'Jacuzzi baths, hammam sessions, aromatherapy treatments, and sleep therapy — immerse yourself in warmth and total relaxation.',
      fr: 'Bains jacuzzi, séances hammam, soins aromathérapie et thérapie du sommeil — plongez dans la chaleur et la relaxation totale.',
    },
    longDescription: {
      en: 'Our wet spa area is a sanctuary of warmth and renewal. Slip into our bubbling jacuzzi bath to ease tired muscles, experience the purifying warmth of a traditional hammam, enjoy the aromatic bliss of our signature aromatherapy treatment, or surrender to our sleep therapy — a deeply calming experience designed to reset your body and mind. Every session is set in a tranquil environment with soft lighting and soothing sounds.',
      fr: 'Notre espace spa humide est un sanctuaire de chaleur et de renouveau. Glissez dans notre bain jacuzzi bouillonnant pour soulager les muscles fatigués, vivez la chaleur purifiante d\'un hammam traditionnel, profitez du bonheur aromatique de notre soin d\'aromathérapie signature, ou abandonnez-vous à notre thérapie du sommeil — une expérience profondément apaisante conçue pour réinitialiser votre corps et votre esprit. Chaque séance se déroule dans un environnement tranquille avec un éclairage doux et des sons apaisants.',
    },
    icon: 'lucide:droplets',
    image: '/images/services/wet-spa.webp',
    featured: true,
    duration: '60–90 min',
    startingPrice: 'À partir de XAF 10,000',
    subServices: [
      { id: 'ws-jacuzzi-60', name: { en: 'Jacuzzi Bath — 60 min', fr: 'Bain Jacuzzi — 60 min' }, price: 'XAF 15,000', duration: '60 min', gender: 'all' },
      { id: 'ws-jacuzzi-90', name: { en: 'Jacuzzi Bath — 90 min', fr: 'Bain Jacuzzi — 90 min' }, price: 'XAF 20,000', duration: '90 min', gender: 'all' },
      { id: 'ws-hammam-60', name: { en: 'Hammam Simple — 60 min', fr: 'Hammam Simple — 60 min' }, price: 'XAF 10,000', duration: '60 min', gender: 'all' },
      { id: 'ws-hammam-90', name: { en: 'Hammam Simple — 90 min', fr: 'Hammam Simple — 90 min' }, price: 'XAF 20,000', duration: '90 min', gender: 'all' },
      { id: 'ws-aroma-60', name: { en: 'Aromatherapy Treatment — 60 min', fr: 'Soin Aromathérapie — 60 min' }, price: 'XAF 20,000', duration: '60 min', gender: 'all', bestSeller: true },
      { id: 'ws-aroma-90', name: { en: 'Aromatherapy Treatment — 90 min', fr: 'Soin Aromathérapie — 90 min' }, price: 'XAF 30,000', duration: '90 min', gender: 'all', bestSeller: true },
      { id: 'ws-sleep-60', name: { en: 'Sleep Therapy — 60 min', fr: 'Thérapie du Sommeil — 60 min' }, price: 'XAF 25,000', duration: '60 min', gender: 'all' },
      { id: 'ws-sleep-90', name: { en: 'Sleep Therapy — 90 min', fr: 'Thérapie du Sommeil — 90 min' }, price: 'XAF 30,000', duration: '90 min', gender: 'all' },
    ],
    features: {
      en: ['Premium facilities', 'Aromatherapy included', 'Tranquil environment', 'Complete relaxation'],
      fr: ['Installations premium', 'Aromathérapie incluse', 'Environnement tranquille', 'Relaxation complète'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 3. FACE CARE
  // ═══════════════════════════════════════════════════════
  {
    id: 'face-care',
    name: {
      en: 'Face Care',
      fr: 'Soins du Visage',
    },
    tagline: {
      en: 'Discover the transformation today',
      fr: 'Découvrez la transformation aujourd\'hui',
    },
    description: {
      en: 'Advanced facial treatments using cutting-edge technology — deep cleansing, hydrating, brightening, anti-aging, acne control, and detox facials. Your skin deserves it.',
      fr: 'Soins du visage avancés utilisant une technologie de pointe — nettoyage en profondeur, hydratation, éclat, anti-âge, contrôle de l\'acné et détox. Votre peau le mérite.',
    },
    longDescription: {
      en: 'Our face care menu combines advanced skincare technology with expert techniques to deliver visible, lasting results. Each treatment uses professional-grade equipment including ultrasound scrubbers, oxygen infusion, microdermabrasion, LED light therapy, radio frequency, and high frequency devices. Whether you need a deep cleansing to remove impurities, a hydrating oxygen facial for radiant skin, brightening with microdermabrasion, anti-aging lifting with RF and EMS, acne control, or a complete skin detox — our estheticians create a customized protocol for your unique skin needs.',
      fr: 'Notre menu de soins du visage combine la technologie avancée des soins de la peau avec des techniques expertes pour offrir des résultats visibles et durables. Chaque traitement utilise des équipements professionnels incluant le scrubber à ultrasons, l\'infusion d\'oxygène, la microdermabrasion, la luminothérapie LED, la radiofréquence et les appareils haute fréquence. Que vous ayez besoin d\'un nettoyage profond pour éliminer les impuretés, d\'un soin hydratant à l\'oxygène pour une peau éclatante, d\'un éclaircissement par microdermabrasion, d\'un lifting anti-âge avec RF et EMS, d\'un contrôle de l\'acné ou d\'une détox complète — nos esthéticiennes créent un protocole personnalisé pour vos besoins cutanés uniques.',
    },
    icon: 'lucide:sparkles',
    image: '/images/services/face-care.jpg',
    featured: true,
    duration: '30–60 min',
    startingPrice: 'À partir de XAF 12,000',
    subServices: [
      {
        id: 'fc-deep',
        name: { en: 'Ultimate Deep Cleansing Facial', fr: 'Soin Nettoyage Profond Ultime' },
        price: 'XAF 12,000',
        duration: '45 min',
        gender: 'all',
        description: { en: 'Ultrasound scrubber + vacuum suction + steam — removes impurities, blackheads and excess oil', fr: 'Scrubber à ultrasons + aspiration + vapeur — élimine les impuretés, points noirs et excès de sébum' },
      },
      {
        id: 'fc-hydra',
        name: { en: 'Hydrating Oxygen Facial', fr: 'Soin Hydratant à l\'Oxygène' },
        price: 'XAF 15,000',
        duration: '45 min',
        gender: 'all',
        description: { en: 'Oxygen infusion + ultrasound for deep hydration and radiant skin', fr: 'Infusion d\'oxygène + ultrasons pour une hydratation profonde et une peau radieuse' },
      },
      {
        id: 'fc-bright',
        name: { en: 'Brightening Glow Facial', fr: 'Soin Éclat Lumineux' },
        price: 'XAF 20,000',
        duration: '50 min',
        gender: 'all',
        description: { en: 'Microdermabrasion + LED light therapy for a luminous, even complexion', fr: 'Microdermabrasion + luminothérapie LED pour un teint lumineux et uniforme' },
      },
      {
        id: 'fc-antiage',
        name: { en: 'Anti-Aging Lifting Facial', fr: 'Soin Anti-Âge Lifting' },
        price: 'XAF 25,000',
        duration: '60 min',
        gender: 'all',
        description: { en: 'Radio frequency + red LED light + EMS (Electric Muscle Stimulation)', fr: 'Radiofréquence + LED rouge + EMS (Stimulation Musculaire Électrique)' },
      },
      {
        id: 'fc-acne',
        name: { en: 'Acne Control Facial', fr: 'Soin Contrôle de l\'Acné' },
        price: 'XAF 20,000',
        duration: '50 min',
        gender: 'all',
        description: { en: 'High frequency + vacuum extraction + blue LED light', fr: 'Haute fréquence + extraction par aspiration + LED bleue' },
      },
      {
        id: 'fc-detox',
        name: { en: 'Skin Detox Facial', fr: 'Soin Détox de la Peau' },
        price: 'XAF 20,000',
        duration: '50 min',
        gender: 'all',
        description: { en: 'Ultrasound peeling + vacuum suction + lymphatic drainage', fr: 'Peeling ultrasons + aspiration + drainage lymphatique' },
      },
    ],
    features: {
      en: ['Advanced technology', 'Ultrasound & LED', 'Custom protocols', 'Visible results'],
      fr: ['Technologie avancée', 'Ultrasons & LED', 'Protocoles personnalisés', 'Résultats visibles'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 4. HAIRCUTS & STYLING
  // ═══════════════════════════════════════════════════════
  {
    id: 'haircuts',
    name: {
      en: 'Haircuts & Styling',
      fr: 'Coupes & Coiffure',
    },
    tagline: {
      en: 'Cut · Style · Elevate',
      fr: 'Couper · Coiffer · Sublimer',
    },
    description: {
      en: 'Precision haircuts and expert styling for men and women — from classic cuts to modern trends, tailored to your personality.',
      fr: 'Coupes de précision et coiffure experte pour hommes et femmes — des coupes classiques aux tendances modernes, adaptées à votre personnalité.',
    },
    longDescription: {
      en: 'Our skilled stylists deliver precision cuts and creative styling that reflect your individuality. Whether you want a clean classic cut, a modern fade, a textured crop, or a complete style transformation — every service begins with a consultation to understand your hair type, lifestyle, and vision. We use professional-grade tools and premium products to ensure your look is polished to perfection.',
      fr: 'Nos coiffeurs qualifiés réalisent des coupes de précision et des coiffures créatives qui reflètent votre individualité. Que vous souhaitiez une coupe classique soignée, un dégradé moderne, une coupe texturée ou une transformation complète — chaque service commence par une consultation pour comprendre votre type de cheveux, votre style de vie et votre vision. Nous utilisons des outils professionnels et des produits premium pour une finition impeccable.',
    },
    icon: 'lucide:scissors',
    image: '/images/services/haircuts.jpg',
    featured: true,
    duration: '30–60 min',
    startingPrice: 'À partir de XAF 2,000',
    subServices: [
      { id: 'hc-basic-m', name: { en: 'Basic Haircut', fr: 'Coupe Simple' }, price: 'XAF 2,000', duration: '30 min', gender: 'men' },
      { id: 'hc-classic-m', name: { en: 'Classic Cut & Style', fr: 'Coupe Classique & Coiffage' }, price: 'XAF 3,000', duration: '40 min', gender: 'men' },
      { id: 'hc-fade-m', name: { en: 'Fade / Taper Cut', fr: 'Dégradé / Coupe Taper' }, price: 'XAF 3,500', duration: '45 min', gender: 'men' },
      { id: 'hc-design-m', name: { en: 'Design Cut / Patterns', fr: 'Coupe Design / Motifs' }, price: 'XAF 5,000', duration: '60 min', gender: 'men', bestSeller: true },
      { id: 'hc-kids', name: { en: 'Kids Haircut (under 12)', fr: 'Coupe Enfant (moins de 12 ans)' }, price: 'XAF 1,500', duration: '25 min', gender: 'all' },
      { id: 'hc-trim-w', name: { en: 'Hair Trim & Shape', fr: 'Coupe & Mise en Forme' }, price: 'XAF 3,000', duration: '30 min', gender: 'women' },
      { id: 'hc-blowout-w', name: { en: 'Blow-Dry & Styling', fr: 'Brushing & Coiffage' }, price: 'XAF 5,000', duration: '45 min', gender: 'women', bestSeller: true },
      { id: 'hc-updo-w', name: { en: 'Updo / Event Styling', fr: 'Chignon / Coiffure Événement' }, price: 'XAF 8,000', duration: '60 min', gender: 'women' },
    ],
    features: {
      en: ['Personalized consultation', 'Premium styling products', 'Men & women welcome', 'Modern & classic styles'],
      fr: ['Consultation personnalisée', 'Produits de coiffage premium', 'Hommes & femmes bienvenus', 'Styles modernes & classiques'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 5. HAIR COLORING
  // ═══════════════════════════════════════════════════════
  {
    id: 'coloring',
    name: {
      en: 'Hair Coloring',
      fr: 'Coloration Capillaire',
    },
    tagline: {
      en: 'Color · Transform · Shine',
      fr: 'Couleur · Transformation · Éclat',
    },
    description: {
      en: 'Professional hair coloring from subtle highlights to bold transformations — using salon-grade products that protect and nourish your hair.',
      fr: 'Coloration professionnelle des mèches subtiles aux transformations audacieuses — avec des produits professionnels qui protègent et nourrissent vos cheveux.',
    },
    longDescription: {
      en: 'Our color specialists create everything from natural-looking highlights and lowlights to dramatic full-color transformations. We use professional ammonia-free and low-damage formulas to protect hair integrity while delivering vibrant, long-lasting results. Every color service includes a detailed consultation, strand test when needed, and a finishing treatment to lock in color and shine.',
      fr: 'Nos spécialistes de la couleur créent tout, des mèches naturelles aux transformations complètes spectaculaires. Nous utilisons des formules professionnelles sans ammoniaque et à faible dommage pour protéger l\'intégrité des cheveux tout en obtenant des résultats vibrants et durables. Chaque service de coloration comprend une consultation détaillée, un test de mèche si nécessaire, et un soin de finition pour fixer la couleur et la brillance.',
    },
    icon: 'lucide:palette',
    image: '/images/services/coloring.jpg',
    featured: true,
    duration: '60–180 min',
    startingPrice: 'À partir de XAF 5,000',
    subServices: [
      { id: 'cl-root', name: { en: 'Root Touch-Up', fr: 'Retouche Racines' }, price: 'XAF 5,000', duration: '60 min', gender: 'all' },
      { id: 'cl-full', name: { en: 'Full Color (Single Process)', fr: 'Coloration Complète (Mono-processus)' }, price: 'XAF 10,000', duration: '90 min', gender: 'all', bestSeller: true },
      { id: 'cl-highlights', name: { en: 'Highlights / Lowlights', fr: 'Mèches / Reflets' }, price: 'XAF 15,000', duration: '120 min', gender: 'all' },
      { id: 'cl-balayage', name: { en: 'Balayage / Ombré', fr: 'Balayage / Ombré' }, price: 'XAF 20,000', duration: '150 min', gender: 'women', bestSeller: true },
      { id: 'cl-fashion', name: { en: 'Fashion / Vivid Colors', fr: 'Couleurs Mode / Vives' }, price: 'XAF 25,000', duration: '180 min', gender: 'all' },
      { id: 'cl-toner', name: { en: 'Toner / Gloss Treatment', fr: 'Tonifiant / Soin Gloss' }, price: 'XAF 5,000', duration: '45 min', gender: 'all' },
    ],
    features: {
      en: ['Ammonia-free options', 'Color consultation', 'Post-color care', 'Vibrant long-lasting results'],
      fr: ['Options sans ammoniaque', 'Consultation couleur', 'Soins post-coloration', 'Résultats vibrants et durables'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 6. BRAIDING, LOCS & PROTECTIVE STYLES
  // ═══════════════════════════════════════════════════════
  {
    id: 'braiding',
    name: {
      en: 'Braiding, Locs & Protective Styles',
      fr: 'Tresses, Locks & Coiffures Protectrices',
    },
    tagline: {
      en: 'Braid · Protect · Express',
      fr: 'Tresser · Protéger · S\'exprimer',
    },
    description: {
      en: 'Expert braiding, locs maintenance, and protective styling — honoring tradition while embracing modern creativity.',
      fr: 'Tressage expert, entretien de locks et coiffures protectrices — honorant la tradition tout en embrassant la créativité moderne.',
    },
    longDescription: {
      en: 'Our braiding specialists are masters of protective styling, offering everything from classic cornrows and box braids to intricate loc installations and maintenance. We prioritize hair health with every style, using gentle techniques and quality extensions when desired. Whether you want a low-maintenance protective style or an elaborate event look, our team delivers artistry that celebrates African beauty traditions.',
      fr: 'Nos spécialistes du tressage sont des maîtres de la coiffure protectrice, offrant tout, des cornrows classiques et box braids aux installations de locks complexes et leur entretien. Nous donnons la priorité à la santé des cheveux avec chaque style, en utilisant des techniques douces et des extensions de qualité si souhaité. Que vous souhaitiez un style protecteur facile d\'entretien ou un look événementiel élaboré, notre équipe offre un art qui célèbre les traditions de beauté africaines.',
    },
    icon: 'lucide:ribbon',
    image: '/images/services/braiding.jpg',
    featured: true,
    duration: '60–300 min',
    startingPrice: 'À partir de XAF 3,000',
    subServices: [
      { id: 'br-cornrows', name: { en: 'Cornrows (Simple)', fr: 'Cornrows (Simples)' }, price: 'XAF 3,000', duration: '60 min', gender: 'all' },
      { id: 'br-cornrows-design', name: { en: 'Cornrows (Design / Feed-In)', fr: 'Cornrows (Design / Feed-In)' }, price: 'XAF 8,000', duration: '120 min', gender: 'all', bestSeller: true },
      { id: 'br-box', name: { en: 'Box Braids', fr: 'Box Braids' }, price: 'XAF 15,000', duration: '240 min', gender: 'women' },
      { id: 'br-twist', name: { en: 'Twist / Passion Twist', fr: 'Twist / Passion Twist' }, price: 'XAF 12,000', duration: '180 min', gender: 'women', bestSeller: true },
      { id: 'br-locs-start', name: { en: 'Locs Installation', fr: 'Installation de Locks' }, price: 'XAF 15,000', duration: '240 min', gender: 'all' },
      { id: 'br-locs-maint', name: { en: 'Locs Retwist / Maintenance', fr: 'Retorsion / Entretien Locks' }, price: 'XAF 5,000', duration: '90 min', gender: 'all' },
      { id: 'br-crochet', name: { en: 'Crochet Braids', fr: 'Crochet Braids' }, price: 'XAF 10,000', duration: '120 min', gender: 'women' },
      { id: 'br-weave', name: { en: 'Weave Install (Sew-In)', fr: 'Tissage (Cousu)' }, price: 'XAF 15,000', duration: '150 min', gender: 'women' },
    ],
    features: {
      en: ['Gentle techniques', 'Quality extensions available', 'Cultural artistry', 'Hair health priority'],
      fr: ['Techniques douces', 'Extensions de qualité disponibles', 'Art culturel', 'Santé des cheveux prioritaire'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 7. SHAVING & BEARD GROOMING
  // ═══════════════════════════════════════════════════════
  {
    id: 'shaves',
    name: {
      en: 'Shaving & Beard Grooming',
      fr: 'Rasage & Entretien Barbe',
    },
    tagline: {
      en: 'Shave · Shape · Refine',
      fr: 'Raser · Façonner · Affiner',
    },
    description: {
      en: 'Traditional hot towel shaves, beard sculpting, and grooming rituals — the classic barbershop experience, elevated.',
      fr: 'Rasages traditionnels à la serviette chaude, sculpture de barbe et rituels de soins — l\'expérience barbershop classique, sublimée.',
    },
    longDescription: {
      en: 'Experience the timeless art of traditional shaving and beard grooming. Our barbers combine old-world techniques with modern precision — from the soothing ritual of a hot towel straight-razor shave to expert beard sculpting and lineup detailing. Every session includes premium pre-shave oils, rich lathers, and nourishing aftershave balms that leave your skin smooth and refreshed.',
      fr: 'Vivez l\'art intemporel du rasage traditionnel et de l\'entretien de la barbe. Nos barbiers combinent les techniques classiques avec la précision moderne — du rituel apaisant du rasage au coupe-chou avec serviette chaude à la sculpture de barbe experte et au détail de la ligne. Chaque séance comprend des huiles pré-rasage premium, des mousses riches et des baumes après-rasage nourrissants qui laissent votre peau lisse et rafraîchie.',
    },
    icon: 'lucide:blend',
    image: '/images/services/shaves.jpg',
    featured: true,
    duration: '20–60 min',
    startingPrice: 'À partir de XAF 2,000',
    subServices: [
      { id: 'sh-lineup', name: { en: 'Lineup / Edge-Up', fr: 'Ligne / Contours' }, price: 'XAF 2,000', duration: '20 min', gender: 'men' },
      { id: 'sh-beard-trim', name: { en: 'Beard Trim & Shape', fr: 'Taille & Forme Barbe' }, price: 'XAF 3,000', duration: '25 min', gender: 'men', bestSeller: true },
      { id: 'sh-hot-towel', name: { en: 'Hot Towel Straight Razor Shave', fr: 'Rasage Coupe-Chou Serviette Chaude' }, price: 'XAF 5,000', duration: '40 min', gender: 'men', bestSeller: true },
      { id: 'sh-beard-sculpt', name: { en: 'Beard Sculpting & Design', fr: 'Sculpture & Design Barbe' }, price: 'XAF 5,000', duration: '35 min', gender: 'men' },
      { id: 'sh-royal', name: { en: 'Royal Shave Experience', fr: 'Expérience Rasage Royal' }, price: 'XAF 8,000', duration: '60 min', gender: 'men', description: { en: 'Hot towel, straight razor, facial steam, and premium aftershave balm', fr: 'Serviette chaude, coupe-chou, vapeur faciale et baume après-rasage premium' } },
      { id: 'sh-head', name: { en: 'Head Shave (Clean)', fr: 'Rasage Crâne (Net)' }, price: 'XAF 3,000', duration: '30 min', gender: 'men' },
    ],
    features: {
      en: ['Straight razor expertise', 'Hot towel rituals', 'Premium grooming products', 'Precision detailing'],
      fr: ['Expertise coupe-chou', 'Rituels serviette chaude', 'Produits de soin premium', 'Détails de précision'],
    },
  },

  // ═══════════════════════════════════════════════════════
  // 8. MANICURE & PEDICURE
  // ═══════════════════════════════════════════════════════
  {
    id: 'nails',
    name: {
      en: 'Manicure & Pedicure',
      fr: 'Manucure & Pédicure',
    },
    tagline: {
      en: 'Polish · Perfect · Pamper',
      fr: 'Polir · Perfectionner · Chouchouter',
    },
    description: {
      en: 'Complete nail care from classic manicures and pedicures to gel, acrylic, and nail art — for polished hands and feet.',
      fr: 'Soins complets des ongles des manucures et pédicures classiques au gel, acrylique et nail art — pour des mains et pieds impeccables.',
    },
    longDescription: {
      en: 'Treat your hands and feet to our comprehensive nail care services. From a simple classic manicure or pedicure to long-lasting gel polish, acrylic extensions, and creative nail art — our technicians combine precision with creativity. Every session includes cuticle care, shaping, and a relaxing hand or foot massage. We maintain the highest hygiene standards with sterilized tools for every client.',
      fr: 'Offrez à vos mains et pieds nos services complets de soins des ongles. De la manucure ou pédicure classique simple au vernis gel longue durée, extensions acryliques et nail art créatif — nos techniciennes combinent précision et créativité. Chaque séance comprend le soin des cuticules, le limage et un massage relaxant des mains ou des pieds. Nous maintenons les normes d\'hygiène les plus élevées avec des outils stérilisés pour chaque client.',
    },
    icon: 'lucide:hand',
    image: '/images/services/nails.jpg',
    featured: true,
    duration: '30–90 min',
    startingPrice: 'À partir de XAF 3,000',
    subServices: [
      { id: 'nl-mani-classic', name: { en: 'Classic Manicure', fr: 'Manucure Classique' }, price: 'XAF 3,000', duration: '30 min', gender: 'all' },
      { id: 'nl-pedi-classic', name: { en: 'Classic Pedicure', fr: 'Pédicure Classique' }, price: 'XAF 4,000', duration: '40 min', gender: 'all' },
      { id: 'nl-mani-gel', name: { en: 'Gel Manicure', fr: 'Manucure Gel' }, price: 'XAF 5,000', duration: '45 min', gender: 'all', bestSeller: true },
      { id: 'nl-pedi-gel', name: { en: 'Gel Pedicure', fr: 'Pédicure Gel' }, price: 'XAF 6,000', duration: '50 min', gender: 'all', bestSeller: true },
      { id: 'nl-mani-pedi', name: { en: 'Manicure + Pedicure Combo', fr: 'Combo Manucure + Pédicure' }, price: 'XAF 6,000', duration: '60 min', gender: 'all' },
      { id: 'nl-acrylic', name: { en: 'Acrylic Extensions (Full Set)', fr: 'Extensions Acryliques (Set Complet)' }, price: 'XAF 10,000', duration: '75 min', gender: 'women' },
      { id: 'nl-art', name: { en: 'Nail Art (per nail)', fr: 'Nail Art (par ongle)' }, price: 'XAF 500', duration: '10 min', gender: 'all' },
      { id: 'nl-removal', name: { en: 'Gel / Acrylic Removal', fr: 'Dépose Gel / Acrylique' }, price: 'XAF 3,000', duration: '30 min', gender: 'all' },
    ],
    features: {
      en: ['Sterilized tools', 'Gel & acrylic options', 'Creative nail art', 'Relaxing hand massage'],
      fr: ['Outils stérilisés', 'Options gel & acrylique', 'Nail art créatif', 'Massage relaxant des mains'],
    },
  },
];

// ── Helper functions ──

export function getServiceById(id: string): ServiceCategory | undefined {
  return services.find(s => s.id === id);
}

export function getServiceByLang(service: ServiceCategory, lang: 'en' | 'fr') {
  return {
    ...service,
    name: service.name[lang],
    tagline: service.tagline[lang],
    description: service.description[lang],
    longDescription: service.longDescription[lang],
    features: service.features[lang],
    subServices: service.subServices.map(sub => ({
      ...sub,
      name: sub.name[lang],
      description: sub.description?.[lang],
    })),
  };
}

export function getAllServicesForLang(lang: 'en' | 'fr') {
  return services.map(s => getServiceByLang(s, lang));
}
