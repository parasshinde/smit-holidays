import { Users, Award, Globe, Heart, Target, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Destinations' },
    { number: '9+', label: 'Years Experience' },
    { number: '500+', label: 'Successful Trips' }
  ];

  const team = [
    {
      name: 'Smit Patel',
      role: 'Founder & CEO',
      image: '👨‍💼',
      description: 'Travel enthusiast with 15+ years in the industry'
    },
    {
      name: 'Priya Singh',
      role: 'Head of Operations',
      image: '👩‍💼',
      description: 'Expert in travel planning and customer service'
    },
    {
      name: 'Raj Kumar',
      role: 'Travel Consultant',
      image: '👨‍🎓',
      description: 'Specialist in international destinations'
    },
    {
      name: 'Anita Sharma',
      role: 'Customer Relations',
      image: '👩‍💻',
      description: 'Dedicated to ensuring exceptional experiences'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing genuine enthusiasm to every journey we plan.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and memorable experiences are our highest priority.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every detail of your travel experience.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting you to amazing destinations around the world.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-travel">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero text-gradient mb-6">About Smit Holidays</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2015, we've been crafting extraordinary travel experiences that go beyond ordinary vacations. 
              Our passion for exploration and commitment to excellence has made us one of India's most trusted travel partners.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-travel">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-sand/20">
        <div className="container-travel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Smit Holidays was born from a simple belief: that travel has the power to transform lives. 
                  Founded by Smit Patel in 2015, our journey began with a vision to make extraordinary travel 
                  experiences accessible to everyone.
                </p>
                <p>
                  What started as a small travel consultancy has grown into a full-service travel company, 
                  but our core values remain unchanged. We believe in personal attention, authentic experiences, 
                  and creating memories that last a lifetime.
                </p>
                <p>
                  Today, we're proud to have helped thousands of travelers discover the world, whether it's 
                  a romantic honeymoon in the Maldives, a cultural exploration of Europe, or an adventure 
                  through the diverse landscapes of India.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-sky rounded-3xl p-8 flex items-center justify-center text-white shadow-travel">
                <div className="text-center">
                  <Globe className="h-24 w-24 mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg opacity-90">Creating unforgettable journeys, one traveler at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-travel p-8 text-center">
              <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional travel experiences that inspire, educate, and create lasting memories 
                while ensuring the highest standards of service, safety, and satisfaction for every traveler.
              </p>
            </div>
            <div className="card-travel p-8 text-center">
              <div className="w-16 h-16 bg-gradient-sunset rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative travel company in India, connecting people with 
                extraordinary destinations and experiences that broaden horizons and enrich lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every experience we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce shadow-travel">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals who make your travel dreams come true.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-travel p-6 text-center group hover:shadow-hover">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Your Perfect Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            With our experience, passion, and dedication, we're ready to turn your travel dreams into reality.
          </p>
          <a href="/contact" className="btn-accent">
            Start Planning Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;