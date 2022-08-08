const SignInBtn = document.querySelector("#sign-in-button");
const SignUpBtn = document.querySelector("#sign-up-button");
const Container = document.querySelector(".container");
const WrongPass = document.getElementById("WrongPass");
var Passwords = ["Hello","Yo","Ho","Hooo"];
//No refresh
var form = document.getElementById("sign-in-form");

function handleForm(event) { event.preventDefault(); } 

form.addEventListener('submit', handleForm);

//Animation
SignUpBtn.addEventListener("click", () =>
    {
        Container.classList.add("SignUpMode");
    }
);
SignInBtn.addEventListener("click", () =>
    {
        Container.classList.remove("SignUpMode");
    }
);


//Cokkie for login
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


//string matching
function login() {
    var UserName = document.getElementById("HospitalName").value;
    var Password = document.getElementById("Password");
    var Pass = Password.value;
    if (Passwords[UserName] == Pass) {
        setCookie("User",UserName,1);
        window.location.href="Update_Request.html";
    }
    else {
        // Password giggle animation
        Password.classList.add("wrong");
        window.setTimeout(() => {
            Password.classList.remove("wrong");
        }, 1000);
        //Wrong Password Display
        WrongPass.innerHTML="X Wrong Password";
    }
}

