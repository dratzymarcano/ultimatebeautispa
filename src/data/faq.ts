/**
 * Ultimate Beauty Spa — Comprehensive FAQ
 * Compiled from real customer questions across spa forums, Reddit (r/Massage,
 * r/SkincareAddiction, r/Nails, r/NaturalHair, r/wicked_edge), Quora,
 * Google Reviews, Yelp, Spafinder, and beauty industry Q&A platforms.
 *
 * Bilingual: English + French (Cameroonian French style)
 * Location: Douala, Cameroon
 */

export interface FAQItem {
  id: string;
  category: {
    en: string;
    fr: string;
  };
  question: {
    en: string;
    fr: string;
  };
  answer: {
    en: string;
    fr: string;
  };
}

export const faqCategories = [
  { id: 'general', en: 'General Spa Questions', fr: 'Questions Générales sur le Spa' },
  { id: 'massage', en: 'Massage Therapy', fr: 'Massothérapie' },
  { id: 'facial', en: 'Facials & Skincare', fr: 'Soins du Visage & Peau' },
  { id: 'hair', en: 'Hair Services', fr: 'Services Capillaires' },
  { id: 'grooming', en: 'Shaving & Grooming', fr: 'Rasage & Soins' },
  { id: 'nails', en: 'Nail Care', fr: 'Soins des Ongles' },
  { id: 'wetspa', en: 'Wet Spa & Hydrotherapy', fr: 'Spa Humide & Hydrothérapie' },
  { id: 'booking', en: 'Booking & Practical', fr: 'Réservation & Pratique' },
  { id: 'pricing', en: 'Pricing & Payment', fr: 'Tarifs & Paiement' },
  { id: 'safety', en: 'Safety & Hygiene', fr: 'Sécurité & Hygiène' },
] as const;

export const faq: FAQItem[] = [
  // ═══════════════════════════════════════════════════════
  // 1. GENERAL SPA QUESTIONS
  // ═══════════════════════════════════════════════════════
  {
    id: 'gen-01',
    category: { en: 'General Spa Questions', fr: 'Questions Générales sur le Spa' },
    question: {
      en: 'What should I expect on my first visit to Ultimate Beauty Spa?',
      fr: 'À quoi dois-je m\'attendre lors de ma première visite chez Ultimate Beauty Spa ?',
    },
    answer: {
      en: 'Welcome! When you arrive at our spa inside the Avant Saint James hotel in Bonamoussadi, our front desk team will greet you warmly, walk you through our services, and help you settle in. Every first visit begins with a brief consultation so we understand your preferences, any sensitivities, and your goals for the session. We want you to feel completely relaxed and well taken care of from the moment you step through our doors.',
      fr: 'Bienvenue ! Lorsque vous arrivez à notre spa situé dans l\'Avant Saint James hôtel à Bonamoussadi, notre équipe d\'accueil vous recevra chaleureusement, vous présentera nos services et vous aidera à vous installer. Chaque première visite commence par une brève consultation afin de comprendre vos préférences, vos éventuelles sensibilités et vos objectifs pour la séance. Nous voulons que vous vous sentiez totalement détendu(e) et bien pris(e) en charge dès votre arrivée.',
    },
  },
  {
    id: 'gen-02',
    category: { en: 'General Spa Questions', fr: 'Questions Générales sur le Spa' },
    question: {
      en: 'Do you serve both men and women?',
      fr: 'Recevez-vous les hommes et les femmes ?',
    },
    answer: {
      en: 'Absolutely! Ultimate Beauty Spa is designed for everyone. Our full service menu — from massage and facials to haircuts, braiding, beard grooming, and nail care — is available to both men and women. Self-care has no gender, and our team is trained to deliver exceptional results for all clients.',
      fr: 'Absolument ! Ultimate Beauty Spa est conçu pour tout le monde. Notre menu complet de services — du massage et des soins du visage aux coupes de cheveux, tressage, entretien de la barbe et soins des ongles — est ouvert aux hommes comme aux femmes. Prendre soin de soi n\'a pas de genre, et notre équipe est formée pour offrir des résultats exceptionnels à chaque client.',
    },
  },
  {
    id: 'gen-03',
    category: { en: 'General Spa Questions', fr: 'Questions Générales sur le Spa' },
    question: {
      en: 'How should I prepare before coming to the spa?',
      fr: 'Comment dois-je me préparer avant de venir au spa ?',
    },
    answer: {
      en: 'There\'s no need for elaborate preparation — just arrive as you are! We recommend staying well hydrated, avoiding heavy meals right before a treatment, and arriving 10–15 minutes early so you can relax and fill out any consultation forms. For massage or wet spa sessions, wearing comfortable clothing you can easily change out of is helpful. We provide everything else you\'ll need.',
      fr: 'Aucune préparation complexe n\'est nécessaire — venez comme vous êtes ! Nous recommandons de bien vous hydrater, d\'éviter les repas lourds juste avant un soin et d\'arriver 10 à 15 minutes en avance pour vous détendre et remplir les fiches de consultation. Pour les massages ou les séances de spa humide, portez des vêtements confortables et faciles à enlever. Nous fournissons tout le nécessaire sur place.',
    },
  },
  {
    id: 'gen-04',
    category: { en: 'General Spa Questions', fr: 'Questions Générales sur le Spa' },
    question: {
      en: 'What are your opening hours, and do I need to book in advance?',
      fr: 'Quels sont vos horaires d\'ouverture, et dois-je réserver à l\'avance ?',
    },
    answer: {
      en: 'We\'re open every day from 9:00 AM to 9:00 PM, including weekends and public holidays. While walk-ins are welcome, we strongly recommend booking in advance — especially for massage, facials, braiding, and wet spa sessions — to guarantee your preferred time slot. You can book online through our website, call us at +237 697 113 339, or message us on WhatsApp.',
      fr: 'Nous sommes ouverts tous les jours de 9h00 à 21h00, y compris les weekends et jours fériés. Bien que les visites sans rendez-vous soient acceptées, nous recommandons fortement de réserver à l\'avance — surtout pour les massages, soins du visage, tressages et séances de spa humide — afin de garantir le créneau de votre choix. Vous pouvez réserver en ligne sur notre site, nous appeler au +237 697 113 339 ou nous écrire sur WhatsApp.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 2. MASSAGE THERAPY
  // ═══════════════════════════════════════════════════════
  {
    id: 'mas-01',
    category: { en: 'Massage Therapy', fr: 'Massothérapie' },
    question: {
      en: 'What types of massage do you offer, and which one is right for me?',
      fr: 'Quels types de massage proposez-vous, et lequel me convient le mieux ?',
    },
    answer: {
      en: 'We offer classic relaxation massage, deep tissue massage, aromatherapy massage, sportive/hot stone massage, and targeted back and leg sessions. If you\'re looking to unwind after a stressful week, our classic relaxation massage is perfect. For chronic pain or muscle tension, deep tissue is ideal. Our aromatherapy massage adds a sensory journey with premium essential oils, and the hot stone massage is our ultimate indulgence. During your consultation, your therapist will recommend the best option based on your needs.',
      fr: 'Nous proposons le massage de relaxation classique, le massage des tissus profonds, le massage aromathérapie, le massage sportif aux pierres chaudes et les séances ciblées dos et jambes. Si vous souhaitez décompresser après une semaine éprouvante, notre massage relaxation classique est parfait. Pour les douleurs chroniques ou tensions musculaires, le massage des tissus profonds est idéal. Notre massage aromathérapie ajoute un voyage sensoriel avec des huiles essentielles premium, et le massage aux pierres chaudes est notre soin le plus luxueux. Votre thérapeute vous recommandera la meilleure option lors de la consultation.',
    },
  },
  {
    id: 'mas-02',
    category: { en: 'Massage Therapy', fr: 'Massothérapie' },
    question: {
      en: 'How long does a massage session last, and how often should I get one?',
      fr: 'Combien de temps dure une séance de massage, et à quelle fréquence devrais-je en faire ?',
    },
    answer: {
      en: 'Our massage sessions range from 30 minutes (targeted back/leg massage) to 90 minutes (full-body deep tissue or hot stone). For general wellness and stress relief, we recommend a 60-minute session every 2 to 4 weeks. If you\'re dealing with chronic tension, sports recovery, or specific pain, your therapist may suggest more frequent visits initially. The key is consistency — regular massage yields the best long-term benefits for both body and mind.',
      fr: 'Nos séances de massage vont de 30 minutes (massage ciblé dos/jambes) à 90 minutes (massage complet tissus profonds ou pierres chaudes). Pour le bien-être général et la gestion du stress, nous recommandons une séance de 60 minutes toutes les 2 à 4 semaines. Si vous souffrez de tensions chroniques, êtes en phase de récupération sportive ou avez des douleurs spécifiques, votre thérapeute pourra suggérer des visites plus fréquentes au début. La clé est la régularité — un massage régulier offre les meilleurs résultats à long terme pour le corps et l\'esprit.',
    },
  },
  {
    id: 'mas-03',
    category: { en: 'Massage Therapy', fr: 'Massothérapie' },
    question: {
      en: 'Are there situations where I should avoid getting a massage?',
      fr: 'Y a-t-il des situations où je devrais éviter le massage ?',
    },
    answer: {
      en: 'Massage is safe for most people, but we advise caution if you have a fever, contagious skin condition, recent surgery, an acute injury, or severe inflammation. Pregnant women should inform us so we can adapt the treatment accordingly. If you have high blood pressure, heart conditions, or are on blood-thinning medication, please mention this during your consultation. Our therapists are trained to modify techniques or suggest alternatives to ensure your safety and comfort.',
      fr: 'Le massage est sûr pour la plupart des gens, mais nous recommandons la prudence en cas de fièvre, d\'affection cutanée contagieuse, de chirurgie récente, de blessure aiguë ou d\'inflammation sévère. Les femmes enceintes doivent nous en informer afin que nous adaptions le traitement. Si vous souffrez d\'hypertension, de conditions cardiaques ou prenez des anticoagulants, veuillez le mentionner lors de votre consultation. Nos thérapeutes sont formés pour adapter les techniques ou proposer des alternatives afin d\'assurer votre sécurité et votre confort.',
    },
  },
  {
    id: 'mas-04',
    category: { en: 'Massage Therapy', fr: 'Massothérapie' },
    question: {
      en: 'Will the massage be painful? Can I ask for more or less pressure?',
      fr: 'Le massage sera-t-il douloureux ? Puis-je demander plus ou moins de pression ?',
    },
    answer: {
      en: 'Your comfort is our top priority, and you should never feel forced to endure pain during a massage. Some techniques, especially deep tissue work, may produce a "good hurt" sensation on tight muscles, but it should always remain within your comfort zone. Please communicate openly with your therapist at any point — they\'ll happily adjust the pressure, speed, or focus area. This is your time, and we want every moment to feel right for you.',
      fr: 'Votre confort est notre priorité absolue, et vous ne devriez jamais vous sentir obligé(e) de supporter une douleur pendant un massage. Certaines techniques, en particulier le travail des tissus profonds, peuvent produire une sensation de "bonne douleur" sur les muscles tendus, mais cela doit toujours rester dans votre zone de confort. N\'hésitez pas à communiquer ouvertement avec votre thérapeute à tout moment — il ou elle ajustera avec plaisir la pression, la vitesse ou la zone de travail. C\'est votre moment, et nous voulons que chaque instant soit agréable pour vous.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 3. FACIALS & SKINCARE
  // ═══════════════════════════════════════════════════════
  {
    id: 'fac-01',
    category: { en: 'Facials & Skincare', fr: 'Soins du Visage & Peau' },
    question: {
      en: 'I\'m not sure which facial is right for my skin type. Can you help me choose?',
      fr: 'Je ne sais pas quel soin du visage convient à mon type de peau. Pouvez-vous m\'aider à choisir ?',
    },
    answer: {
      en: 'Of course! Every facial at Ultimate Beauty Spa begins with a skin analysis by our trained estheticians. Whether you have oily, dry, combination, or sensitive skin, we\'ll recommend the ideal treatment. For congested or oily skin, our Deep Cleansing Facial works wonders. If your skin feels dull or dehydrated, try our Hydrating Oxygen Facial. For uneven tone, the Brightening Glow Facial with microdermabrasion and LED light therapy delivers beautiful results. We tailor everything to your unique needs.',
      fr: 'Bien sûr ! Chaque soin du visage chez Ultimate Beauty Spa commence par une analyse de la peau réalisée par nos esthéticiennes qualifiées. Que votre peau soit grasse, sèche, mixte ou sensible, nous vous recommanderons le traitement idéal. Pour les peaux congestionnées ou grasses, notre Soin Nettoyage Profond fait des merveilles. Si votre peau semble terne ou déshydratée, essayez notre Soin Hydratant à l\'Oxygène. Pour un teint irrégulier, le Soin Éclat Lumineux avec microdermabrasion et luminothérapie LED offre de beaux résultats. Nous adaptons tout à vos besoins uniques.',
    },
  },
  {
    id: 'fac-02',
    category: { en: 'Facials & Skincare', fr: 'Soins du Visage & Peau' },
    question: {
      en: 'How often should I get a facial, and when will I see results?',
      fr: 'À quelle fréquence devrais-je faire un soin du visage, et quand verrai-je les résultats ?',
    },
    answer: {
      en: 'For optimal skin health, we recommend a professional facial every 4 to 6 weeks, which aligns with your skin\'s natural renewal cycle. You\'ll notice an immediate glow and smoother texture after your very first session, but the most dramatic improvements — in tone, clarity, and firmness — build over a series of treatments. Consistency is key! Between visits, following a good home skincare routine with quality products will help maintain and extend your results.',
      fr: 'Pour une santé optimale de la peau, nous recommandons un soin du visage professionnel toutes les 4 à 6 semaines, en accord avec le cycle naturel de renouvellement de votre peau. Vous remarquerez un éclat immédiat et une texture plus lisse dès la première séance, mais les améliorations les plus spectaculaires — en termes de teint, clarté et fermeté — se construisent au fil des traitements. La régularité est la clé ! Entre les visites, suivre une bonne routine de soins à domicile avec des produits de qualité aidera à maintenir et prolonger vos résultats.',
    },
  },
  {
    id: 'fac-03',
    category: { en: 'Facials & Skincare', fr: 'Soins du Visage & Peau' },
    question: {
      en: 'Is the Anti-Aging Lifting Facial suitable for younger skin, or only for mature skin?',
      fr: 'Le Soin Anti-Âge Lifting convient-il aux peaux jeunes, ou uniquement aux peaux matures ?',
    },
    answer: {
      en: 'Great question! While our Anti-Aging Lifting Facial with radio frequency and EMS is especially popular with clients looking to firm and tighten skin, it\'s never too early to invest in prevention. Clients in their late 20s and 30s often choose this treatment as a proactive step to maintain elasticity and stimulate collagen production. Think of it as a gym workout for your skin — it benefits everyone, regardless of age. Your esthetician will customize the intensity based on your skin\'s needs.',
      fr: 'Excellente question ! Bien que notre Soin Anti-Âge Lifting avec radiofréquence et EMS soit particulièrement prisé par les clients souhaitant raffermir la peau, il n\'est jamais trop tôt pour investir dans la prévention. Les clients dans la fin de la vingtaine et la trentaine choisissent souvent ce traitement comme mesure proactive pour maintenir l\'élasticité et stimuler la production de collagène. Considérez cela comme un entraînement sportif pour votre peau — cela profite à tout le monde, quel que soit l\'âge. Votre esthéticienne adaptera l\'intensité selon les besoins de votre peau.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 4. HAIR SERVICES (Cuts, Coloring, Braiding)
  // ═══════════════════════════════════════════════════════
  {
    id: 'hair-01',
    category: { en: 'Hair Services', fr: 'Services Capillaires' },
    question: {
      en: 'How do I know which haircut or style will suit me best?',
      fr: 'Comment savoir quelle coupe ou quel style me conviendra le mieux ?',
    },
    answer: {
      en: 'Every haircut at Ultimate Beauty Spa starts with a one-on-one consultation with your stylist. We look at your face shape, hair texture, lifestyle, and personal preferences before picking up the scissors. Whether you want a clean classic cut, a sharp fade, a textured crop, or a complete transformation — your stylist will guide you with honest, expert advice. We also welcome inspiration photos, so feel free to bring images of styles you love!',
      fr: 'Chaque coupe chez Ultimate Beauty Spa commence par une consultation individuelle avec votre coiffeur. Nous examinons la forme de votre visage, la texture de vos cheveux, votre style de vie et vos préférences personnelles avant de prendre les ciseaux. Que vous souhaitiez une coupe classique soignée, un dégradé net, une coupe texturée ou une transformation complète — votre coiffeur vous guidera avec des conseils honnêtes et experts. N\'hésitez pas à apporter des photos d\'inspiration de styles qui vous plaisent !',
    },
  },
  {
    id: 'hair-02',
    category: { en: 'Hair Services', fr: 'Services Capillaires' },
    question: {
      en: 'Will hair coloring damage my hair? What products do you use?',
      fr: 'La coloration abîmera-t-elle mes cheveux ? Quels produits utilisez-vous ?',
    },
    answer: {
      en: 'We understand this concern and take hair health very seriously. Our color specialists use professional ammonia-free and low-damage formulas that protect hair integrity while delivering vibrant, long-lasting color. Every coloring session includes a detailed consultation, a strand test when needed, and a post-color treatment to lock in color, moisture, and shine. We also offer toner and gloss treatments for those who want subtle enhancement without the commitment of full color.',
      fr: 'Nous comprenons cette préoccupation et prenons la santé de vos cheveux très au sérieux. Nos spécialistes de la couleur utilisent des formules professionnelles sans ammoniaque et à faible dommage qui protègent l\'intégrité des cheveux tout en offrant une couleur vibrante et durable. Chaque séance de coloration comprend une consultation détaillée, un test de mèche si nécessaire, et un soin post-coloration pour fixer la couleur, l\'hydratation et la brillance. Nous proposons également des soins tonifiants et gloss pour ceux qui souhaitent un embellissement subtil sans l\'engagement d\'une coloration complète.',
    },
  },
  {
    id: 'hair-03',
    category: { en: 'Hair Services', fr: 'Services Capillaires' },
    question: {
      en: 'How long do braids and protective styles last, and how should I maintain them?',
      fr: 'Combien de temps durent les tresses et coiffures protectrices, et comment les entretenir ?',
    },
    answer: {
      en: 'Most protective styles like box braids, twists, and crochet braids last 4 to 8 weeks with proper care, while cornrows typically last 2 to 4 weeks. To keep them looking fresh, we recommend wrapping your hair with a silk or satin scarf at night, keeping your scalp moisturized with a light oil, and avoiding excessive manipulation. For locs, regular retwisting every 4 to 6 weeks keeps them neat and healthy. Our braiding specialists will give you personalized aftercare tips at the end of your session.',
      fr: 'La plupart des coiffures protectrices comme les box braids, les twists et les crochet braids durent de 4 à 8 semaines avec un bon entretien, tandis que les cornrows durent généralement de 2 à 4 semaines. Pour les garder impeccables, nous recommandons d\'envelopper vos cheveux avec un foulard en soie ou satin la nuit, de garder votre cuir chevelu hydraté avec une huile légère et d\'éviter les manipulations excessives. Pour les locks, un retordage régulier toutes les 4 à 6 semaines les maintient soignés et en bonne santé. Nos spécialistes du tressage vous donneront des conseils d\'entretien personnalisés à la fin de votre séance.',
    },
  },
  {
    id: 'hair-04',
    category: { en: 'Hair Services', fr: 'Services Capillaires' },
    question: {
      en: 'How long does a braiding session take? Should I come with my hair washed?',
      fr: 'Combien de temps dure une séance de tressage ? Dois-je venir les cheveux lavés ?',
    },
    answer: {
      en: 'Braiding duration varies by style: simple cornrows take about 1 hour, feed-in cornrows around 2 hours, and more intricate styles like box braids or weave installations can take 3 to 5 hours. We recommend coming with clean, detangled hair for the best results — freshly washed and conditioned hair is easier to work with and helps the style last longer. If you\'d like, we can also wash and prep your hair on-site for an additional fee.',
      fr: 'La durée du tressage varie selon le style : les cornrows simples prennent environ 1 heure, les cornrows avec rajouts environ 2 heures, et les styles plus élaborés comme les box braids ou les tissages peuvent prendre de 3 à 5 heures. Nous recommandons de venir avec des cheveux propres et démêlés pour de meilleurs résultats — des cheveux fraîchement lavés et conditionnés sont plus faciles à travailler et aident le style à durer plus longtemps. Si vous le souhaitez, nous pouvons aussi laver et préparer vos cheveux sur place moyennant un supplément.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 5. SHAVING & GROOMING
  // ═══════════════════════════════════════════════════════
  {
    id: 'grm-01',
    category: { en: 'Shaving & Grooming', fr: 'Rasage & Soins' },
    question: {
      en: 'I have sensitive skin and often get razor bumps. Can you still give me a good shave?',
      fr: 'J\'ai la peau sensible et j\'ai souvent des boutons de rasage. Pouvez-vous quand même me faire un bon rasage ?',
    },
    answer: {
      en: 'Absolutely. Razor bumps (pseudofolliculitis barbae) are a very common concern, especially for men with curly or coarse hair textures. Our barbers are expertly trained in techniques that minimize irritation — including proper pre-shave preparation with hot towels and premium oils, shaving with the grain using sharp straight razors, and finishing with soothing aftershave balms. Our Royal Shave Experience is specifically designed to give you the cleanest, most comfortable shave possible while caring for sensitive skin.',
      fr: 'Absolument. Les boutons de rasage (pseudofolliculite de la barbe) sont une préoccupation très courante, surtout chez les hommes aux cheveux bouclés ou épais. Nos barbiers sont spécialement formés aux techniques qui minimisent l\'irritation — y compris la préparation pré-rasage avec serviettes chaudes et huiles premium, le rasage dans le sens du poil avec des rasoirs droits bien aiguisés, et la finition avec des baumes après-rasage apaisants. Notre Expérience Rasage Royal est spécifiquement conçue pour vous offrir le rasage le plus net et le plus confortable possible tout en prenant soin des peaux sensibles.',
    },
  },
  {
    id: 'grm-02',
    category: { en: 'Shaving & Grooming', fr: 'Rasage & Soins' },
    question: {
      en: 'What is the difference between a regular shave and the Royal Shave Experience?',
      fr: 'Quelle est la différence entre un rasage ordinaire et l\'Expérience Rasage Royal ?',
    },
    answer: {
      en: 'Our standard shave services — lineup, beard trim, and hot towel shave — are excellent and deliver professional results. The Royal Shave Experience (XAF 8,000, 60 minutes) is our premium ritual that elevates every step: it includes a hot towel wrap, facial steam to open pores, a meticulous straight razor shave, a soothing face massage, and a premium aftershave balm application. It\'s the ultimate treat for any gentleman who wants to feel truly pampered.',
      fr: 'Nos services de rasage standard — contours, taille de barbe et rasage serviette chaude — sont excellents et offrent des résultats professionnels. L\'Expérience Rasage Royal (XAF 8 000, 60 minutes) est notre rituel premium qui sublime chaque étape : il comprend un enveloppement à la serviette chaude, une vapeur faciale pour ouvrir les pores, un rasage méticuleux au coupe-chou, un massage facial apaisant et l\'application d\'un baume après-rasage premium. C\'est le soin ultime pour tout gentleman qui souhaite se sentir véritablement choyé.',
    },
  },
  {
    id: 'grm-03',
    category: { en: 'Shaving & Grooming', fr: 'Rasage & Soins' },
    question: {
      en: 'How should I care for my beard between grooming appointments?',
      fr: 'Comment dois-je entretenir ma barbe entre les rendez-vous de soin ?',
    },
    answer: {
      en: 'Great beards need daily attention! We recommend washing your beard 2–3 times per week with a gentle beard wash, applying beard oil daily to keep the hair soft and the skin underneath moisturized, and brushing with a boar bristle brush to distribute oils evenly and train the hair direction. Avoid picking at ingrown hairs and resist the urge to over-trim between professional appointments. We also carry premium beard care products in our shop if you need recommendations.',
      fr: 'Une belle barbe nécessite une attention quotidienne ! Nous recommandons de laver votre barbe 2 à 3 fois par semaine avec un nettoyant doux pour barbe, d\'appliquer quotidiennement de l\'huile à barbe pour garder le poil souple et la peau en dessous hydratée, et de brosser avec une brosse en poils de sanglier pour répartir les huiles uniformément et discipliner la direction du poil. Évitez de gratter les poils incarnés et résistez à l\'envie de trop tailler entre les rendez-vous professionnels. Nous proposons également des produits d\'entretien de barbe premium dans notre boutique si vous avez besoin de recommandations.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 6. NAIL CARE
  // ═══════════════════════════════════════════════════════
  {
    id: 'nls-01',
    category: { en: 'Nail Care', fr: 'Soins des Ongles' },
    question: {
      en: 'What is the difference between a classic manicure and a gel manicure?',
      fr: 'Quelle est la différence entre une manucure classique et une manucure gel ?',
    },
    answer: {
      en: 'A classic manicure includes nail shaping, cuticle care, a hand massage, and a coat of regular polish — it\'s perfect for a quick refresh and typically lasts 5 to 7 days. A gel manicure uses a special gel polish that\'s cured under LED light, giving you a high-shine, chip-resistant finish that lasts 2 to 3 weeks. Both options are wonderful; it simply depends on how long you want your manicure to last and your lifestyle. Our technicians will guide you through the best choice.',
      fr: 'Une manucure classique comprend le limage des ongles, le soin des cuticules, un massage des mains et une couche de vernis ordinaire — c\'est parfait pour un rafraîchissement rapide et dure généralement 5 à 7 jours. Une manucure gel utilise un vernis gel spécial durci sous lumière LED, offrant une finition ultra-brillante et résistante aux éclats qui dure 2 à 3 semaines. Les deux options sont excellentes ; tout dépend de la durée souhaitée et de votre mode de vie. Nos techniciennes vous guideront vers le meilleur choix.',
    },
  },
  {
    id: 'nls-02',
    category: { en: 'Nail Care', fr: 'Soins des Ongles' },
    question: {
      en: 'Can gel or acrylic nails damage my natural nails?',
      fr: 'Le gel ou l\'acrylique peuvent-ils abîmer mes ongles naturels ?',
    },
    answer: {
      en: 'When applied and removed correctly by a trained technician, gel and acrylic nails should not cause lasting damage to your natural nails. The key is proper application and — most importantly — professional removal. Never peel or force off gel or acrylic nails at home, as this can strip layers of your natural nail. At Ultimate Beauty Spa, our technicians follow careful removal protocols and always prioritize the health of your natural nails.',
      fr: 'Lorsqu\'ils sont appliqués et retirés correctement par une technicienne formée, le gel et l\'acrylique ne devraient pas causer de dommages durables à vos ongles naturels. La clé est une application soignée et — surtout — un retrait professionnel. Ne décollez ou n\'arrachez jamais le gel ou l\'acrylique à la maison, car cela peut arracher des couches de votre ongle naturel. Chez Ultimate Beauty Spa, nos techniciennes suivent des protocoles de retrait rigoureux et donnent toujours la priorité à la santé de vos ongles naturels.',
    },
  },
  {
    id: 'nls-03',
    category: { en: 'Nail Care', fr: 'Soins des Ongles' },
    question: {
      en: 'Do you offer nail services for men too?',
      fr: 'Proposez-vous aussi des soins des ongles pour les hommes ?',
    },
    answer: {
      en: 'Yes! Nail care isn\'t just for women. More and more men are discovering the benefits of a professional manicure and pedicure — clean, well-groomed nails make a strong impression in both personal and professional settings. Our classic manicure and pedicure services are popular with male clients and include nail trimming, cuticle care, buffing, and a relaxing hand or foot massage. No polish required unless you want it!',
      fr: 'Oui ! Les soins des ongles ne sont pas réservés aux femmes. De plus en plus d\'hommes découvrent les avantages d\'une manucure et pédicure professionnelles — des ongles propres et bien entretenus font une forte impression dans les contextes personnels et professionnels. Nos services de manucure et pédicure classiques sont populaires auprès des clients masculins et comprennent la coupe des ongles, le soin des cuticules, le polissage et un massage relaxant des mains ou des pieds. Pas de vernis requis, sauf si vous le souhaitez !',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 7. WET SPA & HYDROTHERAPY
  // ═══════════════════════════════════════════════════════
  {
    id: 'ws-01',
    category: { en: 'Wet Spa & Hydrotherapy', fr: 'Spa Humide & Hydrothérapie' },
    question: {
      en: 'What are the benefits of the jacuzzi and hammam, and who should try them?',
      fr: 'Quels sont les bienfaits du jacuzzi et du hammam, et à qui s\'adressent-ils ?',
    },
    answer: {
      en: 'Our jacuzzi bath uses warm, bubbling water to ease sore muscles, improve circulation, reduce stress, and promote deep relaxation. The hammam (traditional steam bath) opens pores, detoxifies the skin, relieves respiratory congestion, and leaves you feeling deeply cleansed and renewed. Both are ideal for anyone looking to decompress, relieve muscle tension, or simply indulge in a wellness ritual. They\'re a wonderful complement before a massage or facial for enhanced results.',
      fr: 'Notre bain jacuzzi utilise de l\'eau chaude bouillonnante pour soulager les muscles endoloris, améliorer la circulation, réduire le stress et favoriser une relaxation profonde. Le hammam (bain de vapeur traditionnel) ouvre les pores, détoxifie la peau, soulage la congestion respiratoire et vous laisse un sentiment de propreté et de renouveau profonds. Les deux sont idéaux pour toute personne souhaitant décompresser, soulager les tensions musculaires ou simplement profiter d\'un rituel de bien-être. Ils sont un merveilleux complément avant un massage ou un soin du visage pour des résultats amplifiés.',
    },
  },
  {
    id: 'ws-02',
    category: { en: 'Wet Spa & Hydrotherapy', fr: 'Spa Humide & Hydrothérapie' },
    question: {
      en: 'What is sleep therapy, and how does it work?',
      fr: 'Qu\'est-ce que la thérapie du sommeil, et comment ça fonctionne ?',
    },
    answer: {
      en: 'Our sleep therapy is a deeply calming experience designed to reset your body and mind. Combining a tranquil environment, soft lighting, soothing sounds, and gentle aromatherapy techniques, this treatment guides you into a state of profound rest — similar to a meditative deep sleep. It\'s ideal for people dealing with stress, insomnia, or mental fatigue. Many clients describe it as one of the most restorative experiences they\'ve ever had. Sessions are available in 60 or 90-minute durations.',
      fr: 'Notre thérapie du sommeil est une expérience profondément apaisante conçue pour réinitialiser votre corps et votre esprit. Combinant un environnement tranquille, un éclairage doux, des sons apaisants et des techniques douces d\'aromathérapie, ce traitement vous guide vers un état de repos profond — semblable à un sommeil méditatif profond. C\'est idéal pour les personnes souffrant de stress, d\'insomnie ou de fatigue mentale. Beaucoup de clients le décrivent comme l\'une des expériences les plus régénératrices qu\'ils aient jamais vécues. Les séances sont disponibles en durées de 60 ou 90 minutes.',
    },
  },
  {
    id: 'ws-03',
    category: { en: 'Wet Spa & Hydrotherapy', fr: 'Spa Humide & Hydrothérapie' },
    question: {
      en: 'Are there any health conditions that would prevent me from using the jacuzzi or hammam?',
      fr: 'Y a-t-il des conditions de santé qui m\'empêcheraient d\'utiliser le jacuzzi ou le hammam ?',
    },
    answer: {
      en: 'While hydrotherapy is beneficial for most people, we advise caution for individuals with uncontrolled high blood pressure, heart conditions, epilepsy, open wounds, or skin infections. Pregnant women should consult their doctor before using the jacuzzi or hammam. If you\'ve recently had surgery or have a chronic medical condition, please discuss it with our team during your consultation. We\'ll always recommend the safest and most enjoyable treatment option for you.',
      fr: 'Bien que l\'hydrothérapie soit bénéfique pour la plupart des gens, nous recommandons la prudence pour les personnes souffrant d\'hypertension non contrôlée, de maladies cardiaques, d\'épilepsie, de plaies ouvertes ou d\'infections cutanées. Les femmes enceintes doivent consulter leur médecin avant d\'utiliser le jacuzzi ou le hammam. Si vous avez récemment subi une chirurgie ou souffrez d\'une condition médicale chronique, veuillez en discuter avec notre équipe lors de votre consultation. Nous recommanderons toujours l\'option de traitement la plus sûre et la plus agréable pour vous.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 8. BOOKING & PRACTICAL
  // ═══════════════════════════════════════════════════════
  {
    id: 'bk-01',
    category: { en: 'Booking & Practical', fr: 'Réservation & Pratique' },
    question: {
      en: 'How far in advance should I book my appointment?',
      fr: 'Combien de temps à l\'avance dois-je réserver mon rendez-vous ?',
    },
    answer: {
      en: 'We recommend booking at least 24 to 48 hours in advance, especially for popular services like massage, facials, braiding, and wet spa sessions. For elaborate braiding styles (box braids, weaves) or group bookings, booking 3 to 5 days ahead is ideal to ensure availability. That said, we always do our best to accommodate same-day requests, so don\'t hesitate to call — you might get lucky!',
      fr: 'Nous recommandons de réserver au moins 24 à 48 heures à l\'avance, surtout pour les services populaires comme le massage, les soins du visage, le tressage et les séances de spa humide. Pour les styles de tressage élaborés (box braids, tissages) ou les réservations de groupe, réserver 3 à 5 jours à l\'avance est idéal pour garantir la disponibilité. Cela dit, nous faisons toujours de notre mieux pour accommoder les demandes du jour même, alors n\'hésitez pas à appeler — vous pourriez avoir de la chance !',
    },
  },
  {
    id: 'bk-02',
    category: { en: 'Booking & Practical', fr: 'Réservation & Pratique' },
    question: {
      en: 'What is your cancellation policy?',
      fr: 'Quelle est votre politique d\'annulation ?',
    },
    answer: {
      en: 'We kindly ask for at least 48 hours\' notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another client. Late cancellations or no-shows may be subject to a cancellation fee. We completely understand that life happens, so please contact us as soon as possible if your plans change — our team is always happy to help you find a new time that works.',
      fr: 'Nous vous demandons aimablement un préavis d\'au moins 48 heures si vous devez annuler ou reprogrammer votre rendez-vous. Cela nous permet de proposer le créneau à un autre client. Les annulations tardives ou les absences sans préavis peuvent entraîner des frais d\'annulation. Nous comprenons parfaitement que des imprévus arrivent, alors contactez-nous dès que possible si vos plans changent — notre équipe sera toujours ravie de vous aider à trouver un nouveau créneau qui vous convient.',
    },
  },
  {
    id: 'bk-03',
    category: { en: 'Booking & Practical', fr: 'Réservation & Pratique' },
    question: {
      en: 'Can I book for a group — like a bridal party, birthday, or friends\' outing?',
      fr: 'Puis-je réserver pour un groupe — comme un enterrement de vie de jeune fille, un anniversaire ou une sortie entre amis ?',
    },
    answer: {
      en: 'Yes! We love hosting group celebrations. Whether it\'s a bridal party, birthday spa day, corporate team outing, or a fun day with friends, we can create a customized group experience with multiple services happening simultaneously. Group bookings are available on request — simply contact us with your group size, preferred services, and date, and we\'ll put together a special package for you.',
      fr: 'Oui ! Nous adorons accueillir les célébrations en groupe. Qu\'il s\'agisse d\'un enterrement de vie de jeune fille, d\'une journée spa d\'anniversaire, d\'une sortie d\'équipe en entreprise ou d\'une journée fun entre amis, nous pouvons créer une expérience de groupe personnalisée avec plusieurs services simultanés. Les réservations de groupe sont disponibles sur demande — contactez-nous simplement avec la taille de votre groupe, les services souhaités et la date, et nous préparerons un forfait spécial pour vous.',
    },
  },
  {
    id: 'bk-04',
    category: { en: 'Booking & Practical', fr: 'Réservation & Pratique' },
    question: {
      en: 'Do you offer gift cards or gift vouchers?',
      fr: 'Proposez-vous des cartes cadeaux ou des bons cadeaux ?',
    },
    answer: {
      en: 'A spa experience makes one of the best gifts! We offer gift vouchers that can be redeemed for any of our services or products. They\'re perfect for birthdays, anniversaries, holidays, or just to show someone you care. Contact us in person at the spa or by phone to purchase a gift voucher in any amount you choose.',
      fr: 'Une expérience spa est l\'un des plus beaux cadeaux ! Nous proposons des bons cadeaux échangeables contre n\'importe lequel de nos services ou produits. Ils sont parfaits pour les anniversaires, les fêtes ou simplement pour montrer à quelqu\'un que vous tenez à lui. Contactez-nous en personne au spa ou par téléphone pour acheter un bon cadeau du montant de votre choix.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 9. PRICING & PAYMENT
  // ═══════════════════════════════════════════════════════
  {
    id: 'pr-01',
    category: { en: 'Pricing & Payment', fr: 'Tarifs & Paiement' },
    question: {
      en: 'What are your prices, and are there any hidden fees?',
      fr: 'Quels sont vos tarifs, et y a-t-il des frais cachés ?',
    },
    answer: {
      en: 'Transparency is important to us. All our prices are listed clearly on our website and in the spa, in XAF (Central African CFA Franc). There are no hidden fees — the price you see is the price you pay. Prices start from XAF 1,500 for a kids\' haircut and go up to XAF 40,000 for a 90-minute hot stone massage. Our team will always confirm the cost of your chosen service before beginning, so there are never surprises at checkout.',
      fr: 'La transparence est importante pour nous. Tous nos tarifs sont affichés clairement sur notre site web et dans le spa, en XAF (Franc CFA d\'Afrique Centrale). Il n\'y a aucun frais caché — le prix affiché est le prix que vous payez. Les prix commencent à partir de XAF 1 500 pour une coupe enfant et vont jusqu\'à XAF 40 000 pour un massage aux pierres chaudes de 90 minutes. Notre équipe confirmera toujours le coût du service choisi avant de commencer, pour qu\'il n\'y ait jamais de surprise à la caisse.',
    },
  },
  {
    id: 'pr-02',
    category: { en: 'Pricing & Payment', fr: 'Tarifs & Paiement' },
    question: {
      en: 'What payment methods do you accept?',
      fr: 'Quels modes de paiement acceptez-vous ?',
    },
    answer: {
      en: 'We accept cash, Orange Money, MTN Mobile Money, and other major payment methods for your convenience. All prices are listed in XAF. Whether you prefer traditional cash or the ease of mobile money, we\'ve got you covered. Our team will be happy to assist with payment at the end of your visit.',
      fr: 'Nous acceptons les espèces, Orange Money, MTN Mobile Money et d\'autres modes de paiement courants pour votre commodité. Tous les prix sont en XAF. Que vous préfériez les espèces traditionnelles ou la facilité du mobile money, nous avons ce qu\'il vous faut. Notre équipe sera ravie de vous assister pour le paiement à la fin de votre visite.',
    },
  },

  // ═══════════════════════════════════════════════════════
  // 10. SAFETY & HYGIENE
  // ═══════════════════════════════════════════════════════
  {
    id: 'sf-01',
    category: { en: 'Safety & Hygiene', fr: 'Sécurité & Hygiène' },
    question: {
      en: 'How do you ensure hygiene and cleanliness in your spa?',
      fr: 'Comment assurez-vous l\'hygiène et la propreté dans votre spa ?',
    },
    answer: {
      en: 'Hygiene is non-negotiable at Ultimate Beauty Spa. All metal tools (scissors, clippers, nail instruments) are sterilized between every client using hospital-grade sterilization methods. Disposable items like files and buffers are single-use. Our treatment rooms, jacuzzi, and hammam are thoroughly cleaned and sanitized between sessions. Fresh linens, towels, and capes are provided for each client. We follow strict hygiene protocols so you can relax with complete peace of mind.',
      fr: 'L\'hygiène est non négociable chez Ultimate Beauty Spa. Tous les outils métalliques (ciseaux, tondeuses, instruments de manucure) sont stérilisés entre chaque client selon des méthodes de stérilisation de grade hospitalier. Les articles jetables comme les limes et les polissoirs sont à usage unique. Nos salles de soins, le jacuzzi et le hammam sont soigneusement nettoyés et désinfectés entre les séances. Du linge frais, des serviettes et des capes sont fournis pour chaque client. Nous suivons des protocoles d\'hygiène stricts pour que vous puissiez vous détendre en toute tranquillité.',
    },
  },
  {
    id: 'sf-02',
    category: { en: 'Safety & Hygiene', fr: 'Sécurité & Hygiène' },
    question: {
      en: 'What if I have allergies or a skin condition? Should I inform you before my treatment?',
      fr: 'Et si j\'ai des allergies ou une condition cutanée ? Dois-je vous en informer avant mon soin ?',
    },
    answer: {
      en: 'Yes, please! We ask all clients to share any allergies, skin conditions, health concerns, or medications during the pre-treatment consultation. This helps us select the safest products and techniques for you. Whether it\'s a sensitivity to certain essential oils, a latex allergy, eczema, psoriasis, or any other concern — the more we know, the better we can care for you. Your safety and comfort are always our first priority.',
      fr: 'Oui, s\'il vous plaît ! Nous demandons à tous les clients de partager toute allergie, condition cutanée, préoccupation de santé ou médicament lors de la consultation pré-traitement. Cela nous aide à choisir les produits et techniques les plus sûrs pour vous. Qu\'il s\'agisse d\'une sensibilité à certaines huiles essentielles, d\'une allergie au latex, d\'eczéma, de psoriasis ou de toute autre préoccupation — plus nous en savons, mieux nous pouvons prendre soin de vous. Votre sécurité et votre confort sont toujours notre priorité absolue.',
    },
  },
  {
    id: 'sf-03',
    category: { en: 'Safety & Hygiene', fr: 'Sécurité & Hygiène' },
    question: {
      en: 'Are your products safe for sensitive or dark skin tones?',
      fr: 'Vos produits sont-ils adaptés aux peaux sensibles ou aux peaux foncées ?',
    },
    answer: {
      en: 'Absolutely. We\'ve carefully selected our product range to work beautifully across all skin tones and types, including melanin-rich skin. Our facial treatments, for instance, use professional-grade formulations that are effective yet gentle, and our estheticians are trained in techniques appropriate for darker skin tones — including how to address hyperpigmentation, keloid-prone skin, and specific textural concerns. During your consultation, we\'ll create a protocol tailored precisely to your skin.',
      fr: 'Absolument. Nous avons soigneusement sélectionné notre gamme de produits pour qu\'elle fonctionne parfaitement sur tous les teints et types de peau, y compris les peaux riches en mélanine. Nos soins du visage, par exemple, utilisent des formulations professionnelles efficaces mais douces, et nos esthéticiennes sont formées aux techniques appropriées pour les peaux foncées — y compris comment traiter l\'hyperpigmentation, les peaux sujettes aux chéloïdes et les préoccupations texturales spécifiques. Lors de votre consultation, nous créerons un protocole adapté précisément à votre peau.',
    },
  },
];

// ── Helper functions ──

export function getFAQByCategory(categoryId: string): FAQItem[] {
  const categoryMap: Record<string, string> = {
    general: 'General Spa Questions',
    massage: 'Massage Therapy',
    facial: 'Facials & Skincare',
    hair: 'Hair Services',
    grooming: 'Shaving & Grooming',
    nails: 'Nail Care',
    wetspa: 'Wet Spa & Hydrotherapy',
    booking: 'Booking & Practical',
    pricing: 'Pricing & Payment',
    safety: 'Safety & Hygiene',
  };
  const label = categoryMap[categoryId];
  return faq.filter(item => item.category.en === label);
}

export function getFAQById(id: string): FAQItem | undefined {
  return faq.find(item => item.id === id);
}

export function getAllFAQForLang(lang: 'en' | 'fr') {
  return faq.map(item => ({
    id: item.id,
    category: item.category[lang],
    question: item.question[lang],
    answer: item.answer[lang],
  }));
}

export function getFAQForSchema() {
  return faq.map(item => ({
    '@type': 'Question' as const,
    name: item.question.en,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: item.answer.en,
    },
  }));
}
