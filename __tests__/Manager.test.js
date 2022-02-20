const Manager = require("../lib/Manager.js");

describe("Manager Test", () => {
  it("Testing creation of manager role", () => {
    const ManagerTest = new Manager(
      "Michael Scott",
      "001",
      "mike@dundermifflin.com",
      "555 45761"
    );
    expect(ManagerTest.name).toBe("Michael Scott");
    expect(ManagerTest.id).toBe("001");
    expect(ManagerTest.email).toBe("mike@dundermifflin.com");
    expect(ManagerTest.officeNumber).toBe("555 45761");
  });
});
