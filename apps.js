
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'   
import { getDatabase, ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHWLFqNI-YEkbXxetmMZ1snN7to-K68rY",
  authDomain: "my-project-567e8.firebaseapp.com",
  databaseURL: "https://my-project-567e8-default-rtdb.firebaseio.com",
  projectId: "my-project-567e8",
  storageBucket: "my-project-567e8.appspot.com",
  messagingSenderId: "861730913385",
  appId: "1:861730913385:web:218405ac17904c8f3c36f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
const db = getDatabase(app)

let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let phone = document.getElementById("phone")


let submit = document.getElementById("submit");


submit.addEventListener("click",(e)=> {
  e.preventDefault();
  
  if (username.value.includes(" ")) {
    alert("Username must not contain spaces.");
    return;
  }
  const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
  if (!passwordPattern.test(password.value)) {

alert("The password must be more than 8 characters and contain a number, an uppercase letter, and a special character.")

    return;
  }

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email.value)) {
    alert("The email is invalid.")
    return;
  }

  const phonePattern = /^07\d{8}$/;
  if (!phonePattern.test(phone.value)) {
    alert("Invalid phone number. Must be 10 digits long and start with 07")
    return;
  }


  set(ref(db , 'user/'+ document.getElementById("username").value ),
{
username:username.value,
password:password.value,
email:email.value,
phone:phone.value,
});
alert("Saved Data")


  let obj = {
    username:username.value,
    password:password.value,
    email:email.value,
    phone:phone.value,
}

createUserWithEmailAndPassword(auth, obj.email , obj.password)
.then(function(success){

alert("Sign up Successfully")
})
.catch(function(err){
alert("error"+ err);
})

  
});





















































//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//   import { getDatabase , ref , set ,get , child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-Database.js";


//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAZBd5xqEQXsPuU1zHzK5FupJY2pD02vFc",
//     authDomain: "project-1-d0fd9.firebaseapp.com",
//     projectId: "project-1-d0fd9",
//     storageBucket: "project-1-d0fd9.appspot.com",
//     messagingSenderId: "1059500210794",
//     appId: "1:1059500210794:web:7a6bf2bceb03dd5472a813"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   const dp = getDatabase(app);

//   document.getElementById("submit").addEventListener('click', function(e){
//     e.preventDefault();
//   set(ref(db,'user/' + document.getElementById("username").value),

// {

// username : document.getElementById("username").value,
// password : document.getElementById("password").value,
// email : document.getElementById("email").value,
// phone : document.getElementById("phone").value,


// });
// alert("Login Sucessfull !");
//   });
  
  
  
  
  

  
