const user = {
  name: "Nithin",
  age: 26,
};

function getName(address) {
  console.log("My name is ", this.name, " live in ", address);
}

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, " is not callable!");
  }

  obj.fn = this;
  obj.fn(...args);
};

getName.myCall(user, "BLR");
