import { useState } from 'react';
import { Star, ThumbsUp, Calendar, MapPin, Quote } from 'lucide-react';

const Reviews = () => {
  const [filter, setFilter] = useState('All');

  const reviews = [
    {
      id: 1,
      name: 'Priya & Raj Sharma',
      location: 'Mumbai',
      trip: 'Maldives Honeymoon',
      rating: 5,
      date: 'March 2024',
      avatar: '👩‍❤️‍👨',
      review: 'Our honeymoon in Maldives was absolutely perfect! Smit Holidays took care of every detail - from the overwater villa to the romantic dinner setup. The seaplane transfer was thrilling, and the resort staff was incredibly welcoming. We especially loved the snorkeling trip and the couple\'s spa treatment. This trip exceeded all our expectations and gave us memories to last a lifetime. Thank you for making our honeymoon so special!',
      helpful: 45,
      category: 'Honeymoon'
    },
    {
      id: 2,
      name: 'Amit Patel Family',
      location: 'Ahmedabad',
      trip: 'European Grand Tour',
      rating: 5,
      date: 'February 2024',
      avatar: '👨‍👩‍👧‍👦',
      review: 'What an incredible 14-day journey across Europe! Our family of four had the time of our lives. The itinerary was perfectly planned - not too rushed, not too slow. Our kids (ages 8 and 12) especially loved the Swiss Alps and the Rhine river cruise. The local guides in each city were knowledgeable and friendly. Hotels were excellent, and the transportation was seamless. Smit Holidays made our first international family trip absolutely magical!',
      helpful: 38,
      category: 'Family'
    },
    {
      id: 3,
      name: 'Sanjay Kumar',
      location: 'Delhi',
      trip: 'Dubai Luxury Experience',
      rating: 5,
      date: 'January 2024',
      avatar: '👨‍💼',
      review: 'Dubai was on my bucket list for years, and Smit Holidays made it happen perfectly! The Burj Khalifa visit was breathtaking, but the desert safari was the real highlight. The luxury hotel was top-notch, and the shopping tour to Gold Souk was amazing. The team was available 24/7 for any assistance. Great value for money and excellent service throughout. Highly recommend for anyone wanting to experience Dubai\'s grandeur!',
      helpful: 32,
      category: 'Luxury'
    },
    {
      id: 4,
      name: 'Anita & Mahesh Reddy',
      location: 'Bangalore',
      trip: 'Kerala Backwaters',
      rating: 4,
      date: 'December 2023',
      avatar: '👩‍❤️‍👨',
      review: 'Our Kerala trip was a perfect blend of nature, culture, and relaxation. The houseboat experience in Alleppey was magical - waking up to the sound of water and birds was so peaceful. The spice garden tour in Thekkady was educational and fun. Munnar\'s tea plantations were breathtakingly beautiful. The Ayurvedic massage was incredibly rejuvenating. Only minor hiccup was a delayed pickup once, but overall a wonderful experience with great memories.',
      helpful: 28,
      category: 'Nature'
    },
    {
      id: 5,
      name: 'Rohit & Friends Group',
      location: 'Pune',
      trip: 'Golden Triangle India',
      rating: 5,
      date: 'November 2023',
      avatar: '👨‍👨‍👦‍👦',
      review: 'As a group of 6 friends, we wanted to explore India\'s heritage, and this trip was perfect! The Taj Mahal sunrise visit was absolutely stunning - photos don\'t do it justice. Red Fort and Amber Palace were equally impressive. Our guide was fantastic, sharing historical stories that brought everything to life. The local food tours were delicious and safe. Great coordination between cities, comfortable transport, and amazing photography spots. Perfect for first-time visitors to these iconic places!',
      helpful: 41,
      category: 'Cultural'
    },
    {
      id: 6,
      name: 'Kavya Nair',
      location: 'Kochi',
      trip: 'Bali Island Paradise',
      rating: 5,
      date: 'October 2023',
      avatar: '👩‍🦱',
      review: 'My solo trip to Bali was everything I dreamed of and more! Smit Holidays understood my need for both adventure and relaxation. The Ubud rice terraces were Instagram-perfect, and the volcano sunrise trek was challenging but so rewarding. Beach clubs in Seminyak were amazing for sunset cocktails. The Balinese cooking class was a fun cultural experience. Temple visits were spiritual and peaceful. Safety was never a concern, and the local recommendations were spot-on!',
      helpful: 35,
      category: 'Adventure'
    },
    {
      id: 7,
      name: 'Deepak & Sunita Joshi',
      location: 'Jaipur',
      trip: 'Switzerland Romance',
      rating: 5,
      date: 'September 2023',
      avatar: '👨‍❤️‍👩',
      review: 'Switzerland for our 25th anniversary was the perfect choice! The scenic train rides through the Alps were breathtaking. Jungfraujoch - "Top of Europe" - was absolutely spectacular. Lake Geneva and Rhine Falls were picture-perfect. The chocolate factory tour was delightful, and the cheese tasting was delicious. Hotels had amazing mountain views. Every moment felt like a fairytale. Smit Holidays made our anniversary celebration truly unforgettable!',
      helpful: 29,
      category: 'Honeymoon'
    },
    {
      id: 8,
      name: 'Arjun Mehta',
      location: 'Chennai',
      trip: 'Thailand Beach Escape',
      rating: 4,
      date: 'August 2023',
      avatar: '👨‍🎓',
      review: 'Thailand was an amazing mix of beaches, culture, and nightlife! Phuket beaches were pristine, and the island hopping tour was fantastic. Bangkok temple visits were culturally enriching, and the floating market was a unique experience. The Thai massage was incredibly relaxing. Street food tours were adventurous and tasty. Only complaint was the hotel in Bangkok could have been better located, but overall a great trip with good value for money.',
      helpful: 22,
      category: 'Beach'
    }
  ];

  const categories = ['All', 'Honeymoon', 'Family', 'Luxury', 'Nature', 'Cultural', 'Adventure', 'Beach'];

  const filteredReviews = filter === 'All' 
    ? reviews 
    : reviews.filter(review => review.category === filter);

  const stats = [
    { label: 'Total Reviews', value: '2,500+' },
    { label: 'Average Rating', value: '4.8/5' },
    { label: '5 Star Reviews', value: '89%' },
    { label: 'Return Customers', value: '75%' }
  ];

  const quickStats = [
    { rating: 5, percentage: 89, count: 2225 },
    { rating: 4, percentage: 8, count: 200 },
    { rating: 3, percentage: 2, count: 50 },
    { rating: 2, percentage: 1, count: 25 },
    { rating: 1, percentage: 0, count: 0 }
  ];

  const travelersTestimonials = [
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
            <h1 className="heading-hero text-gradient mb-6">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read genuine reviews from our happy travelers and discover why thousands 
              of people trust Smit Holidays with their dream vacations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section-padding bg-white">
        <div className="container-travel">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6">Rating Breakdown</h3>
            <div className="space-y-3">
              {quickStats.map((stat) => (
                <div key={stat.rating} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{stat.rating}</span>
                    <Star className="h-4 w-4 text-accent fill-current" />
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-sky h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground w-16">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-sand/20">
        <div className="container-travel">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full border transition-smooth ${
                  filter === category
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

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="card-travel p-6 hover:shadow-hover">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{review.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{review.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-primary">{review.trip}</span>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {review.review}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-smooth">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {review.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Travelers (from Gallery) */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gradient">Happy Travelers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who trusted us with their dream vacations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelersTestimonials.map((testimonial, index) => (
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

      {/* Write Review CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-travel text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Share Your Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Traveled with us recently? We'd love to hear about your experience! 
            Your review helps other travelers make informed decisions.
          </p>
          <a href="/contact" className="btn-primary">
            Write a Review
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-travel text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Happy Travelers
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't just take our word for it - experience the Smit Holidays difference yourself! 
            Let us create your perfect journey.
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

export default Reviews;