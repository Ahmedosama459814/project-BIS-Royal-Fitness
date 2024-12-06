let menu =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}
const typed = new Typed('.mutiple-tex', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training','Fat Lose', 'Weight Lifting', 'Running'],
      typeSpeed: 60,
      backSpeed: 60,
      backdelay:1000,
      loop:true,
  })
  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const succuss = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");


  function validateForm(){


    clearMessages();
    let errorFlag =false;

    if (nameInput.value.length <1) {
        errorNodes[0].innerText ="Name cannot be blank";
        nameInput.classList.add("error-border")
        errorFlag=true;
        
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag=true;

        
    }
    if (message.value.length < 1) {
        errorNodes[2].innerText ="please enter message";
        message.classList.add("error-border");
        errorFlag=true;
        
      }
      if (!errorFlag) 
        { 
         succuss.innerText="Success!";
         
       }
  }
 

  function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText= "";
        
    }
    succuss.innerText= "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
  }

  function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  