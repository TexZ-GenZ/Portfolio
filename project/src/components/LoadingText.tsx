import { motion } from 'framer-motion';
import { Code, Sparkles, Brain } from 'lucide-react';

const LoadingText = () => {
  const phrases = [
    {
      title: "Welcome To My World",
      subtitle: "I'm Priyanshu Samal",
      icon: Code
    },
    {
      title: "Invitation to my Space",
      subtitle: "From Priyanshu Samal",
      icon: Brain
    },
    {
      title: "Full Stack Magician",
      subtitle: "I am Priyanshu Samal",
      icon: Sparkles
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const Icon = randomPhrase.icon;

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-[#0A041C]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="text-center space-y-6">
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Icon className="w-16 h-16 text-purple-500 animate-pulse" />
        </motion.div>
        <motion.h1 
          variants={itemVariants}
          className="text-5xl font-bold mb-4 gradient-text"
        >
          {randomPhrase.title}
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400"
        >
          {randomPhrase.subtitle}
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-2 mt-8"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingText;