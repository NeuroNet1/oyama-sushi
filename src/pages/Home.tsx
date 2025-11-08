import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Leaf, Sparkles, Star, ChevronDown } from "lucide-react";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import heroImage from "@/assets/hero-chef.jpg";
import dishNigiri from "@/assets/dish-nigiri.jpg";
import dishRoll from "@/assets/dish-roll.jpg";
import dishRamen from "@/assets/dish-ramen.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import icon from "@/assets/whatapp.png";

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
      rating: 5,
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
      <section className="py-20 bg-secondary relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <Card
                key={index}
                className="text-center hover-lift animate-fade-in"
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
      <section className="py-20 relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Featured Dishes
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
      <section className="py-20 bg-secondary relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
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
      {/*Map Section*/}
      <section className="py-20">
       
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-serif font-bold mb-6 text-center">Find Us</h2>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Oyama Sushi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.6904473894847!2d-7.8091980000000005!3d53.728229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485dd3bb80d0703d%3A0x23e3e44606dc3d44!2sOyama%20Sushi%20Japanese%20Restaurant!5e0!3m2!1sen!2sie!4v1730901234567!5m2!1sen!2sie"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            
            {/* Info Card Overlay */}
            <div className="absolute top-2 left-2 bg-background rounded-lg shadow-xl p-6 max-w-sm z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Oyama Sushi Japanese Restaurant</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-green-600">Open until 9:30PM</span>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium">UNIT 1, GRAFTON COURT, Townparks,</p>
                  <p className="font-medium">LONGFORD, N39 FA37</p>
                  <p className="mt-1">
                    Phone: <a href="tel:+353433340929" className="text-accent hover:underline">+353433340929</a>
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-1">Delivery Hours</p>
                  <p>Monday - Thursday: 12PM - 9:30PM</p>
                  <p>Friday - Saturday: 12PM - 10:30PM</p>
                  <p>Sunday: 12PM - 9:30PM</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-1">Collection Hours</p>
                  <p>Monday - Thursday: 10AM - 9:30PM</p>
                  <p>Friday - Saturday: 10AM - 10:30PM</p>
                  <p>Sunday: 10AM - 9:30PM</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <Button asChild className="flex-1 bg-accent hover:bg-accent/90">
                  <Link to="/reservations">Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a 
                    href="https://www.google.com/maps/dir//Oyama+Sushi+Japanese+Restaurant,+UNIT+1,+GRAFTON+COURT,+Townparks,+LONGFORD,+N39+FA37/@53.728229,-7.809198,15z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>  


      {/* Testimonials */}
      <section className="py-20 relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
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
        {/* WhatsApp Button */}
       <section>
        <a href="https://wa.me/12345678900?text=Hola" 
        className="fixed bottom-10 right-10 w-[60px] h-[60px] bg-[#25D366] rounded-full 
                   flex items-center justify-center z-[100] shadow-lg 
                   animate-pulse-smooth hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="WhatsApp" width="50" height="50" />
        </a>
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
