import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

type TourPackage = {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
};

const tourPackages: TourPackage[] = [
  {
    title: "Ashtavinayak Yatra",
    location: "Maharashtra",
    duration: "2 Days / 1 Nights",
    price: "8870",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    description:
      "Relax on tropical beaches, explore hidden waterfalls, and enjoy a luxury island getaway.",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "6 Days / 5 Nights",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    description:
      "Witness snow-capped peaks, scenic train rides, and world-class mountain views.",
  },
  {
    title: "Dubai Luxury Tour",
    location: "UAE",
    duration: "4 Days / 3 Nights",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy breathtaking skyline views, desert safaris, and modern city experiences.",
  },
  {
    title: "Paris Romance Getaway",
    location: "France",
    duration: "5 Days / 4 Nights",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    description:
      "Stroll through romantic streets, iconic landmarks, and charming cafés in Paris.",
  },
  {
    title: "Maldives Island Retreat",
    location: "Maldives",
    duration: "7 Days / 6 Nights",
    price: "$1,199",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
    description:
      "Experience crystal-clear waters, overwater villas, and unforgettable sunset cruises.",
  },
];

export default function TourPackages() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-travel">
        <div className="text-center mb-14">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-primary mb-4">
            Popular Tours
          </p>
          <h2 className="heading-section text-gradient">
            Our Tour Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked holiday experiences designed for unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <article
              key={tour.title}
              className="group overflow-hidden rounded-[24px] border border-border/60 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-primary shadow-md">
                  {tour.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground leading-tight">
                    {tour.title}
                  </h3>
                </div>

                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{tour.location}</span>
                </div>

                <p className="mb-5 text-sm leading-7 text-muted-foreground">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    <span>{tour.duration}</span>
                  </div>

                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-hero">
            Plan My Trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}