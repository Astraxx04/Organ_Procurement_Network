var ListofNearbyHospital = [];
var ListOfDistance = [];







const Hospitals = document.getElementById("Hospitals");
function AddHospitals() {
    OrderedList.forEach(Hos=>{
        ListofNearbyHospital.push(Hos);
    });
    SortList.forEach(Hos=>{
        if (Hos != undefined) {

            ListOfDistance.push(Hos);
        }
    });

    if (ListofNearbyHospital[0].length == 0 ) {
        const popup = document.getElementById("popup");
   
        
        popup.style.display="block";

    }


    for (let index =0; index <=ListofNearbyHospital[0].length - 1 ; index++) {
        var div = document.createElement("div");
        div.setAttribute("class","card");
        Hospitals.appendChild(div);
        var div1 = document.createElement("div");
        div1.setAttribute("class","content");
        div.appendChild(div1);
        var div = document.createElement("div");
        div.setAttribute("class","contentBx");
        div1.appendChild(div);
        var i = document.createElement("i");
        i.setAttribute("class","fa-solid fa-hospital");
        div.appendChild(i);
        var h3 = document.createElement("h3");
        h3.innerHTML="Hospital Name <br>"+ListofNearbyHospital[0][index]+"<br><br><br>Distance: "+ListOfDistance[index]+" Km";
        div.appendChild(h3);
    }

   const cards = document.querySelectorAll(".card");
   const iftheir = document.getElementById("iftheir");
   
   cards.forEach(card=>{
    card.addEventListener("click",()=>{
        iftheir.style.display="block";
    });
   });
   








}