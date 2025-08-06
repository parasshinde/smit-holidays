import { Calendar, Users, MapPin, Star, Clock, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: 'Golden Triangle India',
      destination: 'India',
      duration: '7 Days / 6 Nights',
      price: '₹25,000',
      originalPrice: '₹30,000',
      rating: 4.8,
      reviews: 234,
      image: '/api/placeholder/400/300',
      highlights: ['Taj Mahal Visit', 'Red Fort', 'Amber Palace', 'Local Cuisine'],
      itinerary: [
        'Day 1: Arrival in Delhi - City Tour',
        'Day 2: Delhi to Agra - Taj Mahal',
        'Day 3: Agra to Jaipur via Fatehpur Sikri',
        'Day 4: Jaipur Sightseeing',
        'Day 5: Jaipur to Delhi',
        'Day 6: Delhi Local Markets',
        'Day 7: Departure'
      ],
      includes: ['Hotels', 'Transport', 'Guide', 'Breakfast'],
      category: 'Cultural'
    },
    {
      id: 2,
      title: 'European Grand Tour',
      destination: 'Europe',
      duration: '14 Days / 13 Nights',
      price: '₹1,50,000',
      originalPrice: '₹1,80,000',
      rating: 4.9,
      reviews: 156,
      image: '/api/placeholder/400/300',
      highlights: ['Eiffel Tower', 'Swiss Alps', 'Venice Canals', 'Rhine Cruise'],
      itinerary: [
        'Day 1-3: Paris, France',
        'Day 4-6: Switzerland (Zurich, Interlaken)',
        'Day 7-9: Italy (Rome, Venice)',
        'Day 10-12: Germany (Munich, Berlin)',
        'Day 13-14: Amsterdam & Return'
      ],
      includes: ['Hotels', 'Flights', 'Transport', 'Tours', 'Some Meals'],
      category: 'Adventure'
    },
    {
      id: 3,
      title: 'Maldives Honeymoon Special',
      destination: 'Maldives',
      duration: '5 Days / 4 Nights',
      price: '₹80,000',
      originalPrice: '₹95,000',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/400/300',
      highlights: ['Overwater Villa', 'Spa Treatment', 'Sunset Cruise', 'Snorkeling'],
      itinerary: [
        'Day 1: Arrival & Resort Check-in',
        'Day 2: Water Sports & Relaxation',
        'Day 3: Spa Day & Sunset Cruise',
        'Day 4: Island Hopping',
        'Day 5: Departure'
      ],
      includes: ['Resort Stay', 'All Meals', 'Activities', 'Transfers'],
      category: 'Honeymoon'
    },
    {
      id: 4,
      title: 'Dubai Luxury Experience',
      destination: 'Dubai',
      duration: '6 Days / 5 Nights',
      price: '₹60,000',
      originalPrice: '₹70,000',
      rating: 4.7,
      reviews: 178,
      image: '/api/placeholder/400/300',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souk', 'Dubai Mall'],
      itinerary: [
        'Day 1: Arrival & Dubai Marina',
        'Day 2: Burj Khalifa & Dubai Mall',
        'Day 3: Desert Safari Experience',
        'Day 4: Abu Dhabi Day Trip',
        'Day 5: Shopping & Relaxation',
        'Day 6: Departure'
      ],
      includes: ['Hotels', 'Transport', 'Tours', 'Desert Safari'],
      category: 'Luxury'
    },
    {
      id: 5,
      title: 'Kerala Backwaters',
      destination: 'India',
      duration: '8 Days / 7 Nights',
      price: '₹35,000',
      originalPrice: '₹42,000',
      rating: 4.6,
      reviews: 145,
      image: '/api/placeholder/400/300',
      highlights: ['Houseboat Stay', 'Spice Gardens', 'Tea Plantations', 'Ayurveda'],
      itinerary: [
        'Day 1: Arrival in Kochi',
        'Day 2: Munnar Hill Station',
        'Day 3: Tea Plantation Tour',
        'Day 4: Thekkady Wildlife',
        'Day 5-6: Alleppey Houseboat',
        'Day 7: Kochi Sightseeing',
        'Day 8: Departure'
      ],
      includes: ['Hotels', 'Houseboat', 'Transport', 'Meals'],
      category: 'Nature'
    },
    {
      id: 6,
      title: 'Bali Island Paradise',
      destination: 'Indonesia',
      duration: '7 Days / 6 Nights',
      price: '₹55,000',
      originalPrice: '₹65,000',
      rating: 4.8,
      reviews: 203,
      image: '/api/placeholder/400/300',
      highlights: ['Ubud Rice Terraces', 'Beach Clubs', 'Temple Tours', 'Volcano Trek'],
      itinerary: [
        'Day 1: Arrival in Denpasar',
        'Day 2: Ubud Cultural Tour',
        'Day 3: Volcano Sunrise Trek',
        'Day 4: Beach Day in Seminyak',
        'Day 5: Temple Hopping',
        'Day 6: Water Sports & Spa',
        'Day 7: Departure'
      ],
      includes: ['Hotels', 'Transport', 'Tours', 'Some Meals'],
      category: 'Beach'
    }
  ];

  const categories = ['All', 'Cultural', 'Adventure', 'Honeymoon', 'Luxury', 'Nature', 'Beach'];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-travel">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero text-gradient mb-6">Travel Packages</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our carefully crafted travel packages with detailed itineraries, 
              competitive prices, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container-travel">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="card-travel overflow-hidden group hover:shadow-hover">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-sky flex items-center justify-center">
                    <Plane className="h-16 w-16 text-white animate-float" />
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.category}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.destination}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <p className="text-sm text-muted-foreground">{pkg.includes.join(' • ')}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">{pkg.originalPrice}</span>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      to="/contact" 
                      className="btn-primary w-full text-center"
                    >
                      Book Now
                    </Link>
                    <button className="btn-outline w-full">
                      View Detailed Itinerary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-12">
            <h2 className="heading-section text-gradient">Why Choose Our Packages?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Expert Planning', desc: 'Carefully crafted itineraries' },
              { icon: MapPin, title: 'Best Locations', desc: 'Handpicked destinations' },
              { icon: Calendar, title: 'Flexible Dates', desc: 'Customizable schedules' },
              { icon: Star, title: 'Quality Service', desc: '24/7 customer support' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-travel">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us create a personalized travel package tailored to your preferences, budget, and travel dates.
          </p>
          <Link to="/contact" className="btn-accent">
            Request Custom Package
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Packages;