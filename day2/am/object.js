// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = (obj) => {
  keys = Object.keys(obj);

  for (key of keys) {
    if (typeof obj[key] != "object") {
      if (!obj[key]) {
        console.log("TRUE, there is a falsy value");
        return true;
      }
    } else {
      return hasFalsyValue(obj[key]);
    }
  }

  console.log("FALSE, there are no falsy values");
  return false;
};

const obj = {
  firstName: "Clarence",
  lastName: "x",
  test: {
    grade: 100,
    bleh: 1,
  },
};

hasFalsyValue(obj);
