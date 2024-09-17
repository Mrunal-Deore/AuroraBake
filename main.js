/*------------------------------------------
for slideshow on home page
-------------------------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*------------------------------------------
for sign up and login form
-------------------------------------------*/
var sign = document.getElementById('signUp');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    sign.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    sign.classList.remove("active");
});

/*------------------------------------------
Form Validation
-------------------------------------------*/

// Sign Up Form Validation
document.getElementById('signUp').addEventListener('submit', function(event) {
  // event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address!');
      event.preventDefault();
      return;
  }

  if (!isValidPassword(password)) {
      alert('Password must be at least 8 characters long.');
      event.preventDefault();
      return;
  }

  window.alert("You have successfully created your account !");

});

// Sign In Form Validation
document.getElementById('signIn').addEventListener('submit', function(event) {

  const email = document.getElementById('signInemail').value;
  const password = document.getElementById('signInpass').value;

  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
      return;
  }

  if (!isValidPassword(password)) {
      alert('Password must be at least 8 characters long.');
      event.preventDefault();
      return;
  }

});

// Function to validate email address
function isValidEmail(email) {
  // A basic email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password
function isValidPassword(password) {
  return password.length >= 8;
}

