const Employee = require('./employee')

class Engineer extends Employee {
constructor(name, id, email, github){

    super(name, id, email);
    if(github.length>20){
    this.github=github.substring(0, 20);
    }else{
        this.github=github;    
    }
}
getGithub(){
    return this.github;
}
getRole(){
    return "Engineer";
}
getHTML(){
const html = `<div class="col-md-2 card">
<div class="cardContent">
    <img src="https://source.unsplash.com/random/1">
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
        <p>Github: ${this.github}</p>
    </div>
</div>
</div>`;



    return html;
}
}

module.exports = Engineer