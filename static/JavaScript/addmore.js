const ListOfOrgan=["lung", "liver","kidney","pancreas", "heart", "cornea"];
//console.log("Hello");
const OrganList = document.getElementById("OrganList");
const NoOfOrgans = ListOfOrgan.length;
var NoOfOrganUpdated = 0;
function OrganInsert(i) { 

    if (i > 0 ){
        document.getElementById("add-more").remove();
    }
    if (i > 1 ){
        document.getElementById("add-less").remove();
    }


    var div = document.createElement('div');
    div.classList.add("form-group");
    OrganList.appendChild(div);
    var select = document.createElement('select');
    select.classList.add("form-control");
    select.setAttribute('id','o-'+ (i + 1));
    select.setAttribute('required','');
    div.appendChild(select);
    var option0 = document.createElement('option');
    option0.setAttribute('disabled','');
    option0.setAttribute('value','');
    option0.setAttribute('selected','');
    option0.setAttribute('hidden','');
    option0.innerHTML="Select Organ *";
    select.appendChild(option0);
    
    
    for (let index = 0; index < ListOfOrgan.length; index++){
        var option = document.createElement('option');
        option.setAttribute('value',index);
        option.innerHTML=ListOfOrgan[index];
        select.appendChild(option);      
    }



    var div = document.createElement('div');
    div.classList.add("form-group");
    OrganList.appendChild(div);
    var input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('class','form-control');
    input.setAttribute('id','OrganHarvestDate-'+(i+1));
    input.setAttribute('placeholder','Organ Harvest Date *');
    input.setAttribute('onfocus',"(this.type='date')");
    input.setAttribute('onblur',"(this.type='text')");
    input.setAttribute('required',"");
    div.appendChild(input);




    var div = document.createElement('div');
    div.classList.add("form-group");
    OrganList.appendChild(div);
    var input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('class','form-control');
    input.setAttribute('id','OrganHarvestTime-'+(i+1));
    input.setAttribute('placeholder','Organ Harvest Time *');
    input.setAttribute('onfocus',"(this.type='time')");
    input.setAttribute('onblur',"(this.type='text')");
    input.setAttribute('required',"");
    div.appendChild(input);






    var div = document.createElement('div');
    div.classList.add("form-group");
    OrganList.appendChild(div);
    var p = document.createElement('p');
    p.setAttribute('class','form-control');
    div.appendChild(p);
    var span1 = document.createElement('span');
    span1.setAttribute('class','add_more');
    span1.setAttribute('id','add-more');
    p.appendChild(span1);
    var span = document.createElement('span');
    span.innerHTML="(+)";
    span1.appendChild(span);
    var span = document.createElement('span');
    span.classList.add('underline');
    span.innerHTML = 'Add More';
    span1.appendChild(span);
    if (i>0)
    {
        var span1 = document.createElement('span');
    span1.setAttribute('class','add_less');
    span1.setAttribute('id','add-less');
    p.appendChild(span1);
    var span = document.createElement('span');
    span.innerHTML="(-)";
    span1.appendChild(span);
    var span = document.createElement('span');
    span.classList.add('underline');
    span.innerHTML = 'Add Less';
    span1.appendChild(span);
    }

    NoOfOrganUpdated += 1;
    AddMores();
    if (i > 0) {
        Addlesss();
    }
}



function OrganRemove(i) {
    document.getElementById('o-'+i).remove();
    document.getElementById("OrganHarvestDate-"+i).remove();
    document.getElementById("OrganHarvestTime-"+i).remove();
    NoOfOrganUpdated -= 1;
    console.log(NoOfOrganUpdated);
    if (NoOfOrganUpdated == 1){
        
        document.getElementById("add-less").remove();
    }
}

OrganInsert(0);
function AddMores() {
    let AddMore = document.getElementById("add-more");
    AddMore.addEventListener("click",()=>{
                    OrganInsert(NoOfOrganUpdated);
                    });
}
function Addlesss() {
    let AddMore = document.getElementById("add-less");
    AddMore.addEventListener("click",()=>{
                    OrganRemove(NoOfOrganUpdated);
                    });
}






//donot refresh
$(document).ready(function () {
    // Listen to submit event on the <form> itself!
    $('.form').submit(function (e) {
  
      // Prevent form submission which refreshes page
      e.preventDefault();
    });
  });


//focused
$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});