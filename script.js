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
    const formData = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      sex: document.querySelector('input[name="sex"]:checked').value,
      password: document.getElementById("password").value,
      contact: document.getElementByName("cNumber").value,
      whyCampaign: document.getElementById("whyCampaign").value
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
  
    return true;
  }

function directPfp(){
    window.location.href = "page3.html";
    return true;
}
