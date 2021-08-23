class Department {
  protected employees: string[] = [];
  constructor(private name: string, private readonly id: string) {}
  describeBasics() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  listEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
  addEmployee(name: string) {
      if (name === "Mike") {
          return
      } 
      this.employees.push(name)
  }
}
class ProgramDepartment extends Department {
  constructor(id: string, private inSession: boolean) {
    super(id, 'Program');
  }
  toggleInSession() {
    this.inSession = !this.inSession;
  }
  checkIfInSession() {
    if (this.inSession) {
      console.log('Program is in session');
    } else {
      console.log('Program is not in session');
    }
  }
}

const program = new ProgramDepartment('1', false);
program.addEmployee('Pete');
program.addEmployee('Mike');

program.describeBasics();
program.listEmployees();

program.checkIfInSession()

const IT = new ITDepartment('2', ['Pete']);
IT.addEmployee('Karl');
IT.addEmployee('Mike')

IT.describeBasics();
IT.listEmployees();
