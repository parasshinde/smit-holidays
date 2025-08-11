import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';
import indiaImage from '@/assets/india-destination.jpg';
import europeImage from '@/assets/europe-destination.jpg';
import maldivesImage from '@/assets/maldives-destination.jpg';
import dubaiImage from '@/assets/dubai-destination.jpg';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Amazing Destinations',
      description: 'Discover breathtaking locations across the globe'
    },
    {
      icon: Calendar,
      title: 'Flexible Planning',
      description: 'Customized itineraries that suit your schedule'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Professional local guides for authentic experiences'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety and security is our top priority'
    }
  ];

  const destinations = [
    {
      name: 'India',
      image: indiaImage,
      description: 'Explore the incredible diversity of India',
      packages: '25+ Packages'
    },
    {
      name: 'Europe',
      image: europeImage,
      description: 'Discover the charm of European cities',
      packages: '18+ Packages'
    },
    {
      name: 'Maldives',
      image: maldivesImage,
      description: 'Paradise islands and luxury resorts',
      packages: '12+ Packages'
    },
    {
      name: 'Dubai',
      image: dubaiImage,
      description: 'Modern marvels and desert adventures',
      packages: '15+ Packages'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Smit Holidays made our Europe trip absolutely magical! Every detail was perfectly planned.',
      image: '👩‍💼'
    },
    {
      name: 'Raj Patel',
      location: 'Delhi',
      rating: 5,
      text: 'The Maldives honeymoon package exceeded all our expectations. Truly unforgettable!',
      image: '👨‍💻'
    },
    {
      name: 'Anita Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Excellent service and amazing destinations. The best travel agency we have worked with!',
      image: '👩‍🔬'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-white container-travel px-4">
          <h1 className="heading-hero animate-fade-up mb-6">
            Your Dream Vacation
            <br />
            <span className="text-accent">Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-up opacity-90">
            Discover incredible destinations, create unforgettable memories, and experience 
            the world like never before with Smit Holidays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/services#customize-packages" className="btn-hero">
              Customize Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-outline bg-white/20 border-white text-white hover:bg-white hover:text-foreground">
              View Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-sand/30">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Why Choose Smit Holidays?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional travel experiences with personalized service and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce shadow-travel">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most loved destinations and discover your next adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Link 
                key={index} 
                to="/services"
                className="card-destination group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{destination.description}</p>
                    <span className="text-xs bg-accent px-2 py-1 rounded-full">
                      {destination.packages}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">What Our Travelers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real travelers who trusted us with their dream vacations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-travel p-6 text-center">
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us create a personalized travel experience that matches your dreams and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Plan My Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services#customize-packages" className="btn-outline border-white text-white hover:bg-white hover:text-foreground">
              Customize Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;