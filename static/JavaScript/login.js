const SignInBtn = document.querySelector("#sign-in-button");
const SignUpBtn = document.querySelector("#sign-up-button");
const Container = document.querySelector(".container");

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
