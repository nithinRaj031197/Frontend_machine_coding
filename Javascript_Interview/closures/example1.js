//  Imagine you're working on a text processing library in JavaScript.
// You're tasked with creating a function that generates different text
// transformation functions based on certain parameters.
// Let's say these transformation functions take a string as input
// and modify it in various ways, such as reversing, capitalizing, and adding a prefix.

function createTextTransform(transformationType) {
  let prefix = "";

  if (transformationType === "reverse") {
    prefix = "Reversed ";
    return function (input) {
      const reversed = input.split().reverse().join();
      return prefix + reversed;
    };
  } else if (transformationType === "capitalize") {
    prefix = "Capitalize ";

    return function (input) {
      const capitalized = input.toUpperCase();
      return prefix + capitalized;
    };
  } else if (transformationType === "addPrefix") {
    return function (input) {
      return input;
    };
  }
}

const reversetransformer = createTextTransform("reverse");
const capitalizeTransformer = createTextTransform("capitalize");
const addPrefixTransformer = createTextTransform("addPrefix");

console.log(reversetransformer("nithin"));
console.log(capitalizeTransformer("aDndmdJ"));
console.log(addPrefixTransformer("example"));
