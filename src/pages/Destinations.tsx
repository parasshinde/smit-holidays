import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import indiaImage from '@/assets/india-destination.jpg';
import europeImage from '@/assets/europe-destination.jpg';
import maldivesImage from '@/assets/maldives-destination.jpg';
import dubaiImage from '@/assets/dubai-destination.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: 'india',
      name: 'Incredible India',
      image: indiaImage,
      description: 'Discover the rich heritage, vibrant culture, and diverse landscapes of India. From the majestic Taj Mahal to the serene backwaters of Kerala.',
      highlights: ['Taj Mahal', 'Kerala Backwaters', 'Rajasthan Palaces', 'Goa Beaches'],
      duration: '7-15 Days',
      price: 'From ₹25,000',
      rating: 4.8,
      packages: 25
    },
    {
      id: 'europe',
      name: 'Romantic Europe',
      image: europeImage,
      description: 'Experience the charm of European cities, from the romantic streets of Paris to the historic landmarks of Rome and the canals of Venice.',
      highlights: ['Eiffel Tower', 'Colosseum', 'Swiss Alps', 'Amsterdam Canals'],
      duration: '10-21 Days',
      price: 'From ₹1,50,000',
      rating: 4.9,
      packages: 18
    },
    {
      id: 'maldives',
      name: 'Paradise Maldives',
      image: maldivesImage,
      description: 'Escape to tropical paradise with crystal-clear waters, pristine beaches, and luxury overwater villas. Perfect for honeymoons and relaxation.',
      highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Sunset Cruises'],
      duration: '4-7 Days',
      price: 'From ₹80,000',
      rating: 4.9,
      packages: 12
    },
    {
      id: 'dubai',
      name: 'Magnificent Dubai',
      image: dubaiImage,
      description: 'Experience the perfect blend of modern luxury and traditional culture in Dubai. From towering skyscrapers to golden deserts.',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
      duration: '5-8 Days',
      price: 'From ₹60,000',
      rating: 4.7,
      packages: 15
    }
  ];

  const features = [
    'Expert Local Guides',
    'Luxury Accommodations',
    'All Meals Included',
    'Transportation',
    'Sightseeing Tours',
    '24/7 Support'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-travel">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero text-gradient mb-6">Popular Destinations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore breathtaking destinations around the world with our carefully curated travel packages. 
              Each destination offers unique experiences and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {destinations.map((destination, index) => (
              <div key={destination.id} className="card-travel overflow-hidden group hover:shadow-hover">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.packages} Packages
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gradient">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold">{destination.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Top Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link 
                      to="/packages" 
                      className="btn-primary flex-1 text-center"
                    >
                      View Packages
                    </Link>
                    <Link 
                      to="/contact" 
                      className="btn-outline flex-1 text-center"
                    >
                      Customize Trip
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-12">
            <h2 className="heading-section text-gradient">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every destination package comes with comprehensive services to ensure a hassle-free experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-travel">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We offer custom travel planning for any destination worldwide. Let us create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Plan Custom Trip
            </Link>
            <Link to="/packages" className="btn-outline border-white text-white hover:bg-white hover:text-foreground">
              Browse All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;