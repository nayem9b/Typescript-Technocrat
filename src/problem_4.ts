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
  public getDetails(): string {
    console.log(`Here is ${this.name} with the age of ${this.age}`);
    return `${this.name}'s age is ${this.age} `;
  }
}

const learner = new Person("Akash", 23);
learner.getDetails();

// Part 2
class Student extends Person {
  private grade: number;
  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }
  public getGrade(): string {
    console.log(` ${this.getDetails()} and "GRADE": ${this.grade} `);
    return ` ${this.getDetails()} and GRADE: ${this.grade} `;
  }
}

const grade = new Student("Batash", 17, 3.56);
grade.getGrade();
