let storedUser = "";
let storedPassword = "";

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        document.getElementById("message").innerHTML =
        "Please enter username and password";
        return;
    }

    storedUser = username;
    storedPassword = btoa(password);

    document.getElementById("message").innerHTML =
    "Registration Successful";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === storedUser &&
       btoa(password) === storedPassword){
        document.getElementById("message").innerHTML =
        "Login Successful";
    } else {
        document.getElementById("message").innerHTML =
        "Invalid Credentials";
    }
}

function logout() {
    document.getElementById("message").innerHTML =
    "Logged Out Successfully";
}
