const user = {
  name: "Nithin",
  age: 26,
};

function getName(address) {
  console.log("My name is ", this.name, " live in ", address);
}

Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, " is not callable");
  }

  obj.fn = this;

  return function (...newArray) {
    return obj.fn(...args, ...newArray);
  };
};
const newBindFunc = getName.myBind(user, "BLR");
newBindFunc();
