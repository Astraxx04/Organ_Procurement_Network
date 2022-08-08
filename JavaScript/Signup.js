(
    async()=>{
        let workbook = XLSX.read(await (await fetch("./Database/Refrence_login.xlsx")).arrayBuffer()); //open file
                let worksheet = workbook.SheetNames; //All sheets
                let hos = workbook.Sheets[worksheet[0]]; // 1st sheet
                let hos_json = XLSX.utils.sheet_to_json(hos); //coverting to json
                console.log(hos_json);
                var NewHospital={ Index:hos_json.length,NameofHopital: "Hello", Passwords:"123"};
                hos_json.push(NewHospital);
                console.log(hos_json);
                var new_hos = XLSX.utils.json_to_sheet(hos_json);
                console.log(new_hos);
                var newwb = XLSX.utlis.book_new();
                var newws = new_hos;
                XLSX.utlis.cook_append_sheet(newwb,newws,"newdata");
                XLSX.writeFile(newwb,"newdataaa.xlsx");
    }

)()