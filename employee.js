class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        if (email.length > 20) {
            this.email = email.substring(0, 20);
        } else {
            this.email = email
        }

        if (JSON.stringify(id).length > 20) {
            this.id = JSON.stringify(id).substring(0, 20);
        } else {
            this.id = id;
        }
        if (name.length > 20) {
            this.name = name.substring(0, 20);
        } else {
            this.name = name
        }
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;
