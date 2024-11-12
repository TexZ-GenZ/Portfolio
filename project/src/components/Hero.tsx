import { Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import myImage from '../assets/images/myimg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden mt-24 md:mt-0">
      <div className="hero-glow absolute inset-0 z-0" />
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-2">
            Hello! I Am <span className="text-purple-500">Priyanshu Samal</span>
          </p>
          <h1 className="text-5xl font-bold mb-4">
            A Full Stack Developer{' '}
            <div className="inline-block">
              who builds amazing
              <br />
              <span className="text-purple-500">digital experiences</span>
            </div>
          </h1>
          <p className="text-gray-400 text-sm">
            IIIT-BH CSE '27 | MERN | Next.js | Deep Learning
          </p>
          
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-2">Backend Developer Intern</h2>
            <p className="text-lg mb-8">
              Currently at{' '}
              <a href="#" className="text-purple-500 hover:underline">Aveti Learning</a>
            </p>
            
            <p className="text-gray-300 max-w-xl">
              Passionate about building scalable applications and exploring new technologies.
              Experienced in MERN stack, Next.js, and Deep Learning. Always eager to learn and grow.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-purple-500/30 md:flex">
            <img 
              src={myImage}
              alt="Priyanshu Samal" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 glow md:flex">
            <Laptop className="w-32 h-32 text-purple-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;