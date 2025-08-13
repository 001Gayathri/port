function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (!name || !email) {
    alert("Please fill out all fields.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
