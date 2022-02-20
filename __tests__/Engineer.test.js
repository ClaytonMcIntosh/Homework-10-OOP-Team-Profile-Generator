const Engineer = require("../lib/Engineer.js");

describe("Engineer Test", () => {
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
});
