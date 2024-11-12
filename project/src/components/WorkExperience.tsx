import React from 'react';
import { Star, Lightbulb, Palette, Headphones } from 'lucide-react';

const ExperienceCard = ({ icon: Icon, title, description }: any) => (
  <div className="card p-6 flex items-start gap-4 hover:border-purple-500 transition-colors">
    <div className="p-2 rounded-lg bg-purple-500/10">
      <Icon className="w-6 h-6 text-purple-500" />
    </div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <button className="mt-4 text-sm text-purple-500 hover:text-purple-400">
        LEARN MORE
      </button>
    </div>
  </div>
);

const WorkExperience = () => {
  const experiences = [
    {
      icon: Star,
      title: "CIB on the Mobile",
      description: "Take your client onboard seamlessly by our amazing tool of digital onboard process."
    },
    {
      icon: Lightbulb,
      title: "CIB on the Mobile",
      description: "Take your client onboard seamlessly by our amazing tool of digital onboard process."
    },
    {
      icon: Palette,
      title: "CIB on the Mobile",
      description: "Take your client onboard seamlessly by our amazing tool of digital onboard process."
    },
    {
      icon: Headphones,
      title: "CIB on the Mobile",
      description: "Take your client onboard seamlessly by our amazing tool of digital onboard process."
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;