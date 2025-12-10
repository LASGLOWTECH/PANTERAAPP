import food1 from "@/public/assets/food1.jpeg";
import food2 from "@/public/assets/food2.jpg";
import food3 from "@/public/assets/food3.jpeg";
import food4 from "@/public/assets/deserts.jpg";
import food5 from "@/public/assets/starters.jpg";
import food6 from "@/public/assets/Tuna.jpg";
import Jameson from "@/public/assets/Jameson.jpg";
import Andre from "@/public/assets/Andre.jpg";
import Volcano from "@/public/assets/Volcano.jpg";
import Smirnoff from "@/public/assets/Smirnoff.jpg";
import Beer from "@/public/assets/Beer.jpg";
import Carlo from "@/public/assets/Carlo.jpg";
import Shisha from "@/public/assets/Shisha.jpg";
import Cocktail from "@/public/assets/Cocktail.jpg";
import Softdrink from "@/public/assets/Softdrink.jpg";

// import drink1 from "@/public/assets/drink1.jpg"; // optional
// import drink2 from "@/public/assets/drink2.jpg"; // optional

export const menuItems = [
  // ---------- Food ----------
  {
    category: "Starters",
    image: food5.src,
    items: [
      { name: "Tuna Tartare", price: "18,000" },
      { name: "Ceviche Clásico", price: "16,000" },
      { name: "Edamame", price: "8,000" },
      { name: "Bruschetta", price: "10,000" },
      { name: "Cheesy Garlic Bread", price: "12,000" },
      { name: "Tender Chicken Wings", price: "15,000" },
    ],
  },
  {
    category: "Salads",
    image: food6.src,
    items: [
      { name: "Greek Salad", price: "18,000" },
      { name: "Caesar Salad (Chicken & Croutons)", price: "20,000" },
      { name: "Seasonal Salad", price: "15,000" },
      { name: "Panthera Special Salad", price: "18,000" },
      { name: "Tuna Salad", price: "22,500" },
    ],
  },
  {
    category: "Desserts",
    image: food4.src,
    items: [
      { name: "Chocolate Cake with Ice Cream", price: "15,000" },
      { name: "Strawberry Cake with Ice Cream", price: "15,000" },
      { name: "Mochi Ice Cream", price: "10,000" },
      { name: "Churro Bites", price: "10,000" },
      { name: "Chocolate Lava Cake", price: "12,000" },
    ],
  },

  // ---------- Drinks ----------
  {
    category: "Sparkling Wine",
       image: Andre.src,
    items: [
      { name: "Andre Rose", price: "40,000" },
      { name: "Massia Dutti", price: "80,000" },
      { name: "Expression", price: "40,000" },
      { name: "Martinellis", price: "40,000" },
      { name: "Whispering Angel", price: "110,000" },
    ],
  },
  {
    category: "Tequila",
       image: Volcano.src,
    items: [
      { name: "Volcan Cristalino", price: "400,000" },
      { name: "Casamigos 700ml", price: "400,000" },
      { name: "Casamigos 1L", price: "620,000" },
      { name: "Don Julio", price: "1,000,000" },
    ],
  },
  {
    category: "Vodka",
       image: Smirnoff.src,
    items: [
      { name: "Absolut", price: "65,000" },
      { name: "Sky", price: "65,000" },
      { name: "Ciroc", price: "80,000" },
      { name: "Smirnoff", price: "55,000" },
      { name: "Smirnoff X1", price: "70,000" },
    ],
  },
  {
    category: "Whisky",
       image: Jameson.src,
    items: [
      { name: "Jameson", price: "65,000" },
      { name: "Jameson Black Barrell", price: "120,000" },
      { name: "Singleton Dufftown", price: "120,000" },
      { name: "Jack Daniels", price: "70,000" },
      { name: "Black Label", price: "95,000" },
      { name: "Gold Label", price: "180,000" },
      { name: "Hennessy VS", price: "150,000" },
      { name: "Hennessy XO", price: "750,000" },
      { name: "Martell VS", price: "95,000" },
      { name: "Martell VSOP", price: "140,000" },
      { name: "Martell Blue Swift", price: "120,000" },
      { name: "Glenfiddich", price: "150,000" },
      { name: "Richard", price: "10,000,000" },
    ],
  },
  {
    category: "Wine",
       image: Carlo.src,
    items: [
      { name: "Drostdy Hof", price: "35,000" },
      { name: "Carlo Rossi", price: "40,000" },
      { name: "Robertson", price: "40,000" },
      { name: "4th Street", price: "35,000" },
      { name: "Fratelli", price: "55,000" },
    ],
  },
  {
    category: "Beer",
       image: Beer.src,
    items: [
      { name: "Heineken", price: "3,000" },
      { name: "Budweiser", price: "3,000" },
      { name: "Tiger", price: "3,000" },
      { name: "Desperados", price: "4,000" },
      { name: "Origin", price: "3,000" },
    ],
  },
  {
    category: "Soft Drinks",
       image: Softdrink.src,
    items: [
      { name: "Coca-Cola", price: "1,500" },
      { name: "Fanta", price: "1,500" },
      { name: "Sprite", price: "1,500" },
      { name: "Water (Small)", price: "1,000" },
      { name: "Water (Big)", price: "1,500" },
      { name: "Red Bull", price: "5,000" },
      { name: "Power Horse", price: "5,000" },
    ],
  },
  {
    category: "Cocktails",
       image: Cocktail.src,
    items: [
      { name: "Mai-Tai", price: "15,000" },
      { name: "Pina Colada", price: "15,000" },
      { name: "Long Island", price: "15,000" },
      { name: "Sex on the Beach", price: "15,000" },
      { name: "Whisky Sour", price: "15,000" },
      { name: "Margarita", price: "15,000" },
      { name: "Tequila Sunrise", price: "15,000" },
      { name: "Crew Driver", price: "15,000" },
    ],
  },
  {
    category: "Extras",
       image: Shisha.src,
    items: [
      { name: "Shisha", price: "25,000" },
    ],
  },
];
