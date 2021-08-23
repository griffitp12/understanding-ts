class Department {
  name: string;
  private employees: string[] = []
  constructor(n: string) {
    this.name = n;
  }
  addEmployee(employee: string) {
      this.employees.push(employee)
  }
  describe() {
      console.log("Department: " + this.name )
  }

}

let program = new Department('Program');

console.log(program.describe());
