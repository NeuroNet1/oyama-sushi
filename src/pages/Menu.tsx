import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Flame, Leaf, Star } from "lucide-react";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import {menuItems,categories} from "../../public/Starters/Menu";
import Assets from "@/assets/index";
import logo from "../assets/Download.svg"
const Menu = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);
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
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
              {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
              ))}
            </TabsList>              
            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.slice(0, showMore ? filteredItems.length : 6).map((item, index) => (
                <Card
                key={index}
                className="overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={item.image}
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
                  <CardContent className="pt-4 pb-6 bg-transparent">
                  <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                  <span className="text-lg font-semibold text-accent">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <p className="color-red ">Allergens [{item.allergens.join(",")}]</p>
                </CardContent>

                </Card>
              ))}
              </div>

              {filteredItems.length > 6 && (
              <div className="text-center mt-8">
                <Button 
                onClick={() => setShowMore(!showMore)}
                variant="outline"
                size="lg"
                >
                {showMore ? "Mostrar Menos" : "Mostrar Más"}
                </Button>
              </div>
              )}

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
        <Card className="overflow-hidden animate-fade-in-up shadow-2xl border-4 border-gold bg-white/90 hover:scale-105 transition-transform duration-300">
          <div className="relative h-52 overflow-hidden">
            <img
          src={Assets.dishNigiri}
          alt="Omakase Experience"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <Badge className="absolute top-2 left-2 bg-gold text-gold-foreground shadow-lg text-base px-3 py-1 rounded-full">
          <Star className="w-4 h-4 mr-1" />
          Omakase
            </Badge>
          </div>
          <CardContent className="pt-6 pb-8">
            <h3 className="text-2xl font-serif font-bold mb-2 text-gold drop-shadow">
          Omakase Experience
            </h3>
            <p className="text-muted-foreground text-base mb-3">
          A curated tasting journey of the chef’s finest seasonal creations.
            </p>
            <span className="text-xl font-bold text-accent bg-gold/10 px-3 py-1 rounded-lg">
          $65
            </span>
          </CardContent>
        </Card>
        {/* Special 2 */}
        <Card className="overflow-hidden animate-fade-in-up shadow-2xl border-4 border-green-400 bg-white/90 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.1s" }}>
          <div className="relative h-52 overflow-hidden">
            <img
          src={Assets.dishRoll}
          alt="Truffle Salmon Roll"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <Badge variant="secondary" className="absolute top-2 left-2 shadow-lg text-base px-3 py-1 rounded-full bg-green-400 text-white">
          <Leaf className="w-4 h-4 mr-1" />
          Limited
            </Badge>
          </div>
          <CardContent className="pt-6 pb-8">
            <h3 className="text-2xl font-serif font-bold mb-2 text-green-600 drop-shadow">
          Truffle Salmon Roll
            </h3>
            <p className="text-muted-foreground text-base mb-3">
          Salmon, avocado, cucumber, truffle oil, and crispy shallots.
            </p>
            <span className="text-xl font-bold text-accent bg-green-100 px-3 py-1 rounded-lg">
          $22
            </span>
          </CardContent>
        </Card>
        {/* Special 3 */}
        <Card className="overflow-hidden animate-fade-in-up shadow-2xl border-4 border-red-400 bg-white/90 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.2s" }}>
          <div className="relative h-52 overflow-hidden">
            <img
          src={Assets.dishRamen}
          alt="Wagyu Ramen"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <Badge variant="destructive" className="absolute top-2 left-2 shadow-lg text-base px-3 py-1 rounded-full bg-red-500 text-white">
          <Flame className="w-4 h-4 mr-1" />
          Spicy
            </Badge>
          </div>
          <CardContent className="pt-6 pb-8">
            <h3 className="text-2xl font-serif font-bold mb-2 text-red-500 drop-shadow">
          Wagyu Ramen
            </h3>
            <p className="text-muted-foreground text-base mb-3">
          Rich broth, premium Wagyu slices, soft egg, and house chili oil.
            </p>
            <span className="text-xl font-bold text-accent bg-red-100 px-3 py-1 rounded-lg">
          $28
            </span>
          </CardContent>
        </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
