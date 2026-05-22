const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const revealItems = document.querySelectorAll('.reveal');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

function openModal(title, text){
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = text;
  modal.classList.add('active');
}

function closeModal(){
  document.getElementById('modal').classList.remove('active');
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if(e.target === modal){
    closeModal();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));

const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const extraProjects = document.getElementById("extraProjects");

if (toggleProjectsBtn && extraProjects) {
  toggleProjectsBtn.addEventListener("click", () => {
    extraProjects.classList.toggle("active");

    if (extraProjects.classList.contains("active")) {
      toggleProjectsBtn.textContent = "Ocultar proyectos";
    } else {
      toggleProjectsBtn.textContent = "Ver más proyectos";
    }
  });
}