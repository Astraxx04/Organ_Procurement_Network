const WrongPass = document.getElementById("WrongPass");
        
        (
            async() => {
                let workbook = XLSX.read(await (await fetch("./Database/Hospitals.xlsx")).arrayBuffer()); //open file
                let worksheet = workbook.SheetNames; //All sheets
                let hos = workbook.Sheets[worksheet[0]]; // 1st sheet
                let hos_json = XLSX.utils.sheet_to_json(hos); //coverting to json
                hos_json.forEach(hospital => {                                                      //adding option for every hospital
                    var HospitalList = document.getElementById("HospitalName");
                    var option = document.createElement("option");
                    let NameOfHospital = hospital.Hospital_Name;
                    let HospitalIndex = hospital.Index;
                    option.text = NameOfHospital;
                    option.value = HospitalIndex;
                    HospitalList.add(option);
                });
                //Cokkie for login

                function setCookie(cname, cvalue, exdays) {
                    const d = new Date();
                    d.setTime(d.getTime() + (exdays*24*60*60*1000));
                    let expires = "expires="+ d.toUTCString();
                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                  }

                //string matching
                var login_bttn = document.getElementById("Login");
                login_bttn.addEventListener("click", ()=>{
                    var User = document.getElementById("HospitalName").value;
                    var Password = document.getElementById("Password");
                    var Pass = Password.value;
                    var ReqPass = hos_json[User].Password;
                    if (Pass == ReqPass) {
                        setCookie("User",User,1);       //Cokie name "User" with hospital index with 1 day expiry
                        window.location.href="Update_Request.html";
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
            }
            
        )()

