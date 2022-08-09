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

var ConfirmSubmitBtn = document.getElementById("ConfirmSubmit");
ConfirmSubmitBtn.addEventListener("click",()=>{
    const dict_values = {ListOfOrganUpdated} //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    $.ajax({
        url:"/UpdateDatabase",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
});


