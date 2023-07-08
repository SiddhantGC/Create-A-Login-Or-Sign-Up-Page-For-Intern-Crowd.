function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("error").textContent = "Please fill in all fields.";
        return false;
    }
    
    return true;
}
