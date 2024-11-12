import { Code, Database, Brain, Smartphone, Cloud, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, skills }: any) => (
  <motion.div 
    className="card p-6 flex items-start gap-4 hover:border-purple-500 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="p-2 rounded-lg bg-purple-500/10">
      <Icon className="w-6 h-6 text-purple-500" />
    </div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, index: number) => (
          <span 
            key={index}
            className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skillset = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "Redux", "Framer Motion", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "FastAPI"]
    },
    {
      icon: Brain,
      title: "AI & ML",
      skills: ["TensorFlow", "Deep Learning", "OpenCV", "PyTorch"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Cross-platform Development"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Amazon AWS", "Google Cloud", "Vercel"]
    },
    {
      icon: Terminal,
      title: "Programming",
      skills: ["C++", "JavaScript", "TypeScript", "Python"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Skillset</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skillset;