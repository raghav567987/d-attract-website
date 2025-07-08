import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CreditCard, 
  Globe, 
  Target, 
  Megaphone,
  ArrowRight,
  Check
} from 'lucide-react';
import ecommercePreview from '@/assets/ecommerce-preview.jpg';
import marketingPreview from '@/assets/marketing-preview.jpg';

const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState('ecommerce');

  const solutions = {
    ecommerce: {
      title: 'E-commerce Solutions',
      subtitle: 'Build, Launch, and Scale Your Online Store',
      description: 'Complete e-commerce ecosystem that drives sales and delivers exceptional shopping experiences.',
      image: ecommercePreview,
      features: [
        'Custom Store Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Mobile-First Design',
        'SEO Optimization',
        'Analytics & Reporting',
        'Multi-channel Selling',
        'Customer Support Tools'
      ],
      benefits: [
        { icon: ShoppingCart, title: 'Increased Sales', desc: 'Average 40% boost in conversion rates' },
        { icon: Users, title: 'Better UX', desc: 'Improved customer satisfaction and retention' },
        { icon: BarChart3, title: 'Data Insights', desc: 'Real-time analytics and reporting' },
        { icon: CreditCard, title: 'Secure Payments', desc: 'Multiple payment options with security' }
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe'],
      caseStudy: {
        client: 'Fashion Retailer',
        result: '300% increase in online sales within 6 months',
        metric: '40% higher conversion rate'
      }
    },
    marketing: {
      title: 'Marketing Agency Solutions',
      subtitle: 'Data-Driven Marketing That Delivers Results',
      description: 'Comprehensive marketing strategies and campaigns that build brand awareness and drive growth.',
      image: marketingPreview,
      features: [
        'Digital Strategy Planning',
        'Content Marketing',
        'Social Media Management',
        'PPC Campaign Management',
        'Email Marketing Automation',
        'Influencer Partnerships',
        'Brand Development',
        'Performance Analytics'
      ],
      benefits: [
        { icon: Target, title: 'Targeted Reach', desc: 'Precision audience targeting and segmentation' },
        { icon: TrendingUp, title: 'ROI Growth', desc: 'Average 250% return on marketing investment' },
        { icon: Megaphone, title: 'Brand Awareness', desc: 'Enhanced visibility across all channels' },
        { icon: Globe, title: 'Global Reach', desc: 'Expand your market internationally' }
      ],
      technologies: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'Analytics', 'SEMrush'],
      caseStudy: {
        client: 'Tech Startup',
        result: '500% increase in qualified leads',
        metric: '180% growth in brand awareness'
      }
    }
  };

  const currentSolution = solutions[activeSolution];

  return (
    <section id="solutions" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">💡 Our Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Specialized</span> Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-specific solutions designed to address your unique challenges and opportunities.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2 inline-flex">
            {Object.keys(solutions).map((key) => (
              <Button
                key={key}
                variant={activeSolution === key ? "default" : "ghost"}
                className={`${
                  activeSolution === key 
                    ? 'bg-gradient-to-r from-primary to-accent hover-glow' 
                    : 'hover:bg-white/5'
                } px-8 py-3`}
                onClick={() => setActiveSolution(key)}
              >
                {key === 'ecommerce' ? (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    E-commerce
                  </>
                ) : (
                  <>
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Marketing Agency
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Solution Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {currentSolution.title}
              </h3>
              <h4 className="text-xl text-gradient mb-4">
                {currentSolution.subtitle}
              </h4>
              <p className="text-lg text-muted-foreground">
                {currentSolution.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h5 className="font-semibold mb-3 text-foreground">Technologies We Use:</h5>
              <div className="flex flex-wrap gap-2">
                {currentSolution.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium glass rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-border hover:border-primary">
                View Case Study
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-6">
            {/* Main Image */}
            <Card className="glass border-border overflow-hidden hover-glow">
              <img 
                src={currentSolution.image} 
                alt={currentSolution.title}
                className="w-full h-64 object-cover"
              />
            </Card>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentSolution.benefits.map((benefit, index) => (
                <Card key={index} className="glass border-border p-4 hover-glow">
                  <benefit.icon className="h-8 w-8 text-primary mb-2" />
                  <h6 className="font-semibold text-sm mb-1">{benefit.title}</h6>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>

            {/* Case Study Highlight */}
            <Card className="glass border-primary/20 p-6">
              <div className="text-center">
                <h6 className="font-semibold text-primary mb-2">Success Story</h6>
                <p className="text-sm text-muted-foreground mb-3">{currentSolution.caseStudy.client}</p>
                <div className="text-2xl font-bold text-gradient mb-1">
                  {currentSolution.caseStudy.result}
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentSolution.caseStudy.metric}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;