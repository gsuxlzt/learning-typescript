import { textSpanIsEmpty } from "typescript";

const today = new Date();

today.test = "test"; // Date has no test property so it will give an error

class Person {}

const jami = new Person();

const test = (test: String) => {
  console.log(test);
};

test("test");
