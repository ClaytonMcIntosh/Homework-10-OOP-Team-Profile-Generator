const Intern = require("../lib/Intern.js");

it("Used to see if new Intern is an object", () => {
  const internTest = new Intern();
  expect(typeof internTest).toBe("object");
});

it("Testing creation of intern role", () => {
  const internTest = new Intern(
    "Jack Black",
    "123456789",
    "deweyfinn@gmail.com",
    "School of rock"
  );
  expect(internTest.name).toBe("Jack Black");
  expect(internTest.id).toBe("123456789");
  expect(internTest.email).toBe("deweyfinn@gmail.com");
  expect(internTest.school).toBe("School of rock");
});


it("Used to see if job type is Intern", () => {
  const internTest = new Intern();
  expect(internTest.getRole()).toBe("Intern");
});
