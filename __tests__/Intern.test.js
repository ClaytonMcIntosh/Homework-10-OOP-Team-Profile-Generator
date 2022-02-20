const Intern = require("../lib/Intern.js");

describe("Intern Test", () => {
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
});
