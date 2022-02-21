const Employee = require("../lib/Employee.js");

it("Used to see if new Employee is an object", () => {
  const employeeTest = new Employee();
  expect(typeof employeeTest).toBe("object");
});

it("Used to creates a new employee", () => {
  const employeeTest = new Employee("Mr. Bean", "123", "bean@gmail.com");
  expect(employeeTest.name).toBe("Mr. Bean");
  expect(employeeTest.id).toBe("123");
  expect(employeeTest.email).toBe("bean@gmail.com");
});

it("Used to see if job type is employee", () => {
  const employeeTest = new Employee();
  expect(employeeTest.getRole()).toBe("Employee");
});
