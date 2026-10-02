export const companyInfo = {
  name: "APEX TAMILNADU CONSTRUCT",
  tagline: "Pioneering Sustainable Infrastructure, Coastal Marvels & Skyline Landmarks Across Tamil Nadu",
  founded: "1998",
  headquarters: "Apex Towers, 4th Floor, Anna Salai, Guindy Industrial Corridor, Chennai - 600 032, Tamil Nadu, India",
  regionalOffices: [
    { city: "Coimbatore", address: "Avinashi Road, Peelamedu, Coimbatore - 641 004" },
    { city: "Madurai", address: "K.K. Nagar Ring Road Junction, Madurai - 625 020" }
  ],
  phone: "+91 (044) 4820 9020",
  secondaryPhone: "+91 98400 12345",
  email: "inquiries@apextnconstruct.in",
  certifications: [
    "Class-1 Special PWD & Highways Contractor (Govt. of Tamil Nadu)",
    "CMDA & DTCP Accredited Infrastructure Partner",
    "ISO 9001:2015 & ISO 45001 Safety Management",
    "IGBC Platinum Green Building Certified Organization"
  ],
  stats: [
    { value: "380+", label: "Completed Megaprojects in TN" },
    { value: "24.5M", label: "Sq. Ft. Built Across TN" },
    { value: "99.8%", label: "On-Time Handover Track Record" },
    { value: "₹5,800+ Cr", label: "Delivered Infrastructure Value" }
  ]
};

export const heroSlides = [
  {
    id: 1,
    tag: "Commercial & IT Corridors",
    title: "Building Landmark Commercial Skylines Across Tamil Nadu",
    subtitle: "Turnkey structural engineering, high-rise architectural glazing, and seismic resilience for Chennai's premier IT parks and corporate headquarters.",
    image: "/images/hero-1.jpg",
    highlightStat: "48 Floors",
    highlightLabel: "TIDEL OMR Horizon Tower, Chennai",
    link: "/projects/tidel-omr-tech-horizon"
  },
  {
    id: 2,
    tag: "Coastal Luxury Estates",
    title: "Bespoke Architectural Residences on East Coast Road",
    subtitle: "Marine-grade post-tensioned concrete, seamless ocean-facing terraces, and contemporary luxury villas crafted for enduring elegance.",
    image: "/images/hero-2.jpg",
    highlightStat: "₹72 Cr Value",
    highlightLabel: "Bayview Coastal Eco-Villa, ECR",
    link: "/projects/bayview-coastal-eco-villa"
  },
  {
    id: 3,
    tag: "Civil Infrastructure",
    title: "Resilient Marine Bridges & Arterial Highways",
    subtitle: "Heavy civil engineering, deep sea caisson foundations, and high-durability viaducts connecting Tamil Nadu's industrial and coastal hubs.",
    image: "/images/hero-3.jpg",
    highlightStat: "4.2 Kilometers",
    highlightLabel: "Pamban Gulf Marine Viaduct",
    link: "/projects/pamban-gulf-marine-viaduct"
  },
  {
    id: 4,
    tag: "Sustainable Campuses",
    title: "IGBC Platinum Industrial & Net-Zero Parks",
    subtitle: "Sustainable building science, integrated solar arrays, and high-efficiency manufacturing facilities in Coimbatore and Sriperumbudur.",
    image: "/images/hero-4.jpg",
    highlightStat: "IGBC Platinum",
    highlightLabel: "Coimbatore Avinashi Green Tech Park",
    link: "/projects/coimbatore-green-tech-park"
  }
];

export const projects = [
  {
    id: "tidel-omr-tech-horizon",
    title: "TIDEL OMR Tech Horizon Tower",
    category: "Commercial",
    tagline: "A 48-story beacon of ultra-modern architectural engineering on Chennai's IT Expressway",
    location: "Old Mahabalipuram Road (OMR), Chennai, Tamil Nadu",
    client: "Tamil Nadu Tech Parks Consortium",
    completionYear: "2025",
    value: "₹680 Crores",
    area: "1,450,000 Sq. Ft.",
    status: "Completed",
    image: "/images/hero-1.jpg",
    gallery: [
      "/images/hero-1.jpg",
      "/images/project-skyscraper-night.jpg",
      "/images/project-interior.jpg",
      "/images/machinery.jpg"
    ],
    summary: "A cutting-edge 48-story commercial high-rise engineered for Chennai's coastal climate. Featuring high-efficiency low-E curtain wall glazing, seismic dampeners conforming to IS 1893:2016, and intelligent BMS automation.",
    overview: "Constructed along Chennai's prime IT Corridor on OMR, the project required deep pile foundations through marine clay strata and high-speed execution to meet global tenant timelines. APEX TAMILNADU CONSTRUCT deployed 4D BIM modeling and hydraulic climbing formwork to finish 3 months ahead of schedule.",
    challenge: "Executing deep-pile foundation works in coastal soil conditions with high groundwater tables without impacting active OMR arterial traffic.",
    solution: "Implemented continuous bentonite slurry micro-piling, real-time laser settlement sensors, and pre-fabricated perimeter steel bracing that mitigated vibration and soil displacement.",
    architecturalFeatures: [
      "High-performance double-glazed solar-reflective facade reducing HVAC energy by 32%",
      "Triple-height grand entrance atrium featuring granite fluting and cantilevered spiral staircase",
      "Rooftop solar farm producing 180 kW of clean renewable energy for common areas",
      "State-of-the-art multi-level automated podium parking with EV charging infrastructure"
    ],
    scope: [
      "Deep foundation bored cast-in-situ piles reaching 38 meters to dense weathered rock",
      "Composite structural steel-concrete superframe using high-capacity luffing cranes",
      "Complete MEP, centralized HVAC with UVGI filtration, and high-speed destination elevators",
      "Full interior architectural fit-out across 40 corporate floors and sky lounges"
    ],
    testimonial: {
      quote: "APEX TAMILNADU CONSTRUCT delivered an architectural masterpiece on Chennai's IT Corridor. Their structural precision, CMDA compliance, and zero-compromise safety standards are benchmark in Indian contracting.",
      author: "Er. K. Ramanathan",
      title: "Chief Infrastructure Officer, TN Tech Parks Consortium"
    }
  },
  {
    id: "bayview-coastal-eco-villa",
    title: "Bayview Coromandel Coastal Eco-Villa",
    category: "Residential",
    tagline: "Ultra-luxury cantilevered coastal estate merging modern concrete and Bay of Bengal views",
    location: "East Coast Road (ECR), Chennai, Tamil Nadu",
    client: "Coromandel Heritage Estates",
    completionYear: "2024",
    value: "₹72 Crores",
    area: "24,000 Sq. Ft.",
    status: "Completed",
    image: "/images/hero-2.jpg",
    gallery: [
      "/images/hero-2.jpg",
      "/images/project-interior.jpg",
      "/images/about-team.jpg"
    ],
    summary: "An architectural marvel celebrating coastal living, featuring 12-meter post-tensioned cantilevered concrete living decks, private sea-facing infinity lap pools, and integrated coastal rainwater harvesting micro-reservoirs.",
    overview: "Nestled along the scenic Coromandel coastline off ECR, this estate merges contemporary clean-line geometry with natural Chettinad stone textures and salt-resistant marine concrete formulations designed to last generations.",
    challenge: "Preventing marine chloride corrosion in severe coastal saline exposure while creating ultra-slim 18-meter motorized glass sliding facades.",
    solution: "Used corrosion-inhibiting stainless steel rebar, silica fume high-density concrete mixes, and custom-extruded anodized architectural marine framing.",
    architecturalFeatures: [
      "Exposed white architectural fair-faced concrete with localized Thanjavur granite highlights",
      "Zero-threshold floor-to-ceiling motorized hurricane-rated sliding glass panels",
      "Cantilevered 25-meter infinity pool appearing to merge into the Bay of Bengal waters",
      "Subterranean home theater, wine cellar, and climate-controlled four-car pavilion"
    ],
    scope: [
      "Geotechnical coastal stabilization and ground compaction piling",
      "Precision post-tensioned marine grade concrete structural casting",
      "Custom imported structural glazing engineered for tropical coastal gales",
      "Biophilic native coastal landscaping and automated RO water treatment plant"
    ],
    testimonial: {
      quote: "Every corner of the villa is flawless. The structural cantilever over the pool is a marvel of civil engineering that gives us panoramic Bay of Bengal views every sunrise.",
      author: "Mrs. Meenakshi Sundaram",
      title: "Private Estate Owner, ECR Chennai"
    }
  },
  {
    id: "pamban-gulf-marine-viaduct",
    title: "Pamban Gulf Marine Coastal Viaduct",
    category: "Infrastructure",
    tagline: "A 4.2 km cable-stayed engineering marvel spanning high-velocity marine currents",
    location: "Mandapam - Rameswaram Corridor, Tamil Nadu",
    client: "Tamil Nadu Highways & Maritime Infrastructure Board",
    completionYear: "2025",
    value: "₹1,450 Crores",
    area: "4.2 km 6-Lane Expressway Viaduct",
    status: "Completed",
    image: "/images/hero-3.jpg",
    gallery: [
      "/images/hero-3.jpg",
      "/images/machinery.jpg",
      "/images/about-team.jpg"
    ],
    summary: "A heavy marine civil infrastructure triumph engineered with twin 140-meter diamond concrete pylons, stay cables with anti-corrosion wax and HDPE sheathing, and seismic elastomeric isolators designed for high coastal wind turbulence.",
    overview: "Connecting key maritime corridors and religious heritage pilgrimage hubs, this mega-viaduct supports over 85,000 vehicles daily and features dedicated emergency lanes, automated weather monitoring, and navigational aids for regional fishermen.",
    challenge: "Pouring massive underwater submerged marine cofferdams during turbulent monsoon currents and corrosive Gulf salt conditions.",
    solution: "Utilized self-elevating jack-up marine barges, underwater tremie concrete with anti-washout admixtures, and continuous fiber-optic stress sensing embedded within the bridge deck.",
    architecturalFeatures: [
      "Twin 140-meter aerodynamic diamond-form pylons inspired by Tamil Dravidian tower silhouettes",
      "High-tensile galvanized stay cables with internal viscous dampers against wind oscillations",
      "Smart piezoelectric IoT sensors continuously sending structural health telemetry to Chennai HQ",
      "Architectural LED illumination highlighting the viaduct across the open sea"
    ],
    scope: [
      "Sub-sea marine caisson piling drilled into hard sandstone bedrock at 42-meter ocean depth",
      "Precast segmental post-tensioned box girder erection via specialized launching gantries",
      "Stay cable tensioning and automated hydraulic load monitoring",
      "High-durability anti-carbonation epoxy coatings on all exposed marine concrete"
    ],
    testimonial: {
      quote: "APEX TAMILNADU CONSTRUCT executed one of the most challenging marine engineering feats in South India with world-class quality and unwavering commitment to safety.",
      author: "Er. S. Balasubramanian",
      title: "Chief Engineer, Tamil Nadu Coastal Highways"
    }
  },
  {
    id: "coimbatore-green-tech-park",
    title: "Coimbatore Avinashi Green Industrial & EV Tech Park",
    category: "Sustainable",
    tagline: "Net-zero industrial and EV manufacturing hub in Western Tamil Nadu",
    location: "Avinashi Road Corridor, Coimbatore, Tamil Nadu",
    client: "Kongu Industrial Innovation Hub",
    completionYear: "2024",
    value: "₹340 Crores",
    area: "680,000 Sq. Ft.",
    status: "Completed",
    image: "/images/hero-4.jpg",
    gallery: [
      "/images/hero-4.jpg",
      "/images/project-interior.jpg",
      "/images/machinery.jpg"
    ],
    summary: "Awarded IGBC Platinum rating, this flagship smart industrial campus incorporates low-carbon geopolymer concrete, solar photovoltaic rooftops generating 2.4 MW, and zero-liquid discharge (ZLD) closed-loop water treatment.",
    overview: "Built to accelerate Western Tamil Nadu's precision manufacturing and EV revolution, the complex houses high-precision CNC manufacturing halls, testing tracks, automated material storage, and corporate R&D laboratories.",
    challenge: "Achieving super-flat FM2 category industrial floors across 400,000 continuous square feet for automated automated guided vehicles (AGVs).",
    solution: "Laser screed concrete placement coupled with specialized quartz surface hardeners and vacuum dewatering techniques to guarantee flat tolerances.",
    architecturalFeatures: [
      "Massive 2.4 MW rooftop solar array satisfying 100% of campus daytime manufacturing load",
      "Passive natural wind-catcher ventilation towers cooling industrial halls by 6°C naturally",
      "Rainwater harvesting collection holding over 2,000,000 liters across integrated bioswales",
      "Acoustically insulated testing suites and lush open-air green courtyards"
    ],
    scope: [
      "Heavy industrial pre-engineered steel superstructure with 36-meter clear spans",
      "Laser-guided super-flat concrete flooring with heavy load bearing capacity",
      "High-voltage electrical substation (110 kV) and redundant dual power distribution",
      "Complete civil infrastructure including storm drainage, fire-hydrant networks, and internal ring roads"
    ],
    testimonial: {
      quote: "Their mastery of green industrial engineering and rapid project turnaround made our Coimbatore facility the most modern and sustainable industrial site in South India.",
      author: "Mr. V. Natarajan",
      title: "Director of Operations, Kongu Industrial Group"
    }
  },
  {
    id: "madurai-cultural-concourse",
    title: "Madurai Heritage & Administrative Concourse",
    category: "Commercial",
    tagline: "Monolithic architectural granite and soaring structural civic concourse",
    location: "Madurai Ring Road, Tamil Nadu",
    client: "Tamil Nadu Civic Development Board",
    completionYear: "2025",
    value: "₹280 Crores",
    area: "520,000 Sq. Ft.",
    status: "Completed",
    image: "/images/project-interior.jpg",
    gallery: [
      "/images/project-interior.jpg",
      "/images/hero-1.jpg",
      "/images/project-skyscraper-night.jpg"
    ],
    summary: "A monumental civic complex paying tribute to classical Tamil architecture through modern monolithic self-compacting concrete, locally sourced hand-chiseled granite pillars, and sweeping grand atriums.",
    overview: "Designed as an administrative and cultural hub for Southern Tamil Nadu, the center includes a 2,500-seat convention auditorium, government executive offices, archival libraries, and open public pavilions.",
    challenge: "Integrating intricate heavy hand-carved local granite stone masonry seamlessly with post-tensioned high-strength concrete long-span roof cantilevers.",
    solution: "Developed custom stainless steel bracket anchors and 3D digital photogrammetry to align stone joints with millimeter precision across the 24-meter grand atrium.",
    architecturalFeatures: [
      "Grand 24-meter central skylit atrium with sculpted cast-in-situ concrete vaulted ceilings",
      "Polished Madurai black granite and red sand-blasted stone exterior cladding",
      "State-of-the-art auditorium with specialized acoustic wooden wall paneling and surround audio",
      "Solar-shaded outdoor public plazas with fountain courtyards reducing heat island effect"
    ],
    scope: [
      "Deep foundation raft and bored cast-in-situ piling across hard granite rock terrain",
      "High-span post-tensioned beams spanning 32 meters without intermediate pillars",
      "Specialized interior acoustics, MEP, central chilling plant, and fire safety systems",
      "Comprehensive external granite paving and civic park landscape"
    ],
    testimonial: {
      quote: "APEX TAMILNADU CONSTRUCT brought our cultural vision into reality with timeless architectural dignity and extraordinary structural precision.",
      author: "Dr. K. Swaminathan",
      title: "Principal Secretary, Civic Development Board"
    }
  },
  {
    id: "siruseri-fintech-tower",
    title: "Siruseri Diagrid FinTech Tower",
    category: "Commercial",
    tagline: "Striking steel diagrid illuminated high-rise redefining Chennai's IT skyline",
    location: "SIPCOT IT Park, Siruseri, Chennai",
    client: "Southern Capital Infra Holdings",
    completionYear: "2024",
    value: "₹490 Crores",
    area: "920,000 Sq. Ft.",
    status: "Completed",
    image: "/images/project-skyscraper-night.jpg",
    gallery: [
      "/images/project-skyscraper-night.jpg",
      "/images/hero-1.jpg",
      "/images/hero-4.jpg"
    ],
    summary: "A 42-story illuminated landmark featuring an external steel diagrid structural shell that eliminates interior column obstructions, allowing flexible 360-degree open-plan floors for global financial institutions.",
    overview: "Engineered to withstand tropical coastal cyclones with wind gusts up to 180 km/h, the Siruseri Diagrid Tower uses high-grade micro-alloyed structural steel nodes and adaptive architectural facade illumination.",
    challenge: "Fabricating and erecting massive structural node joints with multi-directional angled diagonal columns within tight spatial tolerances.",
    solution: "Employed robotic multi-pass submerged arc welding and real-time ultrasonic testing (NDT) on every structural connection prior to lifting.",
    architecturalFeatures: [
      "External structural steel diagrid exoskeleton providing 100% column-free interior floor plates",
      "Custom programmable linear architectural LED facade lights celebrating festive occasions",
      "Destination dispatch smart elevators moving at 6 meters per second",
      "Thermal energy ice storage system reducing peak electrical consumption during daytime hours"
    ],
    scope: [
      "Heavy structural steel fabrication of 12,000 metric tons and tower crane erection",
      "Unitized triple-glazed insulated curtain wall facade installation",
      "High-efficiency BMS automation and smart building data telemetry",
      "Triple-basement parking with smart parking guidance systems"
    ],
    testimonial: {
      quote: "The Siruseri Diagrid Tower is a true landmark for modern Tamil Nadu. APEX delivered this complex high-rise with zero accidents and exceptional craftsmanship.",
      author: "Mr. T. Sundar",
      title: "Managing Director, Southern Capital Infra"
    }
  }
];

export const services = [
  {
    id: "commercial-construction",
    title: "Commercial & IT High-Rise Construction",
    subtitle: "From flagship IT parks on OMR to 48-story corporate headquarters",
    description: "End-to-end general contracting and construction management for modern Grade-A IT parks, commercial office complexes, and high-rise landmarks across Chennai and Coimbatore.",
    icon: "FaBuilding",
    features: [
      "Aerodynamic low-E unitized glass curtain wall facades",
      "Heavy structural steel and post-tensioned concrete frames",
      "CMDA & DTCP planning approvals & IS code compliance",
      "Accelerated fast-track construction delivery methodology"
    ]
  },
  {
    id: "luxury-residential",
    title: "Luxury Residential & Heritage Estates",
    subtitle: "Bespoke architectural residences built to timeless perfection",
    description: "High-end private seaside villas along ECR, modern gated communities, and luxury residential towers built with meticulous craftsmanship, Chettinad stone artistry, and modern aesthetics.",
    icon: "FaHome",
    features: [
      "Complex cantilevered concrete engineering and infinity pool decks",
      "Salt-resistant marine concrete for coastal durability",
      "Smart home automation and climate-controlled basement suites",
      "Private landscaped courtyards with native Tamil Nadu flora"
    ]
  },
  {
    id: "civil-infrastructure",
    title: "Civil Highways, Bridges & Marine Infrastructure",
    subtitle: "Connecting Tamil Nadu's industrial hubs and coastal corridors",
    description: "Comprehensive civil infrastructure engineering including four-lane expressways, coastal marine viaducts, flyovers, railway overbridges, and port connectivity corridors.",
    icon: "FaRoad",
    features: [
      "Deep sea caissons & marine underwater piling",
      "Precast post-tensioned segmental box girder flyovers",
      "High-durability pavement engineering for heavy axle industrial trucks",
      "State-of-the-art seismic dampening conforming to IS 1893 guidelines"
    ]
  },
  {
    id: "sustainable-green",
    title: "IGBC Platinum & Net-Zero Green Campuses",
    subtitle: "Eco-conscious building science for Tamil Nadu's future",
    description: "Industry-leading sustainable engineering featuring rooftop solar farms, advanced Tamil Nadu rainwater harvesting reservoirs, low-carbon geopolymer concrete, and energy-neutral HVAC designs.",
    icon: "FaLeaf",
    features: [
      "IGBC and LEED Platinum green building accreditation support",
      "Building-integrated photovoltaic (BIPV) solar power systems",
      "Zero Liquid Discharge (ZLD) closed-loop water treatment plants",
      "Passive architectural wind chimneys reducing cooling loads"
    ]
  },
  {
    id: "industrial-logistics",
    title: "Industrial SIPCOT Parks & Smart Warehousing",
    subtitle: "High-tech manufacturing hubs across Sriperumbudur, Oragadam & Hosur",
    description: "High-efficiency automated manufacturing plants, EV battery manufacturing facilities, cleanrooms, and logistics distribution parks designed for autonomous robotics.",
    icon: "FaIndustry",
    features: [
      "Super-flat FM2 category concrete slabs for automated AGV operations",
      "High-bay pre-engineered steel buildings with long clear spans",
      "Dedicated high-voltage electrical substations and power redundancy",
      "Hazardous material containment and advanced fire suppression"
    ]
  },
  {
    id: "bim-preconstruction",
    title: "VDC, 4D BIM & Digital Twin Pre-Construction",
    subtitle: "Precision digital simulation before breaking ground on site",
    description: "Virtual Design & Construction (VDC), comprehensive 3D/4D/5D BIM clash detection, drone LiDAR topography scanning, and structural quantity estimation.",
    icon: "FaCubes",
    features: [
      "Sub-millimeter drone LiDAR site surveys and contour modeling",
      "Multi-discipline MEP clash detection eliminating site rework",
      "Dynamic 4D schedule tracking and 5D cost optimization",
      "Off-site prefabrication planning and modular assembly schedules"
    ]
  }
];

export const teamMembers = [
  {
    name: "Er. R. Senthil Kumar, FIE",
    role: "Founder & Managing Director",
    experience: "30+ Years Experience",
    bio: "Distinguished Anna University engineering alumnus with three decades directing landmark commercial high-rises and key infrastructure projects across Tamil Nadu.",
    image: "/images/about-team.jpg"
  },
  {
    name: "Ar. Priya Sundararajan, COA, LEED AP",
    role: "VP of Architectural Engineering",
    experience: "22+ Years Experience",
    bio: "Pioneering authority in tropical sustainable architecture, integrating traditional Tamil architectural elements with modern curtain wall high-rises.",
    image: "/images/about-team.jpg"
  },
  {
    name: "Er. K. Murugan, M.Tech (IIT Madras)",
    role: "Chief Operating Officer & Civil Lead",
    experience: "26+ Years Experience",
    bio: "Specializes in deep marine caissons, cable-stayed bridges, and high-speed expressway alignments across South India's major transport corridors.",
    image: "/images/about-team.jpg"
  },
  {
    name: "Er. Ananya Ramakrishnan, CSP",
    role: "Director of Safety & Field Operations",
    experience: "19+ Years Experience",
    bio: "Architect of our Zero-Accident Safety Protocol, leading over 14 million continuous man-hours without lost-time accidents on mega construction sites.",
    image: "/images/about-team.jpg"
  }
];

export const testimonials = [
  {
    quote: "APEX TAMILNADU CONSTRUCT executed our 48-story IT tower on OMR three months ahead of schedule. Their engineering precision, safety protocol, and CMDA compliance are unmatched in South India.",
    author: "Mr. K. Ramanathan",
    role: "Chief Infrastructure Officer, TN Tech Parks Consortium",
    project: "TIDEL OMR Tech Horizon Tower"
  },
  {
    quote: "Pouring heavy marine bridge foundations in coastal currents requires extraordinary civil engineering grit. APEX proved their authority as Tamil Nadu's premier infrastructure contractor.",
    author: "Er. S. Balasubramanian",
    role: "Chief Engineer, Tamil Nadu Coastal Highways",
    project: "Pamban Gulf Marine Viaduct"
  },
  {
    quote: "Our cantilevered seaside villa on ECR is an architectural dream realized. The smooth concrete finishes and glass pocket walls were crafted with master precision.",
    author: "Mrs. Meenakshi Sundaram",
    role: "Estate Owner & Architect Collector",
    project: "Bayview Coastal Eco-Villa"
  },
  {
    quote: "Their team built our net-zero green industrial facility in Coimbatore with world-class speed, delivering IGBC Platinum certification without cost overruns.",
    author: "Mr. V. Natarajan",
    role: "Director of Operations, Kongu Industrial Group",
    project: "Coimbatore Avinashi Green Tech Park"
  }
];

export const faqs = [
  {
    question: "What regions across Tamil Nadu does APEX operate in?",
    answer: "We undertake commercial, residential, and heavy civil infrastructure projects across Greater Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, Tirunelveli, and the industrial corridors of Sriperumbudur, Oragadam, and Hosur."
  },
  {
    question: "Do you manage statutory approvals like CMDA, DTCP, and TNPCB?",
    answer: "Yes. Our in-house pre-construction team handles end-to-end liaison and statutory compliance with CMDA, DTCP, TNPCB (Tamil Nadu Pollution Control Board), Fire Safety, and RERA Tamil Nadu, ensuring 100% lawful execution."
  },
  {
    question: "How do you engineer structures for coastal and high-cyclone zones in Tamil Nadu?",
    answer: "Along the Bay of Bengal coastline (Chennai, ECR, Rameswaram), we utilize corrosion-resistant stainless-steel reinforcement, low-permeability silica-fume concrete mixes, cathodic protection, and aerodynamic wind designs tested for cyclone speeds up to 200 km/h."
  },
  {
    question: "Can APEX assist with IGBC Green Building and Net-Zero certifications?",
    answer: "Yes. Our team includes IGBC AP and LEED-accredited engineers who incorporate rooftop solar photovoltaics, Tamil Nadu mandated rainwater percolation reservoirs, and low-embodied carbon concrete to achieve IGBC Gold and Platinum ratings."
  },
  {
    question: "What is your safety track record on active job sites?",
    answer: "Safety is our core foundation. APEX operates under an ISO 45001-certified safety management system with over 14 million continuous worker hours without a single lost-time incident across all active Tamil Nadu job sites."
  },
  {
    question: "How do I request an engineering proposal or tender quotation?",
    answer: "You can submit an RFP through our online portal or reach out directly to our Chennai headquarters at inquiries@apextnconstruct.in. Our estimating and engineering team provides initial feasibility reviews within 5 business days."
  }
];
