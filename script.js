// Mobile button

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navList = document.querySelector("nav ul");

   if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}
});

// User form with email validaion

document.getElementById("userForm").addEventListener("submit",function(event) {
event.preventDefault();
  
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailPattern.test(email)) {
    alert("Please fill in all fields");
  return;
}
alert(`Thank you, ${name}! Your email (${email}) has been
received.`);
document.getElementById('userForm').reset();
});

// Fade in for upcoming content
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200); // 
  });
});

