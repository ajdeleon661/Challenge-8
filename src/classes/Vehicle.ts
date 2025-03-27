// Import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  vin: string;
  make: string;
  model: string;
  year: number;
  weight: number;

  started: boolean;
  currentSpeed: number;

  // Constructor to initialize Vehicle properties
  constructor(vin: string, make: string, model: string, year: number, weight: number) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;

    this.started = false;
    this.currentSpeed = 0;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(`--- Vehicle Info ---`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Started: ${this.started}`);
    console.log(`Current Speed: ${this.currentSpeed} mph`);
  }

  start(): void {
    this.started = true;
    console.log('🚗 Vehicle started');
  }

  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change;
      console.log(`🚀 Accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('⚠️ Start the vehicle first');
    }
  }

  decelerate(change: number): void {
    if (this.started) {
      this.currentSpeed -= change;
      if (this.currentSpeed < 0) this.currentSpeed = 0;
      console.log(`🛑 Decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('⚠️ Start the vehicle first');
    }
  }

  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('🅿️ Vehicle stopped');
  }

  turn(direction: string): void {
    if (this.started) {
      console.log(`↪️ Vehicle turned ${direction}`);
    } else {
      console.log('⚠️ Start the vehicle first');
    }
  }

  reverse(): void {
    if (this.started) {
      console.log('🔁 Vehicle reversed');
    } else {
      console.log('⚠️ Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
