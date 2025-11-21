import Img from "./Starter.ts";
import Ramenimg from "../Ramen/Ramen.ts";
import HotDishesImg from "../Hot_dishes/Dishes.ts";
export const categories = [
        { value: "all", label: "All" },
        { value: "Starter", label: "Starters" },
        { value: "hot", label: "Hot Dishes" },
        { value: "sushi", label: "Sushi & Sashimi" },
        { value: "rolls", label: "Signature Rolls" },
        
       
      ];
      
  export const menuItems = [
    {
      category: "Starter",
      name: "Home Made Pork Gyoza",
      description: "Grilled Pork Minced and Vegetable Dumplings Served with Gyoza Sauce",
      price: "€8.30",
      image: Img.gyonsas,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Home Made Prawn Gyoza",
      description: "Grilled Prawn and Vegetable Dumplings Served with Gyoza Sauce",
      price: "€8.90",
      image: Img.gyonsas2,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,10,14]
    },
    {
      category: "Starter",
      name: "Japanese Chicken Gyoza",
      description: "Grilled Chicken and Vegetable Dumplings Served with Gyoza Sauce",
      price: "€7.90",
      image: Img.gyonsas,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Japanese Duck Gyoza",
      description: "Grilled Duck and Vegetable Dumplings Served with Gyoza Sauce",
      price: "€8.50",
      image: Img.gyonsas2,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Japanese Yasai Gyoza",
      description: "Grilled Mixed Vegetable Dumplings Served with Gyoza Sauce",
      price: "€7.50",
      image: Img.gyonsas,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Ebi Katsu",
      description: "Deep Fried Tiger Prawns in Breadcrumbs Served with Chili Garlic Sauce",
      price: "€9.80",
      image: Img.tempura,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,7,10,15]
    },
    {
      category: "Starter",
      name: "Chicken Kushi Yaki",
      description: "Three Skewers of Grilled Chicken and Asparagus Coated in Teriyaki Sauce and Sprinkled with Shichimi Powder",
      price: "€8.30",
      image: Img.brochetasDePollo,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,3]
    },
    {
      category: "Starter",
      name: "Tebasaki Chicken Wings",
      description: "Deep Fried Chicken Wings Coated with Homemade Sweet Chili Sauce",
      price: "€8.30",
      image: Img.alitas,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,7]
    },
    {
      category: "Starter",
      name: "Squid Katsu",
      description: "Squid Rings Coated in Breadcrumbs Served with Sweet Chili Sauce",
      price: "€8.30",
      image: Img.calamar,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,7]
    },
    {
      category: "Starter",
      name: "Agedashi Tofu",
      description: "Deep Fried Tofu Served with a Tasty Ubu Dip Garnished with Seaweed",
      price: "€7.50",
      image: Img.tofu,
      tags: ["vegetarian", "premium"],
      allergens: [1,6]
    },
    {
      category: "Starter",
      name: "Edamame",
      description: "Steamed Green Soy Beans Served with a Star of Chili Pepper Salt",
      price: "€6.50",
      image: Img.edamame,
      tags: ["chefs-pick", "premium"],
      allergens: [6]
    },
    {
      category: "Starter",
      name: "Ebi Tempura",
      description: "Ebi Prawn in Tempura Powder, Deep Fried in Pan Oil with Soy Sauce",
      price: "€9.90",
      image: Img.tempura,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,7,10,14]
    },
    {
      category: "Starter",
      name: "Yasai Tempura",
      description: "Vegetable in Tempura Powder, Deep Fried in Pan Oil with Soy Sauce",
      price: "€8.90",
      image: Img.tempura2,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Teriyaki Ribs",
      description: "Vegetable Marinated Spare Ribs in Teriyaki with Soy Sauce",
      price: "€8.30",
      image: Img.costillas,
      tags: ["chefs-pick", "premium"],
      allergens: [1,6,14]
    },
    {
      category: "Starter",
      name: "Smoked Salmon Salad",
      description: "Smoked Salmon and Fresh Mix Vegetables Served with Homemade Sauce",
      price: "€11.90",
      image: Img.SalmonAhumado,
      tags: ["chefs-pick", "premium"],
      allergens: [3,7]
    },

    // Ramen example
    {
      category: "ramen",
      name: "Oyama Special Ramen",
      description: "Tonkotsu Soup, Pork Char Siu, Braised Beef, King Prawn, Pak Choi, Seasoned Egg, Fungus, Spring Onion, Grilled Seaweed, Deep Fried Onion, Bean Sprout, Bamboo Shoots and Coriander",
      price: "€14.90",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,8,10,16],
    },

    {
      category: "ramen",
      name: "Tonkotsu Pork Ramen",
      description: "Tonkotsu Soup, Pork Char Siu, Pak Choi, Bamboo Shoots, Fungus, Seasoned Egg, Spring Onion, Coriander, Narutomaki, Deep Fried Onion, Grilled Seaweed, Bean Sprout",
      price: "€13.90",
      image:  Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,8,16],
    },
    {
      category: "ramen",
      name: "Tonkotsu Beef Ramen",
      description: "Home Made Braised Beef, Pak Choi, Spring Onion, Bamboo Shoots, Fungus, Grilled Seaweed, Bean Sprout, Coriander, Deep Fried Onion, Narutomaki and Seasoned Egg",
      price: "€13.90",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,8,16],
    },
    {
      category: "ramen",
      name: "Chicken Miso Ramen",
      description: "Grilled Chicken Fillets, Pak Choi, Spring Onion, Bamboo Shoots, Seasoned Egg, Grilled Seaweed, Fungus, Deep Fried Onion, Bean Sprout, Served in a Miso & Chicken and Pork Flavoured Soup",
      price: "€13.50",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,8,16],
    },
    {
      category: "ramen",
      name: "Vegan Ramen",
      description: "Grilled Tofu, Shiitake Mushroom, Pak Choi, Bamboo Shoots, Sweet Corn, Spring Onion, Fungus, Coriander, Grilled Seaweed and Bean Sprout, Served in a Miso Flavoured Soup",
      price: "€12.90",
      image:  Ramenimg.ramen,
      tags: ["vegetarian"],
      allergens: [1,6,14],
    },
    {
      category: "ramen",
      name: "Seafood Ramen",
      description: "Ramen Noodles Topped with Tiger Prawns, Grilled Tuna, Squid, Mussels, Narutomaki, Salmon and Coriander. Served in a Miso Soup with Seaweed Menma and Spring Onion",
      price: "€15.50",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,7,10,12],
    },
    {
      category: "ramen",
      name: "Kimchi Chicken Ramen",
      description: "Ramen Noodles Served in Spicy Chicken & Pork Broth, Topped with Chicken Breast, Bean Sprout, Bamboo Shoots, Pak Choi, Seasoned Egg, Fungus, Spring Onion, Bean Sprout, Coriander and Grilled Seaweed",
      price: "€14.90",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [1,6,8,11,16],
    },
    {
      category: "ramen",
      name: "Salmon Miso Ramen",
      description: "Ramen Noodles Served in Chicken Miso Flavoured Broth, Topped with Grilled Salmon, Seasonal Vegetables, Fungus, Spring Onion, Grilled Onion, Bean Sprout and Grilled Seaweed",
      price: "€14.90",
      image: Ramenimg.ramen,
      tags: ["spicy"],
      allergens: [3,6,7],
      
    },
    //Hot Dishes example
     {
    category: "hot",
    name: "Oyama House Yaki Soba",
    description:
      "Stir-fried Egg Noodles with Prawns, Chicken Fillet, Broccoli, Carrot, Egg and Seasonal Vegetables Garnished with Pickles",
    price: "€13.90",
    image: HotDishesImg.Pasta,
    tags: [],
    allergens: [1, 8, 10, 16],
  },
  {
    category: "hot",
    name: "Chicken Teriyaki Soba",
    description:
      "Grilled Chicken Breast on Top of Noodles Mixed with Vegetables. Garnished with Roasted Seaweed, Spring Onion, Fried Onion & Coriander with Teriyaki and Curry Oil",
    price: "€13.90",
    image: HotDishesImg.Pasta,
    tags: [],
    allergens: [1, 6],
  },
  {
    category: "hot",
    name: "Yasai Yaki Soba",
    description:
      "Stir-fried Egg Noodles with Crispy Tofu, Vegetables, Onions, Spring Onion, Sweet Pepper, Roasted Seaweed, Fried Onion",
    price: "€12.00",
    image: HotDishesImg.Pasta,
    tags: ["vegetarian"],
    allergens: [1, 6, 8, 10, 16],
  },
  {
    category: "hot",
    name: "Yaki Udon",
    description:
      "Teppan-fried Udon Noodles Chicken Fillet, Vegetables, Onions, Spring Onion Sweet Pepper, Roasted Seaweed, Fried Onion and Garnished with a Hint of Curry Oil",
    price: "€13.90",
    image: HotDishesImg.Pasta,
    tags: [],
    allergens: [1, 6, 8, 10, 16],
  },

  // --- hot ---
  {
    category: "hot",
    name: "Oyama House Cha Han",
    description:
      "Stir-fried Japanese Rice with Mixed Veg, Egg, Tiger Prawn, Pork Belly & Marinated Chicken Fillet. Japanese Pickles.",
    price: "€13.50",
    image: HotDishesImg.Arroz,
    tags: [],
    allergens: [6, 10, 14, 16],
  },
  {
    category: "hot",
    name: "Seafood Cha Han",
    description:
      "Stir-fried Japanese Rice with Mixed Seafood (Squid, Prawn, Salmon, Katsuobushi), Vegetables, Egg and Japanese Pickles.",
    price: "€14.50",
    image: HotDishesImg.Arroz,
    tags: [],
    allergens: [7, 10, 14, 16],
  },
  {
    category: "hot",
    name: "Kimchi Cha Han",
    description:
      "Stir-fried Japanese Rice with Mixed Vegetables, Kimchi, Pork Fillet and Egg. Garnished with Seaweed & Japanese Pickles.",
    price: "€13.50",
    image: HotDishesImg.Arroz,
    tags: [],
    allergens: [6, 7, 10, 14, 16],
  },
  {
    category: "hot",
    name: "Yasai Cha Han",
    description:
      "Stir-fried Japanese Rice with Mixed Vegetables. Tofu, Sweet Corn, Seaweed & Japanese Pickles.",
    price: "€12.00",
    image: HotDishesImg.Arroz,
    tags: ["vegetarian"],
    allergens: [14],
  },

  // --- JAPANESE CURRY ---
  {
    category: "hot",
    name: "Chicken Katsu Curry",
    description:
      "Deep Fried Breaded Succulent Chicken Fillet Coated with Our Curry Sauce. Served with Rice, Seasonal Vegetables. Garnished with Roasted Seaweed, Pickles, Spring Onion & Fried Onion.",
    price: "€14.50",
    image: HotDishesImg.Curry,
    tags: [],
    allergens: [1, 6, 14],
  },
  {
    category: "hot",
    name: "Seafood Katsu Curry",
    description:
      "Deep Fried Breaded Salmon, Tiger Prawn & Squid Coated with Our Curry Sauce. Served with Rice, Vegetables Garnished with Roasted Seaweed, Pickles & Spring Onion.",
    price: "€15.90",
    image: HotDishesImg.Curry,
    tags: [],
    allergens: [1, 6, 7, 10, 14],
  },
  {
    category: "hot",
    name: "Pork Chops Katsu Curry",
    description:
      "Deep Fried Breaded Pork Chops Coated with Our Curry Sauce, Served with Rice, Vegetables and Garnished with Roasted Seaweed & Spring Onion.",
    price: "€13.90",
    image: HotDishesImg.Curry,
    tags: [],
    allergens: [1, 6, 10],
  },
    //Bento Boxes
      {
    category: "hot",
    name: "Oyama House Bento Box",
    description:
      "Grilled Duck Breast, 2 pcs Homemade Grilled Prawn Gyoza, 3 pcs Salmon Sashimi, Miso Glazed Irish Chicken Breast Served with Rice",
    price: "€14.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [1, 6, 8, 10, 16],
  },
  {
    category: "hot",
    name: "Chicken Bento Box",
    description:
      "Deep Fried Chicken Fillet Served with Gyoza Sauce, Teriyaki Sauce with Steamed Rice",
    price: "€13.50",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [1, 3, 6, 8, 10, 14],
  },
  {
    category: "hot",
    name: "Salmon Bento Box",
    description:
      "Grilled Salmon Teriyaki Served with Steamed Broccoli, 2 pcs Gyoza, 3 pcs Salmon Sushi and Steamed Rice",
    price: "€13.90",
    image: HotDishesImg.bento2,
    tags: [],
    allergens: [1, 6, 7, 8, 10, 14],
  },
  {
    category: "hot",
    name: "Brexit Bento Box",
    description:
      "Grilled Salmon, Stir-Fried Vegetables 3 pcs Gyoza, Slow Cooked Spicy Chicken with Soy Sauce and Steamed Rice",
    price: "€12.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [1 ,6, 7, 8, 10],
  },
  {
    category: "hot",
    name: "Tofu Bento Box",
    description:
      "Slow Fried Tofu & Vegetable Gyoza with Gyoza Sauce, Stir-Fried Vegetables, 2 pcs Chef Sushi and Steamed Rice",
    price: "€12.90",
    image: HotDishesImg.bento2,
    tags: ["vegetarian"],
    allergens: [1, 6, 8, 14],
  },

  // --- TEPPANYAKI ---
  {
    category: "hot",
    name: "Chicken Teppanyaki",
    description:
      "Stir-fried Chicken topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€14.50",
    image: HotDishesImg.frito,
    tags: [],
    allergens: [1, 6, 8],
  },
  {
    category: "hot",
    name: "Salmon Teppanyaki",
    description:
      "Stir-fried Salmon topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€14.50",
    image: HotDishesImg.frito,
    tags: [],
    allergens: [1,6,7,8],
  },
  {
    category: "hot",
    name: "Duck Teppanyaki",
    description:
      "Stir-fried Duck topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€14.90",
    image: HotDishesImg.frito,
    tags: [],
    allergens: [1, 6, 8],
  },
  {
    category: "hot",
    name: "Pork Belly Teppanyaki",
    description:
      "Stir-fried Pork Belly topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€14.50",
    image: HotDishesImg.frito,
    tags: [],
    allergens: [1, 6, 8],
  },
  {
    category: "hot",
    name: "Beef Steak Teppanyaki",
    description:
      "Stir-fried Beef Steak topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€15.50",
    image: Img.tempura2,
    tags: [],
    allergens: [1, 6, 8],
  },
  {
    category: "hot",
    name: "Tofu Steak Teppanyaki",
    description:
      "Stir-fried Tofu topped with Homemade Teriyaki Sauce. Served with Japanese Rice and Miso Soup",
    price: "€13.90",
    image: Img.tempura,
    tags: ["vegetarian"],
    allergens: [1,6, 8],
  },

  // --- OYAMA DONBURI ---
  {
    category: "hot",
    name: "Classic Unagi Donburi",
    description:
      "Grilled Freshwater Eel served on Rice with Homemade Teriyaki Sauce",
    price: "€17.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [6,7, 8, 14, 16],
  },
  {
    category: "hot",
    name: "Steak Donburi",
    description:
      "Stir-fried Beef Steak served on Japanese Rice with Homemade Soy Sauce",
    price: "€16.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [6, 8, 14, 16],
  },
  {
    category: "hot",
    name: "Chicken Donburi",
    description:
      "Stir-fried Chicken served with Japanese Rice and Homemade Sauce",
    price: "€15.50",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [6, 8, 14, 16],
  },
  {
    category: "hot",
    name: "Crispy Duck Donburi",
    description:
      "Crispy Fried Duck served on Rice with Homemade Teriyaki Sauce",
    price: "€15.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [6, 8, 14, 16],
  },
  {
    category: "hot",
    name: "Tofu Donburi",
    description:
      "Stir-fried Tofu served on Japanese Rice with Homemade Sauce",
    price: "€15.00",
    image: HotDishesImg.bento1,
    tags: ["vegetarian"],
    allergens: [6, 8, 14, 16],
  },
  {
    category: "hot",
    name: "Salmon Donburi",
    description:
      "Grilled Salmon served with Japanese Rice and Homemade Sauce",
    price: "€15.90",
    image: HotDishesImg.bento1,
    tags: [],
    allergens: [6, 8, 14, 16],
  }
    ]; 