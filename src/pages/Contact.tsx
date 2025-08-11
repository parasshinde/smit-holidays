import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save query to Supabase
      const { error } = await supabase
        .from('customer_queries')
        .insert({
          name: formData.name,
          email: formData.email || null,
          phone_number: formData.phone || null,
          destination: formData.destination || null,
          travel_date: formData.travelDate || null,
          travelers: formData.travelers ? parseInt(formData.travelers) : null,
          budget_range: formData.budget || null,
          message: formData.message || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        travelers: '1',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving query:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9011948181', '+91 9011757373'],
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['smitholidays24@gmail.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Shop No 15, Westend Shopping Building, opp. D\'mart, Ward No. 8, Aundh Gaon, Aundh', 'Pune, Maharashtra 411007, India'],
      description: '10 AM - 7 PM, Monday to Saturday, Sunday Holiday'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 10 AM - 7 PM', 'Sunday: Holiday'],
      description: 'Extended hours during peak season'
    }
  ];

  const destinations = [
    'India', 'Europe', 'Maldives', 'Dubai', 'Thailand', 'Bali', 'Switzerland', 'Singapore', 'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,00,000', 
    '₹2,00,000 - ₹5,00,000', 'Above ₹5,00,000'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-travel">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero text-gradient mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to plan your dream vacation? Get in touch with our travel experts and 
              let us create an unforgettable journey tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-travel p-6 text-center hover:shadow-hover">
                <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-travel">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-sand/20">
        <div className="container-travel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-travel p-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Plan My Trip</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our travel experts will create a personalized 
                itinerary for your perfect vacation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                    >
                      <option value="">Select destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requirements / Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-smooth resize-none"
                    placeholder="Tell us about your travel preferences, special occasions, accessibility needs, or any other requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-hero w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <div className="card-travel overflow-hidden">
                <div className="h-64 bg-gradient-sky flex items-center justify-center text-white">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                    <p className="opacity-90">Shop No 15, Westend Shopping Building, opp. D'mart, Ward No. 8, Aundh Gaon, Aundh, Pune, Maharashtra 411007, India</p>
                    <p className="text-sm opacity-75 mt-2">Interactive map would be embedded here</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card-travel p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-xl">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Emergency Hotline</p>
                      <p className="text-sm text-muted-foreground">+91 9011948181</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-accent/5 rounded-xl">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-sm text-muted-foreground">smitholidays24@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card-travel p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    'Free consultation & trip planning',
                    '24/7 customer support',
                    'Best price guarantee',
                    'Secure booking process',
                    'Experienced travel experts'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="text-center mb-12">
            <h2 className="heading-section text-gradient">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How far in advance should I book my trip?",
                a: "We recommend booking 2-3 months in advance for domestic trips and 3-6 months for international destinations to get the best deals and availability."
              },
              {
                q: "Do you provide travel insurance?",
                a: "Yes, we offer comprehensive travel insurance options to protect your trip investment and provide peace of mind during your travels."
              },
              {
                q: "Can I customize my travel package?",
                a: "Absolutely! All our packages are fully customizable. We work with you to create an itinerary that matches your preferences and budget."
              },
              {
                q: "What payment options do you accept?",
                a: "We accept all major credit cards, debit cards, bank transfers, and EMI options. A small advance secures your booking."
              }
            ].map((faq, index) => (
              <div key={index} className="card-travel p-6">
                <h3 className="font-semibold mb-3 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait any longer! Contact us today and let's start planning 
            the vacation of your dreams together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919011948181" className="btn-accent">
              Call Now
            </a>
            <a href="mailto:smitholidays24@gmail.com" className="btn-outline border-white text-white hover:bg-white hover:text-foreground">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;