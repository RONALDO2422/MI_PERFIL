// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("aboutMeBtn");
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir la ventana modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en (x), cerrar la ventana modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la ventana modal, cerrarla
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Funcionalidad para mostrar/ocultar habilidades
document.getElementById("toggleSkills").onclick = function() {
   var skillsContent = document.querySelector(".skills-content");
   skillsContent.style.display = skillsContent.style.display === "none" ? "block" : "none";
};

// Funcionalidad para mostrar/ocultar proyectos
document.getElementById("toggleProjects").onclick = function() {
   var projectsContent = document.querySelector(".projects-content");
   projectsContent.style.display = projectsContent.style.display === "none" ? "block" : "none";
};