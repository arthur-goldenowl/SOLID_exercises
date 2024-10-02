/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
class Shape {
  shapes: Shape[];
  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateArea(): number {
    let total = 0;
    this.shapes.forEach((shape) => {
      total += shape.calculateArea();
    });
    return total;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super([]);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super([]);
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}
class Triangle extends Shape {
  length: number;
  constructor(length: number) {
    super([]);
    this.length = length;
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}

class Square extends Shape {
  length: number;
  constructor(length: number) {
    super([]);
    this.length = length;
  }

  calculateArea(): number {
    return this.length * this.length;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3),
  new Square(4),
];
const shapesInstance = new Shape(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
enum EmployeeType {
  FullTime,
  PartTime,
  Intern,
  Freelancer,
}

class Employee {
  constructor(
    public name: string,
    private salaryCalculator: SalaryCalculator
  ) {}

  calculateSalary(): number {
    return this.salaryCalculator.calculate(this);
  }
}

interface SalaryCalculator {
  calculate(employee: Employee): number;
}

class FullTimeSalaryCalculator implements SalaryCalculator {
  calculate(employee: Employee): number {
    return 5000;
  }
}

class PartTimeSalaryCalculator implements SalaryCalculator {
  calculate(employee: Employee): number {
    return 3000;
  }
}

class InternSalaryCalculator implements SalaryCalculator {
  calculate(employee: Employee): number {
    return 1000;
  }
}

class FreelancerSalaryCalculator implements SalaryCalculator {
  constructor(private workingHours: number) {}

  calculate(employee: Employee): number {
    return this.workingHours * 40;
  }
}

const fullTimeEmployee = new Employee("Alice", new FullTimeSalaryCalculator());
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const partTimeEmployee = new Employee("John", new PartTimeSalaryCalculator());
console.log(
  `${partTimeEmployee.name}'s salary is ${partTimeEmployee.calculateSalary()}`
);

const internEmployee = new Employee("Bob", new InternSalaryCalculator());
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`
);

const freelancerEmployee = new Employee(
  "Doe",
  new FreelancerSalaryCalculator(10)
);

console.log(
  `${
    freelancerEmployee.name
  }'s salary is ${freelancerEmployee.calculateSalary()}`
);
/*=========== END PRACTICE 2 ===============*/

export {
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
};
