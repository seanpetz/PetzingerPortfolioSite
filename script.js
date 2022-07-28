//Navigation//
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  //Lightbox//
  const lightbox = document.createElement('div')
  lightbox.id = 'lightbox'
  document.body.appendChild(lightbox)
  
  const images = document.querySelectorAll('img')
  images.forEach(image => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active')
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
    })
  })
  
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })
  

  //contact form//
  const form = document.querySelector("form[name='contact-form']");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const phoneInput = document.querySelector("input[name='phone']");
  const messageInput = document.querySelector("textarea[name='message']");
  
  nameInput.isValid = () => !!nameInput.value;
  emailInput.isValid = () => isValidEmail(emailInput.value);
  phoneInput.isValid = () => isValidPhone(phoneInput.value);
  messageInput.isValid = () => !!messageInput.value;
  
  const inputFields = [nameInput, emailInput, phoneInput, messageInput];
  
  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };
  
  let shouldValidate = false;
  let isFormValid = false;
  
  const validateInputs = () => {
    console.log("we are here");
    if (!shouldValidate) return;
  
    isFormValid = true;
    inputFields.forEach((input) => {
      input.classList.remove("invalid");
      input.nextElementSibling.classList.add("hide");
  
      if (!input.isValid()) {
        input.classList.add("invalid");
        isFormValid = false;
        input.nextElementSibling.classList.remove("hide");
      }
    });
  };
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {
      // TODO: DO AJAX REQUEST
    }
  });
  
  inputFields.forEach((input) => input.addEventListener("input", validateInputs));

  function sendMessage() {
    if (isValid()) {
      let usr = new User(nameInput.value, emailInput.value, phoneInput.value, messageInput.value);
  
      alert(`Thank you ${usr.nameInput} I will get back to you as soon as possible.`)
  
    } else {
      alert("There was an error")
    }
   }