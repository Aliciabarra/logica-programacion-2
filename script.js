function solicitarTemperatura() {
    let gradosCelsius = prompt("Ingrese la temperatura en grados Celsius: ");
    
    // Validar que la entrada sea un número
    while (isNaN(gradosCelsius)) {
      alert("Por favor ingrese un número.");
      gradosCelsius = prompt("Ingrese la temperatura en grados Celsius: ");
      
      // Validar si se ha cancelado
      if (gradosCelsius === null) {
        return;  // Salir de la función si se ha cancelado
      }
    }
    mostrarResultados(gradosCelsius);
  }
  function mostrarResultados(gradosCelsius) {
    let fahrenheit = parseFloat(gradosCelsius) * 9/5 + 32;
    let kelvin = parseFloat(gradosCelsius) + 273.15;
  
    let resultadoFahrenheit = document.createElement("p");
    resultadoFahrenheit.textContent = fahrenheit + " grados Fahrenheit.";
  
    let resultadoKelvin = document.createElement("p");
    resultadoKelvin.textContent = kelvin + " grados Kelvin.";
  
    let cuerpo = document.body;
  
    // Limpiar el contenido existente antes de agregar nuevos resultados
    cuerpo.innerHTML = "";
  
    // Agregar los elementos de párrafo al cuerpo del documento
    cuerpo.appendChild(resultadoFahrenheit);
    cuerpo.appendChild(resultadoKelvin);
  }
  
  // Llamar a la función al cargar la página
  window.onload = solicitarTemperatura;
  