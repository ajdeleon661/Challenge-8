// Definition of the Driveable interface
interface Driveable {
  // Properties
  started: boolean;
  currentSpeed: number;

  // Methods
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

// Export the Driveable interface
export default Driveable;
