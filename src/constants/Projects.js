export const projects = [
  {
    id: "aethergram",
    title: "Aethergram",
    description: "A privacy-first social network using homomorphic encryption for secure content sharing.",
    longDescription:
      "Aethergram is a decentralized social media platform that empowers users to share encrypted content without compromising privacy. Built with homomorphic encryption and IPFS, users can interact anonymously while maintaining data ownership. Features include encrypted comments, anonymous likes, and community moderation.",
    technologies: ["ZK-Proofs", "Homomorphic Encryption", "Next.js", "TypeScript", "OrbitDB", "TailwindCSS", "IPFS", "JWT"],
    achievements: [
      "Reached 2,000+ users in the first month with zero data leaks",
      "Implemented end-to-end encryption across all user interactions",
      "Integrated zero-knowledge login to eliminate password vulnerabilities",
      "Reduced backend load by 40% using decentralized indexing"
    ],
    image: "https://i.pinimg.com/1200x/75/30/83/7530839b68fb57aae3148c61e1cc5e18.jpg",
    github: "https://github.com/demo/aethergram",
    liveUrl: "https://aethergram.io",
    featured: true
  },
  {
    id: "beastforge",
    title: "BeastForge",
    description: "Forge, train, and battle AI-generated creatures in an on-chain fantasy world.",
    longDescription:
      "BeastForge is a gamified platform where players create unique beasts using generative AI, train them with reinforcement learning, and compete in real-time battles. The game leverages blockchain for creature ownership and a custom token economy for upgrades and trades.",
    technologies: ["TensorFlow", "Unity", "C#", "Polygon", "Next.js", "Reinforcement Learning", "TailwindCSS", "Socket.IO"],
    achievements: [
      "Generated 10,000+ unique creatures with GANs",
      "Launched token-based upgrade system on Polygon",
      "Built real-time battle system with matchmaking logic",
      "Boosted user retention by 65% through seasonal events"
    ],
    image: "https://i.pinimg.com/736x/4c/0c/27/4c0c273a2833dc32fc3267819990530e.jpg",
    github: "https://github.com/demo/beastforge",
    featured: true
  },
  {
    id: "astrofair",
    title: "AstroFair",
    description: "An interplanetary trade simulator with real orbital mechanics and smart contracts.",
    longDescription:
      "AstroFair is a futuristic economic simulator that mimics real planetary systems for trading resources. Players negotiate and sign smart contracts that execute based on planetary positions and time delays. Built using orbital physics libraries and blockchain logic.",
    technologies: ["Rust", "WASM", "Solana", "Next.js", "WebAssembly", "Orbit Mechanics", "Three.js"],
    achievements: [
      "Simulated gravity-based delays for 8 planetary colonies",
      "Automated trade contracts via Solana smart contracts",
      "Gamified physics-driven economy boosted engagement by 80%",
      "Developed interactive 3D trade dashboards using Three.js"
    ],
    image: "https://i.pinimg.com/1200x/2e/8c/db/2e8cdb845913bae7fad58959bc501202.jpg",
    github: "https://github.com/demo/astrofair",
    featured: false
  },
  {
    id: "voltview",
    title: "VoltView",
    description: "A smart dashboard for urban energy grids with real-time fault prediction.",
    longDescription:
      "VoltView collects data from smart meters across city grids and analyzes it using machine learning to detect anomalies and predict system failures. Features include live heatmaps, automated alerts, and energy optimization suggestions.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "Grafana", "InfluxDB", "MQTT", "Docker", "TailwindCSS"],
    achievements: [
      "Reduced power outage incidents by 45% through proactive alerts",
      "Achieved 91% accuracy in predicting grid overloads",
      "Integrated SMS/Email notifications for grid anomalies",
      "Live visualization improved technician response time by 35%"
    ],
    image: "https://i.pinimg.com/736x/1c/70/62/1c7062a01a541552935d7c797ee31188.jpg",
    github: "https://github.com/demo/voltview",
    liveUrl: "https://voltview.energy",
    featured: true
  },
  {
    id: "chirpalytics",
    title: "ChirpAlytics",
    description: "Real-time Twitter trend analysis using LLMs and sentiment scoring.",
    longDescription:
      "ChirpAlytics processes live Twitter data to summarize threads, detect trends, and analyze public sentiment. It uses large language models and semantic embeddings to track influencers, viral content, and anomalies in online discourse.",
    technologies: ["OpenAI", "LangChain", "Python", "Next.js", "Supabase", "TailwindCSS", "Redis", "Pinecone", "Twitter API"],
    achievements: [
      "Processed over 1 million tweets daily with low latency",
      "Predicted trending hashtags with 89% precision",
      "Auto-summarized long threads in under 5 seconds",
      "Bot detection accuracy improved by 41% using unsupervised clustering"
    ],
    image: "https://i.pinimg.com/1200x/9f/0b/9a/9f0b9a39fbb3a2df6aa456a7d8c1b758.jpg",
    github: "https://github.com/demo/chirpalytics",
    liveUrl: "https://chirpalytics.ai",
    featured: false
  },
  {
    id: "quantumgarden",
    title: "QuantumGarden",
    description: "An experimental game where your plants grow in quantum superposition.",
    longDescription:
      "QuantumGarden visualizes quantum behavior by allowing players to grow plants in overlapping states. As users observe or interact, quantum states collapse into different outcomes, creating a new kind of non-deterministic gameplay.",
    technologies: ["React", "QuantumJS", "TypeScript", "Canvas API", "Framer Motion"],
    achievements: [
      "Simulated quantum state transitions in a 2D game world",
      "Implemented nondeterministic logic for gameplay events",
      "Reached 50K+ downloads in its first month",
      "Localized to 3 languages with real-time state mapping"
    ],
    image: "https://i.pinimg.com/736x/d9/3c/47/d93c47b2d860f617b57574636915d782.jpg",
    github: "https://github.com/demo/quantumgarden",
    featured: false
  },
  {
    id: "vaultlock",
    title: "VaultLock",
    description: "Physical locker system with biometric and WebAuthn authentication.",
    longDescription:
      "VaultLock bridges digital security with real-world access. Users can unlock physical lockers using biometric scans or WebAuthn from their browsers. It integrates public key infrastructure, embedded firmware, and a web dashboard for management.",
    technologies: ["WebAuthn", "Rust", "ESP32", "React", "TailwindCSS", "Node.js", "SQLite"],
    achievements: [
      "Replaced key-based systems in 5 pilot coworking spaces",
      "Encrypted firmware built in Rust for secure access",
      "Web-based dashboard supported over 200 lockers",
      "Biometric unlock reduced access time by 70%"
    ],
    image: "https://i.pinimg.com/1200x/63/58/fd/6358fd00b3770405d1a688aefc2d69ca.jpg",
    github: "https://github.com/demo/vaultlock",
    featured: false
  },
  {
    id: "mindmesh",
    title: "MindMesh",
    description: "AI-enhanced mind mapping tool for real-time collaborative ideation.",
    longDescription:
      "MindMesh helps users build and navigate complex idea networks. Using semantic embeddings and vector search, it recommends relevant nodes, links thoughts intelligently, and allows real-time collaboration across teams.",
    technologies: ["Next.js", "OpenAI Embeddings", "Vector DB", "TailwindCSS", "Socket.IO", "Zustand"],
    achievements: [
      "Suggested node linking with 93% contextual accuracy",
      "Live collaboration used by over 700 students in beta",
      "Exported maps to multiple formats including PNG and Markdown",
      "Designed for accessibility with keyboard-first navigation"
    ],
    image: "https://i.pinimg.com/736x/ab/48/f1/ab48f186dc489030ba8e2f6911e928f6.jpg",
    github: "https://github.com/demo/mindmesh",
    featured: false
  },
  {
    id: "studyflux",
    title: "StudyFlux",
    description: "A social study timer app with real-time group tracking and gamification.",
    longDescription:
      "StudyFlux helps students stay productive together. Users join virtual study rooms, use synced Pomodoro timers, track progress, and earn rewards. Features include leaderboards, video check-ins, and shared study goals.",
    technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "TailwindCSS", "GraphQL"],
    achievements: [
      "Tracked over 15,000 study hours in its first 2 months",
      "Implemented synchronized timers with WebSocket support",
      "Google Calendar integration boosted event attendance by 40%",
      "Gamified experience increased average session length by 3x"
    ],
    image: "https://i.pinimg.com/736x/f0/78/8f/f0788ffa1dc969886846d054961f94aa.jpg",
    github: "https://github.com/demo/studyflux",
    featured: false
  }
];
