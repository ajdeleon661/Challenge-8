import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  color: string;
  topSpeed: number;
  wheels: Wheel[];

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
    super(vin, make, model, year, weight);

    this.color = color;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  wheelie(): void {
    console.log(`🏍️ Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Color: ${this.color}`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

export default Motorbike;
