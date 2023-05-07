const checkAdress = (param: unknown): void => {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.log("ERROR: WRONG INPUT");
  }
};
checkAdress("Dhaka");
