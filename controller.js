class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    setMemberName(name) {
      this.model.setName(name);
    }
    getMemberName() {
      return this.model.getName();
    }
  
    setMemberRoll(roll) {
      this.model.setRoll(roll);
    }
    getMemberRoll() {
      this.model.getRoll();
    }
  
    updateView() {
      this.view.print(this.model.getName(), this.model.getRoll());
    }
  }