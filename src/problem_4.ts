class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  get Name(): string {
    return this.name;
  }
  get Age(): number {
    return this.age;
  }
  getDetails() {
    console.log(`Here is ${this.name} with the age of ${this.age}`);
  }
}

const learner = new Person("Rezwan Niam", 23);
learner.getDetails();
