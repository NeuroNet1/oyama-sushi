import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Flame, Leaf, Star } from "lucide-react";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import dishNigiri from "@/assets/dish-nigiri.jpg";
import dishRoll from "@/assets/dish-roll.jpg";
import dishRamen from "@/assets/dish-ramen.jpg";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    {
      category: "sushi",
      name: "Premium Nigiri Set",
      description: "Salmon, tuna, yellowtail, and eel (8 pieces)",
      price: "$32",
      image: dishNigiri,
      tags: ["chefs-pick"],
    },
    {
      category: "sushi",
      name: "Sashimi Deluxe",
      description: "Chef's selection of the freshest catches",
      price: "$42",
      image: dishNigiri,
      tags: ["chefs-pick", "premium"],
    },
    {
      category: "rolls",
      name: "Oyama Signature Roll",
      description: "Salmon, avocado, cream cheese, topped with spicy mayo",
      price: "$16",
      image: dishRoll,
      tags: ["spicy", "chefs-pick"],
    },
    {
      category: "rolls",
      name: "Dragon Roll",
      description: "Shrimp tempura, cucumber, topped with eel and avocado",
      price: "$18",
      image: dishRoll,
      tags: ["premium"],
    },
    {
      category: "rolls",
      name: "Rainbow Roll",
      description: "California roll topped with assorted fresh fish",
      price: "$17",
      image: dishRoll,
      tags: [],
    },
    {
      category: "rolls",
      name: "Spicy Tuna Roll",
      description: "Fresh tuna with spicy sauce and cucumber",
      price: "$14",
      image: dishRoll,
      tags: ["spicy"],
    },
    {
      category: "hot",
      name: "Traditional Ramen",
      description: "Rich pork broth, chashu, soft egg, scallions",
      price: "$16",
      image: dishRamen,
      tags: ["chefs-pick"],
    },
    {
      category: "hot",
      name: "Chicken Teriyaki",
      description: "Grilled chicken with house teriyaki sauce",
      price: "$18",
      image: dishRamen,
      tags: [],
    },
    {
      category: "hot",
      name: "Tempura Combination",
      description: "Shrimp and vegetable tempura with dipping sauce",
      price: "$15",
      image: dishRamen,
      tags: [],
    },
    {
      category: "hot",
      name: "Vegetable Udon",
      description: "Thick noodles in savory broth with seasonal vegetables",
      price: "$14",
      image: dishRamen,
      tags: ["vegetarian"],
    },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "sushi", label: "Sushi & Sashimi" },
    { value: "rolls", label: "Signature Rolls" },
    { value: "hot", label: "Hot Dishes" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore our carefully curated selection of traditional and innovative Japanese cuisine
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 relative">
        <KanjiDecoration />
        <div className="container mx-auto px-4 relative z-10">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {item.tags.includes("chefs-pick") && (
                          <Badge className="bg-gold text-gold-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Chef's Pick
                          </Badge>
                        )}
                        {item.tags.includes("spicy") && (
                          <Badge variant="destructive">
                            <Flame className="w-3 h-3 mr-1" />
                            Spicy
                          </Badge>
                        )}
                        {item.tags.includes("vegetarian") && (
                          <Badge variant="secondary">
                            <Leaf className="w-3 h-3 mr-1" />
                            Vegetarian
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                        <span className="text-lg font-semibold text-accent">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No dishes found matching your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Download Menu */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline">
              Download Full Menu (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-20 bg-secondary relative">
        <KanjiDecoration />
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
                  Chef's Specials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Special 1 */}
                  <Card className="overflow-hidden animate-fade-in-up">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dishNigiri}
                        alt="Omakase Experience"
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-gold text-gold-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Omakase
                      </Badge>
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        Omakase Experience
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        A curated tasting journey of the chef’s finest seasonal creations.
                      </p>
                      <span className="text-lg font-semibold text-accent">$65</span>
                    </CardContent>
                  </Card>
                  {/* Special 2 */}
                  <Card className="overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dishRoll}
                        alt="Truffle Salmon Roll"
                        className="w-full h-full object-cover"
                      />
                      <Badge variant="secondary" className="absolute top-2 left-2">
                        <Leaf className="w-3 h-3 mr-1" />
                        Limited
                      </Badge>
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        Truffle Salmon Roll
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Salmon, avocado, cucumber, truffle oil, and crispy shallots.
                      </p>
                      <span className="text-lg font-semibold text-accent">$22</span>
                    </CardContent>
                  </Card>
                  {/* Special 3 */}
                  <Card className="overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dishRamen}
                        alt="Wagyu Ramen"
                        className="w-full h-full object-cover"
                      />
                      <Badge variant="destructive" className="absolute top-2 left-2">
                        <Flame className="w-3 h-3 mr-1" />
                        Spicy
                      </Badge>
                    </div>
                    <CardContent className="pt-4 pb-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        Wagyu Ramen
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Rich broth, premium Wagyu slices, soft egg, and house chili oil.
                      </p>
                      <span className="text-lg font-semibold text-accent">$28</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
          
      </section>
    </main>
  );
};

export default Menu;
