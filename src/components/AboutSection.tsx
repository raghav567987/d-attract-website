import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  Heart,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Team Members', description: 'Talented professionals' },
    { icon: Award, number: '200+', label: 'Projects Delivered', description: 'Successful completions' },
    { icon: Clock, number: '5+', label: 'Years Experience', description: 'Industry expertise' },
    { icon: Heart, number: '98%', label: 'Client Satisfaction', description: 'Happy customers' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1-5?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in digital transformation.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Tech innovator specializing in scalable architectures.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer creating beautiful user experiences.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      bio: 'Growth expert with proven track record in digital marketing.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We go above and beyond to deliver exceptional results.',
      icon: '🎯'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback throughout every project phase.',
      icon: '💎'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay updated with industry best practices.',
      icon: '📚'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">👥 About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="text-gradient">Dream Team</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a passionate team of digital experts committed to transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground">
              Founded in 2019, Digital Attract began as a small team with a big vision: to help businesses thrive in the digital age. What started as a passion project has grown into a full-service digital agency serving clients worldwide.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that great digital experiences should be accessible to businesses of all sizes. That's why we combine enterprise-level expertise with personalized service to deliver solutions that truly make a difference.
            </p>
            <Button size="lg" variant="outline" className="glass border-border hover:border-primary hover-glow">
              Learn More About Our Journey
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-border p-6 text-center hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass border-border p-6 text-center hover-glow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass border-border overflow-hidden hover-glow group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.linkedin && (
                      <Button size="sm" variant="secondary" className="glass w-8 h-8 p-0">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="secondary" className="glass w-8 h-8 p-0">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="secondary" className="glass w-8 h-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1 text-foreground">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass border-border p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want to <span className="text-gradient">Join Our Team</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for digital innovation and client success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover-glow">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="glass border-border hover:border-primary">
                Send Your Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;