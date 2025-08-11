import { useState } from 'react';
import { X, ZoomIn, MapPin, Calendar } from 'lucide-react';
import galleryImage from '@/assets/gallery-memories.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      image: galleryImage,
      title: 'Family Beach Vacation',
      location: 'Goa, India',
      date: 'March 2024',
      category: 'Family'
    },
    {
      id: 2,
      image: galleryImage,
      title: 'European Adventure',
      location: 'Paris, France',
      date: 'February 2024',
      category: 'Adventure'
    },
    {
      id: 3,
      image: galleryImage,
      title: 'Honeymoon Paradise',
      location: 'Maldives',
      date: 'January 2024',
      category: 'Honeymoon'
    },
    {
      id: 4,
      image: galleryImage,
      title: 'Cultural Heritage Tour',
      location: 'Rajasthan, India',
      date: 'December 2023',
      category: 'Cultural'
    },
    {
      id: 5,
      image: galleryImage,
      title: 'Dubai Luxury Experience',
      location: 'Dubai, UAE',
      date: 'November 2023',
      category: 'Luxury'
    },
    {
      id: 6,
      image: galleryImage,
      title: 'Mountain Expedition',
      location: 'Swiss Alps',
      date: 'October 2023',
      category: 'Adventure'
    },
    {
      id: 7,
      image: galleryImage,
      title: 'Beach Relaxation',
      location: 'Bali, Indonesia',
      date: 'September 2023',
      category: 'Beach'
    },
    {
      id: 8,
      image: galleryImage,
      title: 'Wildlife Safari',
      location: 'Kenya, Africa',
      date: 'August 2023',
      category: 'Wildlife'
    },
    {
      id: 9,
      image: galleryImage,
      title: 'Backwater Cruise',
      location: 'Kerala, India',
      date: 'July 2023',
      category: 'Nature'
    }
  ];

  const categories = ['All', 'Family', 'Adventure', 'Honeymoon', 'Cultural', 'Luxury', 'Beach', 'Wildlife', 'Nature'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const testimonials = [
    {
      name: 'Amit & Priya Sharma',
      image: '👫',
      text: 'Our honeymoon in Maldives was absolutely perfect! Every moment was magical.',
      trip: 'Maldives Honeymoon'
    },
    {
      name: 'Rajesh Family',
      image: '👨‍👩‍👧‍👦',
      text: 'The Europe tour was amazing. Our kids still talk about the Swiss Alps!',
      trip: 'European Family Tour'
    },
    {
      name: 'Sanjay & Friends',
      image: '👨‍👨‍👦‍👦',
      text: 'Dubai was incredible! The desert safari was the highlight of our trip.',
      trip: 'Dubai Adventure'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-travel">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero text-gradient mb-6">Travel Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore beautiful moments and memories from our travelers' journeys around the world. 
              See the magic we help create, one trip at a time.
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
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border transition-smooth ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group cursor-pointer card-travel overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-smooth">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm opacity-90">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Happy Travelers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who trusted us with their dream vacations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-travel p-6 text-center">
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                <p className="text-sm text-primary font-medium">{testimonial.trip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-smooth"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-xl">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedImage.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-travel">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Happy Travelers' },
              { number: '500+', label: 'Successful Trips' },
              { number: '50+', label: 'Destinations' },
              { number: '9+', label: 'Years Experience' }
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of happy travelers who have trusted us with their dream vacations. 
            Your perfect journey awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-accent">
              Plan My Trip
            </a>
            <a href="/services#customize-packages" className="btn-outline border-white text-white hover:bg-white hover:text-foreground">
              Customize Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;