import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@digitalattract.com',
      description: 'Drop us a line anytime',
      action: 'mailto:hello@digitalattract.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
      action: '#'
    }
  ];

  const services = [
    'Web Development',
    'E-commerce Solutions',
    'Digital Marketing',
    'Mobile Development',
    'UI/UX Design',
    'SEO Optimization',
    'Brand Strategy',
    'Consulting'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">📞 Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Start Your <span className="text-gradient">Digital Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? We'd love to hear about your project and discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass border-border p-4 hover-glow group cursor-pointer">
                    <a href={info.action} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-gradient transition-all">
                          {info.title}
                        </h4>
                        <p className="text-sm font-medium text-primary">{info.details}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-6">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full glass border-border hover:border-primary hover-glow group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full glass border-border hover:border-primary hover-glow group"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat Support
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-border p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Send Us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                    <Input 
                      id="firstName"
                      required
                      placeholder="John"
                      className="mt-2 glass border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                    <Input 
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="mt-2 glass border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="mt-2 glass border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-2 glass border-border focus:border-primary"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <Label htmlFor="company" className="text-foreground">Company Name</Label>
                  <Input 
                    id="company"
                    placeholder="Your Company"
                    className="mt-2 glass border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Services Interested In</Label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          value={service}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-foreground">Project Budget</Label>
                  <select 
                    id="budget"
                    className="mt-2 w-full px-3 py-2 glass border border-border rounded-md focus:border-primary transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                  <Textarea 
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="mt-2 glass border-border focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive maintenance and support packages to keep your digital assets running smoothly after launch."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We collaborate seamlessly with in-house teams and can adapt to your preferred workflows and communication tools."
              },
              {
                question: "What's your pricing structure?",
                answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements based on your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass border-border p-6 hover-glow">
                <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;