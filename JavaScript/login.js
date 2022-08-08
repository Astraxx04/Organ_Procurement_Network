const SignInBtn = document.querySelector("#sign-in-button");
const SignUpBtn = document.querySelector("#sign-up-button");
const Container = document.querySelector(".container");
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


