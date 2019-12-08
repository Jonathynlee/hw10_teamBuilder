const Employee = require('./employee')

class Intern extends Employee {
constructor(name, id, email, school){

    super(name, id, email);
    if (school.length>20){
    this.school=school.substring(0, 20);
    }else{
        this.school=school;
    }
}
getSchool(){
    return this.school;
}
getRole(){
    return "Intern";
}
getHTML(){
    const html = `<div class="col-md-2 card">
    <div class="cardContent">
        <img src="https://source.unsplash.com/random">
        <div class="infoSlot">
            <p>Name: ${this.name}</p>
            
        </div>
    
        <div class="infoSlot">
            <p>ID: ${this.id}</p>
        </div>
        <div class="infoSlot">
            <p>Title:Intern</p>
        </div>
        <div class="infoSlot">
            <p>Email: ${this.email}</p>
        </div>
        <div class="infoSlot">
            <p>School: ${this.school}</p>
        </div>
    </div>
    </div>`;
    
    
    
        return html;
    }
}

module.exports = Intern