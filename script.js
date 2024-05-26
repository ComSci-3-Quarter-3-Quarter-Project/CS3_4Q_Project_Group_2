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

function validateForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("contactNumber").value;
    var sex = document.querySelector('input[name="sex"]:checked').value;
    var whyCampaign = document.getElementById("whyCampaign").value;

    localStorage.setItem("storefn", firstName);
    localStorage.setItem("storeln", lastName);
    localStorage.setItem("storeemail", email);
    localStorage.setItem("storepword", password)
    localStorage.setItem("storecn", contact);
    localStorage.setItem("storesex", sex);
    localStorage.setItem("storereason", whyCampaign);
  
    window.close();
    window.opener.location.href = "page3.html";

    return false;
  }
