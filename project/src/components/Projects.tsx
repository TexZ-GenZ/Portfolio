import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, github, preview, tags }: any) => (
  <motion.div 
    className="card p-6 flex flex-col hover:border-purple-500 transition-all duration-300 h-full"
    whileHover={{ y: -5 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex gap-4 mt-auto">
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      <a 
        href={preview} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
      >
        <ExternalLink className="w-4 h-4" />
        Live Preview
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "SAR Image Colorization",
      description: "Deep learning model for colorizing SAR (Synthetic Aperture Radar) imagery using WGAN",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/TexZ-GenZ/SAR-image-colorization-using-Deep-Learning",
      // preview: "https://sar-colorization.demo.com",
      tags: ["Python", "TensorFlow", "Deep Learning", "WGAN"]
    },
    {
      title: "End-to-End Encrypted Chatting application using React Native",
      description: "Secure messaging application with end-to-end encryption, real-time updates, and modern UI.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/aditisahu1234/KittyCode",
      // preview: "https://secure-chat.demo.com",
      tags: ["React", "Node.js", "WebSocket", "Encryption", "Signal Protocol"]
    },
    {
      title: "Resume AI",
      description: "AI-powered resume builder that can fetch info from Github and chat based designing interface.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/TexZ-GenZ",
      // preview: "https://resume-ai.demo.com",
      tags: [ "React", "Next.js", "Groq", "Node.js"]
    },
    {
      title: "YouTube Thumbnail Generator",
      description: "AI-powered tool for generating engaging YouTube thumbnails from video and editing them along with text behind object and background removal.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/TexZ-GenZ/YTThumbnail",
      // preview: "https://thumbnail-gen.demo.com",
      tags: ["React", "Next.js", "Llama", "Bert", "HuggingFace" , "OpenCV"]
    },
    {
      title: "LatexAI",
      description: "AI assistant for LaTeX document creation and formatting.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/TexZ-GenZ/LatexAI/",
      preview: "https://latex-ai.vercel.app/",
      tags: ["TypeScript", "Vite", "Llama", "Node.js"]
    },
    {
      title: "Flappy Bird using Head Tracking movement.",
      description: "A flappy bird game that can be played by moving the head of the user. Can be used with pushups for fitness. ",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/DivyanshuShekhar55/flap-py",
      // preview: "https://virtual-mouse.demo.com",
      tags: ["Python", "OpenCV", "HaarCascade", "PyGame"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;