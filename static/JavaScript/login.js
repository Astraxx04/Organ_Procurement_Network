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

Hospital_Name = Object.keys(Hospital);
Hospital_Name.forEach(nam => {
    var HospitalList = document.getElementById("HospitalName");
    var option = document.createElement("option");
    let NameOfHospital = nam;
    option.text = NameOfHospital;
    option.value = NameOfHospital;
    HospitalList.add(option);
});

//Cokkie for login

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  
  var login_bttn = document.getElementById("Login");
  const WrongPass = document.getElementById("WrongPass");
  login_bttn.addEventListener("click", ()=>{
      var User = document.getElementById("HospitalName").value;
      let HospitalIndex = Hospital[User][1];
      var Password = document.getElementById("Password");
      var Pass = Password.value;
      var ReqPass = Hospital[User][0];
      if (Pass == ReqPass) {
          setCookie("User",HospitalIndex,1);//Cokie name "User" with hospital index with 1 day expiry
          $.ajax({
            url:"/Welcome",
            type:"get",
        });

      }
      else{
          // Password giggle animation
          Password.classList.add("wrong");
          window.setTimeout(() => {
              Password.classList.remove("wrong");
          }, 1000);
          //Wrong Password Display
          WrongPass.innerHTML="X Wrong Password";
        }
    });