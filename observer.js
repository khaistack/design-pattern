//Subject
class Publisher {
    constructor(article) {
      this.newArticle = article;
      this.subscribers = new Set();
    }
  
    addSubscriber(subscriber) {
      this.subscribers.add(subscriber);
    }
  
    removeSubscriber(subscriber) {
      this.subscribers.delete(subscriber);
    }
  
    notifySubscribers() {
      for (let sub of this.subscribers) {
        sub.readNewArticle(this.newArticle);
      }
    }
  
    publishNewArticle(article = "something Awesome") {
      this.newArticle = article;
      this.notifySubscribers();
    }
  }
  
  //Observer
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    readNewArticle(article) {
      console.log(`${this.name} reading ${article}...`)
    }
  }
  
  //Main
  const publisher = new Publisher("the first article");
  const sub1 = new Subscriber("first");
  const sub2 = new Subscriber("two");
  
  publisher.publishNewArticle();
  
  publisher.addSubscriber(sub1);
  publisher.addSubscriber(sub2);
  
  publisher.publishNewArticle();
  console.log();
  
  publisher.removeSubscriber(sub1);
  publisher.publishNewArticle("something else but awesome too");