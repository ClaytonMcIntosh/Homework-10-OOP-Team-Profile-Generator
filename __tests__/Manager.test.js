const Manager = require("../lib/Manager.js");

it("Used to see if new Manager is an object", () => {
  const managerTest = new Manager();
  expect(typeof managerTest).toBe("object");
});

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

it("Used to see if job type is Manager", () => {
  const managerTest = new Manager();
  expect(managerTest.getRole()).toBe("Manager");
});
