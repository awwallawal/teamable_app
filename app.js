let imageUpload = document.getElementById("image-upload");
let profilePicture = document.getElementById("profile-picture");

let imageOutput = document.getElementById("image-output");

let editContainer = document.getElementById("edit-container");

let updateContainer = document.getElementById("update-container");

let editBtn = document.getElementById("edit-btn");

let updateBtn = document.getElementById("update-btn");

let form = document.getElementById("form");

let dummyPicture =  "./images/dummy-profile-pic.jpg";

let userName = document.getElementById("user-name");

let userEmail = document.getElementById("user-email");

let userInterest = document.getElementById("user-interest");

let profileName = document.getElementById("profile-name");


let profileEmail = document.getElementById("profile-email");

let profileInterest = document.getElementById("profile-interest");



window.onload = (function(){
 profilePicture.src = dummyPicture
 imageOutput.src = dummyPicture
 userName.value = profileName.textContent;
 userEmail.value = profileEmail.textContent;
 userInterest.value = profileInterest.textContent;
})


editBtn.addEventListener("click", function(){
 editContainer.style.display = "flex";
 updateContainer.style.display = "none";
});

imageUpload.addEventListener('change', function(e){
 imageOutput.src = URL.createObjectURL(e.target.files[0]);
 profilePicture.src = URL.createObjectURL(e.target.files[0]);
});

form.addEventListener('submit', function(e){
 e.preventDefault();
 editContainer.style.display = "none";
 updateContainer.style.display = "flex"
 profileName.textContent= userName.value;
 if(validator.isEmail(userEmail.value)){
  profileEmail.textContent =  userEmail.value;
 } else {
  alert ("Kindly input a valid email address");
  profileEmail.textContent = "";
 };
 profileInterest.textContent = userInterest.value;
})
