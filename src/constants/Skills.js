export const skills = {
    'Languages': [
      { name: 'Java', category: 'Languages', logoKey: 'java' },
      { name: 'Python', category: 'Languages', logoKey: 'python' },
      { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
      { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
      { name: 'Dart', category: 'Languages', logoKey: 'dart' },
      { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
      { name: 'Solidity', category: 'Languages', logoKey: 'solidity' },
      { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
      { name: 'PHP', category: 'Languages', logoKey: 'php' },
      { name: 'R', category: 'Languages', logoKey: 'r'},
      { name: 'C#', category: 'Languages', logoKey: 'csharp' }
    ],
    'Frameworks/Libraries': [
      { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
      { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
      { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
      { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
      { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
      { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
      { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
      { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
      { name: 'Angular', category: 'Frameworks/Libraries', logoKey: 'angularjs' },
      { name: 'Django', category: 'Frameworks/Libraries', logoKey: 'django' },
      { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },
      { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
      { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'react' },
      { name: 'Laravel', category: 'Frameworks/Libraries', logoKey: 'laravel' },
    ],
    'ML/Data': [
      { name: 'TensorFlow', category: 'ML/Data', logoKey: 'tensorflow' },
      { name: 'PyTorch', category: 'ML/Data', logoKey: 'pytorch' },
      { name: 'Supervised Learning', category: 'ML/Data', logoKey: 'python' },
      { name: 'Neural Networks', category: 'ML/Data', logoKey: 'python' },
    ],
    'Cloud/DevOps': [
      { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
      { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
      { name: 'Kubernetes', category: 'Cloud/DevOps', logoKey: 'kubernetes' },
      { name: 'Jenkins', category: 'Cloud/DevOps', logoKey: 'jenkins' },
      { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
      { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
      { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
    ],
    'Concepts': [
      { name: 'System Design', category: 'Concepts', logoKey: 'github' },
      { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
      { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
      { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
      { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
      { name: 'Security', category: 'Concepts', logoKey: 'github' },
    ],
  };
  
  export const getAllSkills = () => {
    return Object.values(skills).flat();
  };
  
  export const getCategories = () => {
    return Object.keys(skills);
  };
  