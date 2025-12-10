import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import SEO from "@/components/SEO";
import assets from "@/assets/index.tsx";
import { Award, Heart, Users, Leaf } from "lucide-react";

const About = () => {

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
      <SEO
        title="About Us | Oyama Sushi - Our Story and Philosophy"
        description="Discover Oyama Sushi's story: over 10 years of Japanese culinary tradition. Chef Kenji Tanaka and our commitment to excellence, fresh ingredients, and traditional techniques."
        canonicalUrl="https://www.oyamasushi.restaurant/about"
        keywords="about Oyama Sushi, Japanese restaurant history, chef Kenji Tanaka, culinary philosophy, Japanese tradition"
        ogImage="https://www.oyamasushi.restaurant/Ramen/RamenOyama.webp"
      />
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: assets.restaurantInterior ? `url(${assets.restaurantInterior})` : "none" }}
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
      <section className="py-20 relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6 text-center">
              The Secret to a Long and Vibrant Life
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                It is often said that in Japan, age is just a number. The Japanese people enjoy one of the
                longest life expectancies in the world, living with vitality well into their golden years.
                The secret? It isn't magic—it is a diet rooted in balance, purity, and respect for nature.
              </p>
              <p>
                At Oyama Sushi, we continue this story of wellness. We believe that true nourishment comes from quality,
                which is why we craft every dish using exclusively fresh, premium ingredients. We invite you to experience 
                not just the authentic taste of Japan, but the healthy lifestyle that comes with it. Eat well, live longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
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
                className="hover-lift animate-fade-in shadow-lg z-10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 pb-8 ">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Ingredients Section */}
      <section className="py-20  relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
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
      {/*Map Section*/}
      <section className="py-20 bg-secondary" >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-6 text-center">Find Us</h2>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Oyama Sushi Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d905.7028431232048!2d-7.800109117361626!3d53.72822401717568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485dd300233d51b3%3A0xf07a39540758dfba!2sOyama%20Sushi%20Japanese%20Restaurant!5e0!3m2!1ses-419!2sco!4v1763670982535!5m2!1ses-419!2sco"
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
      {/* CTA Section */}
      <section className="py-20 relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 text-center relative z-10">
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
