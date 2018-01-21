// Initialize Firebase
var config = {
  apiKey: "AIzaSyBiPjVRE4le59MBNmoDCmJ5SQVLx9m1JBw",
  authDomain: "nerede-calisabilirim.firebaseapp.com",
  databaseURL: "https://nerede-calisabilirim.firebaseio.com",
  projectId: "nerede-calisabilirim",
  storageBucket: "",
  messagingSenderId: "567447823649"
};

firebase.initializeApp(config);


var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
provider.addScope('https://www.googleapis.com/auth/plus.me');



function veriGonderme(data) {
  firebase.database().ref('veri').set({
    veri: data
  });
}
