// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

// Create a Truck instance
const truck1 = new Truck(
  Cli.generateVin(),
  "Red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [], // let the class assign 4 default wheels
  10000
);

// Create a Car instance
const car1 = new Car(
  Cli.generateVin(),
  "Blue",
  "Toyota",
  "Camry",
  2021,
  3000,
  130,
  []
);

// Create a Motorbike instance with custom wheels
const motorbike1Wheels = [
  new Wheel(17, "Michelin"),
  new Wheel(17, "Michelin")
];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "Black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
);

// Add all vehicles to the array
vehicles.push(truck1, car1, motorbike1);

// Create a new CLI instance and start it
const cli = new Cli(vehicles);
cli.startCli();
