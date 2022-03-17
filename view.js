class View {
    print(memberName, memberRoll) {
      console.log(`Member:\n  Name: ${memberName}\n  Roll: ${memberRoll}`);
    }
  }
  //MVC App
  class MVCApp {
    render() {
      const model = new User("Jhon", "May");
      const view = new View();
      const controller = new Controller(model, view);
  
      controller.updateView();
      controller.setMemberName("Jhon1");
      controller.setMemberRoll("May1");
      controller.updateView();
    }
  }
  
  //Main
  const app = new MVCApp();
  app.render();