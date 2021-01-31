const myFunction1 = () => {
  console.log("hello");
};

const main = (arg: any) => {
  console.log(arg === myFunction1);
};

main(myFunction1);
console.log(typeof myFunction1);
