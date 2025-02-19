import dbConnect from "../../lib/dbConnect";
import Food from "../models/food";
import Restaurant from "../models/restaurant";

export const foods = [
  {
    name: "Margherita Pizza",
    description: "Classic pizza with mozzarella and tomato sauce",
    price: 12.99,
    category: "67b1d9027b05f59617a9a81b", // Pizza category
    restaurant: "67b1ea776e87e8f39725bbd7", // The Gourmet Kitchen
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Cheeseburger",
    description: "Juicy burger with melted cheese and fresh veggies",
    price: 9.99,
    category: "67b1d95d7b05f59617a9a81e", // Burger category
    restaurant: "67b1ea776e87e8f39725bbda", // Burger Barn
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sushi Rolls",
    description: "Fresh sushi with a variety of fillings",
    price: 15.99,
    category: "67b1d96a7b05f59617a9a820", // Noodles category
    restaurant: "67b1ea776e87e8f39725bbd9", // Sushi Haven
    image:
      "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Chicken Burger",
    description: "Crispy chicken patty with lettuce and mayo",
    price: 8.99,
    category: "67b1d97c7b05f59617a9a822", // Chicken category
    restaurant: "67b1ea776e87e8f39725bbda", // Burger Barn
    image:
      "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Fish Tacos",
    description: "Fresh fish with a tangy sauce in soft tortillas",
    price: 11.99,
    category: "67b1d9897b05f59617a9a824", // Fish category
    restaurant: "67b1ea776e87e8f39725bbdb", // Taco Fiesta
    image:
      "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Vegetable Stir Fry",
    description: "Stir-fried veggies with a savory sauce",
    price: 10.99,
    category: "67b1d99a7b05f59617a9a826", // Sandwich category
    restaurant: "67b1ea776e87e8f39725bbdc", // Veggie Delight
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Grilled Steak",
    description: "Premium cut steak cooked to perfection",
    price: 24.99,
    category: "67b1d97c7b05f59617a9a822", // Chicken category
    restaurant: "67b1ea776e87e8f39725bbdd", // Steakhouse Supreme
    image:
      "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Latte and Croissant",
    description: "A perfect coffee and pastry combo",
    price: 7.99,
    category: "67b1d9a87b05f59617a9a828", // Soup category
    restaurant: "67b1ea776e87e8f39725bbde", // Cafe Latte
    image:
      "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "BBQ Ribs",
    description: "Tender ribs glazed with smoky barbecue sauce",
    price: 18.99,
    category: "67b1d95d7b05f59617a9a81e", // Burger category
    restaurant: "67b1ea776e87e8f39725bbdf", // BBQ Pit
    image:
      "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Vanilla Ice Cream",
    description: "Creamy vanilla ice cream made with real vanilla beans",
    price: 5.99,
    category: "67b1d9b47b05f59617a9a82a", // Cake category
    restaurant: "67b1ea776e87e8f39725bbe0", // Ice Cream Dream
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Pepperoni Pizza",
    description: "Pizza topped with spicy pepperoni and mozzarella",
    price: 13.99,
    category: "67b1d9027b05f59617a9a81b", // Pizza category
    restaurant: "67b1ea776e87e8f39725bbd7", // The Gourmet Kitchen
    image:
      "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "BBQ Chicken Burger",
    description: "Grilled chicken burger with BBQ sauce",
    price: 9.49,
    category: "67b1d95d7b05f59617a9a81e", // Burger category
    restaurant: "67b1ea776e87e8f39725bbda", // Burger Barn
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "California Rolls",
    description: "Sushi rolls with crab and avocado",
    price: 16.99,
    category: "67b1d96a7b05f59617a9a820", // Noodles category
    restaurant: "67b1ea776e87e8f39725bbd9", // Sushi Haven
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Fish & Chips",
    description: "Crispy fried fish served with fries",
    price: 11.49,
    category: "67b1d9897b05f59617a9a824", // Fish category
    restaurant: "67b1ea776e87e8f39725bbdb", // Taco Fiesta
    image:
      "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "BBQ Pulled Pork Sandwich",
    description: "Tender pulled pork with barbecue sauce",
    price: 10.99,
    category: "67b1d99a7b05f59617a9a826", // Sandwich category
    restaurant: "67b1ea776e87e8f39725bbdc", // Veggie Delight
    image:
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Steak and Fries",
    description: "Premium steak served with crispy fries",
    price: 22.99,
    category: "67b1d97c7b05f59617a9a822", // Chicken category
    restaurant: "67b1ea776e87e8f39725bbdd", // Steakhouse Supreme
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Espresso and Muffin",
    description: "A strong espresso served with a fresh muffin",
    price: 6.49,
    category: "67b1d9a87b05f59617a9a828", // Soup category
    restaurant: "67b1ea776e87e8f39725bbde", // Cafe Latte
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Pulled Pork Tacos",
    description: "Pulled pork with tangy salsa in soft tortillas",
    price: 12.49,
    category: "67b1d95d7b05f59617a9a81e", // Burger category
    restaurant: "67b1ea776e87e8f39725bbdf", // BBQ Pit
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Chocolate Sundae",
    description: "Rich chocolate ice cream with toppings",
    price: 6.99,
    category: "67b1d9b47b05f59617a9a82a", // Cake category
    restaurant: "67b1ea776e87e8f39725bbe0", // Ice Cream Dream
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Hawaiian Pizza",
    description: "Pizza with ham, pineapple, and mozzarella",
    price: 14.99,
    category: "67b1d9027b05f59617a9a81b", // Pizza category
    restaurant: "67b1ea776e87e8f39725bbd7", // The Gourmet Kitchen
    image:
      "https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Cheese Fries",
    description: "Fries topped with melted cheese and sauce",
    price: 5.49,
    category: "67b1d95d7b05f59617a9a81e", // Burger category
    restaurant: "67b1ea776e87e8f39725bbda", // Burger Barn
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Tempura Shrimp",
    description: "Lightly battered shrimp served with dipping sauce",
    price: 13.49,
    category: "67b1d96a7b05f59617a9a820", // Noodles category
    restaurant: "67b1ea776e87e8f39725bbd9", // Sushi Haven
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Grilled Salmon",
    description: "Tender grilled salmon served with vegetables",
    price: 18.49,
    category: "67b1d9897b05f59617a9a824", // Fish category
    restaurant: "67b1ea776e87e8f39725bbdb", // Taco Fiesta
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Vegetarian Wrap",
    description: "A healthy wrap filled with fresh veggies",
    price: 7.99,
    category: "67b1d99a7b05f59617a9a826", // Sandwich category
    restaurant: "67b1ea776e87e8f39725bbdc", // Veggie Delight
    image:
      "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Tomahawk Steak",
    description: "Juicy tomahawk steak with mashed potatoes",
    price: 29.99,
    category: "67b1d97c7b05f59617a9a822", // Chicken category
    restaurant: "67b1ea776e87e8f39725bbdd", // Steakhouse Supreme
    image:
      "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting",
    price: 5.99,
    category: "67b1d9b47b05f59617a9a82a", // Cake category
    restaurant: "67b1ea776e87e8f39725bbe0", // Ice Cream Dream
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Chicken Quesadilla",
    description: "Grilled chicken with melted cheese in a tortilla",
    price: 9.99,
    category: "67b1d9a87b05f59617a9a828", // Soup category
    restaurant: "67b1ea776e87e8f39725bbde", // Cafe Latte
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Penne Alfredo",
    description: "Penne pasta with creamy Alfredo sauce",
    price: 14.49,
    category: "67b1d96a7b05f59617a9a820", // Noodles category
    restaurant: "67b1ea776e87e8f39725bbd9", // Sushi Haven
    image:
      "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Veggie Pizza",
    description: "Pizza topped with a variety of fresh vegetables",
    price: 11.99,
    category: "67b1d9027b05f59617a9a81b", // Pizza category
    restaurant: "67b1ea776e87e8f39725bbd7", // The Gourmet Kitchen
    image:
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey center",
    price: 6.49,
    category: "67b1d9b47b05f59617a9a82a", // Cake category
    restaurant: "67b1ea776e87e8f39725bbe0", // Ice Cream Dream
    image:
      "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default async function seedFoods() {
  await dbConnect();
  // try {
  //   await Food.insertMany(foods);
  //   console.log("Foods seeded successfully");
  // } catch (error: any) {
  //   console.error("Error seeding foods:", error.message);
  // }
  try {
    for (const food of foods) {
      // Insert food into the database
      const newFood = await Food.create(food);

      // Update the corresponding restaurant's `foods` array
      await Restaurant.findByIdAndUpdate(
        food.restaurant, // Find restaurant by ID
        { $push: { foods: newFood._id } }, // Add food ID to restaurant's `foods` array
        { new: true, useFindAndModify: false }
      );
    }

    console.log("Foods seeded successfully and assigned to restaurants.");
  } catch (error: any) {
    console.error("Error seeding foods:", error.message);
  }
}
seedFoods();
