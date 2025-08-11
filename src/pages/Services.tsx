import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Car, BadgeCheck, Wallet, IdCard, Shield, Briefcase, Ticket, SlidersHorizontal } from "lucide-react";

const Services = () => {
  const services = useMemo(() => [
    {
      title: "Airport Pick-up & Drop",
      description: "Private and shared transfers to and from the airport with reliable drivers.",
      icon: Car,
      features: ["24/7 availability", "Meet & greet", "All vehicle types"],
    },
    {
      title: "Visa Assistance",
      description: "End-to-end support for tourist, business, and transit visas.",
      icon: BadgeCheck,
      features: ["Document guidance", "Quick processing", "Multiple countries"],
    },
    {
      title: "Currency Exchange",
      description: "Get competitive forex rates with safe and convenient exchange options.",
      icon: Wallet,
      features: ["Best rates", "Multiple currencies", "Secure handling"],
    },
    {
      title: "Passport Renewal",
      description: "Hassle-free passport renewal and fresh passport application assistance.",
      icon: IdCard,
      features: ["Form filling", "Appointment booking", "End-to-end support"],
    },
    {
      title: "Travel Insurance",
      description: "Affordable travel insurance plans for medical, trip delays, and more.",
      icon: Shield,
      features: ["Worldwide coverage", "Cashless claims", "Custom add-ons"],
    },
    {
      title: "FIT Packages",
      description: "Fully Independent Travel plans tailored to your preferences and pace.",
      icon: Briefcase,
      features: ["Custom itineraries", "Flexible dates", "Handpicked stays"],
    },
    {
      title: "Customize Packages",
      description: "Design your perfect itinerary with tailored hotels, activities, and dates.",
      icon: SlidersHorizontal,
      features: ["Personalized planning", "Any destination", "Budget-friendly options"],
    },
    {
      title: "Air, Bus Tickets",
      description: "Domestic and international air tickets plus intercity bus bookings.",
      icon: Ticket,
      features: ["All major airlines", "Great deals", "Instant confirmations"],
    },
  ], []);

  useEffect(() => {
    document.title = "Travel Services | Smit Holidays";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("description", "Travel services: airport transfers, visa assistance, tickets, insurance, currency exchange, FIT packages.");

    let canonical = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/services`);
  }, []);

  const jsonLd = useMemo(() => {
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "Service",
        position: i + 1,
        name: s.title,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          name: "Smit Holidays",
          url: window.location.origin,
        },
        areaServed: "Global",
        url: `${window.location.origin}/services`,
      })),
    };
    return JSON.stringify(itemList);
  }, [services]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <header className="bg-gradient-hero text-white">
        <div className="container-travel section-padding">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider opacity-90">Our Offerings</p>
            <h1 className="heading-hero mt-2">Travel Services for Stress-Free Trips</h1>
            <p className="mt-4 text-white/90 text-lg">From airport transfers to visas and tickets, we manage the details so you can enjoy the journey.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/contact" className="btn-hero">Request a Service</Link>
              <a href="#services" className="btn-outline">Explore Services</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="section-padding">
          <div className="container-travel">
            <h2 className="heading-section">Our Travel Services</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">Comprehensive, reliable, and tailored services to make every part of your journey smooth and memorable.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, icon: Icon, features }) => (
                <article key={title} id={title === "Customize Packages" ? "customize-packages" : undefined} className="card-travel p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 text-sm text-foreground/80">
                    {features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className="btn-primary">Enquire Now</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary section-padding">
          <div className="container-travel text-center">
            <h2 className="heading-section">Need Something Custom?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tell us your requirements and we’ll craft a solution that fits your timeline and budget.</p>
            <div className="mt-6">
              <Link to="/contact" className="btn-accent">Talk to an Expert</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
