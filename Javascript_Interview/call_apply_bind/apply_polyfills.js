const user = {
  name: "Nithin",
  age: 26,
};

function getName(address) {
  console.log("My name is ", this.name, " live in ", address);
}

Function.prototype.myApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this, " is not callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  obj.fn = this;
  obj.fn(...args);
};

getName.myApply(user, ["BLR"]);
