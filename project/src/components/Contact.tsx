import React from 'react';
import { Instagram, Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card p-4 flex items-center gap-3 hover:border-purple-500 transition-all"
    whileHover={{ y: -2 }}
  >
    <Icon className="w-5 h-5 text-purple-500" />
    <span>{label}</span>
  </motion.a>
);

const Contact = () => {
  const socials = [
    { icon: Github, href: "https://github.com/TexZ-GenZ/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshusamal/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/PriyanshuorTexz", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/_priyanshu_samal/", label: "Instagram" },
    { icon: Globe, href: "https://priyanshu-samal.vercel.app/", label: "Portfolio" },
    { icon: Mail, href: "mailto:priyanshusamal21@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design, or have a project in mind? Let's connect.
        </p>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {socials.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SocialLink {...social} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;