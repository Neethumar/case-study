function validate(test){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "12345"){
    alert ("Login successfully");
    test();
    return false;
    }
    else{
        alert("login invalid");
        return true;
    }
   
}

function callback(){
    window.location = "index.html";
}




