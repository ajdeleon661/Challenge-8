// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties using private access modifiers
  private _diameter: number;
  private _tireBrand: string;

  // Constructor with default values
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this._diameter = diameter;
    this._tireBrand = tireBrand;
  }

  // Getter for diameter
  get diameter(): number {
    return this._diameter;
  }

  // Getter for tire brand
  get tireBrand(): string {
    return this._tireBrand;
  }

  // Optional: Setters if you want to allow updates
  set diameter(value: number) {
    this._diameter = value;
  }

  set tireBrand(value: string) {
    this._tireBrand = value;
  }
}

// Export the Wheel class
export default Wheel;
