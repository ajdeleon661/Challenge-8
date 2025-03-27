// Import the vehicle classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// Define the AbleToTow interface
interface AbleToTow {
  towingCapacity: number;

  // Method to tow another vehicle
  tow(vehicle: Truck | Motorbike | Car): void;
}

// Export the interface
export default AbleToTow;
