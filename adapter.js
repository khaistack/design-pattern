class Adapter {
    do300ropeSkips() {
      console.log("do 300 rope skips...");
    }
    do50pushups() {
     console.log("do 50 pushups...");
    }
   }
   
   class Trainee {
     doExercise() {}
   }
   
   //Adapter
   class Adapter extends Trainee {
     constructor(clone) {
       super();
       this.clone = clone;
     }
   
     doExercise() {
       this.clone.do300ropeSkips();
       this.clone.do50pushups();
       console.log("Done!");
     }
   }
   
   //Main
   const AdapterOb = new Adapter();
   const trainee = new Adapter(AdapterOb);
   trainee.doExercise();