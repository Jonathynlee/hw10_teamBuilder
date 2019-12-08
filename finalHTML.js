class makeHTML {
    // Just like constructor functions, classes can accept arguments
    constructor(inner) {
      this.inner = inner;
     
    }
    

    getHTML(){
    const myHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            html,
            body {
                height: 100%;
            }
    
            .topbar {
                height: 200px;
                /*border-bottom:4px solid rgb(100, 100, 100);*/
                background-color: rgb(207, 207, 207);
                color: rgb(12, 71, 148);
                text-shadow: 4px 4px 20px rgb(14, 89, 187);
                text-align: center;
                background: linear-gradient(to bottom, rgb(207, 207, 207), white)
            }
    
            h1 {
                line-height: 125px;
                font-size: 70px;
    
            }
    
            .bottombar {
                position: fixed;
                bottom: 0px;
                height: 200px;
                /*border-top:4px solid rgb(100, 100, 100);*/
                background-color: rgb(207, 207, 207);
                background: linear-gradient(to top, rgb(207, 207, 207), white)
            }
    
            .card {
                padding: 20px;
                border: none;
                background-color: rgba(255, 255, 255, 0);
                height: 400px;
                min-width: 250px;
                max-width: 300px;
            }
    
            .cardContent {
                background-color: rgb(12, 71, 148);
                height: 100%;
                width: 100%;
                border-radius: 10px;
                border: 5px solid rgb(255, 255, 255);
                box-shadow: 2px 2px 10px rgb(31, 31, 31);
                padding: 10px;
            }
    
            .cardContent img {
                border: 2px solid white;
                border-radius: 5px;
                position: relative;
                left: 20%;
                width: 60%;
                height: 40%;
                margin-bottom: 10px;
                
            }
    
            .cardContent ul {
                margin: 0PX;
                padding: 0PX;
                margin-top: 10px;
                text-decoration: none;
                list-style: none;
                color: white;
                font-size: 15px;
                line-height: 18px;
    
            }
            .infoSlot{
                border:1px solid grey;
                padding:5px;
                background-color:white;
                border-radius:4px;
               height:35px;
               
            }
            .infoslot p{
                margin-top:auto;
                margin-bottom:auto;
                display:inline-block;
            }
            .inputs{
                height:100%;
                border-right:2px solid rgb(204, 204, 204);
                width:29%;
                background-color:rgb(66, 66, 66);
                color:white;
                text-align:center;
                display:inline-block;
                margin:0px!important;
            }
            .inputss{
                height:100%;
                border-right:2px solid rgb(204, 204, 204);
                width:50%;
                background-color:rgb(66, 66, 66);
                color:white;
                padding:7px;
                display:inline-block;
            }
    
        </style>
    </head>
    
    <body>
    
    
        <div class="row header">
    
            <div class="col-md-12 topbar">
                <h1>
                    Your Team Profile
                </h1>
            </div>
    
        </div>
        <div class="row header">
    
            <div class="col-md-12 bottombar">
    
            </div>
    
        </div>
    
    
        <div class="row content">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="row">
                    <!-- TEMPLATES GO HERE! MAKE SURE TO ADD FILLER DIV-->
                   
                   ${this.inner}
                </div>
            </div>
            <div class="col-md-2"></div>
    
    
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
        return myHTML;
    }
    
}

module.exports = makeHTML;
