var ListofNearbyHospital = ['malin','aspatre','lazarett','ospedale','ziekenhuis'];
var ListOfDistance = [20,12,123,121,12];
const Hospitals = document.getElementById("Hospitals");
function AddHospitals() {
   for (let index = 0; index < ListOfDistance.length; index++) {
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
        h3.innerHTML="Hospital Name : <br>"+ListofNearbyHospital[index]+"<br><br><br>Distance: "+ListOfDistance[index];
        div.appendChild(h3);
   }

   const cards = document.querySelectorAll(".card");
   const popup = document.getElementById("popup");
   const ConfirmSubmit = document.getElementById("ConfirmSubmit");
   cards.forEach(card=>{
    card.addEventListener("click",()=>{
        popup.style.display="block";
    });
   });
   ConfirmSubmit.addEventListener("click",()=>{
    window.location.href="{{ url_for('welcome') }}";
   });








}