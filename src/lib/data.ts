export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  detailedDescription: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  badge: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "mindfulness-meditation",
    title: "Mindfulness Meditation",
    description:
      "Cultivate present-moment awareness with guided mindfulness practices suitable for all levels.",
    icon: "faBrain",
    image: "/images/services/mindfulness-meditation.jpg",
    features: [
      "Body scan meditations",
      "Mindful breathing",
      "Present-moment awareness",
      "Non-judgmental observation",
    ],
    detailedDescription:
      "Our mindfulness meditation program teaches you to observe thoughts and sensations without judgment, reducing stress and increasing clarity. Suitable for complete beginners and experienced practitioners alike, these sessions build the foundation for a calmer, more centered life.",
  },
  {
    slug: "breathwork",
    title: "Breathwork & Pranayama",
    description:
      "Harness the power of your breath to reduce stress, boost energy, and improve focus.",
    icon: "faWind",
    image: "/images/services/breathwork.jpg",
    features: [
      "Diaphragmatic breathing",
      "Box breathing",
      "Alternate nostril breathing",
      "Energizing breath techniques",
    ],
    detailedDescription:
      "Breathwork is one of the most powerful tools for regulating the nervous system. Our sessions guide you through ancient pranayama techniques and modern breathwork practices to release tension, increase vitality, and achieve deep states of relaxation.",
  },
  {
    slug: "guided-visualization",
    title: "Guided Visualization",
    description:
      "Journey through calming mental landscapes to unlock creativity and inner peace.",
    icon: "faEye",
    image: "/images/services/guided-visualization.jpg",
    features: [
      "Nature visualizations",
      "Healing light journeys",
      "Goal manifestation",
      "Inner sanctuary creation",
    ],
    detailedDescription:
      "Guided visualization uses the power of imagination to create positive mental and emotional states. Through carefully crafted narrative journeys, you'll explore peaceful landscapes, connect with your inner wisdom, and plant seeds for personal transformation.",
  },
  {
    slug: "stress-reduction",
    title: "Stress Reduction",
    description:
      "Evidence-based MBSR techniques to manage stress and build emotional resilience.",
    icon: "faHeartPulse",
    image: "/images/services/stress-reduction.jpg",
    features: [
      "MBSR curriculum",
      "Stress response awareness",
      "Coping strategies",
      "Resilience building",
    ],
    detailedDescription:
      "Based on Jon Kabat-Zinn's Mindfulness-Based Stress Reduction program, this service combines meditation, gentle yoga, and psychoeducation to help you understand and transform your relationship with stress. Backed by decades of clinical research.",
  },
  {
    slug: "sleep-meditation",
    title: "Sleep Meditation",
    description:
      "Drift into restful sleep with soothing guided meditations and body relaxation.",
    icon: "faMoon",
    image: "/images/services/sleep-meditation.jpg",
    features: [
      "Progressive relaxation",
      "Sleep stories",
      "Nighttime yoga nidra",
      "Bedtime rituals",
    ],
    detailedDescription:
      "Struggling with sleep? Our sleep meditation program combines progressive muscle relaxation, guided imagery, and yoga nidra to quiet the mind and prepare the body for deep, restorative sleep. Wake up feeling refreshed and renewed.",
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness",
    description:
      "Bring mindfulness to your workplace with tailored programs that boost morale and productivity.",
    icon: "faBuilding",
    image: "/images/services/corporate-wellness.jpg",
    features: [
      "Team workshops",
      "Lunch & learn sessions",
      "Executive coaching",
      "Custom wellness programs",
    ],
    detailedDescription:
      "Our corporate wellness programs bring the benefits of meditation directly to your team. From lunchtime mindfulness sessions to multi-day retreats, we design programs that reduce burnout, improve focus, and foster a positive workplace culture.",
  },
  {
    slug: "walking-meditation",
    title: "Walking Meditation",
    description:
      "Combine gentle movement with mindful awareness in nature-based walking sessions.",
    icon: "faPersonWalking",
    image: "/images/services/walking-meditation.jpg",
    features: [
      "Nature immersion",
      "Mindful walking techniques",
      "Sensory awareness",
      "Group and solo options",
    ],
    detailedDescription:
      "Walking meditation bridges the gap between formal sitting practice and everyday life. Held in parks and nature trails, these sessions teach you to bring mindful awareness to each step, connecting body, mind, and the natural world.",
  },
  {
    slug: "loving-kindness",
    title: "Loving-Kindness",
    description:
      "Develop compassion and emotional warmth through Metta meditation practices.",
    icon: "faHandHoldingHeart",
    image: "/images/services/loving-kindness.jpg",
    features: [
      "Self-compassion practices",
      "Loving-kindness for others",
      "Difficult emotions work",
      "Gratitude cultivation",
    ],
    detailedDescription:
      "Loving-kindness meditation (Metta) nurtures the heart's capacity for unconditional love and compassion. Through systematic practice, you'll cultivate warmth toward yourself, loved ones, strangers, and ultimately all beings — transforming how you relate to the world.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Serenity Corporate Retreat",
    description:
      "A transformative 3-day mindfulness retreat for a leading tech company, combining meditation, breathwork, and team-building activities.",
    category: "Corporate",
    image: "/images/projects/serenity-retreat.jpg",
  },
  {
    title: "Mindful Schools Program",
    description:
      "A comprehensive meditation program implemented across 5 local schools, reaching over 2,000 students with age-appropriate mindfulness practices.",
    category: "Education",
    image: "/images/projects/mindful-schools.jpg",
  },
  {
    title: "Sleep Better Workshop",
    description:
      "A 6-week sleep meditation workshop series helping participants overcome insomnia and establish healthy sleep patterns.",
    category: "Health",
    image: "/images/projects/sleep-better.jpg",
  },
  {
    title: "Anxiety Relief Group",
    description:
      "An ongoing guided visualization group providing tools and support for managing anxiety in a safe, compassionate environment.",
    category: "Mental Health",
    image: "/images/projects/anxiety-relief.jpg",
  },
  {
    title: "Wellness Wednesdays",
    description:
      "Weekly corporate lunch meditation sessions that have become a beloved institution, with consistent attendance and measurable stress reduction.",
    category: "Corporate",
    image: "/images/projects/wellness-wednesdays.jpg",
  },
  {
    title: "Breathwork for Athletes",
    description:
      "Partnered with local sports teams to integrate breathwork into training regimens, improving endurance, recovery, and mental focus.",
    category: "Sports",
    image: "/images/projects/breathwork-athletes.jpg",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "StillMind transformed my relationship with anxiety. The guided visualizations are incredibly powerful.",
    name: "Sarah K.",
    role: "Teacher",
  },
  {
    quote:
      "Our team's productivity and morale improved dramatically after the corporate wellness program.",
    name: "James M.",
    role: "CEO",
  },
  {
    quote:
      "I've struggled with insomnia for years. The sleep meditation program changed everything.",
    name: "Linda R.",
    role: "Nurse",
  },
  {
    quote:
      "The walking meditation sessions in nature are the highlight of my week.",
    name: "David T.",
    role: "Developer",
  },
  {
    quote:
      "Michelle's voice and guidance create a truly transformative experience.",
    name: "Priya S.",
    role: "Yoga Instructor",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Michelle Torres",
    role: "Founder & Lead Instructor",
    bio: "Certified MBSR Teacher with 15 years of meditation experience. Michelle has trained at leading mindfulness centers worldwide and brings a warm, grounded presence to every session.",
  },
  {
    name: "David Chen",
    role: "Breathwork Specialist",
    bio: "Wim Hof Method Instructor and Yoga Alliance ERYT-500 certified teacher. David combines ancient breathing traditions with modern science to unlock the body's innate healing potential.",
  },
  {
    name: "Aisha Okafor",
    role: "Corporate Wellness Director",
    bio: "Former Google wellness lead and ICF Certified Coach. Aisha designs evidence-based corporate programs that transform workplace culture and boost employee wellbeing.",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Do I need prior meditation experience?",
    a: "Not at all. Our programs are designed for complete beginners and experienced practitioners alike. Every session includes clear guidance and options for all comfort levels.",
  },
  {
    q: "What should I bring to a session?",
    a: "Just comfortable clothing and an open mind. We provide mats, cushions, and all materials needed for a comfortable practice.",
  },
  {
    q: "How long are typical sessions?",
    a: "Sessions range from 30 minutes to 90 minutes depending on the program. We'll help you choose the right duration for your schedule and goals.",
  },
  {
    q: "Can meditation help with anxiety?",
    a: "Yes. Clinical research shows regular meditation significantly reduces anxiety symptoms. Many of our clients report noticeable improvements within weeks of starting practice.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes, all our programs are available both in-person and virtually. Our online sessions use high-quality video and audio to create an immersive experience from anywhere.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Drop-In",
    price: "$25/session",
    description:
      "Perfect for trying out our offerings with no long-term commitment.",
    features: [
      "Single session access",
      "All group classes",
      "No commitment",
    ],
    popular: false,
    badge: "",
  },
  {
    name: "Monthly",
    price: "$89/month",
    description:
      "Our most popular plan for regular practitioners seeking consistency and growth.",
    features: [
      "Unlimited group classes",
      "2 private sessions per month",
      "Priority booking",
    ],
    popular: true,
    badge: "Popular",
  },
  {
    name: "Annual",
    price: "$799/year",
    description:
      "The ultimate package for dedicated practitioners — save 25% vs monthly.",
    features: [
      "Everything in Monthly",
      "Quarterly retreat access",
      "1-on-1 coaching sessions",
      "Exclusive workshops",
    ],
    popular: false,
    badge: "Best Value",
  },
  {
    name: "Corporate",
    price: "Custom",
    description:
      "Tailored wellness solutions for teams and organizations of any size.",
    features: [
      "Tailored programs",
      "Team workshops",
      "Progress reports",
      "Dedicated instructor",
    ],
    popular: false,
    badge: "",
  },
];
