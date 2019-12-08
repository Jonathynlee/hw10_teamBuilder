const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        if (JSON.stringify(officeNumber).length > 20) {
            this.officeNumber = JSON.stringify(officeNumber).substring(0, 20);
        } else {
            this.officeNumber = officeNumber;
        }
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getHTML() {
        const html = `<div class="col-md-2 card">
    <div class="cardContent">
        <img src="https://source.unsplash.com/random/2">
        <div class="infoSlot">
            <p>Name: ${this.name}</p>
            
        </div>
    
        <div class="infoSlot">
            <p>ID: ${this.id}</p>
        </div>
        <div class="infoSlot">
            <p>Title:Engineer</p>
        </div>
        <div class="infoSlot">
            <p>Email: ${this.email}</p>
        </div>
        <div class="infoSlot">
            <p>Office Number: ${this.officeNumber}</p>
        </div>
    </div>
    </div>`;



        return html;
    }
}

module.exports = Manager