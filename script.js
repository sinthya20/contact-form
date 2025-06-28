document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  firebase.database().ref("contacts").push({
    name: name,
    email: email,
    message: message
  })
  .then(() => {
    document.getElementById("status").textContent = "Message sent!";
    document.getElementById("contactForm").reset();
  })
  .catch((error) => {
    document.getElementById("status").textContent = "Error: " + error.message;
  });
});
