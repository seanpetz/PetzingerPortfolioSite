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

//Contact Me//
//const inputs = document.querySelectorAll(".input");//

//function focusFunc() {
  //let parent = this.parentNode;
  //parent.classList.add("focus");
//}

//function blurFunc() {
  //let parent = this.parentNode;
  //if (this.value == "") {
    //parent.classList.remove("focus");
  //}
//}

//inputs.forEach((input) => {
  //input.addEventListener("focus", focusFunc);
  //input.addEventListener("blur", blurFunc);
//});


document.addEventListener("DOMContentLoaded", function() {
  fields.fullname = document.getElementById('fullname');
  fields.email = document.getElementById('email');
  fields.phone = document.getElementById('phone');
  fields.message = document.getElementById('message');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }

 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.fullname, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.phone, isNumber);
  valid &= fieldValidation(fields.message, isNotEmpty);
 
  return valid;
 }

 class User {
  constructor(name, email, phone, message) {
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.message = message;
  }
 }

 function sendMessage() {
  if (isValid()) {
    let usr = new User(fullname.value, email.value, phone.value, message.value);

    alert(`Thank you ${usr.fullname} I will get back to you as soon as possible.`)

  } else {
    alert("There was an error")
  }
 }