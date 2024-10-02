import {
  Shape,
  Circle,
  Rectangle,
  Triangle,
  Square,
  Employee,
  FullTimeSalaryCalculator,
  PartTimeSalaryCalculator,
  InternSalaryCalculator,
  FreelancerSalaryCalculator,
} from "../../Solid/2.Ocp/main";

describe("Shape Area Calculation", () => {
  test("should calculate the total area of various shapes", () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 5),
      new Triangle(3),
      new Square(4),
    ];
    const shapeInstance = new Shape(shapes);
    expect(shapeInstance.calculateArea()).toBeCloseTo(119.04, 2); // Rounded total
  });

  test("should calculate the area of a circle", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.54, 2); // Rounded
  });

  test("should calculate the area of a rectangle", () => {
    const rectangle = new Rectangle(4, 5);
    expect(rectangle.calculateArea()).toBe(20);
  });

  test("should calculate the area of a triangle", () => {
    const triangle = new Triangle(3);
    expect(triangle.calculateArea()).toBe(4.5);
  });

  test("should calculate the area of a square", () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16);
  });
});

describe("Employee Salary Calculation", () => {
  test("should calculate the salary of a full-time employee", () => {
    const fullTimeEmployee = new Employee(
      "Alice",
      new FullTimeSalaryCalculator()
    );
    expect(fullTimeEmployee.calculateSalary()).toBe(5000);
  });

  test("should calculate the salary of a part-time employee", () => {
    const partTimeEmployee = new Employee(
      "John",
      new PartTimeSalaryCalculator()
    );
    expect(partTimeEmployee.calculateSalary()).toBe(3000);
  });

  test("should calculate the salary of an intern", () => {
    const internEmployee = new Employee("Bob", new InternSalaryCalculator());
    expect(internEmployee.calculateSalary()).toBe(1000);
  });

  test("should calculate the salary of a freelancer based on working hours", () => {
    const freelancerEmployee = new Employee(
      "Doe",
      new FreelancerSalaryCalculator(10)
    );
    expect(freelancerEmployee.calculateSalary()).toBe(400); // 10 hours * 40
  });
});
