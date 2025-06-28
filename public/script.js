// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAtO0gyXI5ZYsjCg18X4M-fZZiNQuoJUOo",
  authDomain: "contactform-d9247.firebaseapp.com",
  databaseURL: "https://contactform-d9247-default-rtdb.firebaseio.com",
  projectId: "contactform-d9247",
  storageBucket: "contactform-d9247.firebasestorage.app",
  messagingSenderId: "491500748346",
  appId: "1:491500748346:web:f30861d936e7fd1937bf03"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  db.collection("contacts").add({
    name,
    email,
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("response").innerText = "Message sent successfully!";
    document.getElementById("contactForm").reset();
  }).catch((error) => {
    document.getElementById("response").innerText = "Error: " + error.message;
  });
});