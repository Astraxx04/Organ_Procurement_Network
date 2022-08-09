const SubmitBtn = document.getElementById("submitBtn");
const PopUp = document.getElementById("popup");
const ConfirmPreview = document.getElementById("ConfirmPreview");
var ListOfOrganUpdated =[];

function Pop() {
    var requireds = document.querySelectorAll('[required=""]');
    var flag = 0;
    requireds.forEach(req => {
        if (req.value == "") {
            flag = 1;
        }
    });
    if (flag == 0)
    {
    for (let i = 0; i < requireds.length; i=i+3) {
        var p = document.createElement("p");
        p.innerHTML = "Organ:-";
        ConfirmPreview.appendChild(p);
        var span = document.createElement("span");
        span.innerHTML = ListOfOrgan[requireds[i].value];
        p.appendChild(span);
        var p = document.createElement("p");
        p.innerHTML = "Organ Harvest Date:-";
        ConfirmPreview.appendChild(p);
        var span = document.createElement("span");
        span.innerHTML = requireds[i+1].value;
        p.appendChild(span);
        var p = document.createElement("p");
        p.innerHTML = "Organ Harvest Time:-";
        ConfirmPreview.appendChild(p);
        var span1 = document.createElement("span");
        span1.innerHTML = requireds[i+2].value+"<br>--------------------------------------------------";
        p.appendChild(span1);
        
        if (i ==0) {
            ListOfOrganUpdated[i] = ListOfOrgan[requireds[i].value];
        }
        else{
            ListOfOrganUpdated[i-2] = ListOfOrgan[requireds[i].value];
        }
        

    }
   
    PopUp.style.display="flex";        
    }
    
}



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }















var ConfirmSubmitBtn = document.getElementById("ConfirmSubmit");
ConfirmSubmitBtn.addEventListener("click",()=>{
    setCookie("User",0,1);
    let HospitalIndex = getCookie("User");
    const dict_values = {ListOfOrganUpdated,HospitalIndex} //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    $.ajax({
        url:"/UpdateDatabase",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
});


