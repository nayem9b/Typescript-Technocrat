const students = <T>(...param: T[]) => {
  console.log(param.reverse());
};
console.log(students<string>("Rahim", "karim"));
