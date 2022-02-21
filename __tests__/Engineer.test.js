const Engineer = require("../lib/Engineer.js");

it("Used to see if new Engineer is an object", () => {
  const engineerTest = new Engineer();
  expect(typeof engineerTest).toBe("object");
});

it("Testing creation of engineer role", () => {
  const engineerTest = new Engineer(
    "Cinderella",
    "999",
    "cindy_85@gmail.com",
    "cindygit"
  );
  expect(engineerTest.name).toBe("Cinderella");
  expect(engineerTest.id).toBe("999");
  expect(engineerTest.email).toBe("cindy_85@gmail.com");
  expect(engineerTest.github).toBe("cindygit");
});

it("Used to see if job type is Engineer", () => {
  const engineerTest = new Engineer();
  expect(engineerTest.getRole()).toBe("Engineer");
});
