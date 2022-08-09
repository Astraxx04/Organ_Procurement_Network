
const SignUpBtnn = document.getElementById("SignUpBtn");
const Sinu = document.getElementsByClassName("sign-up-form")[0];

function myfunction() {

    const NewhosName = document.getElementById("NewhosName").value;
    const NewEmail = document.getElementById("NewEmail").value;
    const NewPass = document.getElementById("NewPass").value;
    const ConfiPass = document.getElementById("ConfiPass").value;

    if (ConfiPass != NewPass) {
        return;
    }

    const dict_values = {NewhosName, NewEmail,NewPass} //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    $.ajax({
        url:"/SignUp",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});

}
function SignIn() {
    const HospitalName = document.getElementById("HospitalName").value;
    const Password = document.getElementById("Password").value;
    const Login_cred = {HospitalName, Password};
    const login = JSON.stringify(Login_cred);
    $.ajax({
        url:"/Signin",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(login)});
}
SignUpBtnn.addEventListener("click",()=>{
    const SingUpReq = document.getElementsByClassName("sign-up-form ")[0].querySelectorAll("[required='']");
    var flag = 0;
    SingUpReq.forEach(Req=>{
        if (Req.value == "") {
            flag = 1;
        }
    });
    if (flag == 0) {
        myfunction();
    }
});



//donot refresh
$(document).ready(function () {
    // Listen to submit event on the <form> itself!
    $('.form').submit(function (e) {
  
      // Prevent form submission which refreshes page
      e.preventDefault();
    });
  });
