document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});
document.getElementById("detail").addEventListener("click", function () {
    alert("Turkish Coffee: Traditionally made in a cezve using finely ground coffee!");
  });
  
  document.getElementById("detail1").addEventListener("click", function () {
    alert("Iced Coffee: A refreshing brew, typically served cold with ice, sometimes sweetened or flavored.");
  });

  document.getElementById("detail2").addEventListener("click", function () {
    alert("Jamaican Coffee: A rich blend typically made with dark rum, coffee liqueur, and strong brewed coffee.");
  });

  document.getElementById("detail3").addEventListener("click", function () {
    alert("Cafe Mendoza: A bold Latin American blend known for its rich, earthy flavor and smooth finish.");
  });
  document.addEventListener("DOMContentLoaded", function () {
    const getNowButton = document.querySelector(".bg-yellow-600");

    getNowButton.addEventListener("click", function () {
      alert("Thank you for your purchase! Stay tuned for your special coffee and tea!");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Select the card and the image
    const card = document.querySelector(".relative");
    const img = card.querySelector("img");

    // On mouse enter: increase image opacity
    card.addEventListener("mouseenter", () => {
      img.style.opacity = "1";
    });

    // On mouse leave: restore image opacity
    card.addEventListener("mouseleave", () => {
      img.style.opacity = "0.5";
    });
  });


  
  document.addEventListener("DOMContentLoaded", () => {
    
    const card = document.querySelector("#detail1").closest(".relative");
    const img = card.querySelector("img");

   
    card.addEventListener("mouseenter", () => {
      img.style.opacity = "1";
    });

    
    card.addEventListener("mouseleave", () => {
      img.style.opacity = "0.5";
    });
  });


  
  document.addEventListener("DOMContentLoaded", () => {
    
    const card = document.querySelector("#detail2").closest(".relative");
    const img = card.querySelector("img");

   
    card.addEventListener("mouseenter", () => {
      img.style.opacity = "1";
    });

   
    card.addEventListener("mouseleave", () => {
      img.style.opacity = "0.5";
    });
  });


 
  document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector("#detail3").closest(".relative");
    const img = card.querySelector("img");

    card.addEventListener("mouseenter", () => {
      img.style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
      img.style.opacity = "0.5";
    });
  });


  const scrollToTopButton = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  });
  const carousel = document.querySelector('#carousel > div');
  const images = carousel.children;
  let index = 0;

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });
  const eventDate = new Date('2025-05-01T00:00:00');
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownElement.textContent = 'The event has started!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  const scrollToTop = document.getElementById('scrollToTop');

  // Show the button when the user scrolls down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTop.classList.remove('hidden');
    } else {
      scrollToTop.classList.add('hidden');
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


