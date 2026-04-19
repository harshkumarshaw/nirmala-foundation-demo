import mediaRegistry from "./mediaRegistry.json";

const institutesDataRaw = [
  {
    slug: "iihmahs",
    name: "Institute of Hospital Management & Allied Health Sciences",
    shortName: "IIHMAHS",
    established: "2019",
    location: "Kalyani, Nadia",
    description: "Built to bridge the critical skill gap in hospital administration and allied health services in India. Located near AIIMS Kalyani and JNM Hospital, offering real-world clinical and operational internships.",
    programs: ["BHA (Bachelor of Hospital Administration)", "MHA (Master of Hospital Administration)", "M.Sc. in Applied Nutrition"],
    affiliations: ["WBUHS", "Dept. of Health & Family Welfare, Govt. of WB"],
    fullStory: "Established around 2019–20 by Nirmala Foundation in Kalyani, IIHMAHS addresses the growing need for skilled healthcare managers and allied health professionals. It is one of the Foundation’s “futuristic education initiatives” offering specialized programs in healthcare administration and applied nutrition. Key courses include the Bachelor of Hospital Administration (BHA) – a 3-year undergraduate degree, the Master of Hospital Administration (MHA) – a 2-year postgraduate program, and an M.Sc. in Applied Nutrition (MAN) – a 2-year master’s course for nutrition and dietetics professionals. These programs are designed to prepare “industry-ready healthcare professionals for the emerging healthcare sector”. The curriculum combines management principles with healthcare specifics, ensuring graduates can efficiently run hospitals, healthcare facilities, and public health projects. In alignment with NEP 2020’s emphasis on multidisciplinary and professional education, IIHMAHS integrates knowledge of medical sciences, management, IT, and public health.",
    admissionsProcess: "Admission is conducted according to WBUHS guidelines. Meritorious students can avail of the West Bengal Student Credit Card scheme and various scholarship options. The process typically involves an application review followed by counseling based on academic merit or entrance exam scores.",
    eligibilityCriteria: "For BHA: 10+2 with a minimum percentage in any stream. For MHA: Graduation in any discipline (Science/Commerce/Arts/Medical). For M.Sc. Applied Nutrition: B.Sc. in relevant subjects (Nutrition, Food Science, etc.)",
    contactDetails: {
      address: "Phase-II, Kalyani Industrial Estate (Plots A-2 to A-5), Nadia, West Bengal",
      phone: "+91 80000 00000",
      email: "iihmahs@nirmalafoundation.co.in",
      office: "Main Administrative Block, Kalyani Campus"
    },
    features: [
      "Adjacent to AIIMS Kalyani, JNM Hospital, and ESI Hospital",
      "Modern classrooms with AV aids & Hospital Simulation Labs",
      "Internships in multi-specialty hospitals like KGH",
      "Focus on Health IT and Public Health Governance",
      "Nutrition and Dietetics specialized labs"
    ],
    videoLink: "https://cdn.pixabay.com/video/2020/09/13/49816-458438881_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format",
      "https://images.unsplash.com/photo-1576091160399-112ba9d15819?auto=format",
      "https://images.unsplash.com/photo-1586773860418-d3b97976c669?auto=format"
    ]
  },
  {
    slug: "iipsr",
    name: "International Institute of Pharmaceutical Science & Research",
    shortName: "IIPSR",
    established: "2018",
    location: "Kalyani, Nadia",
    description: "A center of excellence in pharmaceutical education, research, and innovation, fully approved by the Pharmacy Council of India (PCI).",
    programs: ["B.Pharm (Bachelor of Pharmacy)", "D.Pharm (Diploma in Pharmacy)"],
    affiliations: ["PCI", "WBSCTVESD", "MAKAUT", "WBUHS"],
    fullStory: "The International Institute of Pharmaceutical Science & Research was established during the 2018–2019 academic session. It specializes in pharmaceutical sciences, aiming to produce qualified pharmacists and researchers. IIPSR offers two flagship programs: a 2-year Diploma in Pharmacy (D.Pharm) and a 4-year Bachelor of Pharmacy (B.Pharm). The institute's vision is 'Where excellence meets innovation'. The curriculum covers basic compounding and dispensing to advanced pharmacology and industrial pharmacy. It is fully compliant with all regulatory bodies (PCI, WBUHS, WBSCTVESD) ensuring graduates are eligible for pharmacist licensure.",
    admissionsProcess: "Admission follows the norms of the Pharmacy Council of India and West Bengal University of Health Sciences. Students are selected based on merit and entrance scores (where applicable). The institute supports the Student Credit Card scheme.",
    eligibilityCriteria: "For B.Pharm: 10+2 with Physics, Chemistry, and Biology/Mathematics. For D.Pharm: 10+2 with Science stream.",
    contactDetails: {
      address: "Kalyani Industrial Area, Nadia, West Bengal",
      phone: "+91 80000 00000",
      email: "iipsr@nirmalafoundation.co.in",
      office: "Pharmacy Education Wing"
    },
    features: [
      "Specialized labs: Pharmaceutics, Pharmacology, Chemistry, Pharmacognosy",
      "Machine Room for industrial pharmacy training",
      "Pilot-plant area for pharmaceutical manufacturing simulation",
      "Library with national/international research journals",
      "Dual affiliation: WBUHS and Technical Skill Council"
    ],
    videoLink: "https://cdn.pixabay.com/video/2015/10/28/1210-143977098_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format",
      "https://images.unsplash.com/photo-1584362142249-160fa8698583?auto=format",
      "https://images.unsplash.com/photo-1582719508461-905ec9b51fa0?auto=format"
    ]
  },
  {
    slug: "ichfn",
    name: "Institute of Child Health Faculty of Nursing",
    shortName: "ICHFN",
    established: "2017",
    location: "Park Circus, Kolkata",
    description: "Operating in academic collaboration with the Institute of Child Health—India's first dedicated paediatric hospital—making it unique for specialized clinical training.",
    programs: ["GNM (General Nursing and Midwifery)", "B.Sc. Nursing"],
    affiliations: ["INC", "WBUHS", "WBNC", "Govt. of West Bengal"],
    fullStory: "Established in 2017 in Kolkata, ICHFN operates in academic collaboration with the renowned Institute of Child Health (ICH). It aims to produce highly qualified nursing professionals who excel in pediatric care. Students have direct access to operation theatres, pediatric ICUs, and maternity centers associated with ICH. The college follows a philosophy of holistic patient care and leadership development, nurturing nurses who provide quality care and assume leadership in societal change.",
    admissionsProcess: "Admissions are strictly governed by INC and WBNC norms. Seats are primarily for female candidates for B.Sc. Nursing, with GNM open to both genders under specific council guidelines.",
    eligibilityCriteria: "10+2 Science (Physics, Chemistry, Biology) with English for B.Sc Nursing. For GNM: 10+2 in any stream (English mandatory).",
    contactDetails: {
      address: "11, Dr. Biresh Guha Street, Park Circus, Kolkata",
      phone: "+91 80000 00000",
      email: "ichfn@nirmalafoundation.co.in",
      office: "Nursing Admin Office"
    },
    features: [
      "Co-located with the Institute of Child Health (ICH) hospital",
      "Specialized pediatric nursing labs with infant care simulation",
      "Direct clinical exposure in specialized ICUs and Wards",
      "Transportation fleets for community health postings",
      "Emphasis on pediatric-focused nursing leadership"
    ],
    videoLink: "https://cdn.pixabay.com/video/2017/03/20/8449-209292163_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1584433144859-1ec3fd65675e?auto=format",
      "https://images.unsplash.com/photo-1579154234436-3974d44a8576?auto=format"
    ]
  },
  {
    slug: "kgh",
    name: "Kalyani General Hospital",
    shortName: "KGH",
    established: "2020",
    location: "Kalyani, Nadia",
    description: "A 605-bed state-of-the-art super-specialty hospital providing essential healthcare to Southern West Bengal & clinical training for the foundation’s medical students.",
    programs: ["Clinical Internships", "Paramedical Training", "Healthcare Governance Residencies"],
    affiliations: ["NMC", "Dept. of Health, Govt. of West Bengal"],
    fullStory: "Kalyani General Hospital (KGH) is a 605-bed super-specialty institution established by the Nirmala Foundation in the Kalyani Industrial Estate area. It provides a wide range of healthcare services including General Medicine, Pediatrics, Surgery, and Diagnostics. KGH serves as the primary teaching hospital for JMN Medical College and the various nursing institutions under the Foundation, ensuring students receive rigorous clinical exposure in a real-world high-volume hospital environment.",
    admissionsProcess: "Clinical intern positions are allocated via the respective institutions (IIHMAHS, JMN, ICHFN). Patient admissions follow standard medical protocols.",
    eligibilityCriteria: "Refer to training and clinical observer guidelines for specific medical programs.",
    contactDetails: {
      address: "Plot B-14, Phase III, Kalyani Industrial Estate, Nadia",
      phone: "+91 80000 00000",
      email: "kgh@nirmalafoundation.co.in",
      office: "Medical Superintendent's Office"
    },
    features: [
      "Advanced 605-Bedded Super-Specialty infrastructure",
      "7 Fully Modular OT, 40 ICU | 21 CCU | 6 NICU | 10 PICU",
      "12,000+ surgeries performed annually",
      "Over 300+ OPD patients treated daily",
      "Integrated health management systems"
    ],
    videoLink: "https://cdn.pixabay.com/video/2020/09/13/49816-458438881_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586773860418-d3b97976c669?auto=format",
      "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format"
    ]
  },
  {
    slug: "iinr",
    name: "International Institute of Nursing & Research",
    shortName: "IINR",
    established: "2016",
    location: "Kalyani, Nadia",
    description: "West Bengal's 1st NAAC Accredited Nursing College. A premier institution providing specialized B.Sc. and Post Basic Nursing programs with a focus on clinical research.",
    isNaac: true,
    programs: ["B.Sc. Nursing", "GNM Nursing", "Post Basic B. Sc. (Nursing)", "M. Sc. (Nursing)"],
    affiliations: ["NAAC", "INC", "WBUHS", "WBNC", "Govt. of West Bengal"],
    fullStory: "The International Institute of Nursing & Research (IINR) holds the distinct honor of being the 1st Nursing College in West Bengal to receive NAAC Accreditation. This milestone underscores our commitment to maintaining the highest benchmarks of quality in nursing education. Spread across a dedicated 5-acre campus in Kalyani, IINR combines advanced academic blocks with high-fidelity simulation labs to produce nurses who are not just clinicians, but researchers. Our curriculum is designed to lead the nursing profession towards a newer paradigm of evidence-based practice and leadership.",
    admissionsProcess: "Follows strict WBUHS and INC guidelines. Candidates are selected based on academic performance and JENPAS/WBJEE scores for B.Sc. Nursing.",
    eligibilityCriteria: "For B.Sc. Nursing: 10+2 with Science (PCB) and English. For GNM: 10+2 in any stream (Science/Commerce/Arts) with minimum 40%. For Post Basic B.Sc. Nursing: GNM qualification from a recognized board. For M.Sc. Nursing: B.Sc. Nursing/B.Sc. Hons. Nursing/Post Basic B.Sc. Nursing with minimum 55% aggregate marks and 1-year experience.",
    contactDetails: {
      address: "Plot A-2, Kalyani Industrial Estate, Nadia, West Bengal",
      phone: "+91 80000 00000",
      email: "iinr@nirmalafoundation.co.in",
      office: "IINR Administrative Block"
    },
    features: [
      "West Bengal's 1st NAAC Accredited Nursing College",
      "Modern 5-acre campus with residential facilities",
      "High-fidelity Nursing Simulation Lab",
      "Clinical training rotation at KGH and other partner hospitals",
      "Strong placement records in premier national healthcare groups",
      "Active Nursing Research Cell"
    ],
    videoLink: "https://cdn.pixabay.com/video/2020/09/13/49808-458438856_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format"
    ]
  },
  {
    slug: "ccnr",
    name: "Care & Cure Nursing Institute",
    shortName: "CCNI",
    established: "2018",
    location: "Barasat",
    description: "Specialized in GNM training and rural healthcare nursing initiatives, focusing on community health and primary care.",
    programs: ["GNM (General Nursing and Midwifery)"],
    affiliations: ["INC", "WBNC", "Govt. of West Bengal"],
    fullStory: "Care & Cure Nursing Institute is dedicated to excellence in bedside nursing and community healthcare. Located in Barasat, it specializes in the 3-year GNM program. The institute prides itself on creating empathetic and clinically skilled nursing professionals who are ready to serve in both urban super-specialty settings and rural community health centers.",
    admissionsProcess: "Admissions are conducted through WBNC counseling. Meritorious candidates are eligible for West Bengal Student Credit Card support.",
    eligibilityCriteria: "10+2 in any stream from a recognized board with minimum aggregate requirements.",
    contactDetails: {
      address: "Phase-II, Kalyani industrial area near Phase-III crossing",
      phone: "+91 80000 00000",
      email: "ccnr@nirmalafoundation.co.in",
      office: "Principal's Office, CCNI"
    },
    features: [
      "Specialized Community Health Nursing lab",
      "Extensive clinical rotation in government and private hospitals",
      "Regular public health screening camps organized by students",
      "Fully equipped nutrition and anatomy laboratories",
      "Focus on comprehensive patient care philosophy"
    ],
    videoLink: "https://cdn.pixabay.com/video/2019/02/23/21617-319452308_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format"
    ]
  },
  {
    slug: "jmn",
    name: "JMN Medical College",
    shortName: "JMNMC",
    established: "2020",
    location: "Chakdaha, Nadia",
    description: "The Foundation's premier medical institute and a 150 Seat MBBS College, featuring Eastern India's First Digital Cadaver Lab.",
    programs: ["MBBS (Bachelor of Medicine, Bachelor of Surgery)"],
    affiliations: ["NMC", "WBUHS", "Govt. of West Bengal"],
    fullStory: "JMN Medical College is the flagship medical education initiative of the Nirmala Foundation. It is a state-of-the-art 150-seat MBBS institution in Chakdaha, Nadia, that combines advanced medical research with comprehensive clinical training. With its own 605-bed super-specialty hospital (KGH), JMNMC ensures over 450 students receive early and consistent clinical exposure. The college is built with a vision to transform medical education in Eastern India by integrating digital healthcare tools, such as Eastern India's First Digital Cadaver Lab.",
    admissionsProcess: "Admissions are strictly governed by the National Medical Commission (NMC) and WBUHS. Candidates must qualify for NEET-UG and participate in state-level counseling.",
    eligibilityCriteria: "Must qualify NEET-UG. 10+2 with Physics, Chemistry, Biology/Biotech, and English with required aggregate percent.",
    contactDetails: {
      address: "Kalyani Industrial Estate, Nadia, West Bengal",
      phone: "+91 80000 00000",
      email: "jmnmc@nirmalafoundation.co.in",
      office: "Dean's Office, JMN Campus"
    },
    features: [
      "NMC Approved infrastructure and laboratories",
      "Eastern India's First Digital Cadaver Lab",
      "In-house 605-bed Teaching Hospital (KGH)",
      "Board exam pass rate: 96% (2022-23 batch, Source: JMNMC Academic Office)",
      "Residential campus with global-standard hostels"
    ],
    videoLink: "https://cdn.pixabay.com/video/2020/09/13/49816-458438881_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format",
      "https://images.unsplash.com/photo-1584433144859-1ec3fd65675e?auto=format",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format"
    ]
  },
  {
    slug: "iser",
    name: "Institute of Special Education and Research",
    shortName: "ISER",
    established: "2021",
    location: "Kalyani, Nadia",
    description: "Dedicated to training educators and professionals in special education to empower individuals with diverse needs.",
    programs: ["B.Ed. Special Education", "D.Ed. Special Education"],
    affiliations: ["RCI", "WBUHS", "Govt. of West Bengal"],
    fullStory: "The Institute of Special Education and Research (ISER) Kalyani was established to address the critical need for qualified professionals in the field of special education. Our comprehensive programs aim to build an inclusive society by equipping educators with specialized skills to support children and adults with intellectual disabilities, autism, and other diverse learning needs. ISER is committed to research-driven pedagogies and hands-on practical training in special schools and clinical settings.",
    admissionsProcess: "Admissions follow the guidelines of the Rehabilitation Council of India (RCI) and the affiliating state universities. Candidates are selected based on academic merit and entrance examination scores.",
    eligibilityCriteria: "For B.Ed. Special Education: Graduation in any discipline with a minimum of 50% marks. For D.Ed. Special Education: 10+2 in any stream with a minimum of 50% marks.",
    contactDetails: {
      address: "Kalyani, Nadia, West Bengal",
      phone: "+91 80000 00000",
      email: "iser@nirmalafoundation.co.in",
      office: "ISER Administrative Wing"
    },
    features: [
      "RCI Approved Curriculum",
      "Specialized Resource Rooms and Labs",
      "Extensive Practicum in Special Schools",
      "Focus on Inclusive Education Strategies",
      "Research and Development Wing"
    ],
    videoLink: "https://cdn.pixabay.com/video/2020/09/13/49816-458438881_large.mp4",
    images: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format",
      "https://images.unsplash.com/photo-1427504494785-319ce5156093?auto=format"
    ]
  }
];

export const strategicRoadmap = [
  {
    phase: "Implementation (2025)",
    goal: "NEP 2020 Academic Framework Integration",
    description: "Launch the Academic Bank of Credits (ABC) portal for all nursing and pharmacy students. Expand the advanced High-Fidelity Simulation Lab across Kalyani and Barasat campuses for 500+ students."
  },
  {
    phase: "Global Horizons (2026-2027)",
    goal: "European Clinical Exchange Programs",
    description: "Activate the Future Nurses Germany MoU to send the first cohort of 50 GNM/B.Sc students to partner hospitals in Munich and Berlin for a 6-month clinical residency."
  },
  {
    phase: "Infrastructure (2028-2030)",
    goal: "Nirmala Health City Development",
    description: "Phase 1 construction of a new 500-bed oncology and cardiology block on the newly acquired 5-acre adjacent campus. Initial regulatory filings submitted to NMC."
  }
];

// Hydrate Data from Media Registry
export const institutesData = institutesDataRaw.map(inst => {
  const reg = (mediaRegistry.institutes as any)[inst.slug];
  return {
    ...inst,
    videoLink: reg?.video || inst.videoLink,
    images: reg?.images || inst.images
  };
});
