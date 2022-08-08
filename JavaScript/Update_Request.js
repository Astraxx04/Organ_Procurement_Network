var Update_database = document.getElementById("Update_database");
Update_database.addEventListener("click",()=>{
    window.location.href="Update_Form.html";
});

function logout() {
    document.cookie = "User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //Delete Cookie
}