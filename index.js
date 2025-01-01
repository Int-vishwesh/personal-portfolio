const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelector('.sections');
const animatedElements = document.querySelectorAll('.animate');

navItems.forEach((navItem, idx) => {
  navItem.addEventListener('click', () => {
    // Parallax effect: Move to the selected section
    sections.style.transform = `translateX(-${idx * 100}vw)`;

    // Reset animations for the visible section's elements
    const currentSection = document.querySelector(`.section:nth-child(${idx + 1})`);
    const sectionAnimations = currentSection.querySelectorAll('.animate');

    sectionAnimations.forEach((element) => {
      element.style.animation = 'none'; // Reset animation
      void element.offsetWidth; // Trigger reflow
      element.style.animation = ''; // Reapply the default animation from CSS
    });

    // Update active navigation item
    navItems.forEach((item, itemIndex) => {
      if (itemIndex === idx) {
        item.classList.add('active'); // Add active class to the clicked nav item
      } else {
        item.classList.remove('active'); // Remove active class from others
      }
    });
  });
});

//for certification slider
let currentIndex = 0;
const certificates = document.querySelectorAll('.certificates');

function updateActiveCertificate() {
  certificates.forEach((cert, index) => {
    cert.classList.toggle('active', index === currentIndex);
  });
}

function slideLeft() {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  updateActiveCertificate();
}

function slideRight() {
  currentIndex = (currentIndex + 1) % certificates.length;
  updateActiveCertificate();
}

//project info

function show(projectId) {
  const projects = document.querySelectorAll("#project-info > div");
  projects.forEach((project) => {
    project.classList.remove("active");
  });
  document.getElementById(projectId).classList.add("active");
}