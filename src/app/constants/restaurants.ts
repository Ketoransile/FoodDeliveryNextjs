import dbConnect from "../../lib/dbConnect";
import Restaurant from "../models/restaurant";
const restaurants = [
  {
    name: "The Gourmet Kitchen",
    description: "A fine dining experience with a modern twist.",
    address: "123 Main St, New York, NY 10001",
    phone: "+12125551234",
    image:
      "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Pizza Palace",
    description: "The best pizza in town, made with fresh ingredients.",
    address: "456 Elm St, Los Angeles, CA 90001",
    phone: "+13105556789",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Sushi Haven",
    description: "Authentic Japanese sushi and sashimi.",
    address: "789 Oak St, San Francisco, CA 94101",
    phone: "+14155551234",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Burger Barn",
    description: "Juicy burgers and crispy fries.",
    address: "101 Pine St, Chicago, IL 60601",
    phone: "+17735551234",
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Taco Fiesta",
    description: "Mexican street food at its finest.",
    address: "202 Maple St, Austin, TX 73301",
    phone: "+15125551234",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Veggie Delight",
    description: "Healthy and delicious vegetarian dishes.",
    address: "303 Cedar St, Portland, OR 97201",
    phone: "+15035551234",
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Steakhouse Supreme",
    description: "Premium cuts of steak cooked to perfection.",
    address: "404 Birch St, Dallas, TX 75201",
    phone: "+12125551234",
    image:
      "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Cafe Latte",
    description: "A cozy cafe serving coffee and pastries.",
    address: "505 Walnut St, Seattle, WA 98101",
    phone: "+12065551234",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "BBQ Pit",
    description: "Smoky and savory barbecue dishes.",
    address: "606 Spruce St, Kansas City, MO 64101",
    phone: "+18165551234",
    image:
      "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
  {
    name: "Ice Cream Dream",
    description: "Homemade ice cream in a variety of flavors.",
    address: "707 Cherry St, Miami, FL 33101",
    phone: "+13055551234",
    image:
      "https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=600",
    foods: [], // Add valid Food ObjectIds if needed
  },
];

async function injectRestaurants() {
  await dbConnect();

  try {
    const result = await Restaurant.insertMany(restaurants);
    console.log("Restaurants inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting restaurants:", error);
  }
}

injectRestaurants();
