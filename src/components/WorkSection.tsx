import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ecommercePreview from '@/assets/ecommerce-preview.jpg';
import marketingPreview from '@/assets/marketing-preview.jpg';

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      description: 'Modern e-commerce solution with advanced analytics and seamless user experience.',
      image: ecommercePreview,
      technologies: ['React', 'Node.js', 'Stripe', 'AWS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Marketing Dashboard',
      category: 'marketing',
      description: 'Comprehensive marketing analytics platform with real-time reporting.',
      image: marketingPreview,
      technologies: ['Vue.js', 'Python', 'Chart.js', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'branding',
      description: 'Complete brand identity and digital presence for startup company.',
      image: ecommercePreview,
      technologies: ['Figma', 'Adobe CC', 'WordPress', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'mobile',
      description: 'Cross-platform mobile application with native performance.',
      image: marketingPreview,
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'branding', name: 'Branding' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">💼 Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our</span> Latest Work
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-primary to-accent hover-glow' 
                  : 'glass border-border hover:border-primary'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass border-border hover:border-primary transition-all duration-500 overflow-hidden group hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="glass">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="glass">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 glass border-border hover:border-primary">
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="glass border-border hover:border-primary">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass border-border hover:border-primary hover-glow">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;