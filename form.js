  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCkIXTFPb1L__2l8x5f73tJ69Yqy7kEm3M",
    authDomain: "https://loginpage-28ede.firebaseapp.com/",
    projectId: "loginpage-28ede",
    storageBucket: "loginpage-28ede.appspot.com",
    messagingSenderId: "778057980320",
    appId: "1:778057980320:web:95d285a89c54f82254ecc5",
     measurementId: "G-56CY2NCCCE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })