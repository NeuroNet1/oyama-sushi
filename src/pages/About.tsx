import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import chefPortrait from "@/assets/chef-portrait.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import { Award, Heart, Users, Leaf } from "lucide-react";

const About = () => {
  const chefs = [
    {
      name: "Chef Kenji Tanaka",
      title: "Executive Chef",
      experience: "15 years",
      specialty: "Traditional Edomae sushi",
      image: chefPortrait,
    },
    {
      name: "Chef Yuki Sato",
      title: "Head Sushi Chef",
      experience: "12 years",
      specialty: "Creative fusion rolls",
      image: chefPortrait,
    },
    {
      name: "Chef Hiroshi Yamada",
      title: "Sous Chef",
      experience: "10 years",
      specialty: "Hot kitchen & ramen",
      image: chefPortrait,
    },
  ];

  const philosophy = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion & Tradition",
      description:
        "Every dish is crafted with deep respect for centuries-old Japanese culinary traditions, passed down through generations of master chefs.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence in Craft",
      description:
        "We pursue perfection in every detail, from knife skills to plating, ensuring each creation is a work of art.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Fresh & Sustainable",
      description:
        "We source only the finest seasonal ingredients, working with local suppliers who share our commitment to quality and sustainability.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community & Culture",
      description:
        "We believe in creating connections through food, fostering a warm atmosphere where guests become part of our extended family.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center h-[620px]"
        style={{ backgroundImage: `url(${restaurantInterior})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light animate-fade-in">
            A journey of passion, tradition, and culinary excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6 text-center">
              A Legacy Born from Tradition
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Oyama Sushi was founded in 2013 by Chef Kenji Tanaka, a third-generation sushi
                master who trained in Tokyo's renowned Tsukiji fish market district. After years of
                perfecting his craft in Japan's most prestigious establishments, Chef Tanaka brought
                his vision to life: a restaurant that honors traditional Japanese techniques while
                embracing innovation.
              </p>
              <p>
                What started as a small 12-seat sushi bar has grown into a beloved culinary
                destination, yet we've never lost sight of our core values. Every morning, our chefs
                personally select the freshest fish and ingredients, just as they did on day one.
                Every evening, we welcome guests not as customers, but as honored friends sharing in
                the art of Japanese cuisine.
              </p>
              <p>
                Today, Oyama Sushi stands as a testament to the power of dedication, authenticity,
                and the timeless appeal of masterfully prepared food. We continue to evolve while
                staying true to the traditions that define us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Our Culinary Philosophy
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            The principles that guide every dish we create
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {philosophy.map((item, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Meet Our Master Chefs
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            The artisans behind your unforgettable experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {chefs.map((chef, index) => (
              <Card
                key={index}
                className="text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-2">{chef.name}</h3>
                  <p className="text-accent font-medium mb-2">{chef.title}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {chef.experience} experience
                  </p>
                  <p className="text-sm text-muted-foreground italic">{chef.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Premium Ingredients</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We partner with trusted local and international suppliers to source only the finest
              ingredients. Our fish arrives daily from sustainable fisheries, our rice comes from
              premium Japanese farms, and our seasonal vegetables are sourced from local organic
              growers. This commitment to quality is the foundation of every exceptional dish we
              serve.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Daily Fresh Fish", "Premium Rice", "Local Vegetables", "Imported Sake"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-background animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Experience Our Craft</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey guided by our master chefs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/reservations">Reserve Your Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
