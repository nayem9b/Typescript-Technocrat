const students = <T>(...param: T[]) => {
  console.log(param.reverse());
};
students<string>("Rahim", "karim", "Akash", "Himel");
