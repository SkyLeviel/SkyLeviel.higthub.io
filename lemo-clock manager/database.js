// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8x9antRWe6kBMRg5f1vpCxPJqDLCkFkA",
    authDomain: "lemo-clock.firebaseapp.com",
    databaseURL: "https://lemo-clock.firebaseio.com",
    projectId: "lemo-clock",
    storageBucket: "lemo-clock.appspot.com",
    messagingSenderId: "642844274871"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('clock-actie');

// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Naam = getInputVal('Naam');
  var Tijd = getInputVal('Tijd');
  var date = getInputVal('date');
  var actie = getInputVal('actie');

  // Save message
  saveMessage(Naam, Tijd, date, actie);

  // Show alert
  document.querySelector('.dataverstuurd').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.dataverstuurd').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(Naam, Tijd, date, actie){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Naam:Naam,
    Tijd:Tijd,
    date:date,
    actie:actie,
  });
}