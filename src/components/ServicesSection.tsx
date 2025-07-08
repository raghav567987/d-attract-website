import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  Search, 
  Smartphone, 
  TrendingUp, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Scalable Architecture'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging experiences and drives conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and organic traffic with our proven SEO strategies.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics Tracking'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that grow your brand and increase revenue.',
      features: ['Social Media Marketing', 'Content Marketing', 'Email Campaigns', 'PPC Advertising'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Brand Strategy',
      description: 'Build a strong brand identity that resonates with your target audience.',
      features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Market Positioning'],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">🚀 What We Do</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive digital solutions that transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass border-border hover:border-primary transition-all duration-500 overflow-hidden group hover-glow p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full glass border-border hover:border-primary group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass border-border p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover-glow">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="glass border-border hover:border-primary">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;