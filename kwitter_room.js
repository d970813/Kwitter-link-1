
const firebaseConfig = {
      apiKey: "AIzaSyBF1z8OVXlkTr90Eu6J-jDr5Voeoo9QbJo",
      authDomain: "kwitter--twitter.firebaseapp.com",
      projectId: "kwitter--twitter",
      storageBucket: "kwitter--twitter.appspot.com",
      messagingSenderId: "243115311341",
      appId: "1:243115311341:web:ed9ef0b2c76ec79c4fcce4",
      measurementId: "G-KLZ46NLLGG"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
