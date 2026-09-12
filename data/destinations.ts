import type { Destination } from "@/lib/types";

/**
 * Demo destination catalogue (isDemo: true for every entry).
 * Content is illustrative for the concept presentation and is shown
 * with a subtle "Concept" indicator. The agency confirms/replaces it.
 */
export const destinations: Destination[] = [
  {
    slug: "istanbul",
    name: { fr: "Istanbul", ar: "إسطنبول" },
    country: { fr: "Turquie", ar: "تركيا" },
    region: "turquie",
    image: "/images/destinations/istanbul.jpg",
    imageAlt: {
      fr: "La Mosquée Bleue d'Istanbul au-dessus du Bosphore au coucher du soleil",
      ar: "المسجد الأزرق في إسطنبول فوق البوسفور عند الغروب",
    },
    tagline: {
      fr: "Entre deux continents, mille trésors.",
      ar: "بين قارّتين، ألف كنز.",
    },
    description: {
      fr: "Istanbul mêle mosquées somptueuses, basars historiques et quais du Bosphore : la ville la plus riche en patrimoine de son côté européen comme de son côté asiatique.",
      ar: "تمزج إسطنبول بين الجوامع الباذخة والأسواق التاريخية وأضفة البوسفور: أغنى مدينة تراثًا، من شطرها الأوروبي إلى شطرها الآسيوي.",
    },
    idealFor: {
      fr: "City break · Culture · Gastronomie",
      ar: "نهاية أسبوع · ثقافة · مأكولات",
    },
    whyVisit: [
      {
        title: { fr: "Un pont entre deux mondes", ar: "جسر بين عالمين" },
        text: {
          fr: "Traversées en ferry entre les deux rives et vues inoubliables sur le détroit.",
          ar: "عبّارات بين الشاطئين ومناظر لا تُنسى على المضيق.",
        },
      },
      {
        title: { fr: "Un patrimoine monumental", ar: "تراث ضخم" },
        text: {
          fr: "Sainte-Sophie, la Mosquée Bleue, le palais de Topkapı : un musée à ciel ouvert.",
          ar: "أيا صوفيا، المسجد الأزرق، قصر توبكابي: متحف في الهواء الطلق.",
        },
      },
      {
        title: { fr: "La douceur de vivre", ar: "دعة العيش" },
        text: {
          fr: "Thés fumants, cuisine du Bosphore et marchés animés à chaque quartier.",
          ar: "شاي دافئ، مطبخ البوسفور وأسواق حيوية في كل حي.",
        },
      },
    ],
    bestPeriods: {
      fr: "Avril à juin · septembre à novembre",
      ar: "أبريل إلى جوان · شتنبر إلى نونبر",
    },
    toDiscover: [
      { fr: "Sainte-Sophie", ar: "أيا صوفيا" },
      { fr: "La Mosquée Bleue", ar: "المسجد الأزرق" },
      { fr: "Le Grand Bazar", ar: "البازار الكبير" },
      { fr: "Les quais du Bosphore", ar: "أضفة البوسفور" },
      { fr: "Le palais de Topkapı", ar: "قصر توبكابي" },
    ],
    styles: ["citybreak", "couple", "famille"],
    isDemo: true,
  },
  {
    slug: "antalya",
    name: { fr: "Antalya", ar: "أنطاليا" },
    country: { fr: "Turquie", ar: "تركيا" },
    region: "turquie",
    image: "/images/destinations/antalya.jpg",
    imageAlt: {
      fr: "Côte turquoise de la Riviera turque près d'Antalya",
      ar: "الساحل الفيروزي لريفيرا تركيا قرب أنطاليا",
    },
    tagline: {
      fr: "La Riviera turque au soleil.",
      ar: "ريفيرا تركيا تحت الشمس.",
    },
    description: {
      fr: "Plages de sable fin, mer turquoise et sites antiques au pied des montagnes : la côte méditerranéenne de la Turquie conjugue détente et découverte.",
      ar: "شواطئ رملية ناعمة، بحر فيروزي، ومواقع أثرية عند سفح الجبال: ساحل تركيا المتوسطي يجمع بين الاسترخاء والاكتشاف.",
    },
    idealFor: { fr: "Plage · Famille · Détente", ar: "شاطئ · عائلة · استرخاء" },
    whyVisit: [
      {
        title: { fr: "Des plages pour tous", ar: "شواطئ للجميع" },
        text: {
          fr: "Lara, Konyaaltı ou les criques sauvages : il y en a pour tous les goûts.",
          ar: "لارا، كونيالتى أو الخلجان النائية: لكل ذوق ما يناسبه.",
        },
      },
      {
        title: { fr: "Histoire et nature", ar: "تاريخ وطبيعة" },
        text: {
          fr: "Termessos, Aspendos et les gorges de la région racontent des millénaires.",
          ar: "تركيموسو وأسبندوس والوديان تحكي آلاف السنين.",
        },
      },
      {
        title: { fr: "Détente en famille", ar: "استرخاء عائلي" },
        text: {
          fr: "Séjours balnéaires, activités pour enfants et croisières côtières.",
          ar: "مناظر بحرية، أنشطة للأطفال ورحلات ساحلية.",
        },
      },
    ],
    bestPeriods: { fr: "Mai à octobre", ar: "ماي إلى أكتوير" },
    toDiscover: [
      { fr: "Les plages de Lara", ar: "شاطئ لارا" },
      { fr: "La place du centre-ville", ar: "ساحة وسط المدينة" },
      { fr: "Les ruines d'Aspendos", ar: "أطلال أسبندوس" },
      { fr: "Les gorges de Köprülü", ar: "وديان كوبرولي" },
      { fr: "Les croisières méditerranéennes", ar: "الرحلات البحرية المتوسطية" },
    ],
    styles: ["plage", "famille", "sejour"],
    isDemo: true,
  },
  {
    slug: "paris",
    name: { fr: "Paris", ar: "باريس" },
    country: { fr: "France", ar: "فرنسا" },
    region: "europe",
    image: "/images/destinations/paris.jpg",
    imageAlt: {
      fr: "La Tour Eiffel à Paris au crépuscule",
      ar: "برج إيفيل في باريس عند الغسق",
    },
    tagline: {
      fr: "L'élégance à l'état pur.",
      ar: "الأناقة في أبهى صورها.",
    },
    description: {
      fr: "Musées de légende, cafés historiques et la Tour Eiffel au couchant : Paris reste la destination urbaine de référence.",
      ar: "متاحف أسطورية، مقاهٍ تاريخية وبرج إيفيل عند الغروب: باريس تظل الوجهة الحضرية المرجعية.",
    },
    idealFor: {
      fr: "City break · Culture · Romantique",
      ar: "نهاية أسبوع · ثقافة · رومانسية",
    },
    whyVisit: [
      {
        title: { fr: "L'art à chaque coin de rue", ar: "الفن في كل شارع" },
        text: {
          fr: "Musée d'Orsay, Louvre et centres d'art : une offre culturelle inégalée.",
          ar: "اللوفر، أورسي ومراكز الفن: عرض ثقافي لا مثيل له.",
        },
      },
      {
        title: { fr: "L'art de vivre français", ar: "فن الحياة الفرنسية" },
        text: {
          fr: "Cafés de terrasse, pâtisseries et marchés : déguster Paris autant que le voir.",
          ar: "مقاهٍ خارجية، حلويات وأسواق: تذوّق باريس كما تراها.",
        },
      },
      {
        title: { fr: "Des sorties inoubliables", ar: "خرجات لا تُنسى" },
        text: {
          fr: "Champs-Élysées, Montmartre, croisières sur la Seine : chaque quartier a son charme.",
          ar: "شانزيليزيه، مونتمارتر، ورحلات على السين: لكل حي سحره.",
        },
      },
    ],
    bestPeriods: {
      fr: "Avril à juin · septembre à octobre",
      ar: "أبريل إلى جوان · شتنبر إلى أكتوير",
    },
    toDiscover: [
      { fr: "La Tour Eiffel", ar: "برج إيفيل" },
      { fr: "Le musée du Louvre", ar: "متحف اللوفر" },
      { fr: "Montmartre", ar: "مونتمارتر" },
      { fr: "Les quais de la Seine", ar: "ضفاف السين" },
      { fr: "Le quartier Latin", ar: "الحي اللاتيني" },
    ],
    styles: ["citybreak", "couple"],
    isDemo: true,
  },
  {
    slug: "rome",
    name: { fr: "Rome", ar: "روما" },
    country: { fr: "Italie", ar: "إيطاليا" },
    region: "europe",
    image: "/images/destinations/rome.jpg",
    imageAlt: {
      fr: "Le Colisée de Rome dans la lumière dorée du soir",
      ar: "الكولوسيوم في روما تحت ضوء الذهب المسائي",
    },
    tagline: {
      fr: "Un voyage dans le temps.",
      ar: "رحلة عبر الزمن.",
    },
    description: {
      fr: "Colisée, fontaines baroques et cuisine méditerranéenne : Rome déborde d'histoire et de saveurs.",
      ar: "الكولوسيوم، النافورات الباروكية والمطبخ المتوسطي: روما تفيض بالتاريخ والنكهات.",
    },
    idealFor: {
      fr: "Culture · Famille · City break",
      ar: "ثقافة · عائلة · نهاية أسبوع",
    },
    whyVisit: [
      {
        title: { fr: "Deux millénaires en plein air", ar: "ألفا سنة في الهواء الطلق" },
        text: {
          fr: "Un site antique au coin de chaque rue, du Forum au Vatican.",
          ar: "موقع أثري في زاوية كل شارع، من форум إلى الفاتيكان.",
        },
      },
      {
        title: { fr: "La dolce vita culinaire", ar: "الحياة اللذيذة" },
        text: {
          fr: "Pâtes fraîches, gelato et café d'angle : l'Italie se déguste.",
          ar: "معكرونة طازجة، جيلاتين وقهوة على الرصيف: إيطاليا تُتذوّق.",
        },
      },
      {
        title: { fr: "Rythme lent, grands moments", ar: "إيقاع هادئ، لحظات كبرى" },
        text: {
          fr: "Piazzas, jardins et musées pontificaux : on flâne sans hâte.",
          ar: "ساحات، حدائق ومتاحف بابوية: تتجوّل دون عجلة.",
        },
      },
    ],
    bestPeriods: {
      fr: "Avril à mai · septembre à octobre",
      ar: "أبريل إلى ماي · شتنبر إلى أكتوير",
    },
    toDiscover: [
      { fr: "Le Colisée", ar: "الكولوسيوم" },
      { fr: "Le Vatican", ar: "الفاتيكان" },
      { fr: "La place Navone", ar: "ساحة نافونا" },
      { fr: "Le Panthéon", ar: "البانثيون" },
      { fr: "Le Trastevere", ar: "تراستيفيري" },
    ],
    styles: ["citybreak", "famille", "couple"],
    isDemo: true,
  },
  {
    slug: "barcelone",
    name: { fr: "Barcelone", ar: "برشلونة" },
    country: { fr: "Espagne", ar: "إسبانيا" },
    region: "europe",
    image: "/images/destinations/barcelona.jpg",
    imageAlt: {
      fr: "La Sagrada Família à Barcelone sous un ciel bleu",
      ar: "كنيسة العائلة المقدسة في برشلونة تحت سماء زرقاء",
    },
    tagline: {
      fr: "Gaudí, mer et vie catalane.",
      ar: "غويدي، البحر وحياة كتالونيا.",
    },
    description: {
      fr: "Architectures oniriques, plages en ville et gastronomie catalane : Barcelone surprend à chaque coin de rue.",
      ar: "معمار خيالي، شواطئ وسط المدينة ومطبخ كتالوني: برشلونة تفاجئك في كل زاوية.",
    },
    idealFor: {
      fr: "Plage · Culture · Couple",
      ar: "شاطئ · ثقافة · زوجين",
    },
    whyVisit: [
      {
        title: { fr: "L'art de Gaudí", ar: "فن غاودي" },
        text: {
          fr: "Sagrada Família, Park Güell, Casa Batlló : un style unique au monde.",
          ar: "كنيسة العائلة المقدسة، بارك غويل، منزل باتلو: أسلوب فريد في العالم.",
        },
      },
      {
        title: { fr: "La ville et la mer", ar: "المدينة والبحر" },
        text: {
          fr: "Plages urbaines, port et longues promenades en bord de mer.",
          ar: "شواطئ حضرية، ميناء، ونزهات طويلة على البحر.",
        },
      },
      {
        title: { fr: "Vivre la Catalogne", ar: "عِش الكتالونية" },
        text: {
          fr: "Marchés colorés, tapas et soirées musicales.",
          ar: "أسواق ملونة، تابتا، وأمسيات موسيقية.",
        },
      },
    ],
    bestPeriods: { fr: "Mai à juin · septembre", ar: "ماي إلى جوان · شتنبر" },
    toDiscover: [
      { fr: "La Sagrada Família", ar: "كنيسة العائلة المقدسة" },
      { fr: "Le Park Güell", ar: "بارك غويل" },
      { fr: "Le marché de la Boqueria", ar: "سوق لا بوكريّا" },
      { fr: "Les Ramblas", ar: "شارع رامبلاس" },
      { fr: "Le port de Barcelone", ar: "ميناء برشلونة" },
    ],
    styles: ["citybreak", "plage", "couple"],
    isDemo: true,
  },
  {
    slug: "munich",
    name: { fr: "Munich", ar: "ميونخ" },
    country: { fr: "Allemagne", ar: "ألمانيا" },
    region: "europe",
    image: "/images/destinations/munich.jpg",
    imageAlt: {
      fr: "La place Marienplatz à Munich et son hôtel de ville",
      ar: "ساحة ماريين بلاس في ميونخ وبلديتها",
    },
    tagline: {
      fr: "La Bavière en un séjour.",
      ar: "البافاريا في إقامة واحدة.",
    },
    description: {
      fr: "Vieille ville pittoresque, châteaux de princes et gastronomie bavaroise : Munich est le porte-étendard de l'Allemagne.",
      ar: "مدينة عتيقة خلابة، قصور أمراء ومطبخ بافاري: ميونخ راية ألمانيا.",
    },
    idealFor: {
      fr: "Famille · Culture · Détente",
      ar: "عائلة · ثقافة · استرخاء",
    },
    whyVisit: [
      {
        title: { fr: "La place Marienplatz", ar: "ساحة ماريين بلاس" },
        text: {
          fr: "Glockenspiel, fontaines et ruelles piétonnes animées au cœur de la ville.",
          ar: "الجوكينسبيل، النوافير، وشوارع مشاة حيوية في قلب المدينة.",
        },
      },
      {
        title: { fr: "Les châteaux des Wittelsbach", ar: "قصور هيتزلشباخ" },
        text: {
          fr: "Neuschwanstein et ses forêts, à une heure de la ville.",
          ar: "نويشفانشتاين وغاباته على بعد ساعة من المدينة.",
        },
      },
      {
        title: { fr: "L'hospitalité bavaroise", ar: "كرم البافارية" },
        text: {
          fr: "Bières, bretzels et marchés de Noël légendaires.",
          ar: "بيرة، بريستل، وأسواق عيد ميلاد أسطورية.",
        },
      },
    ],
    bestPeriods: { fr: "Avril à octobre", ar: "أبريل إلى أكتوير" },
    toDiscover: [
      { fr: "Marienplatz", ar: "ماريين بلاس" },
      { fr: "Le château de Nymphenburg", ar: "قصر نيمفنبورغ" },
      { fr: "La Hofbräuhaus", ar: "هوفبرويهاوس" },
      { fr: "Le jardin anglais", ar: "الحديقة الإنجليزية" },
      { fr: "Neuschwanstein", ar: "نويشفانشتاين" },
    ],
    styles: ["famille", "sejour", "aventure"],
    isDemo: true,
  },
  {
    slug: "athenes",
    name: { fr: "Athènes", ar: "أثينا" },
    country: { fr: "Grèce", ar: "اليونان" },
    region: "europe",
    image: "/images/destinations/athens.jpg",
    imageAlt: {
      fr: "L'Acropole d'Athènes et le Parthénon au soleil couchant",
      ar: "الأكروبوليس في أثينا والمبدّل عند الغروب",
    },
    tagline: {
      fr: "Là où tout a commencé.",
      ar: "حيث بدأ كل شيء.",
    },
    description: {
      fr: "Acropole majestueuse, Plaka animée et plages à une heure : Athènes est la porte idéale de la Grèce.",
      ar: "أكروبوليس مهيب، حي بلكا الحيوي وشواطئ على بعد ساعة: أثينا البوابة المثالية إلى اليونان.",
    },
    idealFor: {
      fr: "Culture · Famille · Plage",
      ar: "ثقافة · عائلة · شاطئ",
    },
    whyVisit: [
      {
        title: { fr: "L'Acropole en majesté", ar: "الأكروبوليس في أبهى صورها" },
        text: {
          fr: "Le Parthénon dominant la ville au soleil couchant.",
          ar: "المبدّل يهيمن على المدينة عند الغروب.",
        },
      },
      {
        title: { fr: "Le charme de la Plaka", ar: "سحر بلكا" },
        text: {
          fr: "Maisons en pierre, tavernes et ruelles pleines de vie.",
          ar: "بيوت حجرية، تافيرنا، وشوارع حيوية.",
        },
      },
      {
        title: { fr: "Les îles en ferry", ar: "الجزر بالقوارب" },
        text: {
          fr: "Santorin et Mykonos accessibles depuis le port du Pirée.",
          ar: "سانторинي وميكونوس عبر ميناء بيرايوس.",
        },
      },
    ],
    bestPeriods: {
      fr: "Avril à juin · septembre à octobre",
      ar: "أبريل إلى جوان · شتنبر إلى أكتوير",
    },
    toDiscover: [
      { fr: "L'Acropole", ar: "الأكروبوليس" },
      { fr: "La Plaka", ar: "حي بلكا" },
      { fr: "L'agora antique", ar: "الساحة القديمة" },
      { fr: "Le port du Pirée", ar: "ميناء بيرايوس" },
      { fr: "Les plages d'Alimos", ar: "شواطئ أليموس" },
    ],
    styles: ["citybreak", "plage", "famille"],
    isDemo: true,
  },
  {
    slug: "marrakech",
    name: { fr: "Marrakech", ar: "مراكش" },
    country: { fr: "Maroc", ar: "المغرب" },
    region: "afrique",
    image: "/images/destinations/marrakech.jpg",
    imageAlt: {
      fr: "Le minaret de la Koutoubia à Marrakech dans la lumière dorée",
      ar: "مئذنة الكتبية في مراكش تحت الضوء الذهبي",
    },
    tagline: {
      fr: "La perle rouge du Maghreb.",
      ar: "اللؤلؤة الحمراء في المغرب.",
    },
    description: {
      fr: "Médina aux mille trésors, riad aux patios fleuris et portes du désert : Marrakech est une expérience à part entière.",
      ar: "مدينة ذات ألف كنز، رياضات ذات فناء مزهر، وبوابات الصحراء: مراكش تجربة فريدة.",
    },
    idealFor: {
      fr: "Découverte · Détente · Couple",
      ar: "اكتشاف · استرخاء · زوجين",
    },
    whyVisit: [
      {
        title: { fr: "La médina, labyrinthe vivant", ar: "المدينة، متاهة حية" },
        text: {
          fr: "Souks, artisanat et la place Jemaa el-Fna au crépuscule.",
          ar: "الأسواق، الحرف اليدوية، وساحة جامع الفنا عند الغروب.",
        },
      },
      {
        title: { fr: "Les riad, maisons d'exception", ar: "الرياضات، بيوت استثنائية" },
        text: {
          fr: "Patios, fontaines et douceur de vivre au cœur de la ville.",
          ar: "فناء، نوافير، ودعة العيش وسط المدينة.",
        },
      },
      {
        title: { fr: "Porte du désert", ar: "بوابة الصحراء" },
        text: {
          fr: "Excursions vers l'Atlas et les oasis à proximité.",
          ar: "رحلات إلى الأطلس والواحات القريبة.",
        },
      },
    ],
    bestPeriods: {
      fr: "Mars à mai · septembre à novembre",
      ar: "مارس إلى ماي · شتنبر إلى نونبر",
    },
    toDiscover: [
      { fr: "La place Jemaa el-Fna", ar: "ساحة جامع الفنا" },
      { fr: "Le jardin Majorelle", ar: "حديقة ماجوريل" },
      { fr: "La médina et ses souks", ar: "المدينة والأسواق" },
      { fr: "Le palais Bahía", ar: "قصر الباهية" },
      { fr: "Les plaines de l'Ourika", ar: "سهول أوريكا" },
    ],
    styles: ["couple", "sejour", "aventure"],
    isDemo: true,
  },
  {
    slug: "le-caire",
    name: { fr: "Le Caire", ar: "القاهرة" },
    country: { fr: "Égypte", ar: "مصر" },
    region: "afrique",
    image: "/images/destinations/cairo.jpg",
    imageAlt: {
      fr: "Les pyramides de Gizeh et le Sphinx dans la lumière dorée",
      ar: "أهرامات الجيزة وأبو الهول تحت الضوء الذهبي",
    },
    tagline: {
      fr: "Le pays des pharaons.",
      ar: "بلد الفراعنة.",
    },
    description: {
      fr: "Pyramides millénaires, Nil majestueux et trésors du Caire pharaonique : le voyage le plus mythique du continent.",
      ar: "أهرامات ألفية، النيل المهيب، وثروات القاهرة الفرعونية: الرحلة الأسطورية للقارة.",
    },
    idealFor: {
      fr: "Découverte · Culture · Famille",
      ar: "اكتشاف · ثقافة · عائلة",
    },
    whyVisit: [
      {
        title: { fr: "Les pyramides de Gizeh", ar: "أهرامات الجيزة" },
        text: {
          fr: "Le monument le plus emblématique de l'Antiquité, avec le Sphinx en vedette.",
          ar: "أشهر معلم قديم، مع أبو الهول في المقدمة.",
        },
      },
      {
        title: { fr: "Le Nil, artère de vie", ar: "النيل، شريان الحياة" },
        text: {
          fr: "Croisières et villages riverains entre felouques et palmiers.",
          ar: "رحلات وقصبات على ضفاف النهر بين الفلوك والنخيل.",
        },
      },
      {
        title: { fr: "Le Caire, capitale vivante", ar: "القاهرة، عاصمة حيوية" },
        text: {
          fr: "Musées, souks et cuisine égyptienne généreuse.",
          ar: "متاحف، أسواق، ومطبخ مصري سخي.",
        },
      },
    ],
    bestPeriods: { fr: "Octobre à avril", ar: "أكتوير إلى أبريل" },
    toDiscover: [
      { fr: "Les pyramides de Gizeh", ar: "أهرامات الجيزة" },
      { fr: "Le Sphinx", ar: "أبو الهول" },
      { fr: "Le musée du Caire", ar: "متحف القاهرة" },
      { fr: "Le Nil et les felouques", ar: "النيل والفلاوك" },
      { fr: "Khan el-Khalili", ar: "خان الخليلي" },
    ],
    styles: ["aventure", "famille", "sejour"],
    isDemo: true,
  },
  {
    slug: "dubai",
    name: { fr: "Dubaï", ar: "دبي" },
    country: { fr: "Émirats arabes unis", ar: "الإمارات العربية المتحدة" },
    region: "moyen-orient",
    image: "/images/destinations/dubai.jpg",
    imageAlt: {
      fr: "La skyline de Dubaï avec le Burj Khalifa à l'heure bleue",
      ar: "أفق دبي وبرج خليفة في الساعة الزرقاء",
    },
    tagline: {
      fr: "L'avenir à hauteur d'homme.",
      ar: "المستقبل على مقاسك.",
    },
    description: {
      fr: "Désert, mer et gratte-ciels records : Dubaï est un chantier mondial, et une destination spectaculaire.",
      ar: "الصحراء والبحر وأبراج قياسات: دبي أكبر مشروع في العالم، وجهة مذهلة.",
    },
    idealFor: {
      fr: "Luxe · Famille · Aventure",
      ar: "فاخر · عائلة · مغامرة",
    },
    whyVisit: [
      {
        title: { fr: "Des records à la vertical", ar: "أرقام قياسية عمودية" },
        text: {
          fr: "Burj Khalifa, fontaines dansantes et tours qui effleurent les nuages.",
          ar: "برج خليفة، نافورات راقصة، وأبراج تلمس الغيوم.",
        },
      },
      {
        title: { fr: "Le désert en contrepoint", ar: "الصحراء مقابل" },
        text: {
          fr: "Safari, dunes et campements étoilés au clair de lune.",
          ar: "سفاري، كثبان، ومخيمات نجمية تحت ضوء القمر.",
        },
      },
      {
        title: { fr: "Une cité pour tous", ar: "مدينة للجميع" },
        text: {
          fr: "Plages, marinas, parcs à thèmes et quartiers marchands.",
          ar: "شواطئ، مارينا، حدائق ترفيهية، وأحياء تجارية.",
        },
      },
    ],
    bestPeriods: { fr: "Novembre à mars", ar: "نونبر إلى مارس" },
    toDiscover: [
      { fr: "Le Burj Khalifa", ar: "برج خليفة" },
      { fr: "La marina de Dubaï", ar: "مارينا دبي" },
      { fr: "Le Palm Jumeirah", ar: "جميرا بالمو" },
      { fr: "Les dunes du désert", ar: "كثبان الصحراء" },
      { fr: "Le Dubai Mall", ar: "دبي مول" },
    ],
    styles: ["sejour", "famille", "aventure"],
    isDemo: true,
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
