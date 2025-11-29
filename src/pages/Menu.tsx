import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Flame, Leaf, Star } from "lucide-react";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import { useIsMobile } from "@/hooks/use-mobile";
import {menuItems,categories} from "../../public/Starters/Menu";
import Assets from "@/assets/index";
import logo from "../assets/Download.svg"
const Menu = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const isMobile = useIsMobile();
  
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
          <div className="max-w-md mx-auto mb-8">
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
            {isMobile ? (
              // Mobile Layout - Horizontal Scroll
              <div className="relative mb-8">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-2 px-4 pb-2 min-w-max">
                    {categories.map((category) => (
                      <Button
                        key={category.value}
                        variant={activeCategory === category.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(category.value)}
                        className={`whitespace-nowrap text-xs px-3 py-2 min-w-fit transition-all duration-200 ${
                          activeCategory === category.value
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* Scroll indicator */}
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none opacity-60" />
              </div>
            ) : (
              // Desktop Layout - Grid
              <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-4 lg:grid-cols-8 mb-10 gap-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className="whitespace-nowrap text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            )}
                        
            <TabsContent value={activeCategory}>
              <div className={`grid gap-6 ${
                isMobile 
                  ? "grid-cols-1 px-4" 
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              }`}>
              {filteredItems.slice(0, showMore ? filteredItems.length : (isMobile ? 6 : 10)).map((item, index) => (
              <Card
              key={index}
              className={`overflow-hidden hover-lift animate-scale-in cursor-pointer ${
                isMobile ? "w-full" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              >
              <div className={`relative overflow-hidden ${
                isMobile ? "h-40" : "h-48"
              }`}>
                <img
                src={item.image}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-2 right-2 flex gap-1 ${
                  isMobile ? "flex-col" : "flex-row"
                }`}>
                {item.tags.includes("chefs-pick") && (
                <Badge className={`bg-gold text-gold-foreground ${
                  isMobile ? "text-xs px-2 py-1" : ""
                }`}>
                <Star className={`mr-1 ${isMobile ? "w-2 h-2" : "w-3 h-3"}`} />
                {isMobile ? "Chef" : "Chef's Pick"}
                </Badge>
                )}
                {item.tags.includes("spicy") && (
                <Badge variant="destructive" className={isMobile ? "text-xs px-2 py-1" : ""}>
                <Flame className={`mr-1 ${isMobile ? "w-2 h-2" : "w-3 h-3"}`} />
                Spicy
                </Badge>
                )}
                {item.tags.includes("vegetarian") && (
                <Badge variant="secondary" className={isMobile ? "text-xs px-2 py-1" : ""}>
                <Leaf className={`mr-1 ${isMobile ? "w-2 h-2" : "w-3 h-3"}`} />
                {isMobile ? "Veg" : "Vegetarian"}
                </Badge>
                )}
                </div>
              </div>
                <CardContent className={`pt-4 pb-6 bg-transparent ${
                  isMobile ? "px-3" : ""
                }`}>
                <div className="flex justify-between items-start mb-2">
                <h3 className={`font-serif font-semibold ${
                  isMobile ? "text-lg" : "text-xl"
                }`}>{item.name}</h3>
                <span className={`font-semibold text-accent ${
                  isMobile ? "text-base" : "text-lg"
                }`}>{item.price}</span>
                </div>
                <p className={`text-muted-foreground ${
                  isMobile ? "text-xs line-clamp-2" : "text-sm"
                }`}>{item.description}</p>
                <p className={`color-red ${
                  isMobile ? "text-xs mt-1" : "text-sm mt-2"
                }`}>Allergens [{item.allergens.join(",")}]</p>
              </CardContent>

              </Card>
              ))}
              </div>

              {filteredItems.length > (isMobile ? 6 : 10) && (
              <div className="text-center mt-8">
              <Button 
              onClick={() => setShowMore(!showMore)}
              variant="outline"
              size={isMobile ? "default" : "lg"}
              className={isMobile ? "w-full mx-4" : ""}
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
            <a href="/OyamaMenu.pdf" download>
              <Button size="lg" variant="outline">
                Download Full Menu (PDF)
              </Button>
            </a>
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
          src={Assets.RamenPollo}
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
          src={Assets.FutaMar2}
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
          src={Assets.RamenPollo}
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
