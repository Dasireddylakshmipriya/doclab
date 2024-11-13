'use strict';

const addEventOnElements = function (elements, eventType, callback) {
for (let i = 0, len = elements.length; i < len; i++) {
  elements[i].addEventListener(eventType, callback);
  }
}

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
   preloader.classList.add("loaded");
   document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {

navbar.classList.toggle("active");
overlay.classList.toggle("active");
document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);






const header = document.querySelector("[data-header]");
const backTopBtn=document.querySelector["[data-back-top-btn]"]
const activeElementOnScroll = function () {

if (window.scrolly > 100) {
  header.classList.add("active");
  backTopBtnclassList.add("active")
} else {
  header.classList.remove("active");
  backTopBtnclassList.remove("active");
}

}

window.addEventListener("scroll", activeElementOnScroll);

const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementOnScroll =function(){
  for(let i=0, len= revealElements.length;i<len; i++){
    if(revealElements[i].getBoundingClientRect().top<window.innerHeight/1.5){
      revealElements[i].classList.add("revealed");
    } else{
        revealElements[i].classList.remove("revealed");
    }
    
  }
}
window.addEventListener("scroll",revealElementOnScroll);
window.addEventListener("load",revealElementsOnScroll);
function findNearbyPlaces() {
  const location = document.getElementById('location').value;
  const query = encodeURIComponent(location + ' nearest doctor clinic hospital');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  window.open(mapsUrl, '_blank');
}
document.getElementById('make-appointment').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  window.open('appointment-form.html', '_blank'); // Open the appointment form in a new tab
});
function showInfo(specialty) {
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  // Set the title and body content based on the specialty
  modalTitle.innerText = specialty;
  modalBody.innerHTML = getDoctorsAndHospitals(specialty);

  // Display the modal
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "none";
}

function getDoctorsAndHospitals(specialty) {
  // This function returns a string of HTML with doctors and hospitals based on the specialty
  switch (specialty) {
      case 'Psychiatry':
          return "<p>Dr. John Doe - City Hospital</p><p>Dr. Jane Smith - Health Clinic</p>";
      case 'Gynecology':
          return "<p>Dr. Emily White - Women's Health Center</p><p>Dr. Sarah Brown - Family Clinic</p>";
      case 'Pulmonology':
          return "<p>Dr. Michael Green - Chest Care Hospital</p><p>Dr. Lisa Black - Pulmonary Clinic</p>";
      case 'Orthopedics':
          return "<p>Dr. Robert Blue - Orthopedic Institute</p><p>Dr. Anna Yellow - Sports Medicine Center</p>";
      default:
          return "<p>No information available.</p>";
  }
}
// JavaScript to handle tab clicks and displaying content dynamically
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Get the data-info attribute and set content accordingly
        const infoType = button.getAttribute('data-info');
        const tabContent = document.getElementById('tab-content');
        switch (infoType) {
            case 'vision':
                tabContent.textContent = 'Our vision is to connect patients with the nearest doctors using technology and healthcare services.';
                break;
            case 'mission':
                tabContent.textContent = 'Our mission is to provide patients with the best access to quality healthcare services 24/7.';
                break;
            case 'strategy':
                tabContent.textContent = 'Our strategy involves leveraging innovative digital solutions to locate nearby doctors and specialists efficiently.';
                break;
        }
    });
});

// JavaScript to handle list button clicks and display information
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const infoType = button.getAttribute('data-info');
        let message;
        switch (infoType) {
            case 'health':
                message = 'We focus on delivering comprehensive health services to improve your overall well-being.';
                break;
            case 'medicines':
                message = 'We ensure timely and efficient delivery of medicines from reliable pharmacies.';
                break;
            case 'treatment':
                message = 'Our expert team provides quality treatment and healthcare for a wide range of medical conditions.';
                break;
            case 'reports':
                message = 'Patient reports are managed securely, providing instant access to medical history and records.';
                break;
        }
        alert(message);
    });
});
// JavaScript to handle tab clicks and displaying content dynamically
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Get the data-info attribute and set content accordingly
        const infoType = button.getAttribute('data-info');
        const tabContent = document.getElementById('tab-content');
        switch (infoType) {
            case 'vision':
                tabContent.textContent = 'Our vision is to connect patients with the nearest doctors using technology and healthcare services.';
                break;
            case 'mission':
                tabContent.textContent = 'Our mission is to provide patients with the best access to quality healthcare services 24/7.';
                break;
            case 'strategy':
                tabContent.textContent = 'Our strategy involves leveraging innovative digital solutions to locate nearby doctors and specialists efficiently.';
                break;
            default:
                tabContent.textContent = 'No information available';
        }
    });
});

// JavaScript to handle list button clicks and display information
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const infoType = button.getAttribute('data-info');
        let message;
        switch (infoType) {
            case 'health':
                message = 'We focus on delivering comprehensive health services to improve your overall well-being.';
                break;
            case 'medicines':
                message = 'We ensure timely and efficient delivery of medicines from reliable pharmacies.';
                break;
            case 'treatment':
                message = 'Our expert team provides quality treatment and healthcare for a wide range of medical conditions.';
                break;
            case 'reports':
                message = 'Patient reports are managed securely, providing instant access to medical history and records.';
                break;
            default:
                message = 'No information available';
        }
        alert(message);
    });
});
// JavaScript to handle tab clicks and displaying content dynamically
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      // Get the data-info attribute and set content accordingly
      const infoType = button.getAttribute('data-info');
      const tabContent = document.querySelector('.tab-text');
      switch (infoType) {
          case 'vision':
              tabContent.textContent = 'Our vision is to connect patients with the nearest doctors using technology and healthcare services.';
              break;
          case 'mission':
              tabContent.textContent = 'Our mission is to provide patients with the best access to quality healthcare services 24/7.';
              break;
          case 'strategy':
              tabContent.textContent = 'Our strategy involves leveraging innovative digital solutions to locate nearby doctors and specialists efficiently.';
              break;
          default:
              tabContent.textContent = 'No information available';
      }
  });
});

// JavaScript to handle list button clicks and navigate to new pages
document.querySelectorAll('.info-btn').forEach(button => {
  button.addEventListener('click', () => {
      const infoType = button.getAttribute('data-info');
      let url;
      switch (infoType) {
          case 'health':
              url = 'health.html'; // URL for Health
              break;
          case 'medicines':
              url = 'medicines.html'; // URL for Medicines
              break;
          case 'treatment':
              url = 'treatment.html'; // URL for Treatment
              break;
          case 'reports':
              url = 'reports.html'; // URL for Patient Reports
              break;
          default:
              url = '#';
      }
      // Open the new page
      if (url !== '#') {
          window.location.href = url;
      }
  });
});

