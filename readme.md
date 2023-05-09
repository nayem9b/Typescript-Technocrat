#Interview Questions

**1. What is TypeScript, and how is it different from JavaScript?**
Answer:
TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

Differences:
While JavaScript is dynamically-typed, TypeScript is a statically-typed superset of JavaScript. TypeScript is known as an Object-oriented programming language. Whereas JavaScript is a prototype-based language
TypeScript supports Interfaces but JavaScript does not. TypeScript has a feature known as Static typing but JavaScript does not support this feature

**2. Can you explain the difference between "interface" and "type" in TypeScript?**
Answer: A type alias is a name for any type. Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always
extendable. We use interface for objects most of the case. We use interface for declaring objects mainly.

**3. What is the difference between an "unknown" and "any" type in TypeScript?**
Answer: A variable of type any can be assigned with anything.
unknown is recommended over any because it provides safer typing — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown.

**4. What is the "as" keyword used for in TypeScript?**
Answer: The as keyword is a type assertion in typescript. Type assertion is used to set the data type of the variable on our own and tells the compiler not to infer it on its own. Type assertion is used to tell the compiler that we want to treat any as a number, or string.

**5. Can you give an example of how to use enums in TypeScript?**

An enum is a special "class" that represents a group of constants (unchangeable variables)
Example:
enum HealthStatus {
Sugar = 14.56,
Blood Pressure = 120/80,
TSH,
RBC,
};
here we can't change the values of HealthStatus. So these are immutable. These immutable objects are called enum
