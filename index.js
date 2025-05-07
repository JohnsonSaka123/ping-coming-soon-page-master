
const EmailForm = document.querySelector(".email-form");

EmailForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  const EmailInput = document.getElementById("email");

  const ErrorMessage = document.getElementById("error-msg");


  const email = EmailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!email){
    showError("Email cannot be empty")
  }else if (!emailPattern.test(email)){
    showError("Please provide a valid email address");
  }else {
    clearError();
    alert("Email submitted successfully");
  }


  function showError(message){

    ErrorMessage.textContent = message;
    EmailInput.classList.add("error");

  }

  function clearError(){
    ErrorMessage.textContent = "";
    EmailInput.value = "";
    EmailInput.classList.remove("error")
  }

});