function signUp(){
    window.open("page2.html", "", "width=500, height=700");
}

function checkboxChanged(){
    showPass();
}
function showPass() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
function validateInput(input) {
    if (input.value == "") {
        input.style.border = "2px solid #e0353a";
    }
}
function removeValidation(input) {
    input.style.border = "2px solid #5cbd4f";
}
