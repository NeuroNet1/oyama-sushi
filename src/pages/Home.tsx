import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Leaf, Sparkles, Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-chef.jpg";
import dishNigiri from "@/assets/dish-nigiri.jpg";
import dishRoll from "@/assets/dish-roll.jpg";
import dishRamen from "@/assets/dish-ramen.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import icon from "../assets/whatapp.png";

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const valuePillars = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Master Chefs",
      description: "10+ years of culinary expertise",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, premium quality",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovative Cuisine",
      description: "Traditional techniques, modern flavors",
    },
  ];

  const featuredDishes = [
    {
      image: dishNigiri,
      name: "Premium Nigiri Selection",
      description: "Fresh salmon, tuna, and yellowtail",
    },
    {
      image: dishRoll,
      name: "Signature Oyama Roll",
      description: "Salmon, avocado, cream cheese",
    },
    {
      image: dishRamen,
      name: "Traditional Ramen",
      description: "Rich broth, perfect noodles",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 4,
      text: "Absolutely incredible experience! The attention to detail in every dish is remarkable. Best sushi I've had outside of Japan.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Oyama Sushi never disappoints. The master chefs create pure magic with every plate. The atmosphere is elegant yet welcoming.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "A true gem! The freshness of ingredients and the skill of the chefs shine through in every bite. An unforgettable dining experience.",
    },
    {
      name: "Daniel Kim",
      rating: 4,
      text: "Fantastic flavors and great presentation. Service was attentive — we'll definitely return for the seasonal menu.",
    },
    {
      name: "Laura Martinez",
      rating: 5,
      text: "From the omakase to the sake pairings, everything was thoughtfully curated. Perfect spot for special occasions.",
    },
    {
      name: "Oliver Smith",
      rating: 4,
      text: "Incredible value for the quality. The nigiri selection was melt-in-your-mouth fresh. Highly recommend the chef's tasting.",
    },  
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Authentic Japanese Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-balance">
            Experience the art of sushi crafted by master chefs with over 10 years of tradition
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            <Link to="/reservations">Reserve Your Table</Link>
          </Button>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 ">
            {valuePillars.map((pillar, index) => (
                <Card
                key={index}
                className="text-center hover-lift animate-fade-in-up shadow-[0_10px_12px_rgba(0,0,0,0.1)]"
                style={{ animationDelay: `${index * 0.2}s` }}
                >
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4 text-accent">{pillar.icon}</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Menu
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Discover our most beloved creations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-serif font-semibold mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-white/90">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                More Than a Meal, It's an Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Oyama Sushi, we believe dining is an art form. Every dish tells a story of
                tradition, passion, and innovation. Our elegant atmosphere and meticulous attention
                to detail create an unforgettable journey through Japanese cuisine.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  <span>Intimate omakase experiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  <span>Seasonal tasting menus</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  <span>Premium sake pairings</span>
                </li>
              </ul>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={restaurantInterior}
                alt="Oyama Sushi Interior"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            What Our Guests Say
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Experiences that speak for themselves
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* WhatsApp Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Have Questions? Reach Out on WhatsApp!
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team is ready to assist you with reservations, menu inquiries, and special requests.
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={icon} alt="WhatsApp" className="inline-block w-7 h-7 mr-1" />
              Chat with Us on WhatsApp
            </a>
          </Button>
        </div>
      </section>


      {/* Final CTA */}
      <section
        className="py-32 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserve your table today and embark on a culinary journey
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            <Link to="/reservations">Book Your Table Now</Link>
          </Button>
          <p className="mt-6 text-sm">
            Call us: <span className="font-semibold">(555) 123-4567</span> | Open Mon-Sun 5:00
            PM - 10:00 PM
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
