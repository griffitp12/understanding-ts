class Department {
  protected employees: string[] = [];
  constructor(private name: string, private readonly id: string) {}
  static createEmployee(name:string) {
    return {name: name}
  }
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
} /*  */

type Computer = { serialNo: string; purchaseYear: number };

class ITDepartment extends Department {
  private lastComputer: Computer;

  get mostRecentComputer() {
    return this.lastComputer;
  }

  set mostRecentComputer(value: Computer) {
    this.addComputer(value);
  }

  constructor(
    id: string,
    public admins: string[],
    private computers: Computer[]
  ) {
    super(id, 'IT');
    this.lastComputer = computers[0];
  }
  addEmployee(name: string) {
    if (name === 'Mike') {
      return;
    }
    this.employees.push(name);
  }
  addComputer(computer: Computer) {
    this.computers.push(computer);
    this.lastComputer = computer;
  }
  listComputers() {
    console.log(this.computers);
  }
}

/* class ProgramDepartment extends Department {
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

program.checkIfInSession(); */

const IT = new ITDepartment('2', ['Pete'], []);
IT.addEmployee('Karl');
IT.addEmployee('Mike');

IT.describeBasics();
IT.listEmployees();
IT.listComputers();

const macbook1: Computer = { serialNo: 'chf6nch', purchaseYear: 2021 };
IT.mostRecentComputer = macbook1;
IT.listComputers();
console.log(IT.mostRecentComputer);

const employee1 = Department.createEmployee("Mone")
console.log(employee1)