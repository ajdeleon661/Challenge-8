// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle
class Car extends Vehicle {
  color: string;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, make, model, year, weight);

    this.color = color;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    // Print Car-specific details
    console.log(`Color: ${this.color}`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print wheel details
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.diameter} inch with a ${wheel.tireBrand} tire`
      );
    });
  }
}

// Export the Car class as the default export
export default Car;
