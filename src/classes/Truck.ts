// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class that extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  color: string;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call parent constructor
    super(vin, make, model, year, weight);

    this.color = color;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel());
  }

  // Implement the tow method from AbleToTow
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`🚛 Truck is towing ${vehicleDetails}.`);
    } else {
      console.log(`❌ Cannot tow ${vehicleDetails} — too heavy!`);
    }
  }

  // Override printDetails to include truck-specific details
  override printDetails(): void {
    super.printDetails();
    console.log(`Color: ${this.color}`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels: ${this.wheels.length}`);
    
    // Optional: Print details of each wheel
    this.wheels.forEach((wheel, index) => {
      console.log(
        `  Wheel ${index + 1}: ${wheel.diameter} inch with a ${wheel.tireBrand} tire`
      );
    });
  }
}

// Export the Truck class
export default Truck;
