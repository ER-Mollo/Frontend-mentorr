
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorCheck();
});

function errorCheck(){
    const emailV = email.value.trim();

    if (emailV == ""){
        setError(email, "Please fill in your email address");
    
    }else if(/\S+@\S+\.\S+/.test(emailV)){
      setSuccess();
    }
    else{
      setSuccess();
    }
  }

function setError(element, message){
    const control = element.parentElement;
    control.classList.add('error');
    const small = control.querySelector('small');
    small.textContent = message;

}
function setSuccess(element){
    const control = element.parentElement;
    if(control.classList.contains('error')){
        control.classList.remove('error');
    }
    location.replace("successful.html")
}









