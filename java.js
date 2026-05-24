function jareg(){

    let newUser = document.getElementById("newuser").value;
    let newPass = document.getElementById("newpass").value;

    if (!newUser || newUser.trim() === "" || !newPass || newPass.trim() === ""){
        alert("Action Refused: Username and Password cannot be blank!");
        return;
    }

    sessionStorage.setItem("savuser", newUser);
    sessionStorage.setItem("savpass", newPass);

    window.location.href = "login.html";
}
function jain() {
    let userIn = document.getElementById("user").value;
    let passIn = document.getElementById("pass").value;

    let user = sessionStorage.getItem("savuser");
    let pass = sessionStorage.getItem("savpass");
    let accName = document.getElementById("accusername");

    if(userIn == user && passIn == pass){
        sessionStorage.setItem("acc", user);
        window.location.href = "account.html";
    }
    else if(userIn == "user" && passIn == 1234){
        sessionStorage.setItem("acc", user);
        window.location.href = "account.html"
    }
    else{
        document.getElementById("inco").textContent = (`Invalid! Please try again`);
    }
}
function logout(){
    sessionStorage.clear()
    window.location.href = "index.html"
}

let accName = document.getElementById("accusername");
let activeUser = sessionStorage.getItem("acc");
if (activeUser !== null){
    accName.textContent = activeUser;
}


function data(){
    let input = Number(document.getElementById("indata").value);
    let value = document.getElementById("valdata");
    let answer = input * 0.12 ;
    value.textContent = answer +" Birr"
}

function voice(){
    let input = Number(document.getElementById("invoice").value);
    let value = document.getElementById("valvoice");
    let answer = input * 0.65 ;
    value.textContent = answer +" Birr"
}

function sms(){
    let input = Number(document.getElementById("insms").value);
    let value = document.getElementById("valsms");
    let answer = input * 0.144 ;
    value.textContent = answer +" Birr"
}