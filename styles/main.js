
//Funcionamiento del Boton "CONTACTAME"
const toggleButton = document.getElementById("button");
const elementToToggle = document.getElementById("interface");
const container = document.getElementById("container")

toggleButton.addEventListener("click", function () {
  if (elementToToggle.style.display === "none") {
    elementToToggle.style.display = "block";
    elementToToggle.style.opacity = 0;
    setTimeout(function () {
      elementToToggle.style.opacity = 1;
      container.style.opacity = .85;
    }, 10);
  } else {
    elementToToggle.style.opacity = 0;
    container.style.opacity = 1
    setTimeout(function () {
      elementToToggle.style.display = "none";
    }, 500);
  }
});



// Permite que el botón "Enviar" del formulario no reinicie de alguna manera la página
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

//Funcionamiento de cerrar primer formulario: Formulario Contacto

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', function () {
  if (elementToToggle.style.display === "block") {
    elementToToggle.style.display = "none";
    elementToToggle.style.opacity = 1;
    container.style.opacity = 1;
  }
});


//Funcionamietno de cerrar segundo formulario: Interfaz de Verificación

const closeIcon2 = document.querySelector('.close-icon2');
const interface2 = document.getElementById("interface2")

closeIcon2.addEventListener('click', function () {
  if (interface2.style.display === "block") {
    interface2.style.display = "none";
    interface2.style.opacity = 1;
    container.style.opacity = 1;
  }
});


//Funcionamiento para el botón "Enviar"
const buttonSend = document.getElementById("send")


buttonSend.addEventListener('click', function () {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  if (typeof name === "string" &&
    typeof lname === "string" &&
    lname.length >= 2  &&
    typeof email === "string" &&
    email.length >= 2 &&
    typeof comment === "string" && 
    elementToToggle.style.display == "block") {
    console.log("Los datos del cuestionario son correctos y seran enviados a la base de datos lo mas temprano posible");
    
    elementToToggle.style.opacity = 1;
    interface2.style.opacity = 0
    interface2.style.display == "none"
    setTimeout(function (){
        elementToToggle.style.display = 0
        interface2.style.opacity = 1

      }, 500);
    setTimeout(function(){
      elementToToggle.style.display = "none"
      interface2.style.display = "block"
    },200)
    setTimeout(function(){
      interface2.style.display = "none"
      container.style.opacity = 1
    }, 5000)
  } else {
    console.log("Los datos del cuestionario son incorrectos. Porvafor, verifique sus datos");
    }
});
