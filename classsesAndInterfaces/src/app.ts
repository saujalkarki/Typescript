class Department {
  // private id: string;
  // public name: string;

  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department" + " " + this.name + " " + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: String[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: String[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Saujal") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("1", ["Sushant", "Dinesh"]);

console.log(it);
it.describe();

it.addEmployee("Saujal");
// it.employees.push("Nischal"); // not allowed cause it's private
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

accounting.addEmployee("Saujal");
accounting.addEmployee("Nischal");
accounting.printEmployeeInformation();
accounting.addReport("Something went wrong");
accounting.printReports();
