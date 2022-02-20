const Employee = require("../lib/Employee.js");

describe("Employee Test", () => {
  it("Used to creates a new employee", () => {
    const employeeTest = new Employee("Mr. Bean", "123", "bean@gmail.com");
    expect(employeeTest.name).toBe("Mr. Bean");
    expect(employeeTest.id).toBe("123");
    expect(employeeTest.email).toBe("bean@gmail.com");
  });
});

