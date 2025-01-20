// Parent class: Employee
class Employee {
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }

    // Method to perform a task
    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }

    // Method to show employee details
    showDetails() {
        console.log(`Employee: ${this.name}, Job Title: ${this.jobTitle}`);
    }
}

// Child class: Manager inherits from Employee
class Manager extends Employee {
    constructor(name, jobTitle, teamSize) {
        super(name, jobTitle);  // Call the parent constructor
        this.teamSize = teamSize;  // Additional property for Manager
    }

    // Method specific to Manager
    manageTeam() {
        console.log(`${this.name} is managing a team of ${this.teamSize} employees.`);
    }


    showDetails() {
        super.showDetails();  // Call the parent method
        console.log(`This manager oversees ${this.teamSize} employees.`);
    }
}

// Create instances of Manager and Employee
const employee1 = new Employee("Ravi", "Developer");
const manager1 = new Manager("Anita", "Project Manager", 5);

// Using methods of Employee class
employee1.work();
employee1.showDetails();

console.log("-----");

// Using methods of Manager class (inherited from Employee)
manager1.work();
manager1.manageTeam();
manager1.showDetails();
