const checkAdress = (param: unknown): void => {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.log(
      `ERROR: WRONG INPUT (exprected string, instead got ${typeof param})`
    );
  }
};
checkAdress("Mirpur, Dhaka");
