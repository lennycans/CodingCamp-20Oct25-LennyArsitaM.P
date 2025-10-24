/* ======== JAVASCRIPT ======== */

// 1. Greeting dengan nama
const nameInput = prompt("Masukkan nama kamu:");
const welcome = document.getElementById("welcome");
if (nameInput) {
  welcome.textContent = `Hi ${nameInput}, Welcome to Our Recruitment Website`;
} else {
  welcome.textContent = "Hi, Welcome to Our Recruitment Website";
}

// 2. Form Handler
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("messageText").value;
  const currentTime = new Date().toString();

  const output = `
    <p><strong>current time :</strong> ${currentTime}</p>
    <p><strong>Nama :</strong> ${name}</p>
    <p><strong>Tanggal Lahir :</strong> ${birth}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    <p><strong>Pesan :</strong> ${message}</p>
  `;

  document.getElementById("outputBox").innerHTML = output;
});
