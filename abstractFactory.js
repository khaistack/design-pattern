//Product
class Car {
    constructor(brand, madeIn) {
      this.brand = brand;
      this.madeIn = madeIn;
    }
  }
  
  //Abstract Factory
  class LuxuryCarFactory {
    makeTesla() {}
    makeBmw() {}
  }
  
  //Concrete Factory
  class ChinaFactory extends LuxuryCarFactory {
    location = "China"
    makeTesla() {
      return new Car("Tesla", this.location);
    }
    makeBmw() {
      return new Car("Bmw", this.location);
    }
  }
  
  //Main
  class CarFactory {
    constructor(factory) {
      this.factory = factory;
    }
  
    getNewCar() {
      const newCar = this.factory.makeTesla();
      return newCar;
    }
  }
  
  const factory = new CarFactory(new ChinaFactory());
  const car = factory.getNewCar();
  console.log(car);